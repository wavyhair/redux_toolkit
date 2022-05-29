/*
 * @Author: chenjie
 * @Date: 2022-05-28 14:39:51
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-28 16:51:40
 * @FilePath: \redux_toolkit\src\store\festures\counter-slice.js
 * @Description:
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */

import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  title: 'redux toolkit pre',
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 定义一个加的方法
    increment: (state, { payload }) => {
      state.value += payload // 内置了 immutable
    },
    decrment: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrment } = counterSlice.actions
export const asyncIncrement = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 2000)
}
export default counterSlice.reducer
