# **[144. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)**
 
## 给定一个二叉树，返回它的 **中序** 遍历。

---

### **示例 1：**

```c
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,3,2]
```

### **解法:**

```c++
class Solution {
private:
    vector<int> nums;
public:
    void dfs (TreeNode* root) {
        if (root == nullptr) return;
        dfs(root->left);
        nums.push_back(root->val);
        dfs(root->right);
    }
    void bfs(TreeNode* root) {
        stack<TreeNode*> s;
        while (root || !s.empty()){
            if (root) {
                s.push(root);
                root = root->left;
            }
            else {
                root = s.top();
                s.pop();
                nums.push_back(root->val);
                root = root->right;       
            }
        }
    }
    vector<int> postorderTraversal(TreeNode* root) {
        dfs(root);
        return nums;
    }
};
```
