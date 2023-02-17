import React from 'react'
import Bezier from '../../Bezier'

const CENTER: Bezier.Vec2 = { x: 500, y: 1100 }
const SCALE = 3

const Example: React.FC = () => {

  // const mountainPath = Bezier.spline({
  //   start: { x: CENTER.x, y: CENTER.y },
  //   points: [
  //     {
  //       end: { eaa: 0, eal: 800 * SCALE },
  //       controls: { cma: 30, cml: 200 * SCALE, cdr: 0.3, cda: -20 }
  //     }
  //   ]
  // })

  const mountainPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y + 1000 },
    points: [
      {
        end: { eaa: 0, eal: 800 * SCALE },
        controls: { sca: 30, scl: 200 * SCALE, eca: 45, ecl: 250 * SCALE }
      }
    ]
  })

  const valleyPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y + 1000 },
    points: [
      {
        end: { eaa: 15, eal: 800 * SCALE },
        controls: { sca: 30, scl: 200 * SCALE, eca: 45, ecl: 250 * SCALE }
      }
    ]
  })

  const splines: Bezier.Spline[] = [
    mountainPath.rotate({ center: { x: CENTER.x, y: CENTER.y + 1000 }, angle: 15 }),
    valleyPath
  ].flat()

  return (
    <Bezier.Svg splines={splines} />
  )
}

export default Example