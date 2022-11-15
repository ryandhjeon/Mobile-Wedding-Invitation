<template>
    <div class="main__title">

        <span class="main__name"><el-image :src="leaf_left" class="leaf_l" loading="lazy"/>전동헌 & 김혜원<el-image class="leaf_r" :src="leaf_right" loading="lazy"/></span>
        <!-- <span class="main__and">and</span>
        <span class="main__name">김혜원</span> -->
        <!-- <div class="main__info">
        <div>12.17 4:50PM</div>
        <div>신도림 웨딩시티 아모르홀</div>
        </div> -->
    </div>
    <!-- <el-divider /> -->
    
</template>

<script setup lang="ts">
import leaf_left from "../assets/img/leaf_left.png"
import leaf_right from "../assets/img/leaf_right.png"
</script>

<style>
.main__title {
    margin: 5em 0;
}

.main__title span{
    display: block;
    text-align: center;
    /* font-size: 3em; */
}

.main__name {
    font-size: 2.5em;
}

.main__and {
    font-size: 2em;
    font-style: italic;
}

.main__info {
    text-align: center;
    font-size: 1.5em;
}

.leaf_l {
    width: 1.2em;
    margin-right: 0.3em;
}

.leaf_r {
    width: 1.2em;
    margin-left: 0.3em;
}
</style>