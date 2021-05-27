# **[169. 多数元素](https://leetcode-cn.com/problems/majority-element/)**
 
## 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

## 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

---

### **示例 1：**

```c
输入：[3,2,3]
输出：3
```

### **示例 2：**

```c
输入：[2,2,1,1,1,2,2]
输出：2
```

### **解法:**

```c++
class Solution {
public:    
    int majorityElement(vector<int>& nums) {
        int res = nums[0], count = 1, n = nums.size();
        for (int i = 1; i < n; ++ i)
        {
            if (nums[i] == res) ++ count;
            else {
                --count;
                if (0 == count) {
                    count = 1;
                    res = nums[i];
                }
            }
        }

        return res;
    }
};
```
