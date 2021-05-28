# **[771. 宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/)**

## 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

## J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

---

### **示例 1：**

```c
输入: J = "aA", S = "aAAbbbb"
输出: 3
```

### **示例 2：**

```c
输入: J = "z", S = "ZZ"
输出: 0
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
public:
    int numJewelsInStones(string jewels, string stones) {
        int jewelsLength = jewels.length(), stonesLength = stones.length(), ans = 0;
        unordered_map<char, bool> m;
        for (int i = 0; i < jewelsLength; ++ i) m.emplace(jewels[i], true);

        for (int i = 0; i < stonesLength; ++ i)
            if (true == m[stones[i]]) ++ ans;

        return ans;
    }
};
```
