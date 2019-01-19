# **Palindrome Number**

## Description

---

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

### **Example1:**

```
Input: 121
Output: true
```

### **Example2:**

```
Input: 121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### **Example3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### **Solution:**

#### **_My Approach:_**

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  let copyNum = x.toString()
  let length = copyNum.length
  let result = ''
  for (let i = length - 1; i >= 0; i--) {
    result += copyNum.charAt(i)
  }
  return result === copyNum
}
```

#### **_Better Approach_**

```javascript
const y = 10

/**
 * @param {number} x
 * @return {number}
 */
function getX(x) {
  return (x - (x % y)) / y
}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % y === 0 && x !== 0)) {
    return false
  }
  let reservtedNumber = 0
  while (x > reservtedNumber) {
    reservtedNumber = reservtedNumber * y + (x % y)
    x = getX(x)
  }
  return x === reservtedNumber || x === getX(reservtedNumber)
}
```
