# Moor voting algo
https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
- An algorithm for finding the majority of a sequence of elements using linear time and constant space.
- The algorithm finds a majority element, if there is one
- An element that occurs repeatedly for more than half of the elements of the input
https://www.youtube.com/watch?v=n5QY3x_GNDg
# In Brief
Its two steps algorithm
- Find the candidate
- Verify if that candnidate is majority element or not

# Description
- The algorithm maintains in its local variables a sequence element and a counter, with the counter initially zero.
- It then processes the elements of the sequence, one at a time.
- When processing an element x, if the counter is zero, the algorithm stores x as its remembered sequence element and sets the counter to one.
- Otherwise, it compares x to the stored element and either increments the counter (if they are equal) or decrements the counter (otherwise).
- At the end of this process, if the sequence has a majority, it will be the element stored by the algorithm.
```
Initialize an element m and a counter i with i = 0
For each element x of the input sequence:
    If i = 0, then assign m = x and i = 1
    else if m = x, then assign i = i + 1
    else assign i = i − 1
Return m
```
# Problems
https://leetcode.com/problems/majority-element/

https://leetcode.com/problems/majority-element-ii/
