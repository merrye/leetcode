# **206. 反转链表**

## 反转一个单链表。
## 进阶 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
---

### **示例 :**
  
```c
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

### **解法:**

```C
struct ListNode* reverseList(struct ListNode* head){
  // - 头插法
  // 加一个头节点，方便操作
  if(head == NULL || head->next == NULL) return head;
  struct ListNode *dummy = (struct ListNode*)malloc(sizeof(struct ListNode));
  dummy->val = 0;
  dummy->next = NULL;
  struct ListNode *p = head; // 截取头结点之后的链表
  struct ListNode *s;
  // 头插法
  while (p != NULL) {
    s = p->next;
    p->next = dummy->next;
    dummy->next = p;
    p = s;
  }
  return dummy->next;
}
```

### **递归解法--参照官方**

```C
struct ListNode* reverseList(struct ListNode* head){
  if (head == NULL || head->next == NULL) return head;
  else
  {
    struct ListNode *p = reverseList(head->next);
    head->next->next = head;
    head->next = NULL;
    return p;
  }
}
```

### **迭代解法--参照官方**

```c
struct ListNode* reverseList(struct ListNode* head){
  // - 迭代解法(指针反转)
  struct ListNode *curr = head;
  struct ListNode *prev = NULL;
  struct ListNode *next = NULL;
  while (curr)
  {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
}
```