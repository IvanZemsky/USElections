import type { State } from '@/model/types/state'
import { ref } from 'vue'

export const useTooltip = (tooltipWidth: number) => {
  const tooltipPosition = ref({ x: 0, y: 0 })
  const tooltipContent = ref<State | null>(null)

  const showTooltip = (event: MouseEvent, content: State) => {
    tooltipContent.value = content

    const screenWidth = document.documentElement.clientWidth
    const screenHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop

    const visible = (screenHeight + scrollTop) / 2

    let mouseX = event.pageX + 20
    let mouseY = event.pageY + 20

    if (mouseX > screenWidth / 2) {
      mouseX -= tooltipWidth
    }

    if (mouseY - scrollTop > visible / 2) {
      mouseY -= 220
    }

    tooltipPosition.value = {
      x: mouseX,
      y: mouseY,
    }
  }

  const hideTooltip = () => {
    tooltipContent.value = null
  }

  return {
    tooltipPosition,
    tooltipContent,
    showTooltip,
    hideTooltip,
  }
}
