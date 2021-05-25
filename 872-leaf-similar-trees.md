# **[872. 叶子相似的树](https://leetcode-cn.com/problems/leaf-similar-trees/)**

## 请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

## 举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。

## 如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

## 如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

---

### **示例1：**

```c
输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
输出：true
```

### **示例2：**

```c
输入：root1 = [1], root2 = [1]
输出：true
```

### **示例3：**

```c
输入：root1 = [1], root2 = [2]
输出：false
```

### **解法:**

```c++
void inOrder(TreeNode* root, vector<int> &seq)
{
    if (NULL != root){
        inOrder(root->left, seq);
        if (NULL == root->left && NULL == root->right) seq.push_back(root->val);
        inOrder(root->right, seq);
    }
}

class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> leafNodeList1;
        vector<int> leafNodeList2;
        // 递归中序遍历 root1
        inOrder(root1, &leafNodeList1);
        
        stack<TreeNode*> stack_tree;
        int size1 = leafNodeList1.size();
        TreeNode *p = root2;
        int pos = 0;
        
        // 非递归秩序遍历 root2 并在遍历过程判断
        while(NULL != p || !stack_tree.empty())
            if (p) {
                stack_tree.push(p);
                p = p->left;
            }
            else {
                p = stack_tree.top();
                stack_tree.pop();
                if (NULL == p->left && NULL == p->right) {
                    if (p->val == leafNodeList1[pos]) ++pos;
                    else return false;
                }
                p = p->right;
            }

        return size1 == pos;
    }
};
```

### **官方解法:**

```c++
/* **
  官方解法思路与我的解法思路一致
  但官方利用 vector 可以直接判断相等来简化代码 无形中降低了效率
*/
void inOrder(TreeNode* root, vector<int> &seq)
{
    if (NULL != root){
        inOrder(root->left, seq);
        if (NULL == root->left && NULL == root->right) seq.push_back(root->val);
        inOrder(root->right, seq);
    }
}

class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> seq1;

        if (root1) inOrder(root1, seq1);
        
        vector<int> seq2;

        if (root2) inOrder(root2, seq2);

        return seq1 == seq2;
    }
};
```
