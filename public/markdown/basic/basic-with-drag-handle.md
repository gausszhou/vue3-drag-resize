# 带拖动句柄的基本组件

一个基本组件，只能通过一个句柄拖动，由prop <b>`drag-handle` </b>和一个有效的CSS选择器来指定，只能通过该DOM元素来拖动组件。


```html
<template>
  <div class="view-box">
    <div id="toolbar">限制允许拖动的范围</div>
    <div class="container">
      <vue-drag-resize
        :drag-handle="'.drag-handle'"
        :x="100"
        :y="100"
        :w="320"
        :h="210"
        :min-width="320"
        :min-height="210"
      >
        <div class="window">
          <div class="window-header">
            <div class="window-header-button-group">
              <span>文件</span>
              <span>编辑</span>
              <span>选择</span>
            </div>
            <div class="window-header-drag drag-handle">Drag Only Here</div>
            <div class="window-header-button-group">
              <span>➖</span>
              <span>⬜</span>
              <span>❌</span>
            </div>
          </div>
          <div class="window-body">
            <video src="https://static.gausszhou.top/data/video/h264/Dyson_Ball_264.mp4" controls></video>
          </div>
        </div>
      </vue-drag-resize>
         <vue-drag-resize
        :drag-handle="'.drag-handle'"
        :x="400"
        :y="400"
        :w="320"
        :h="210"
        :min-width="320"
        :min-height="210"
      >
        <div class="window">
          <div class="window-header">
            <div class="window-header-button-group">
              <span>文件</span>
              <span>编辑</span>
              <span>选择</span>
            </div>
            <div class="window-header-drag drag-handle">Drag Only Here</div>
            <div class="window-header-button-group">
              <span>➖</span>
              <span>⬜</span>
              <span>❌</span>
            </div>
          </div>
          <div class="window-body">
            <iframe src="//gausszhou.top" frameborder="0"></iframe>
          </div>
        </div>
      </vue-drag-resize>
    </div>
  </div>
</template>

<style scoped>
.window {
  height: 100%;
  overflow: hidden;
}

.window-header {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  height: 36px;
  padding: 0 5px;
  align-items: center;
  white-space: nowrap;
  background-color: #202120;
}

.window-header-drag {
  flex: 1;
  color: #fff;
  font-size: 12px;
  text-align: center;
  cursor: move;
}

.window-header-button-group {
  display: flex;
  cursor: default;
  color:#ddd;
  font-size: 12px;
}

.window-header-button-group span {
  margin: 0 5px;
}

.window-body {
  height: calc(100% - 30px);
  background-color: #000;
}

.window-body video,
.window-body iframe {
  width: 100%;
  height: 100%;
}
</style>```
