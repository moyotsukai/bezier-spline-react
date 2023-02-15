import { absoluteAngle } from "../../Bezier/spline/absoluteAngle"

describe("Absolute angle", () => {
  test("{0, 0}, {10, 10}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: 10, y: 10 } })).toBeCloseTo(45)
  })
  test("{0, 0}, {-10, 10}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: -10, y: 10 } })).toBeCloseTo(135)
  })
  test("{0, 0}, {-10, -10}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: -10, y: -10 } })).toBeCloseTo(225)
  })
  test("{0, 0}, {10, -10}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: 10, y: -10 } })).toBeCloseTo(-45)
  })
  test("{0, 0}, 10, 0}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } })).toBeCloseTo(0)
  })
  test("{0, 0}, {0, 10}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: 0, y: 10 } })).toBeCloseTo(90)
  })
  test("{0, 0}, {0, -10}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: 0, y: -10 } })).toBeCloseTo(-90)
  })
  test("{0, 0}, {10, 0}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: 10, y: 0 } })).toBeCloseTo(0)
  })
  test("{0, 0}, {-10, 0}", () => {
    expect(absoluteAngle({ start: { x: 0, y: 0 }, end: { x: -10, y: 0 } })).toBeCloseTo(180)
  })
})