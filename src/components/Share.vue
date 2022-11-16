<script setup>
</script>

<template>
  <div class="fade-in">
    <el-image class="divider" :src="divider" loading="lazy"/>
    <h1>Share</h1>
    <div class="share">
      <!-- <el-button :icon="ChatRound" :plain="true">카카오톡으로 공유하기</el-button> -->
      <el-button :icon="Link" :plain="true" @click="copyUrl()">청첩장 링크 복사하기</el-button>
    </div>
    <div class="ending">
        Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.
        Love never fails.
        <div class="verse">1 Corinthians 13:4-8</div>
    </div>

    <h3 class="signature">동헌 & 혜원</h3>
  </div>
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
  .ending {
    text-align: center;
    margin: 5em auto;
    
  }

  h3 {
    text-align: center;
    margin-top: 5em;
    margin-bottom: 1em;
  }

  .verse { 
    margin-top: 1em;
  }

  .signature {
    font-weight: bold;
  }
</style>