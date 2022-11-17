<template>
    <div class="container fade-in">
        <el-image class="divider" :src="divider" loading="lazy"/>
        <h1>Photo album</h1>
        <div class="sub">사진을 눌러주세요^^</div>
        <div class="demo-image__preview">
            <el-image
            :src="url"
            :preview-src-list="srcList"
            :initial-index="1"
            fit="cover"
            loading="lazy"
            />
            <div class="grid-container">
                <el-image class="grid-item" :src="image_2" fit="cover" :preview-src-list="srcList"
            :initial-index="1" loading="lazy"/>
                <el-image class="grid-item" :src="image_3" fit="cover" :preview-src-list="srcList"
            :initial-index="1" loading="lazy"/>
                <el-image class="grid-item" :src="image_4" fit="cover" :preview-src-list="srcList"
            :initial-index="1" loading="lazy"/>
                <el-image class="grid-item" :src="image_5" fit="cover" :preview-src-list="srcList"
            :initial-index="1" loading="lazy"/>
                <el-image class="grid-item" :src="image_6" fit="cover" :preview-src-list="srcList"
            :initial-index="1" loading="lazy"/>
                <el-image class="grid-item" :src="image_7" fit="cover" :preview-src-list="srcList"
            :initial-index="1" loading="lazy"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import divider from "../assets/img/divider.png"
    import image_1 from "../assets/img/1 Large.jpeg"
    import image_2 from "../assets/img/2 Large.jpeg"
    import image_3 from "../assets/img/3 Large.jpeg"
    import image_4 from "../assets/img/4 Large.jpeg"
    import image_5 from "../assets/img/5 Large.jpeg"
    import image_6 from "../assets/img/6 Large.jpeg"
    import image_7 from "../assets/img/7 Large.jpeg"
    import image_8 from "../assets/img/8 Large.jpeg"
    import image_9 from "../assets/img/9 Large.jpeg"
    import image_10 from "../assets/img/10 Large.jpeg"
    import image_11 from "../assets/img/11 Large.jpeg"
    import image_12 from "../assets/img/12 Large.jpeg"
    import image_13 from "../assets/img/13 Large.jpeg"
    import image_14 from "../assets/img/14 Large.jpeg"
    import image_15 from "../assets/img/15 Large.jpeg"
    import image_16 from "../assets/img/16 Large.jpeg"
    import image_17 from "../assets/img/17 Large.jpeg"
    import image_18 from "../assets/img/18 Large.jpeg"
    import image_19 from "../assets/img/19 Large.jpeg"
    import image_20 from "../assets/img/20 Large.jpeg"
    import image_21 from "../assets/img/21 Large.jpeg"

    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
    const url = image_1
    const srcList = [image_1, image_2,image_3,image_4,image_5,image_6,image_7,image_8,image_9,image_10,image_11,image_12,image_13,image_14,image_15,image_16,image_17,image_18,image_19,image_20,image_21]
  
</script>

<style scoped>
.photos__lazy {
    height: 400px;
    overflow-y: auto;
}

.photos__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}

.photos__lazy .el-image:last-child {
    margin-bottom: 0;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    row-gap: 5px;
    height: 400px;
}

.grid-item {
    /* padding: 4px; */
    /* text-align:center; */
}

.sub {
    text-align: center;
    font-size: .8em;
    color: darkgreen;
    margin-bottom: 10px;
}
</style>