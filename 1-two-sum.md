# **[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)**

##  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。你可以按任意顺序返回答案。

---

### **示例 1：**

```c
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

### **示例 2：**

```c
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

### **示例 3：**

```c
输入：nums = [3,3], target = 6
输出：[0,1]
```

### **解法:**

```c
int* twoSum(int* nums, int numsSize, int target, int* returnSize)
{
  for(int i = 0; i < numsSize; ++ i)
  {
    for (int j = numsSize - 1; j > i; --j) {
      if (nums[i] + nums[j] == target) {
        int* result = malloc(sizeof(int) * 2);
        result[0] = i;
        result[1] = j;
        *returnSize = 2;
        return result;
      }
    }
  }
  *returnSize = 0;
  return NULL;
}
```

### **官方解法:**

```c
struct hashTable
{
  int key;
  int val;
  UT_hash_handle hh;
};

struct hashTable* hashtable;

struct hashTable* find(int ikey)
{
  struct hashTable* tmp;
  HASH_FIND_INT(hashtable, &ikey, tmp);
  return tmp;
}

void insert(int ikey, int ival)
{
  struct hashTable* it = find(ikey);
  if (it == NULL)
  {
    struct hashTable* tmp = malloc(sizeof(struct hashTable));
    tmp->key = ikey, tmp->val = ival;
    HASH_ADD_INT(hashtable, key, tmp);
  }
  else it->val = ival;
}

struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
  // 哈希求解
  hashtable = NULL;
  for (int i = 0; i < numsSize; ++ i)
  {
    struct hashTable* it = find(target - nums[i]);
    if (it != NULL)
    {
      int *ret = (int *)malloc(sizeof(int) * 2);
      ret[0] = it->val,ret[1] = i;
      *returnSize = 2;
      return ret;
    }
    insert(nums[i], i);
  }
  *returnSize = 0;
  return NULL;
}
```
