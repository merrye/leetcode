# **[104. 二叉树的最大深度]()**

##  给定一个二叉树，找出其最大深度。
## 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
## 说明: 叶子节点是指没有子节点的节点。
<br>
---

### **示例 1：**

```c
输入：[3,9,20,null,null,15,7]
输出:：3
```

### **解法1:**

```c++
class Solution {
// 深度优先搜索
public:
  int maxDepth(TreeNode* root) {
    if (root == nullptr) return 0;
    int lDepth = maxDepth(root->left);
    int rDepth = maxDepth(root->right);
    return (lDepth > rDepth ? lDepth : rDepth) + 1; 
  }
};
```

### **解法2:**

```c++
class Solution {
// 广度优先搜索
public:
    int maxDepth(TreeNode* root) {
        if (root == nullptr) return 0;
        int ans = 0, size;
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty())
        {
            size = q.size();
            while(size > 0)
            {
                TreeNode *p = q.front();
                q.pop();
                if (p->left) q.push(p->left);
                if (p->right) q.push(p->right);
                size -= 1;
            }
            ans += 1;
        }
        return ans;
    }
};
```
