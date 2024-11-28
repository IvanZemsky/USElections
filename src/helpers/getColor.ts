import type { StateElectionSide } from "@/model/types/state"

export const getColor = (sides: StateElectionSide[]) => {
   return sides.reduce((bestSide, currentSide) => {
     return currentSide.popularVotes > bestSide.popularVotes ? currentSide : bestSide
   }, sides[0]).color
 }