# **[35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)**

##  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

## 你可以假设数组中无重复元素。

---

### **示例 1：**

```c
输入: [1,3,5,6], 5
输出: 2
```

### **示例 2：**

```c
输入: [1,3,5,6], 2
输出: 1
```

### **示例 2：**

```c
输入: [1,3,5,6], 7
输出: 4
```

### **解法:**

```c++
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low = 0, size = nums.size(), high = size - 1, mid;
        while (low <= high) {
            mid = (high - low) / 2 + low;
            if (nums[mid] == target) return mid;
            else if (nums[mid] > target) high = mid - 1;
            else low = mid + 1;
        }

        return low;
    }
};
```
