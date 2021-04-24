# **155. 最小栈**

## 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
* ## push(x) —— 将元素 x 推入栈中。
* ## pop() —— 删除栈顶的元素。
* ## top() —— 获取栈顶元素。
* ## getMin() —— 检索栈中的最小元素。


---

### **示例 1：**

```c
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

### **示例 2：**

```c
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
```

### **解法:**

```c++
#define MAX_STACK_LENGTH 888

class MinStack {
public:
    /** initialize your data structure here. */
    MinStack() {
		  topPos = -1;
		  data = new int[MAX_STACK_LENGTH];
    }
    
    void push(int val) {
		  if (topPos == MAX_STACK_LENGTH - 1) return; // 栈满
		  data[++topPos] = val;
    }
    
    void pop() {
      if (topPos == -1) return; // 栈空
      --topPos;
    }
    
    int top() {
		  return topPos == -1 ? -1 : data[topPos];
    }
    
    int getMin() {
      if (topPos == -1) return -1;// 栈空
      int min = data[0];
      
      for (int i = 1; i <= topPos; ++ i)
        if (data[i] < min) min = data[i];

      return min;	
    }

private:
	int topPos;
	int *data;
};
```

### **官方解法:**
```c++
class MinStack {
    stack<int> x_stack;
    stack<int> min_stack;
public:
    MinStack() {
        min_stack.push(INT_MAX);
    }
    
    void push(int x) {
        x_stack.push(x);
        min_stack.push(min(min_stack.top(), x));
    }
    
    void pop() {
        x_stack.pop();
        min_stack.pop();
    }
    
    int top() {
        return x_stack.top();
    }
    
    int getMin() {
        return min_stack.top();
    }
};
```
