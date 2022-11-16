<script setup>
</script>

<template>
    <el-image class="divider" :src="divider" loading="lazy"/>
    <h1>Share</h1>
    <div class="share">
      <!-- <el-button :icon="ChatRound" :plain="true">카카오톡으로 공유하기</el-button> -->
      <el-button :icon="Link" :plain="true" @click="copyUrl()">청첩장 링크 복사하기</el-button>
    </div>
    <h3>Wishing you all of the love and happiness! <br />동헌 & 혜원</h3>
</template>

<script setup lang="ts">
import { Calendar, ChatRound, Link } from '@element-plus/icons-vue'
import { ref } from 'vue';
import divider from "../assets/img/divider.png"

const url = 'https://www.ryanhyewon.com'

const copyUrl = () => {
  ElMessage({
    message: '링크가 복사되었습니다',
    type: 'info'
  })

  navigator.clipboard.writeText(url);    
  console.log(url)    
}
</script>

<style scoped>
  .share {
    display: grid;
    justify-content: center;
  }

  .share button {
    width: 250px;
    font-size: 0.8em;
  }
  .el-button {
    margin-left: 0;
    margin: 0.4em;
  }

  h3 {
    text-align: center;
    margin-top: 5em;
    margin-bottom: 1em;
  }
</style>