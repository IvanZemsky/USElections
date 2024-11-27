export type StateGroup =
  | 'Solid Democratic'
  | 'Lean/Likely Democratic'
  | 'Toss Ups'
  | 'Lean/Likely Republican'
  | 'Solid Republican'

export type StateElectionSide = {
  party: string
  popularVotes: number
  color: string
}

export type State = {
  name: string
  electorCount: number
  group: StateGroup | null
  sides: StateElectionSide[]
}

export type StateRect = {
  x: number
  y: number
}

export type StateInDiagram = {
  coords: StateRect[]
} & State
