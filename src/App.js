/*
 * @Author: chenjie
 * @Date: 2022-05-28 14:28:59
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-28 20:41:39
 * @FilePath: \redux_toolkit\src\App.js
 * @Description:
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadData } from './store/festures/movie-slice'
import {
  increment,
  decrment,
  asyncIncrement,
} from '../src/store/festures/counter-slice'
function App() {
  // 通过 useSelector 直接拿到 store 中定义的 value
  const { value } = useSelector((store) => store.counter)
  const { list, totals } = useSelector((store) => store.movie)
  // 通过 useDispatch 派发事件
  const dispatch = useDispatch()
  // 获取影片数据
  useEffect(() => {
    dispatch(loadData())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      value:{value}
      <br />
      {list.length ? <textarea defaultValue={JSON.stringify(list)}></textarea> : null}
      <br />
      totals:{totals}
      <br />
      <button
        onClick={() => {
          dispatch(increment(4))
        }}
      >
        加
      </button>
      <button
        onClick={() => {
          dispatch(decrment())
        }}
      >
        减
      </button>
      <button onClick={() => dispatch(asyncIncrement(7))}>异步+</button>
    </div>
  )
}

export default App
