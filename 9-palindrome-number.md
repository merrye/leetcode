# **9. 回文数**

##  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
## 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

---

### **示例 1：**

```c
输入：x = 121
输出：true
```

### **示例 2：**

```c
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

### **示例 3：**

```c
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

### **解法:**

```c++
class Solution {
public:
  bool isPalindrome(int x) {
    if (x < 0) return false;
    if (x == 0) return true;

    while (0 != x)
    {
      nums.push_back(x % 10);
      x /= 10;
    }
    int size = nums.size();

    int low = 0, high = size - 1;
    while (low < high && nums[low] == nums[high])
    {
      ++low;
      --high;
    }
      
    return low == high || low == high + 1 ? true : false;	
  }
};
```

### **官方解法:**

```c++
class Solution {
public:
  bool isPalindrome(int x) {
    if (0 > x || (0 != x && 0 == x % 10)) return false;

    int revertNumber = 0;

    while (x > revertNumber)
    {
      revertNumber = revertNumber * 10 + x % 10;
      x /= 10;
    }

    return x == revertNumber || x == revertNumber / 10;
  }
};
```
