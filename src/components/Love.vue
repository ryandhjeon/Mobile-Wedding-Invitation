<script setup>
</script>

<template>
    <div class="container fade-in">
        <el-image class="divider" :src="divider" loading="lazy"/>
        <h1>Love</h1>
        <div class="title">{{ $t("message.love1") }}</div>
        <div>{{ $t("message.love2") }}</div>
        <div class="one">
            <div class="one__title">{{ $t("message.love3") }}</div>
            <div class="love_button_list">
                <el-button class="registry_button" @click="count = 2, copy(bride)" type="danger" >{{ $t("message.love5") }}</el-button>
                <el-button class="registry_button" @click="count = 1, copy(groom)" type="danger" >{{ $t("message.love4") }}</el-button>
                <el-button class="registry_button" @click="count = 4, copy(bride_parent)" type="danger" >{{ $t("message.love7") }}</el-button>
                <el-button class="registry_button" @click="count = 3, copy(groom_parent)" type="danger" >{{ $t("message.love6") }}</el-button>
            </div>
            <el-card class="one__card">
                <div v-if="count === 1">     
                    <div class="one__card-title">
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                        <span class="bold">신랑</span>님의 계좌번호입니다
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                    </div>
                    <div>신한은행 110-367-792110 전동헌</div>
                    <!-- <div>Click the link for the <a href="https://account.venmo.com/u/ryandhjeon" target="blank">Venmo</a></div> -->
                </div>
                <div v-else-if="count === 2">                
                    <div class="one__card-title">
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                        <span class="bold">신부</span>님의 계좌번호입니다
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                    </div>
                    <div>하나은행 288-910382-83407 김혜원</div>
                    <!-- <div>Click the link for the <a href="https://account.venmo.com/u/hyewony" target="blank">Venmo</a></div> -->
                </div>
                <div v-else-if="count === 3">
                    <div class="one__card-title">
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                        <span class="bold">신랑 혼주</span>님의 계좌번호입니다
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                    </div>
                    <div>국민은행 451-24-0124-808 전인영</div>
                </div>
                <div v-else-if="count === 4">
                    <div class="one__card-title">
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                        <span class="bold">신부 혼주</span>님의 계좌번호입니다
                        <!-- <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon> -->
                    </div>
                    <div>우리은행 1002-948-726774 김인진</div>
                </div>
                <div v-else>
                    <span class="one__guide">
                        <!-- <Guide style="width: 1.1em; height: 1.1em; margin-right: 8px" />  -->
                        <el-icon :size="15" color="#FC9483">
                            <ArrowUpBold />
                        </el-icon>
                    </span>
                </div>
            </el-card>
        </div>

        <div class="two">
            <div class="two__title">{{ $t("message.love8") }}</div>
            <div>{{ $t("message.love9") }}</div>
            <div class="registry">
                <a href="https://registry.theknot.com/ryan-jeon-hyewon-kim-december-2023-il/56941937" target="blank">
                    <el-button class="registry_button" :icon="Promotion" type="danger">{{ $t("message.love10") }}</el-button>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import divider from "../assets/img/divider.png"
    // import venmo from "../assets/img/venmo.jpeg"
    import { Promotion, Goblet, Stamp, ArrowUpBold } from '@element-plus/icons-vue'
    const groom = '110-367-792110'
    const bride = '288-910382-83407'
    const groom_parent = '451-24-0124-808'
    const bride_parent = '1002-948-726774'

    const count = ref<number>(0)

    const copy = (s) => {
        ElMessage({
            message: '계좌번호가 복사되었습니다',
            type: 'info'
        })
        navigator.clipboard.writeText(s);       
        
        s.select();
        document.execCommand("copy");
    }
    
    
    // if (!navigator.clipboard) {
    //     document.execCommand("copy")    
    // } else {
    //     ElMessage({
    //         message: '계좌번호가 복사되었습니다',
    //         type: 'info'
    //     })
    //     navigator.clipboard.writeText(s);       
    // }
    // navigator.clipboard.writeText(s)
    //     .then(() => alert("clipboard API를 통해 내용이 복사되었습니다"))
    //     .catch(() => handleCopyForIE(s))
    
        

    // const copy = (s) => {
    //     ElMessage({
    //         message: '계좌번호가 복사되었습니다',
    //         type: 'info'
    //     })

    //     navigator.clipboard.writeText(s);       
    // }

    // async function copy(s) {
    
    //     await navigator.clipboard.writeText(s);
    //     console.log(s)
    // }

    
</script>

<style scope>
    .title {
        text-align: center;   
        color: darkgreen;
        margin-bottom: 1em;
        font-weight: bold;
    }

    .love_button_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 1em 0;
    }

    .el-button {
        padding: 1em;
    }

    .one {
        padding-top: 3em;
    }

    .one__title {
        text-align: center;   
        color: darkgreen;
        font-weight: bold;
    }

    .one__card {
        text-align: center;
    }

    .one__card-title {
        font-size: 0.8em;
        margin-bottom: 1em;
    }

    .two {
        padding-top: 3em;
    }

    .two__title {
        text-align: center;   
        color: darkgreen;
        margin-bottom: 1em;
        font-weight: bold;
    }

    .venmo {
        width: 20%;
    }
    
    .registry {
        text-align: center;
        padding-top: 1em;
    }
    
    .registry_button {
        padding: 1.3em;
        /* font-size: 0.9em; */
    }

    @media (max-width: 360px) {
    .registry_button {
        padding: 1em;
    }
}
</style>