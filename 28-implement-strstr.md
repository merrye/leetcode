# **[28. 实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)**

##  实现 strStr() 函数。
## 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。


---

### **示例 1：**

```c
输入: haystack = "hello", needle = "ll"
输出: 2
```

### **示例 2：**

```c
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

### **解法:**

```c
int strStr(char * haystack, char * needle){
    if (needle == ' ') return 0;
    int i = 0, j = 0;
    int hLen = strlen(haystack), nLen = strlen(needle);
    while(i < hLen && j < nLen) {
        if (haystack[i] == needle[j]) {
            ++i; ++j;
        }
        else {
            i = i - j + 1;
            j = 0;
        }
    }
    if(j == nLen) return i - nLen;
    return -1;
}
```
