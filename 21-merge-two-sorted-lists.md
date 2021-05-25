# **[21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)**

## 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。  
---

### **示例 1:**
  
```c
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

### **示例 2:**
 
```c
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

### **解法:**

```C
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
    struct ListNode *l = (struct ListNode *) malloc(sizeof(struct ListNode)), *prev;
    l->val = 0;
    l->next = NULL;
    prev = l;
    while(l1!= NULL && l2 != NULL)
    {
        if (l1->val < l2->val)
        {
            prev->next = l1;
            l1 = l1->next;
        }
        else
        {
            prev->next = l2;
            l2 = l2->next;
        }
        prev = prev->next;
    }
    prev->next = l1 != NULL ? l1 : l2;
    return l->next;
}
```

### **递归解法--参照官方**

```C
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
  if (l1 == NULL) return l2;
  if (l2 == NULL) return l1;
  if (l1->val < l2->val) 
  {
    l1->next = mergeTwoLists(l1->next, l2);
    return l1;
  }
  else
  {
    l2->next = mergeTwoLists(l1, l2->next);
    return l2;
  }
}
```

