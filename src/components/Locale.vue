<template>
    <!-- <el-select class="locale-changer" v-model="$i18n.locale" placeholder="Language" size="small">
        <el-option 
            v-for="item in langs" 
            :key="item.value" 
            :label="item.label"
            :value="item.value"
        />
    </el-select> -->
    <div class="lang_selector">
        <el-radio-group class="lang_button" v-model="$i18n.locale" @click="isActive = !isActive">
            <el-radio-button :value='en' :label="true">ENG</el-radio-button>
        </el-radio-group>
    </div>

</template>

<script>

export default {
  name: 'locale-changer',
  data () {
    return { 
        langs: [
            {
                value: 'ko',
                label: 'Korean'
            },
            {
                value: 'en',
                label: 'English'
            },            
        ] 
    }
  }
}
</script>

<style scoped>

.lang_selector {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 999;
    width: 4em;
    box-shadow: 0;
}
</style>