import { Vec2 } from "../../Bezier/vec2/Vec2"
import { rotatePoint } from "../../Bezier/vec2/rotatePoint"

describe("Rotate point 1", () => {
  const CENTER: Vec2 = { x: 10, y: 10 }
  const TARGET: Vec2 = { x: 110, y: 110 }

  test("angle: 0", () => {
    expect(rotatePoint({ center: CENTER, angle: 0, point: TARGET }).x).toBeCloseTo(TARGET.x)
    expect(rotatePoint({ center: CENTER, angle: 0, point: TARGET }).y).toBeCloseTo(TARGET.y)
  })
  test("angle: 15", () => {
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).x).toBeCloseTo(CENTER.x + 70.710)
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).y).toBeCloseTo(CENTER.y + 122.474)
  })
  test("angle: 45", () => {
    expect(rotatePoint({ center: CENTER, angle: 45, point: TARGET }).x).toBeCloseTo(CENTER.x)
    expect(rotatePoint({ center: CENTER, angle: 45, point: TARGET }).y).toBeCloseTo(CENTER.y + 141.421)
  })
  test("angle: 75", () => {
    expect(rotatePoint({ center: CENTER, angle: 75, point: TARGET }).x).toBeCloseTo(CENTER.x - 70.710)
    expect(rotatePoint({ center: CENTER, angle: 75, point: TARGET }).y).toBeCloseTo(CENTER.y + 122.474)
  })
  test("angle: 90", () => {
    expect(rotatePoint({ center: CENTER, angle: 90, point: TARGET }).x).toBeCloseTo(CENTER.x - 100)
    expect(rotatePoint({ center: CENTER, angle: 90, point: TARGET }).y).toBeCloseTo(TARGET.y)
  })
  test("angle: 135", () => {
    expect(rotatePoint({ center: CENTER, angle: 135, point: TARGET }).x).toBeCloseTo(CENTER.x - 141.421)
    expect(rotatePoint({ center: CENTER, angle: 135, point: TARGET }).y).toBeCloseTo(CENTER.y)
  })
  test("angle: 180", () => {
    expect(rotatePoint({ center: CENTER, angle: 180, point: TARGET }).x).toBeCloseTo(CENTER.x - 100)
    expect(rotatePoint({ center: CENTER, angle: 180, point: TARGET }).y).toBeCloseTo(CENTER.y - 100)
  })
  test("angle: 195", () => {
    expect(rotatePoint({ center: CENTER, angle: 195, point: TARGET }).x).toBeCloseTo(CENTER.x - 70.710)
    expect(rotatePoint({ center: CENTER, angle: 195, point: TARGET }).y).toBeCloseTo(CENTER.y - 122.474)
  })
  test("angle: 225", () => {
    expect(rotatePoint({ center: CENTER, angle: 225, point: TARGET }).x).toBeCloseTo(CENTER.x)
    expect(rotatePoint({ center: CENTER, angle: 225, point: TARGET }).y).toBeCloseTo(CENTER.y - 141.421)
  })
  test("angle: 255", () => {
    expect(rotatePoint({ center: CENTER, angle: 255, point: TARGET }).x).toBeCloseTo(CENTER.x + 70.710)
    expect(rotatePoint({ center: CENTER, angle: 255, point: TARGET }).y).toBeCloseTo(CENTER.y - 122.474)
  })
  test("angle: -105", () => {
    expect(rotatePoint({ center: CENTER, angle: -105, point: TARGET }).x).toBeCloseTo(CENTER.x + 70.710)
    expect(rotatePoint({ center: CENTER, angle: -105, point: TARGET }).y).toBeCloseTo(CENTER.y - 122.474)
  })
})

describe("Rotate point 2", () => {
  const CENTER: Vec2 = { x: 10, y: 10 }
  const TARGET: Vec2 = { x: -90, y: 110 }

  test("angle: 15", () => {
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).x).toBeCloseTo(CENTER.x - 122.474)
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).y).toBeCloseTo(CENTER.y + 70.710)
  })
})

describe("Rotate point 3", () => {
  const CENTER: Vec2 = { x: 10, y: 10 }
  const TARGET: Vec2 = { x: -90, y: -90 }

  test("angle: 15", () => {
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).x).toBeCloseTo(CENTER.x - 70.710)
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).y).toBeCloseTo(CENTER.y - 122.474)
  })
})

describe("Rotate point 4", () => {
  const CENTER: Vec2 = { x: 10, y: 10 }
  const TARGET: Vec2 = { x: 110, y: -90 }

  test("angle: 15", () => {
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).x).toBeCloseTo(CENTER.x + 122.474)
    expect(rotatePoint({ center: CENTER, angle: 15, point: TARGET }).y).toBeCloseTo(CENTER.y - 70.710)
  })
})