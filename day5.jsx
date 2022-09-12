
1 . High Order Component in react js ?

    Higher order Component :

    A higher-Order Component (HOC) is an Advanced Technique in React for Reusing Component logic. 
    HOC is a pure function with zero side-effects and doesn't modify the actual input component. 
    Higher-Oredr component is a fuction that takes a component and returns a new component.     
    It take the component as input with some logic and return the some additional validation  of the component.
    It used to copying the same logic in every component. it makes code easier and occupies less space

2 . Do you know about SEO ? Is it true that react js supports SEO support ?

    Search engine optimization (SEO) is the process of improving the visibility of a website. 
    SEO considers how search engines work, what people search for, and which search terms (words) are typed.
    Promoting a site to increase the number of links, is another SEO tactic.

    React helps build a very user-friendly UI that is also valuable by SEO.
    It's important to note that you can overcome all issues with React and SEO. React JS is a development tool.
    However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, 
    therefore, good for SEO.

3 . clean up in useEffect ?

    The name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code 
    before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after 
    itself using the cleanup function.

4 . What is the use of useCallback and useMemo ?

    UseCallback :
    UseCallback is a react hook that returns a memorized callback when passed a function and a list of dependencies 
    that set the parameters. It’s useful when a component is passing a callback to its child component in order to 
    prevent rendering. It only changes the callback when one of its dependencies is changed

    UseMemo :
    UseMemo is very similar to useCallback. It accepts a function and a list of dependencies, but the difference 
    between useMemo and useCallback is that useMemo returns the memo-ized value returned by the passed function. 
    It only recalculates the value when one of the dependencies changes. 

5 . Why do we need. Why do we need keys in react less ?

    A “key” is a special string attribute you need to include when creating lists of elements in React. 
    Keys are used to React to identify which items in the list are changed, updated, or deleted. In other words, 
    we can say that keys are used to give an identity to the elements in the lists.

6 . Do you know about redux ? 

    Redux is an open-source JavaScript library for managing the application state. the three types of major terms 
    used in redux Store, Reducer, and the Action. it is mainly used to build the heavy complex websites and 
    applications also. Redux simply provides a subscription mechanism which can be used by any other code.
