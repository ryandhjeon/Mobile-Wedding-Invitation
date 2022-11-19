<template>
    <select class="lang_selector" v-model="$i18n.locale" placeholder="Language" size="small">
        <option 
            v-for="item in langs" 
            :key="item.value" 
            :label="item.label"
            :value="item.value"
        >{{item.label}}</option>
    </select>

    <!-- <div class="lang_selector">
        <el-radio-group v-model="$i18n.locale">
            <el-radio-button :label="en">ENG</el-radio-button>
        </el-radio-group>
    </div> -->

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
    box-shadow: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.7em;
    background-color: black;
    color: white;
    border: 0;
}

</style>