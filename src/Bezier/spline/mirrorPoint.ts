import { intersection } from './intersection'
import { inferLine } from "./inferLine"
import { rotatePoint } from "./rotatePoint"
import { BezierVec2 } from './BezierVec2'

type Props = {
  center: BezierVec2
  angle: number
  point: BezierVec2
}

export const mirrorPoint = (props: Props): BezierVec2 => {
  const { center, angle, point } = props

  const inferedAxis = inferLine({ point: center, angle: angle })
  const inferedTargetLine = inferLine({ point: point, angle: angle + 90 })
  const intersectionPoint = intersection(inferedAxis, inferedTargetLine) ?? { x: 0, y: 0 }
  const mirrored = rotatePoint({ center: intersectionPoint, angle: 180, point: point })

  return mirrored
}