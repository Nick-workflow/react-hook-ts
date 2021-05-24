/*
 * @Author: YangTao(Niklaus)
 * @LastEditors: YangTao(Niklaus)
 * @LastEditTime: 2021-05-13 19:16:55
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect', positions.x)

    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', positions.x)

      document.removeEventListener('click', updateMouse)
    }
  }, [])
  console.log('before render', positions.x)

  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  )
}
export default MouseTracker
