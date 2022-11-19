<template>
    <!-- <el-select class="lang_selector" v-model="$i18n.locale" placeholder="Language" size="small">
        <el-option 
            v-for="item in langs" 
            :key="item.value" 
            :label="item.label"
            :value="item.value"
        />
    </el-select> -->

    <div class="lang_selector">
        <el-radio-group v-model="$i18n.locale">
            <el-radio-button v-model="$i18n.locale" 
                v-for="item in langs" 
                :label="item.label" 
                :value="item.value" 
                :key="item.value">
                {{item.label}}
            </el-radio-button>
        </el-radio-group>
    </div>

</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return { 
        'ko': true,

        langs: [
            {
                value: 'ko',
                label: 'KOR'
            },
            {
                value: 'en',
                label: 'ENG'
            }
        ]
    }
  }
}
</script>

<style scoped>

.lang_selector {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    z-index: 999;
    width: 3em;
    box-shadow: 0;
}

</style>