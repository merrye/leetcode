# **[83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)**
 
## 存在一个按升序排列的链表，给你这个链表的头节点 **head** ，请你删除所有重复的元素，使每个元素 只出现一次 。

## 返回同样按升序排列的结果链表。

---

### **示例 1：**

```c
输入：head = [1,1,2]
输出：[1,2]
```

### **示例 2：**

```c
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

### **解法:**

```c++
class Solution {
public:    
    ListNode* deleteDuplicates(ListNode* head) {
        if (nullptr == head) return head;

        ListNode* dummy = new ListNode(), *p, *pre;
        dummy->next = head;
        p = dummy->next; // 首节点
        pre = dummy; // 记录 p 的前节点
        int val = p->val;

        while (p->next) {
            if (p->next->val == val) {
                pre->next = p->next;
                p = p->next;
            }
            else {
                pre = p;
                p = p->next;
                val = p->val;
            }
        }

        return dummy->next;
    }
};
```

### **官方解法:**
```c++

class Solution {
public:    
    ListNode* deleteDuplicates(ListNode* head) {
        if (nullptr == head) return head;

        ListNode *p = head;
        while (p->next) {
            if (p->next->val == p->val) p->next = p->next->next;
            else p = p->next;
        }

        return head;
    }
};
```