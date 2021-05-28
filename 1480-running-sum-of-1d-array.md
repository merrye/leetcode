# **[1480. 一维数组的动态和](https://leetcode-cn.com/problems/running-sum-of-1d-array/)**
 
## 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

## 请返回 nums 的动态和。
---

### **示例 1：**

```c
输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
```

### **示例 2：**

```c
输入：nums = [1,1,1,1,1]
输出：[1,2,3,4,5]
解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
```

### **解法:**

```c++
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int val = nums[0], size = nums.size();

        for (int i = 1; i < size; ++ i) {
            val += nums[i];
            nums[i] = val;
        }

        return nums;
    }
};
```
