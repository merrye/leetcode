# **[剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof)**

##  写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
```c++
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```
## 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

## 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

---

### **示例 1：**

```c
输入：n = 2
输出：1
```

### **示例 2：**

```c
输入：n = 5
输出：5
```

### **解法:**

```c++
class Solution {
private:
    unordered_map<int, int> map;
public:
    int fib(int n) {
        if (0 == n) return 0;
        else if (1 == n) return 1;
        else if (map.count(n)) return map[n];

        int a = fib(n - 1) % 1000000007;
        map[n-1] = a;
        int b = fib(n - 2) % 1000000007;
        map[n-2] = b;
        map[n] = (a+ b) % 1000000007;
        return map[n];
    }
};
```
