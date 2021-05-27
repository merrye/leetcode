# **[66. 加一](https://leetcode-cn.com/problems/plus-one/)**

## 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
## 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
## 你可以假设除了整数 0 之外，这个整数不会以零开头。

---

### **示例 1：**

```c
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

### **示例 2：**

```c
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

### **示例 3：**

```c
输入：digits = [0]
输出：[1]
```

### **解法:**

```c++
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int size = digits.size(), num = 1, val = 0;

        for (int i = size - 1; i >= 0; -- i)
        {
            val = digits[i] + num;
            digits[i] = val % 10;
            num = val / 10;
        }

        if (0 == num) return digits;

        vector<int>::iterator ptr = digits.begin();
        digits.insert(ptr, num);
    
        return digits;
    }
};
```

### **官方解法:**

```c++
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int size = digits.size();

        for (int i = size - 1; i >= 0; -- i)
        {
            ++ digits[i];
            if (10 == digits[i]) digits[i] = 0;
            else return digits;
        }

        digits.insert(digits.begin(), 1);
    
        return digits;
    }
};
```
