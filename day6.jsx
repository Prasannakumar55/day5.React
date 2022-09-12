
    1 . What is an event in react ?

        An event is an action that can be triggered by a User or any System 
        like pressing a key, or a mouse click.etc, Handling events with React 
        elements is very similar to handling events on DOM elements.
        React events are named using camelCase, rather than lowercase.

        onClick
        onChange
        onSubmit etc, 
        are the  Events in the react.
    
    2 . What is memory leak and how to overcome ?

        A memory leak is a commonly faced issue when developing React applications.
        Memory leak occurs when programmers create a memory in heap and forget to
        delete it.memory leak is that it reduces the performance of the computer 
        by reducing the amount of available memory.

    3 . Do you prefer function-based or class component and why ?

        In Class components the 2 best features are State and life cycles but after 
        version 16.8 both are also used in hooks in functions so then function components 
        are the best way to use insted of class components. in class there is a rendering 
        process reducer as pure function in redux but function having just return the 
        value it is also best thing i go with function components 

    4 . Explain reducer as pure function in redux ?

        In Redux, a reducer is a pure function that takes an action and the previous state 
        of the application and returns the new state.The action describes what happened and 
        it is the reducer's job to return the new state based on that action.

    5 . Why do we use redux thunk ?

        Redux Thunk middleware allows you to write action creators that return a function 
        instead of an action. The thunk can be used to delay the dispatch of an action. 
        The inner function receives the store methods dispatch and getState as parameters.

    6 . What do you know about NPM ?

        NPM stands node package manager, It is a package manager for JavaScript. 
        It is the default package manager that comes with NodeJS when you install it. 
        The required packages and modules in Node project are installed by using the NPM.