export type StateSVG = {
  id: string
  d: string
}

export type State = {
  name: string
  electorsAmount: number
}

export type StateRect = {
  x: number
  y: number
}

export type StateInDiagram = {
  coords: StateRect[]
} & State
