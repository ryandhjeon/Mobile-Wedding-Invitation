<script lang="ts" setup>
import { ref } from 'vue'
// import { PhoneFilled } from '@element-plus/icons-vue'
// import { Guide } from '@element-plus/icons-vue'
import map from "../assets/img/WeddingCity.png"
import divider from "../assets/img/divider.png"
import subwayShin from "../assets/img/subway_shin.jpeg"
// import NaverMap from "./NaverMap.vue"

const count = ref<number>(0)
</script>

<template>
    <div class="container fade-in">
        <el-image class="divider" :src="divider" loading="lazy"/>
        <h1>Location</h1>
        <div class="map__grid">
            <el-image class="map" :src="map"/>
        </div>
        <div class="map__description">
            <span>서울시 구로구 새말로97 신도림 테크노마트 8층</span>
            <span class="map__description-button"> 
                <a href="https://naver.me/5pNERn5Z" target="blank"><el-button class="location_button" type="success" plain>{{ $t("message.Location1") }}</el-button></a>
                <a href="http://kko.to/4Jfa8MDW_C" target="blank"><el-button class="location_button" type="warning" plain>{{ $t("message.Location2") }}</el-button></a>
            </span>
        </div>
    
        <div class="transportation__container">
            <div class="transportation__list">
                <el-button @click="count = 1" style="--el-button-hover-text-color: white; --el-button-hover-bg-color: var(--el-color-primary)" type="danger">{{ $t("message.Location3") }}</el-button>
                <el-button @click="count = 2" style="--el-button-hover-text-color: white; --el-button-hover-bg-color: var(--el-color-primary)" type="danger">{{ $t("message.Location4") }}</el-button>
                <el-button @click="count = 3" style="--el-button-hover-text-color: white; --el-button-hover-bg-color: var(--el-color-primary)" type="danger">{{ $t("message.Location5") }}</el-button>
            </div>
            <el-card class="transportation__card">
                <div v-if="count === 1" class="subway">   
                    <el-image class="subway_shin" :src="subwayShin"/>             
                    <div class="transportation__card-subtitle">신도림역 1호선 , 2호선</div>
                    <div>신도림역 3번출구 테크노마트 판매동 지하 1층과 직접 연결되어 있습니다.</div>
                </div>
                <div v-else-if="count === 2">                
                    <div class="transportation__card-subtitle">신도림역 1번출구(17-001) 정류장 하차</div>
                    <div>간선버스(파랑) : 160, 503, 600, 662, 670</div>
                    <div>지선버스(녹색) : 5615, 5714, 6512, 6513, 6515,6516,6637, 6640</div>
                    <div>좌석버스 : 301, 320, 510</div>
                    <div>경기버스 : 10, 11-1, 11-2, 83, 88</div>
                    <br />
                    <div class="transportation__card-subtitle">신도림역 3번출구 (17-102) 정류장 하차</div>
                    <div>지선버스(녹색) : 5619, 6411, 6511, 6611, 6650, 6651, 영등포09(구. 6653)</div> 
                    
                </div>
                <div v-else-if="count === 3">
                    테크노마트 지하주차장 이용(B3~B7)
                    주차요원의 안내를 받으세요.
                </div>
                <div v-else class="transportation__guide">
                    <span>
                        {{ $t("message.Location6") }}
                    </span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.map__grid {
    display: grid;
    justify-self: center;
}
.map__description {
    text-align: center;
    margin: 2em 0;
}
.map__description span {
    display: block;
}
.map__description-button{
    /* font-size: 0.8em; */
    margin: 1em 0;
}
.map__description-button .el-button {
    margin: 0 0.5em;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  /* font-size: 32px; */
  font-weight: 600;
  text-align: center;
}
.el-tabs .el-tabs--top .el-tabs__header  {
    color: red;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr); */
}
.transportation__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* font-size: 0.9em; */
    margin: 1em 0;
}
.transportation__card {
    font-size: 0.8em;
    color: #3c3c3c;
}
.transportation__card-subtitle {
    font-weight: bold;
}
.transportation__guide {
    text-align: center;
}

.subway {
    text-align: center;
}
.subway_shin {
    width: 30%;
    border-radius: 30%;   
}

.location_button {
    padding: 1.5em;
    color: darkslategray;
}


</style>
