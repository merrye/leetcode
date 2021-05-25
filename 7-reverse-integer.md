# **[7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)**

## 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
## 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
## 假设环境不允许存储 64 位整数（有符号或无符号）。

---

### **示例 1：**

```c
输入：x = 123
输出：321
```

### **示例 2：**

```c
输入：x = -123
输出：-321
```

### **示例 3：**

```c输入：x = 120
输出：21
```

### **解法:**

```c++
class Solution {
public:
    int reverse(int x) {
        queue<int> q;
        long ans = 0;
        while (x != 0) {
            q.push(x % 10);
            x /= 10;
        }
        while (!q.empty()){
            ans = q.front() + ans * 10;
            q.pop();
        }
       
        return ans != (int) ans ? 0 : (int) ans;
    }
};
```

### **官方解法:**

```c++
class Solution {
public:
    int reverse(int x) {
        int rev = 0 ;
        while (x != 0)
        {
            if (rev < INT_MIN / 10 || rev > INT_MAX / 10) return 0;

            int digit = x % 10;
            x /= 10;
            rev = rev * 10 +digit;
        }

        return rev;
    }
};
```
