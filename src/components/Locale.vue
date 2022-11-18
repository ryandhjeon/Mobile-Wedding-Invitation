<template>
    <el-select class="locale-changer" v-model="$i18n.locale" placeholder="Language">
        <el-option 
            v-for="item in langs" 
            :key="item.value" 
            :label="item.label"
            :value="item.value"
        />
    </el-select>
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
.locale-changer {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 999;
    width: 5em;
    box-shadow: 0;
    
}
</style>