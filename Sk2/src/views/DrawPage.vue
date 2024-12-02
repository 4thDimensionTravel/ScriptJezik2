<template>
  <div class="draw-container">
    <div class="tools">
      <button id="pencilBtn" class="btn" @click="setTool('pencil')"><img src="@/assets/pencil.png"></button>
      <input type="color" class="btn" v-model="color"/>
      <button id="eraserBTn" class="btn" @click="setTool('eraser')"><img src="@/assets/eraser.png"></button>
      <label>Rows:</label>
      <input class="field" type="number" v-model.number="row" @change="resizeCanvas" min="1" max="24" />
      <label>Cols:</label>
      <input class="field" type="number" v-model.number="col" @change="resizeCanvas" min="1" max="24" />
      <button id="saveBtn" class="btn" type="submit"><img src="@/assets/save.png"></button>
    </div>
    </div>
      <div class="canvas" @mousedown="startPainting" @mouseup="stopPainting" @mousemove="paintPixel">
        <div v-for="(row, rowIndex) in pixels" :key="rowIndex" class="row">
          <div v-for="(pixel, colIndex) in row" :key="colIndex" :style="{ backgroundColor: pixel }" class="pixel">
        </div>
      </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import '@/views/css/DrawPage.css'
  
  const pixels = ref(
    Array.from({ length: 20 }, () => Array(20).fill('#ffffff'))
  );


  const row = ref(20);
  const col = ref(20);
  const pixel = ref(Array.from({ length: row.value }, () => Array(col.value).fill("#ffffff")));
  const color = ref('#000000');
  const tool = ref('pencil');
  const drawingName = ref("");
  let isPainting = ref(false);


  
  const setTool = (newTool: string) => {
    tool.value = newTool;
  };
  

const startPainting = (event: Event) => {
  const mouseEvent = event as MouseEvent;
  if (mouseEvent.button === 0) { // Left mouse button
    isPainting.value = true;
    paintPixel(mouseEvent); // Pass the event to the paint function
  }
};
// Stop painting when mouse is released
const stopPainting = () => {
  isPainting.value = false;
};

// Paint the pixel when mouse is moving and button is pressed
const paintPixel = (event: MouseEvent) => {
  if (isPainting.value) {
    const pixel = event.target as HTMLElement;
    const rowIndex = pixel.parentElement?.dataset.rowIndex;
    const colIndex = pixel.dataset.colIndex;
    if (rowIndex && colIndex) {
      const row = parseInt(rowIndex);
      const col = parseInt(colIndex);
      if (tool.value === "pencil") {
        pixels.value[row][col] = color.value;
      } else if (tool.value === "eraser") {
        pixels.value[row][col] = "#ffffff";
      }
    }
  }
};


  const resizeCanvas = () => {
  const newPixels = Array.from({ length: row.value }, (_, rowIndex) =>
    Array.from({ length: col.value }, (_, colIndex) =>
      pixels.value[rowIndex]?.[colIndex] || "#ffffff"
    )
  );
  pixels.value = newPixels;
};
  </script>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Tiny5&display=swap');
</style>

  <style scoped>

  </style>
  