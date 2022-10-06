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
- conditional-rendering-04
- conditional-rendering-05
- state-01
- state-03
- state-04
- component-lifecycle-01

## Forms-Lists-and-Styling
- events-01
- events-03
- forms-01
- forms-02
- forms-03
- forms-04
- forms-05
- forms-06
- lists-03
- lists-04
- lists-05
- lists-06
- styling-components-01
- styling-components-03

## Composition
- component-composition-02
- component-composition-01
- render-props-01
- context-01
- context-02

## Function-components-and-hooks
- function Components - 01
- function Components - 02
- function Components - 03
- useState-01
- useState-02
- useEffect-01
- useEffect-02
- useEffect-03
- useEffect-04
- custom-hooks-01
- custom-hooks-02
- custom-hooks-03
- custom-hooks-04
- useCallback
- useMemo
- useRef-02
- useContext

## External-Libraries
- react-router-01
- react-router-02
- react-router-03
- react-router-04
- react-router-05
- react-router-06
- react-router-07
- swr-01
- swr-02
- swr-03

## redux
- redux-01
- redux-02
- redux-03
- redux-04
- redux-05
