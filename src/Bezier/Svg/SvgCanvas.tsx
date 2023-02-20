import React from 'react'
import styles from '../../styles/Svg/Svg.module.css'
import { Vec2 } from '../vec2/Vec2'

type Props = {
  width?: number
  height?: number
  expandCanvasToEdge?: boolean
  children?: React.ReactNode
}

const A4: Vec2 = {
  x: 841.89,
  y: 595.28
}

//The dedault size 841.89px x 595.28px is A4
const SvgCanvas: React.FC<Props> = ({ width, height, expandCanvasToEdge = false, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ?? A4.x}px`}
      height={`${height ?? A4.y}px`}
      viewBox={`0 0 ${width ?? A4.x} ${height ?? A4.y}`}
      stroke="black"
      fill="transparent"
      className={`${styles.svgCanvas} ${expandCanvasToEdge && styles.svgCanvasExpand}`}
    >
      {children}
    </svg>
  )
}

export default SvgCanvas