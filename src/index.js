/*
 * @Author: chenjie
 * @Date: 2022-05-28 14:28:59
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-28 15:07:37
 * @FilePath: \redux_toolkit\src\index.js
 * @Description: 
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
