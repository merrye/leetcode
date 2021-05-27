# **[58. 最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)**
 
## 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
## 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

---

### **示例 1：**

```c
输入：s = "Hello World"
输出：5
```

### **示例 2：**

```c
输入：s = " "
输出：0
```

### **解法:**

```c++
class Solution {
public:
    int lengthOfLastWord(string s) {
        int end = s.size() - 1;
        while (end >= 0 && s[end] == ' ') --end;

        if (end >= 0)
        {
            int start = end - 1;
            while (start >= 0 && s[start] != ' ') --start;
            
            return end - start;
        }
        else return 0;
    }
};
```
