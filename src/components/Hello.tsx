/*
 * @Author: YangTao(Niklaus)
 * @LastEditors: YangTao(Niklaus)
 * @LastEditTime: 2021-05-23 22:09:33
 * @Description: file content
 */
import React, { useContext } from 'react'
import { ThemeContext } from '../App'

interface IHelloProps {
  message?: string
}

const Hello: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)

  const style = {
    background: theme.background,
    color: theme.color,
  }
  return <h2 style={style}>{props.message}</h2>
}

Hello.defaultProps = {
  message: 'Hello World',
}

export default Hello
