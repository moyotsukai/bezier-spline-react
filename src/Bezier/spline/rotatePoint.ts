import { cos, sin } from "../../utils/Math"
import { absoluteAngle } from "./absoluteAngle"
import { BezierVec2 } from "./BezierVec2"
import { distance } from "./distance"

type Props = {
  center: BezierVec2
  angle: number
  point: BezierVec2
}

export const rotatePoint = ({ center, angle, point }: Props): BezierVec2 => {
  const pointAngle = absoluteAngle({ start: center, end: point })
  const length = distance(center, point)
  const x = center.x + cos(pointAngle + angle) * length
  const y = center.y + sin(pointAngle + angle) * length

  return { x: x, y: y }
}