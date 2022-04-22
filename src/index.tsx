import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import reportWebVitals from './reportWebVitals'
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )


ReactDOM.render(
	<Provider store={store}>
		<AppWithRedux/>
	</Provider>
	,
	document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
