# **[20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)**

##  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
## 有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

---

### **示例 1：**

```c
输入：s = "()"
输出：true
```

### **示例 2：**

```c
输入：s = "()[]{}"
输出：true
```

### **示例 3：**

```c
输入：s = "(]"
输出：false
```

### **解法:**

```c
bool isValid(char * s){
  int len = strlen(s);
  char p[len];
  int pos = -1;
  char *temp;
  while(*s)
  {
    switch(*s)
    {
      case '(':
      case '[':
      case '{':
        p[++pos] = *s;
        break;
      case ')':
        if(-1 != pos && '(' == p[pos]) --pos;
        else return false;
        break;
      case ']':
        if(-1 != pos && '[' == p[pos]) --pos;
        else return false;
        break;
      case '}':
        if(-1 != pos && '{' == p[pos]) --pos;
        else return false;
        break;
    }
    ++s;
  }
  return  -1 == pos;
}
```

### **官方解法:**

```c
char pairs(char a)
{
    if(')' == a) return '(';
    if(']' == a) return '[';
    if('}' == a) return '{';
    return 0;
}

bool isValid(char * s){
    int len = strlen(s);
    if (len % 2 == 1) return false;
    int stk[len + 1], top = 0;
    for (int i = 0; i < len; ++ i)
    {
        char ch = pairs(s[i]);
        if(ch)
        {
            if(0 == top || stk[top - 1] != ch) return false;
            --top;
        }
        else stk[top++] = s[i];
    }
    return 0 == top;
}
```
