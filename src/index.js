import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
// const App = () => {
//     return (<div>Rick and Morty</div>)
// }
// function App() {
//     return <h1></h1>;
//   };
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)
// ReactDOM.render( 
//       <App />,
//     document.getElementById('root')
// );
reportWebVitals(console.log);
console.log('Rick and Morty');