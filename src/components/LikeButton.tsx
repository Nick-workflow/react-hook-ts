/*
 * @Author: YangTao(Niklaus)
 * @LastEditors: YangTao(Niklaus)
 * @LastEditTime: 2021-05-23 22:05:43
 * @Description: file content
 */

import React, { useEffect, useRef, useState, useContext } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [obj, setObj] = useState({ like: 0, on: true })
  const positions = useMousePosition()
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)

  const style = {
    background: theme.background,
    color: theme.color,
  }

  useEffect(() => {
    console.log('document title effect is running')

    document.title = `点击了${obj.like}次`
  }, [obj.like])

  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on' + likeRef.current)
    }, 3000)
  }
  return (
    <>
      <input type="text" ref={domRef} />
      <h2>
        X: {positions.x}, Y: {positions.y}
      </h2>
      <button style={style} onClick={() => setObj({ like: obj.like + 1, on: obj.on })}>
        {obj.like} 👍🏻
      </button>
      <button onClick={() => setObj({ like: obj.like, on: !obj.on })}>
        {obj.on ? 'ON' : 'OFF'}
      </button>
      <button onClick={handleAlertClick}>Alert</button>
    </>
  )
}

export default LikeButton
