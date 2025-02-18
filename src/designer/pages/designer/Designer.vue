<template>
  <div class="main h-fit flex-col flex flex-nowrap">
    <div class="top w-full h-14 align-middle">
      <ToolBar :toolbars="toolbars" />
    </div>
    <div class="content flex flex-nowrap flex-row">
      <div class="left o-scroll">
        <Toggle
          :direction="leftDreiction"
          :x="leftWidth"
          location="left"
          @click="collapsedLeft = !collapsedLeft"
        />
        <LeftSideBar
          :iscollapsed="collapsedLeft"
          @update:iscollapsed="
            (value) => {
              collapsedLeft = value
            }
          "
        />
      </div>
      <Canvas class="canvas border border-gray-500" />
      <div class="right o-scroll">
        <Toggle
          :x="rightWidth"
          location="right"
          :direction="rightDreiction"
          @click="collapsedRight = !collapsedRight"
        />
        <RightSideBar
          v-model:iscollapsed="collapsedRight"
          @update:iscollapsed="
            (value) => {
              collapsedRight = value
            }
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useData, useProp } from 'open-data-v/base'
import type { ToolBarItemType } from 'open-data-v/designer'
import { useCanvasState } from 'open-data-v/designer'
import { computed, onUnmounted, provide, readonly, ref } from 'vue'

import type { LayoutData } from '../../../designer/state/type'
import LeftSideBar from '../../Pane/LeftSideBar'
import RightSideBar from '../../Pane/RightSideBar'
import ToolBar from '../../Pane/Toolsbar'
import Canvas from './Canvas.vue'
import Toggle from './Toggle.vue'

withDefaults(
  defineProps<{
    toolbars?: ToolBarItemType[]
  }>(),
  {
    toolbars: () => []
  }
)
const canvasState = useCanvasState()

const collapsedLeft = ref(true)
const collapsedRight = ref(true)
provide('HOOKS', readonly({ useProp, useData }))
const setLayoutData = (data: LayoutData) => {
  canvasState.setLayoutData(data)
}
defineExpose({ setLayoutData })

onUnmounted(() => {
  canvasState.clearCanvas()
})
const leftWidth = computed<string>(() => (collapsedLeft.value ? '18rem' : '4rem'))
const leftDreiction = computed<'left' | 'right'>(() => (collapsedLeft.value ? 'left' : 'right'))

const rightWidth = computed<string>(() => (collapsedRight.value ? '18rem' : '4rem'))
const rightDreiction = computed<'left' | 'right'>(() => (collapsedRight.value ? 'right' : 'left'))

const canvasWidth = computed<string>(() => `calc(100vw - ${leftWidth.value} - ${rightWidth.value})`)
</script>
<style scoped lang="less">
@import 'open-data-v/css/index.less';
.main {
  .content {
    width: 100vw;
    height: calc(95vh - 2rem);
    .canvas {
      transition-property: width;
      transition-duration: 0.5s;
      width: v-bind(canvasWidth);
    }
    .left {
      transition-property: width;
      transition-duration: 0.5s;
      width: v-bind(leftWidth);
      overflow: hidden;
    }
    .right {
      transition-property: width;
      transition-duration: 0.5s;
      width: v-bind(rightWidth);
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
