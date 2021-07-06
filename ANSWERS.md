- [ ] Why would you use class component over function components (removing hooks from the question)?

You would choose class components whenever you want to control specific lifecycles of the DOM. Also, class components allow state to be managed by one component which you would want if you want to keep your states maintained.

- [ ] Name three lifecycle methods and their purposes.

`ComponentDidMount` is a lifecycle method that runs code whenever the DOM first mount. This method is only called once.

`ComponentDidUpdate` is a lifecycle method that runs code whenever the DOM is updated through any changes of state, events, etc.

`render` is a lifecycle method that takes in the JSX of what we want to render on the DOM.

- [ ] What is the purpose of a custom hook?

A custom hook gives us the power to take a piece of funtionality that does not directly involve our JSX and make it scalable to other components. Also these hooks gives us a wide range of options in being able to make our own setter functions.

- [ ] Why is it important to test our apps?

It's important to test for any edge cases that a user might come across when navigating through our apps. This makes a mini documentation of our app if everything runs smoothly.