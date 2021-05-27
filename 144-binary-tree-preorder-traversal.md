# **[144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)**
 
## 给定一个二叉树，返回它的 **前序** 遍历。

---

### **示例 1：**

```c
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
```

### **解法:**

```c++
class Solution {
private:
    vector<int> nums;
public:
    void dfs (TreeNode* root) {
        if (root == nullptr) return;
        nums.push_back(root->val);
        dfs(root->left);
        dfs(root->right);
    }
    vector<int> postorderTraversal(TreeNode* root) {
        dfs(root);
        return nums;
    }
};
```
