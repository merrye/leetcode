# **[1672. 最富有客户的资产总量](https://leetcode-cn.com/problems/richest-customer-wealth/)**

## 给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

## 客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。

---

### **示例 1：**

```c
输入：accounts = [[1,2,3],[3,2,1]]
输出：6
解释：
第 1 位客户的资产总量 = 1 + 2 + 3 = 6
第 2 位客户的资产总量 = 3 + 2 + 1 = 6
两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。
```

### **示例 2：**

```c
输入：accounts = [[1,5],[7,3],[3,5]]
输出：10
解释：
第 1 位客户的资产总量 = 6
第 2 位客户的资产总量 = 10 
第 3 位客户的资产总量 = 8
第 2 位客户是最富有的，资产总量是 10
```

### **解法:**

```c++
class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int curWealth = 0, maxWealth = 0;

        for (auto& account : accounts)
        {
            curWealth = 0;
            for (int wealth : account) curWealth += wealth;
            
            maxWealth = max(maxWealth, curWealth);
        }
        

        return maxWealth;
    }
};
```
