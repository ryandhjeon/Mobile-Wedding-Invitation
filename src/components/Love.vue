<template>
    <el-image class="divider" :src="divider" loading="lazy"/>
    <h1>Love</h1>
    <div class="container">
        <div class="title">두 사람에게 축하의 마음 전하는 방법</div>
        <div>미국에서 시작하는 저희에게 축하해주고 싶은 마음이 가득한 당신으로부터 두가지 형태의 마음을 받으면 더 의미 있을거라는 생각에 2가지 방법을 준비해 봤어요.</div>
        <!-- <div class="one">
            <div class="one__title">첫째, 축의금 전달하실 분을 눌러주세요</div>
            <div class="love_button_list">
                <el-popover
                    placement="bottom"
                    title="신랑측의 계좌번호가 복사되었습니다"
                    :width="300"
                    trigger="click"
                    content="신한은행 1111-1111-111111 Venmo: ryandhjeon"
                >
                    <template #reference>
                    <el-button type="danger" @click="copy(groom)">신랑</el-button>
                    </template>
                </el-popover>
                <el-popover
                    placement="bottom"
                    title="신부측의 계좌번호가 복사되었습니다"
                    :width="300"
                    trigger="click"
                    content="신한은행 1111-1111-111111"
                >
                    <template #reference>
                    <el-button type="danger" @click="copy(bride)">신부</el-button>
                    </template>
                </el-popover>
                <el-popover
                    placement="bottom"
                    title="신랑혼주님의 계좌번호가 복사되었습니다"
                    :width="300"
                    trigger="click"
                    content="신한은행 1111-1111-111111"
                >
                    <template #reference>
                    <el-button type="danger" @click="copy(groom_parent)">신랑혼주</el-button>
                    </template>
                </el-popover>
                <el-popover
                    placement="bottom"
                    title="신부혼주님의 계좌번호가 복사되었습니다"
                    :width="300"
                    trigger="click"
                    content="성함: ㅇㅇㅇ, 계좌: 신한은행 1111-1111-111111"
                >
                    <template #reference>
                    <el-button type="danger" @click="copy(bride_parent)">신부혼주</el-button>
                    </template>
                </el-popover>
            </div>
        </div> -->

        <div class="one">
            <div class="one__title">첫째, 축의금 전달하실 분을 눌러주세요</div>
            <div class="love_button_list">
                <el-button @click="count = 1, copy(groom)" type="danger" autofocus>신랑</el-button>
                <el-button @click="count = 2, copy(bride)" type="danger" autofocus>신부</el-button>
                <el-button @click="count = 3, copy(groom_parent)" type="danger" autofocus>신랑혼주</el-button>
                <el-button @click="count = 4, copy(bride_parent)" type="danger" autofocus>신부혼주</el-button>
            </div>
            <el-card class="one__card">
                <div v-if="count === 1">     
                    <div class="one__card-title">
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                        신랑님의 계좌번호가 복사되었습니다
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                    </div>
                    <div>신한은행 1111-1111-111111 전동헌</div>
                    <div>Click the link for the <a href="https://account.venmo.com/u/ryandhjeon">Venmo</a></div>
                </div>
                <div v-else-if="count === 2">                
                    <div class="one__card-title">
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                        신부님의 계좌번호가 복사되었습니다
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                    </div>
                    <div>하나은행 288-910382-83407 김혜원</div>
                </div>
                <div v-else-if="count === 3">
                    <div class="one__card-title">
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                        신랑혼주님의 계좌번호가 복사되었습니다
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                    </div>           
                    <div>신한은행 1111-1111-111111</div>
                </div>
                <div v-else-if="count === 4">
                    <div class="one__card-title">
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                        신부혼주님의 계좌번호가 복사되었습니다
                        <el-icon :size="10" color="#FC9483">
                            <Stamp />
                        </el-icon>
                    </div>           
                    <div>우리은행 1002-948-726774 김인진</div>
                </div>
                <div v-else>
                    <span class="one__guide">
                        <Guide style="width: 1.1em; height: 1.1em; margin-right: 8px" /> 
                        <el-icon :size="15" color="#FC9483">
                            <Goblet />
                        </el-icon>
                    </span>
                </div>
            </el-card>
        </div>

        <div class="two">
            <div class="two__title">둘째, 신혼집을 꾸리면서 갖고싶은 물건들을 적어보았어요. </div>
            <div>사용할 때마다 선물한 분들을 떠올리며 감사하는 마음을 오래도록 간직하고자 합니다. 아래 링크에 들어가셔서 Our Wish List 안에 선물하고 싶은 물건을 선택하신 뒤 직접 구매 후 발송해주시면 됩니다. </div>
            <div class="registry">
                <a href="https://registry.theknot.com/ryan-jeon-hyewon-kim-december-2023-il/56941937" target="blank">
                    <el-button :icon="Promotion" type="danger" autofocus>Click here for registry</el-button>
                </a>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import divider from "../assets/img/divider.png"
import venmo from "../assets/img/venmo.jpeg"
import { Promotion, Goblet, Stamp } from '@element-plus/icons-vue'
const groom = '1234-1234-1234'
const bride = '288-910382-83407'
const groom_parent = '1002-948-726774'
const bride_parent = '4444-1234-1234'

const count = ref<number>(0)

async function copy(s) {
    await navigator.clipboard.writeText(s);
    console.log(s)
}
</script>

<style scope>
    .title {
        text-align: center;   
        color: darkgreen;
        margin-bottom: 1em;
    }

    .love_button_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 1em 0;
    }

    .el-button {
        font-size: 0.8em;
        padding: 1em;
    }

    .one {
        padding-top: 3em;
    }

    .one__title {
        text-align: center;   
        color: darkgreen;
    }

    .one__card {
        text-align: center;
    }

    .one__card-title {
        font-size: 0.7em;
    }

    .two {
        padding-top: 3em;
    }

    .two__title {
        text-align: center;   
        color: darkgreen;
        margin-bottom: 1em;
    }

    .venmo {
        width: 20%;
    }
    .registry {
        text-align: center;
        padding-top: 1em;
    }

    

</style>


