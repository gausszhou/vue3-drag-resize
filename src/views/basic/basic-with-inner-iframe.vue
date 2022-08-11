<template>
  <div class="view-box">
    <div id="toolbar">限制允许拖动的范围</div>
    <div class="container">
      <VueDragReSize
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
            <iframe src="//gausszhou.top" frameborder="0"></iframe>
          </div>
        </div>
      </VueDragReSize>
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
  color: #ddd;
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
</style>
