# **[622. 设计循环队列](https://leetcode-cn.com/problems/design-circular-queue/)**

##  设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
<br />

## 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
<br />

## 你的实现应该支持如下操作：  
* ### MyCircularQueue(k): 构造器，设置队列长度为 k 。
* ### Front: 从队首获取元素。如果队列为空，返回 -1 。
* ### Rear: 获取队尾元素。如果队列为空，返回 -1 。
* ### deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
* ### isEmpty(): 检查循环队列是否为空。
* ### isFull(): 检查循环队列是否已满。

---

### **示例：**

```c
MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4
```

### **解法:**

```c++

class MyCircularQueue {
public:
    MyCircularQueue(int k) {
        queue = new int[k]; // 初始化队列
        front = 0; // 队首指针
        rear = 0; // 队尾指针
        capacity = k; // 队列容量
        size = 0; // 已存储元素数量
    }
    
    bool enQueue(int value) {
        if (size == capacity) return false;
 
        queue[rear] = value;
        rear = (rear + 1) % capacity;
        ++ size;
        return true;
    }
    
    bool deQueue() {
        if (0 == size) return false;
        front = (front + 1) % capacity;
        -- size;
        return true;
    }
    
    int Front() {
        return 0 == size ? -1 : queue[front];
    }
    
    int Rear() {
    	if (0 == size) return -1;
    	int pos = 0 == rear ? capacity - 1 : rear - 1;
        return queue[pos];
    }
    
    bool isEmpty() {
        return 0 == size;
    }
    
    bool isFull() {
        return size == capacity;
    }
private:
    int *queue;
    int front;
    int rear;
    int capacity;
    int size;
};
```
