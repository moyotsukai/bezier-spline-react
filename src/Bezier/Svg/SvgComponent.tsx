import React from "react"
import { useShowGuideValue } from "../../context/ShowGuideContext"
import { BezierSpline } from "../spline/BezierSpline"
import SvgCanvas from "./SvgCanvas"
import SvgCubicBezier from "./SvgCubicBezier"
import SvgCubicBezierInfo from "./SvgCubicBezierGuide"

type Props = {
  splines: BezierSpline[],
  expandCanvasToEdge?: boolean
}

const SvgComponent: React.FC<Props> = ({ splines, expandCanvasToEdge }: Props) => {
  const showGuide = useShowGuideValue()

  return (
    <SvgCanvas expandCanvasToEdge={expandCanvasToEdge}>
      {splines.map((spline, index) => (
        <g key={index}>
          {spline.paths.map((path, index) => (
            <React.Fragment key={index}>
              <SvgCubicBezier
                path={path}
                style={{
                  stroke: spline.stroke ?? null,
                  fill: spline.fill ?? null
                }}
              />
              {showGuide &&
                <SvgCubicBezierInfo pathInfo={path} />
              }
            </React.Fragment>
          ))}
        </g>
      ))}
    </SvgCanvas>
  )
}

export default SvgComponent