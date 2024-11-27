import type { State, StateInDiagram, StateRect } from '@/model/types/state'

type VotetStatesDiagramOptions = {
  states: State[]
  columnAmount?: number
  rectSize?: number
}

export const createVotedStatesDiagram = ({
  states,
  columnAmount = 3,
  rectSize = 8.2,
}: VotetStatesDiagramOptions) => {
  const formatted: StateInDiagram[] = []

  let countY = 0
  let countX = 0
  let isBottomRirection = true

  let rectangleCount = 0

  for (let i = 0; i < states.length; i++) {
    const state = states[i]
    const coords: StateRect[] = []

    for (let j = 0; j < state.electorsAmount; j++) {
      coords.push({
        x: rectSize * countX,
        y: rectSize * countY,
      })

      rectangleCount++

      if (rectangleCount % columnAmount === 0) {
        countX++
        isBottomRirection = !isBottomRirection
      } else {
        if (isBottomRirection) {
          countY++
        } else {
          countY--
        }
      }
    }

    formatted.push({ ...state, coords })
  }

  return formatted
}
