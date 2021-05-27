# **[136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)**
 
## 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

---

### **示例 1：**

```c
输入: [2,2,1]
输出: 1
```

### **示例 1：**

```c
输入: [4,1,2,1,2]
输出: 4
```

### **解法:**

```c++
class Solution {
private:
    vector<int> nums;
public:    
    int singleNumber(vector<int>& nums) {
        int res = 0;
        for (int i = 0, n = nums.size(); i < n; ++ i) res ^= nums[i];

        return res;
    }
};
```
