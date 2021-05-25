# **[125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)**

## 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

## 说明：本题中，我们将空字符串定义为有效的回文串。

---

### **示例 1：**

```c
输入: "A man, a plan, a canal: Panama"
输出: true
```

### **示例 2：**

```c
输入: "race a car"
输出: false
```

### **解法:**

```c
bool isPalindrome(char * s){
	int len = strlen(s);
	char str[len + 1];
	int pos = 0;
	while(*s)
	{
		if ((*s <= 'z' && *s >= 'a') || (*s <= '9' && *s >= '0'))  str[pos++] = *s;
		else if (*s <= 'Z' && *s >= 'A') str[pos++] =  *s + 32;
		++s;
	}
	int low = 0, high = pos - 1;
	while (low < high)
	{
		if (str[low] == str[high])
		{
			++ low;
			-- high;
		}
		else return false;
	}
	return true;
}
```
