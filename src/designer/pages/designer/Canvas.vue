<template>
  <div ref="centerCanvas" class="middle">
    <div class="canvas o-scroll overflow-auto">
      <div class="edit" :style="scrollbarStyle">
        <Editor v-resize="editorWindowResizeHandler" />
      </div>
    </div>
    <div class="flex flex-row justify-end items-center w-full">
      <div class="flex-nowrap flex items-center">
        <span :style="{ transition: `all 0.3s` }"> 缩放:{{ sliderValue }} % </span>
        <o-slider
          :value="sliderValue"
          :min="10"
          :max="200"
          style="width: 120px"
          @update:value="(value) => handleScale(value as number)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es'
import { useCanvasState } from 'open-data-v/designer'
import { OSlider } from 'open-data-v/ui'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import Editor from '../../Editor'

const windowWidth = ref<number>(0)
const windowHeight = ref<number>(0)

const sliderValue = ref<number>(100)
const selectValue = ref<string>('100%')
const scaleValue = ref<number>(1)
const canvasState = useCanvasState()

const scrollbarStyle = computed(() => {
  return {
    width: windowWidth.value + 'px',
    height: windowHeight.value + 'px'
  }
})

const editorWindowResizeHandler = (entry: ResizeObserverEntry) => {
  const { width, height } = entry.contentRect
  windowWidth.value = width
  windowHeight.value = height - 100
}

const handleScale = (value: number): void => {
  selectValue.value = `${value}%`
  sliderValue.value = value
  changeScale(sliderValue.value)
}

const changeScale = debounce((value: number) => {
  canvasState.setScale(value)
  scaleValue.value = value / 100
}, 300)

// region 按住 alt 或 command + 滚轮缩放
const centerCanvas = ref<HTMLDivElement | null>(null)
function setScaleByWheel(e: WheelEvent) {
  const max = 200
  const min = 10
  const limit = 10

  const { altKey, metaKey, deltaY } = e
  let scale = sliderValue.value
  if (altKey || metaKey) {
    e.preventDefault()
    if (min < scale && scale < max) {
      scale = deltaY > 0 ? scale + limit : scale - limit
    } else if (scale <= min && deltaY > 0) {
      scale += limit
    } else if (scale >= max && deltaY < 0) {
      scale -= limit
    }
    handleScale(scale)
  }
}

onMounted(() => {
  centerCanvas.value?.addEventListener('wheel', setScaleByWheel, false)
})

onBeforeUnmount(() => {
  centerCanvas.value?.removeEventListener('wheel', setScaleByWheel, false)
})
</script>

<style scoped lang="less">
@import 'open-data-v/css/index.less';
.middle {
  .canvas {
    height: 100%;
  }
  :deep(.edit) {
    transform-origin: left top;
    transform: scale(v-bind(scaleValue));
    transition: all 0.3s;
  }
}
</style>
