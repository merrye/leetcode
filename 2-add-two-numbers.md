# **2. 两数相加**

##  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
## 请你将两个数相加，并以相同形式返回一个表示和的链表。
## 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

---

### **示例 1：**

```c
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

### **示例 2：**

```c
输入：l1 = [0], l2 = [0]
输出：[0]
```

### **示例 3：**

```c
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

### **解法:**

```c++
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head = new ListNode(), *r, *s;
        head->next = NULL;
        r = head;

	    int val, temp = 0;
        while(l1 || l2) {
            val = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + temp;
            r->next = new ListNode(val % 10);
            r = r->next;
            temp = val / 10;

            l1 && (l1 = l1->next);
            l2 && (l2 = l2->next);
        }

        if (temp) {
            r->next = new ListNode(temp);
        }

	    return head->next;
    }
};
```

### **递归解法:**

```c++
class Solution {
public:
    ListNode* dfs(ListNode* l1, ListNode* l2, int i) {
        if (!l1 && !l2 && !i) return nullptr;
        int val = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + i;
        ListNode* node = new ListNode(val % 10);
        node->next = dfs(l1 ? l1->next : nullptr, l2 ? l2->next : nullptr, val / 10);
        return node;
    }
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
       return dfs(l1, l2, 0);
    }
};
```
