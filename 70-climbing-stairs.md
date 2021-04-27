# **70. 爬楼梯**

##  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
## 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
## 注意：给定 n 是一个正整数。


---

### **示例 1：**

```c
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

### **示例 2：**

```c
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

### **解法:**

```c
int climbStairs(int n){
    int prev = 0, cur = 1, result;
    for (int i = 0; i < n; ++ i) {
        result = prev + cur;
        prev = cur;
        cur = result;
    }
    return result;
}
```

### **递归解法 -超出时间限制
```c
int climbStairs(int n){
    if(1 == n) return 1;
    else if (2 == n) return 2;
    else return climbStairs(n - 1) + climbStairs(n - 2);
}  
```