# react-exercises
Esercizi React
1. creare un nuovo progetto react che chiamerete `react-exercises`
2. creare dal branch master un branch develop. Es: git checkout -b develop
3. creare dal branch develop il branch del capitolo. Es: git checkout -b basic-concepts.
4. per ogni esercizio create un nuovo branch dal branch del capitolo. Es: git checkout -b components-01
5. terminato l'esercizio, effettuate il merge del branch esercizio nel branch capitolo.
6. dopo il merge create il nuovo branch per l'esercizio successivo, sempre partendo dal branch del capitolo.
7. una volta terminati tutti gli esercizi del capitolo, effetutate il merge del branch capitolo in develop.
8. dopo il merge in develop, create il branch del capitolo successivo e ricominciate dal punto 4
9. Chiamate i branch con il nome dell'esercizio come scritto di seguito e seguite questa suddivisione degli esercizi.
    quindi il primo branch che creerete da `develop` sarà il branch `basic-concepts`, dal branch `basic-concepts` creerete il branch `components-01` nel quale svolgerete il relativo esercizio.

## basic-concepts
- components-01 Create a new React application with create-react-app and remove all the code within the src folder.
- components-02 Write a Hello class components that renders the "Hello, World!" message within an h1 tag.
- components-03 Write a class component called App that renders the Hello component within a div tag.
- components-04 Create a new index.js file within the src folder and render the App component using the ReactDOM.render method.
- components-06 Modify the Hello component so that it shows a p tag below the h1 tag with the message "What a beautiful day!"
- components-07 Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component.
- props-01 Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.
- props-02 What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?
- props-03 Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".
- props-04 What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression? Modify the value passed to the name prop so that it's contained within a strong tag.
- props-05 Extract the "Your age is " message into a new component called Age and render it within the Welcome component. Pass to the Age component the age prop that Welcome is receiving from the App component.
- conditional-rendering-01 Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18.
- conditional-rendering-02 Modify the Welcome component so that the Age component is rendered only if the age prop is present.
- conditional-rendering-03 Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65.
- conditional-rendering-04 Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John".
- conditional-rendering-05 Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.
- state-01 Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;
- state-03 Modify the Counter component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.
- state-04 Extract the h1 tag showing the count state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.
- component-lifecycle-01 Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required?

## Forms-Lists-and-Styling
- events-01 Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.
- events-02 Extract the button within a new component called CounterButton and render it within the ClickCounter component. How can you pass the onClick event handler to the CounterButton component?
- events-03 Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.
- forms-01 Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.
- forms-02 Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.
- forms-03 Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state
- forms-04 Add a "reset" button to the Login component that clears the content of all three inputs when clicked.
- forms-05 Implement an UncontrolledLogin component that implements all the operations of the Login component, but does so using uncontrolled components.
- forms-06 Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.
- lists-01 Create a Colors component that renders a ul tag with a li tag for each color passed in the items prop. The items prop should be an array of strings.
- lists-02 Modify the Colors component so that items is expected to be an array of objects each containing an id and a name property. Render the name property of each object within a li tag, and use the id as a key.
- lists-03 Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array.
- lists-04 Modify the TodoList component so that the input clears every time a Todo is added to the items array.
- lists-05 Modify the TodoList by adding a "reset" button that clears the items array when clicked.
- lists-06 Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array.
- styling-components-01 Create an index.css file and import it within the index.js file. Add a .welcome class to the Welcome component that changes its background color and adds a border.
                        Modify the Counter component from Events 01 by styling the counter display using an inline style attribute
- styling-components-03 Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.

## Composition
- component-composition-01 Create a Container component that renders its children within a div tag. Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.
- component-composition-02 Modify the Container component so that it can display a title received within the title prop.
- render-props-01 Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array.
- render-props-02 Change the TodoList component so that instead of using the render prop it uses the children prop. How does this affect the component in which the TodoList component is rendered?
- context-01 Create a LanguageContext and wrap a DisplayLanguage component within its provider. Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.
- context-02 Consume the LanguageContext within the DisplayLanguage component by using the context consumer, and show the selected language in an h1 tag.

## Function-components-and-hooks
- function-components-01 Rewrite the Welcome component to be a function component.
- function-components-02 Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.
- function-components-03 What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?
- useState-01 Rewrite the ClickCounter component from Events 01 as a function component, and use the useState hook to track the state of the counter.
- useState-02 Rewrite the Login component from Forms 03 as a function component, and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.
- useState-03 Rewrite the TodoList component from Lists 03 as a function component, and use the useState hook to track the state of the items array.
- useEffect-01 Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.
- useEffect-02 Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the interval as soon as the component renders, and clears it when the component unmounts.
- useEffect-03 Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.
- useEffect-04 Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button.
- custom-hooks-01 Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.
- custom-hooks-02 Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.
- custom-hooks-03 Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03 into a custom hook called useGithubUser.
- custom-hooks-04 Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states.
- useCallback Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback to memoize the functions used to increment, decrement and reset the counter.
- useMemo Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.
- useRef-01 Modify the Login component from useState 02 to so that the username input is automatically focused when the component renders, by creating a ref with useRef and attaching it to the username input
- useRef-02 Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.
- useContext Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.

## External-Libraries
- react-router-01 Create an App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component from Function Components 01, passing it a name prop. Render the App component within a BrowserRouter component.
- react-router-02 Add a new Route to the /counter path that renders the Counter component from useState 01.
- react-router-03 Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from useEffect 03 by passing it the received username.
- react-router-04 Add three Links within the main App component and use them to navigate to all three routes.
- react-router-05 Add a Not Found route that renders when a user navigates to a path that does not exist.
- react-router-06 Add a Route to the users path that shows the GihubUserList component from useEffect 04. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.
- react-router-07 Add an index route to the GithubUserList route that shows the "Add a user and select it" message.
- swr-01 Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user.
- swr-02 Modify the useGithubUser hook so that, if the username is null, no request is made.
- swr-03 Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.
- swr-04 Use SWRConfig to set a default value for the fetcher prop of the useSWR hook.

## redux
- redux-01
- redux-02
- redux-03
- redux-04
- redux-05
