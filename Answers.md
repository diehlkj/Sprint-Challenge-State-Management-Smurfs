1. What problem does the context API help solve?

    Context API helps solve the problem of application state management and removes the need for prop drilling. More specifically, context API is a native solution to these issues which were addressed previously with the third party Redux library.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is like a big box that holds all the stuff in your state tree. Its job is just that, it holds your state tree and give all the components of your application access to it.
    Actions are little bundles (objects) of information that tell you what is going to happen to store. They are also the only way to pass data into the store.
    Reducers are functions that specify how state changes. They are the actual state manipulating part of the redux system. They take the payload from the corresponding action and use it to manipulate state.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is exactly what it sounds like. It’s the state of the ENTIRE application. Every component in the application has access to this app level state because it encompasses every component. This differs from component level state which is an implementation of state exclusive to a specific component and can only be passed down through its children. Component level state is great for small applications and certain components that don’t rely on data from the rest of the application, where application level state is more useful in  large and complex applications with many components and children.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk is middleware. It allows our actions to be functions and thunk returns whatever they return as a payload like a normal action. This allows us to do things like complex synchronous or async logic.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    So I’ve really started to like Redux as I’ve worked with it more. Honestly, it makes more sense to me than context api and I feel like it has a better flow, aside from the whole action creation/middleware stuff. I really think it juts boils down to having used it more recently and more frequently compared to context.