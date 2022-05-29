/*
 * @Author: chenjie
 * @Date: 2022-05-28 17:35:37
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-28 20:03:01
 * @FilePath: \redux_toolkit\src\store\festures\movie-slice.js
 * @Description:
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { increment } from './counter-slice'
import axios from 'axios'
// 发起网络请求获取数据
const loadMoviesAPI = async () => {
  const res = await axios({
    url: 'https://pcw-api.iqiyi.com/strategy/pcw/data/movieBiThemeRow?page_id=1&session=',
  })
  return res.data
}
export const loadData = createAsyncThunk('movie/loadDate', async () => {
  const res = await loadMoviesAPI()
  return res // 此处的返回结果会在 .fulfilled 中作为 payload 的值
})
const initialState = {
  list: [],
  totals: 0,
}
export const counterSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loaDataEnd(state, { payload }) {
      state.list.push(payload)
      state.totals += 1
    },
  },
  // 可以额外的触发 其他 slice
  extraReducers: {
    [increment](state, { payload }) {
      state.list.push(payload)
      state.totals += 1
    },
    // 成功
    [loadData.fulfilled](state, { payload }) {
      state.list = payload.data.formatData.list
    },
    // 失败
    [loadData.rejected](state, err) {
      console.log('err', err)
    },
    // pending
    [loadData.pending]() {
      console.log('pending')
    },
  },
})

export const { loaDataEnd } = counterSlice.actions

export default counterSlice.reducer
