# **19. 删除链表的倒数第 N 个结点**

##  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
## 进阶：你能尝试使用一趟扫描实现吗？
---

### **示例 1：**

```c
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

### **示例 2：**

```c
输入：head = [1], n = 1
输出：[]
```

### **示例 3：**

```c
输入：head = [1,2], n = 1
输出：[1]
```

### **解法:**

```c
struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
  struct ListNode *p = head, *q = head, *prev = p;
  int i = 1, k = 1;
  if (q->next == NULL && n == 1) return NULL;
  while (q != NULL && q->next != NULL)
  {
      if (k < n)
          ++ k;
      else 
      {
          prev = p;
          p = p->next;
      }
      q = q->next;
      ++ i;
  }
  if (i == n) return head->next;
  if (k >= n) prev->next = p->next;
  return head;
}
```

### **官方解法:**

```c
struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
    struct ListNode* dummy = (struct ListNode *) malloc(sizeof(struct ListNode));
    dummy->val = 0; dummy->next = head;
    struct ListNode *first = head, *second = dummy;
    int k = 0;
    while (first != NULL)
    {
        if (k < n) ++k;
        else second = second->next;
        first = first->next;
    }

    if (k >= n) second->next = second->next->next;
    struct ListNode *ans = dummy->next;
    free(dummy);
    return ans;
}
```
