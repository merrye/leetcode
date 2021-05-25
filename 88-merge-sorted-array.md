# **[88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)**

## 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
## 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

---

### **示例 1：**

```c
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
```

### **示例 2：**

```c
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
```

### **解法:**

```c
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){
    // 折半插入法
    int i, j, k = 0, low, high, middle, temp;
    for (i = m; i < nums1Size; ++ i) 
    {
        temp = nums2[k++];
        low = 0, high = i - 1;
        while(low <= high) {
            middle = (low + high) / 2;
            if (nums1[middle] < temp) low = middle + 1;
            else high = middle - 1;
        }   
        for (int j = i - 1; j > high; --j) nums1[j + 1] = nums1[j];
        nums1[high + 1] = temp;
    }
}
```

### **倒插法:**
```c
void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){
    // 倒插法
    int tail = m + n - 1;
    --m;
    --n;
    while(m >= 0 && n >= 0) nums1[tail--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    while(n >= 0) nums1[tail --] = nums2[n--];
} 
```
