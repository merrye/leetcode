# **[26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)**

##  给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

## 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

---

### **示例 1：**

```c
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

### **示例 2：**

```c
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

### **解法:**

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int i, j, size = nums.size();

        if (size == 0) return 0;

        for (i = 1, j = 0; i < size; ++ i) if (nums[i] != nums[j]) nums[++ j] = nums[i];

        return j + 1;
    }
};
```
