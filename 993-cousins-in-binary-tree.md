# **[993. 二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)**

## 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。如果二叉树的两个节点深度相同，但父节点不同 ，则它们是一对堂兄弟节点。我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
---

### **示例 1:**
  
```c
输入：root = [1,2,3,4], x = 4, y = 3
输出：false

```

### **示例 2:**
```c
输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
```

### **解法:**

```C++
class Solution {
private:
    int x;
    TreeNode* x_parent;
    int x_depth;
    bool x_found;

    int y;
    TreeNode* y_parent;
    int y_depth;
    bool y_found;
public:
    void update (TreeNode* node, TreeNode* parent, int depth) {
        if (node->val == x) tie(x_parent, x_depth, x_found) = tuple(parent, depth, true);
        else if (node->val == y) tie(y_parent, y_depth, y_found) = tuple(parent, depth, true);
    }
    bool isCousins(TreeNode* root, int x, int y) {
        if (nullptr == root || root->val == x || root->val == y) return false;
        this->x = x;
        this->y = y;
        int depth = 0;
        TreeNode *p;
        queue<pair<TreeNode*, int>> q;
        q.emplace(root, 0);
        update(root, nullptr, 0);
        while(!q.empty()) {
            auto&& [node, depth] = q.front();
            if (node->left) {
                q.emplace(node->left, depth + 1);
                update(node->left, node, depth + 1);
            }
            if (node->right) {
                q.emplace(node->right, depth + 1);
                update(node->right, node, depth + 1);
            }
            if (x_found && y_found) break;
            q.pop();
        }

        return x_depth == y_depth && x_parent != y_parent;
    }
};
```



### **BFS解法 -- 官方:**

```c++
class Solution {
private:
    int x;
    TreeNode* x_parent;
    int x_depth;
    bool x_found;

    int y;
    TreeNode* y_parent;
    int y_depth;
    bool y_found;
public:
    void update (TreeNode* node, TreeNode* parent, int depth) {
        if (node->val == x) tie(x_parent, x_depth, x_found) = tuple(parent, depth, true);
        else if (node->val == y) tie(y_parent, y_depth, y_found) = tuple(parent, depth, true);
    }
    bool isCousins(TreeNode* root, int x, int y) {
        if (nullptr == root || root->val == x || root->val == y) return false;
        this->x = x;
        this->y = y;
        int depth = 0;
        TreeNode *p;
        queue<pair<TreeNode*, int>> q;
        q.emplace(root, 0);
        update(root, nullptr, 0);
        while(!q.empty()) {
            auto&& [node, depth] = q.front();
            if (node->left) {
                q.emplace(node->left, depth + 1);
                update(node->left, node, depth + 1);
            }
            if (node->right) {
                q.emplace(node->right, depth + 1);
                update(node->right, node, depth + 1);
            }
            if (x_found && y_found) break;
            q.pop();
        }

        return x_depth == y_depth && x_parent != y_parent;
    }
};
```


### **DFS解法 -- 官方:**

```c++
class Solution {
private:
    int x;
    int x_depth;
    TreeNode* x_parent;
    bool x_found;

    int y;
    int y_depth;
    TreeNode* y_parent;
    bool y_found;
public:
    void dfs(TreeNode* node, int depth, TreeNode* parent) {
        if (!node) return;
        if (node->val == x) tie(x_depth, x_parent, x_found) = tuple(depth, parent, true);
        else if (node->val == y) tie(y_depth, y_parent, y_found) = tuple(depth, parent, true);

        // 如果两个节点找到了 就提前退出遍历
        if (x_found && y_found) return;

        dfs(node->left, depth + 1, node);
        if (x_found && y_found) return;
        dfs(node->right, depth + 1, node);
    }
    bool isCousins(TreeNode* root, int x, int y) {
       if (nullptr == root || root->val == x || root->val == y) return false;
       this->x = x;
       this->y = y;

       dfs(root, 0, nullptr);
       return x_depth == y_depth && x_parent != y_parent;
    }
};
```

### **BFS解法 -- 通过查找父节点直接判断是否为堂兄弟节点: **

```c++
class Solution {
public:
    bool isCousins(TreeNode* root, int x, int y) {
        if (nullptr == root || root->val == x || root->val == y) return false;
        // pair中第一个树节点为当前节点指针 第二个记录父节点指针
        queue<pair<TreeNode*, TreeNode*>> q;
        q.push({ root, nullptr });

        while (!q.empty()) {
            int n = q.size();
            vector<TreeNode*> rec_parent;
            for (int i = 0; i < n; ++ i) {
                auto [cur, parent] = q.front();q.pop();
                if (cur->val == x || cur->val == y) rec_parent.push_back(parent);
                if (cur->left) q.push({ cur->left, cur });
                if (cur->right) q.push({ cur->right, cur });
            }
            int rec_parent_size = rec_parent.size();
            // x 和 y 均为出现
            if (rec_parent_size == 0) continue;
            // x 和 y 只出现一个 即 x 和 y 不在同一层
            else if (rec_parent_size == 1) return false;
            else if (rec_parent_size == 2) return rec_parent[0] != rec_parent[1];
        }

        return false;
    }
};
```