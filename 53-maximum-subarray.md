# **[53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)**

##  给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

---

### **示例 1：**

```c
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

### **示例 2：**

```c
输入：nums = [1]
输出：1
```

### **示例 3：**

```c
输入：nums = [0]
输出：0
```

### **解法:**

```c++
class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    int maxSub = nums[0], curSub = maxSub, n = nums.size();
    if (1 == n) return maxSub;

    for (int i = 1; i < n; ++ i)
    {
      int val = nums[i];
      curSub = max(val, val + curSub);
      if (curSub > maxSub) maxSub = curSub;
    }

    return maxSub;
  }
};
```
