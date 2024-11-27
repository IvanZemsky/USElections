import type { State } from "./state"

export type ElectionSide = {
  party: string
  candidate: string
  logo: string
  popularVotes: number
  electoralVotes: number
  color: string
}

export type Election = {
  id: string
  type: string
  date: string
  desc: string
  sides: ElectionSide[]
}

export type StateElection = {
   electionId: string
   stateResults: State[]
}
