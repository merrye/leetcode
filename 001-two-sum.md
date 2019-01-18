# **Two Sum**

## Description

---

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

### **Example:**

```javascript
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### **Solution:**

#### **_My Approach:_**

Time complexity： **_O_**(n\*2)  
Space complexity: **_O_**(1)

```javascript
function twoSum(nums, target) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
```

#### **_Better Approach_**

Time complexity： **_O_**(n)  
Space complexity: **_O_**(n)

```javascript
function twoSum(nums, target) {
  const map = new Map()
  const length = nums.length
  for (let i = 0; i < length; i++) {
    let currNum = nums[i]
    let completent = target - currNum
    if (map.has(completent)) {
      return [map.get(completent), i]
    }
    map.set(currNum, i)
  }
}
```
