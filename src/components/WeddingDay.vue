<template>
    <div class="main__container">
        <el-image class="main_image" :src="main" fit="cover" loading="lazy"/>
        <div class="main__description">
            The marriage of
        </div>
    </div>
</template>

<script lang="ts" setup>
    import main from "../assets/img/main.jpeg"
</script>

<style scoped>
    .main__container {
        position: relative;
        text-align: center;
        /* margin: 5em 1em; */
    }
    .main_image {
        /* border: 0.5em solid #FFF; */
        border-bottom-width: 5em;
        /* padding-bottom: 4em; */
        /* border-radius: 70% 50% 60% 90%; */
        /* margin-bottom: 3em; */
        border-color: #fdf8f1;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }

    .main__description {
        position: absolute;
        bottom: 10%;
        left: 0;   
        width: 100%;
        margin: 0 auto; 
        color: white;
        text-shadow: 4px 4px 4px #5e5e5e;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        font-weight: bold;
    }
</style>