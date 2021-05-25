# **[13. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)**

## 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

## 例如， 罗马数字 2 写做  II ，即为两个并列的 1。12 写做  XII ，即为  X + II 。 27 写做   XXVII, 即为  XX + V + II 。

## 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做  IIII，而是  IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为  IX。这个特殊的规则只适用于以下六种情况：

- ## I  可以放在  V (5) 和  X (10) 的左边，来表示 4 和 9。
- ## X  可以放在  L (50) 和  C (100) 的左边，来表示 40 和  90。 
- ## C  可以放在  D (500) 和  M (1000) 的左边，来表示  400 和  900。

---

### **示例 1：**

```c
输入: "III"
输出: 3
```

### **示例 2：**

```c
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

### **示例 3：**

```c
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

### **解法:**

```c++
class Solution {
private:
  map<string, int> m = {
    { "I", 1 },
    { "IV", 4 },
    { "V", 5 },
    { "IX", 9 },
    { "X", 10 },
    { "XL", 40 },
    { "L", 50 },
    { "XC", 90 },
    { "C", 100 },
    { "CD", 400 },
    { "D", 500 },
    { "CM", 900 },
    { "M", 1000 },
  };
public:
  int romanToInt(string s) {
    int res = 0, val = 0;
    int n = s.size();
    string temp;
    string specTemp;

    for (int i = 0; i < n; ++ i)
    {
      temp = s[i];
      if ((temp == "I" || temp == "X" || temp == "C") && n - 1 != i)
      {
        specTemp = temp + s[i + 1];
        val = m[specTemp];
        i += val == 0 ? 0 : 1;
        val = 0 == val ? m[temp] : val;
      }
      else val = m[temp];

      res += val;
    }
    return res;
  }
};
```

### **官方解法:**

```c++
class Solution {
private:
  map<string, int> m = {
    { "I", 1 },
    { "V", 5 },
    { "X", 10 },
    { "L", 50 },
    { "C", 100 },
    { "D", 500 },
    { "M", 1000 },
  };
public:
  int romanToInt(string s) {
    int res = 0, val = 0;
    int n = s.length();

    for (int i = 0; i < n; ++ i)
    {
      val = m[s[i]];
      res += i < n - 1 && val < m[s[i + 1]] ? -val : val;
    }
    return res;
  }
};
```
