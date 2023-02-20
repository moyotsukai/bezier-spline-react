import React from 'react'
import Bezier from '../../Bezier'

const CENTER: Bezier.Vec2 = { x: 1000, y: 1000 }
const SCALE = 2

const Example: React.FC = () => {

  const mountainPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y },
    points: [
      {
        end: { eaa: 0, eal: 800 * SCALE },
        controls: { cma: 30, cml: 200 * SCALE, cdr: 0.3, cda: -20 }
      }
    ]
  })

  const valleyPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y + 800 },
    points: [
      {
        end: { eaa: 15, eal: 800 * SCALE },
        controls: { sca: 30, scl: 200 * SCALE, eca: 45, ecl: 250 * SCALE }
      },
      {
        end: { eaa: -80, eal: 300 * SCALE },
        controls: { sca: "smooth", scl: 100 * SCALE, eca: 60, ecl: 100 * SCALE }
      }
    ]
  }, {
    stroke: "red",
    // fill: "blue"
  })

  const splines: Bezier.Spline[] = [
    mountainPath.rotate({ center: { x: CENTER.x, y: CENTER.y }, angle: 15 }),
    valleyPath,
  ]

  return (
    <Bezier.Svg splines={splines} />
  )
}

export default Example