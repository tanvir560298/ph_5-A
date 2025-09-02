
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?



Answer:

1. When we are using the getElementById we are selecting a item with a specific id and only that specific id holder element get the js code that we want to write. getElementsByClassName it is almost the similar. but here we have the chance to select multiple item at single time as well as we are able to use loop to do something that we need with each item. for the querySelector / querySelectorAll they are almost similar. querySelector returns only the first item it gets and the querySelectorAll returns all the item it has and also we use a .for using this.

2. we normally create a variable and then we use document.createElement() and inside we put the name of the element inside and for inserting we need to append the created element where we did it to be inserted.

3. Clicking a bubble does not stops the propagation. It just keeps going higher and higher. For example if we are clickin on button then we can see that first of child then it propagates through the parent and its parent in this manner. If any position we want to stop the propagation we can just call the method stopPropagation() and it will just stop there.

4. Event DElegation means without calling each child seprarately we call their common parent and add a lister to that. Then normally we apply the event bubbling.

5. preventDefault() stops something that normally executes. For example if we are clicking on a link it is supposed to take us somewhere but preventDefault() stops this action where as the stopPropagation() stop the child from going to its parent action on other words we can say that it stops event bubbling.......