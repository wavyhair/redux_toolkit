/*
 * @Author: chenjie
 * @Date: 2022-05-28 14:37:14
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-28 17:42:08
 * @FilePath: \redux_toolkit\src\store\index.js
 * @Description: 
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./festures/counter-slice";
import movieSlice from "./festures/movie-slice";
// configureStore 创建一个 redux 数据
const store = configureStore({
    reducer:{
        counter:counterSlice,
        movie:movieSlice
    }
})
export default store