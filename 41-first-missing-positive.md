# **[41. 缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/)**

## 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

## 进阶：你可以实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案吗？

---

### **示例 1：**

```c
输入：nums = [1,2,0]
输出：3
```

### **示例 2：**

```c
输入：nums = [3,4,-1,1]
输出：2
```

### **示例 3：**

```c
输入：nums = [7,8,9,11,12]
输出：1
```

### **解法:**

```c
int firstMissingPositive(int* nums, int numsSize)
{
    int *B = (int *) malloc(sizeof(int) * numsSize);
    int i = 0;
    for (; i < numsSize; ++i) B[i] = 0;

    for (i = 0; i < numsSize; ++ i)
        if (nums[i] > 0 && nums[i] <= numsSize)
            B[nums[i] - 1] = 1;
        
    for (i = 0; i < numsSize; ++ i)
        if (B[i] == 0) break;
    return i + 1;
}
```

### **官方解法**

```c
int firstMissingPositive(int* nums, int numsSize)
{
    int i = 0;
    for (; i < numsSize; ++i)
        if (nums[i] <= 0) nums[i] = numsSize + 1;
    for (i = 0; i < numsSize; ++ i)
    {
        int num = abs(nums[i]);
        if (num <= numsSize) nums[num - 1] = -abs(nums[num - 1]);
    }
    for (i = 0; i < numsSize; ++ i)
        if (nums[i] > 0) return i + 1;
    return numsSize + 1;
}
```