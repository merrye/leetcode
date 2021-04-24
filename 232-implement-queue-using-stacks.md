# **155. 最小栈**

## 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

## 实现 MyQueue 类：

- ## void push(int x) 将元素 x 推到队列的末尾
- ## int pop() 从队列的开头移除并返回元素
- ## int peek() 返回队列开头的元素
- ## boolean empty() 如果队列为空，返回 true ；否则，返回 false

---

### **示例：**

```c
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

### **解法:**

```c++
class MyQueue {
    stack<int> x_stack;
    stack<int> y_stack;
public:
    /** Initialize your data structure here. */
    MyQueue() {
    }


    /** Push element x to the back of queue. */
    void push(int x) {
        x_stack.push(x);
    }

    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        if (!y_stack.empty()) { // y_stack 非空
            int temp = y_stack.top();
            y_stack.pop();
           return temp;
        }
        else
            if (!x_stack.empty()) // x_stack 非空
            {
                int temp;
                while (!x_stack.empty()) {
                    temp =  x_stack.top();
                    x_stack.pop();
                    y_stack.push(temp);
                }

                temp = y_stack.top();
                y_stack.pop();
                return temp;
            }
        return -1;
    }

    /** Get the front element. */
    int peek() {
        if (!y_stack.empty()) return y_stack.top();
        else
            if (!x_stack.empty())
            {
                int temp;
                while (!x_stack.empty()) {
                    temp = x_stack.top();
                    x_stack.pop();
                    y_stack.push(temp);
                }
                return y_stack.top();
            }
        return -1;
    }

    /** Returns whether the queue is empty. */
    bool empty() {
        return x_stack.empty() && y_stack.empty();
    }
};
```
