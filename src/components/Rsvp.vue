<template>
    <div class="container fade-in">
        <el-image class="divider" :src="divider" loading="lazy"/>
        <h1>Welcome</h1>
        <div class="rsvp__info">
            {{ $t("message.date1") }} <br />
            {{ $t("message.date2") }} <br />
            {{ $t("message.date3") }} <br />
        </div>
        <div class="rsvp__address">{{ $t("message.date4") }}</div>
        <!-- <div class="rsvp__calendar">
            <el-calendar v-model=Value :range=Range ref="calendar" style="--el-calendar-selected-bg-color: #FC9483">
                <template #header="{ date }">
                    <span>2022 . 12월</span>
                </template>
            </el-calendar>
        </div> -->
        <!-- <div class="rsvp__form">
            <el-form :inline="true" :model="formInline" >
                
                <div class="rsvp__form-title">참석해주시는 모든 분들에게 최선을 다하기 위해 <br />아래 참석여부를 작성해 주시면 감사하겠습니다!</div>
                <el-form-item label="저의 이름은: ">
                    <el-input v-model="form.name" placeholder="멋쟁이"/>
                </el-form-item>    
                <el-form-item label="참석할 총 인원은">
                    <el-input v-model="form.number" placeholder="명입니다"/>
                </el-form-item>    
                <el-form-item>
                    <el-radio-group  v-model="form.side">
                        <el-radio border label="신랑의 지인으로"  />
                        <el-radio border label="신부의 지인으로"  />
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="onSubmit" class="rsvp__form-submit">참석하겠습니다!</el-button>
                    <el-button type="danger" @click="onSubmit" class="rsvp__form-submit">참석이 힘들것 같아요 ㅠㅠ</el-button>
                </el-form-item>
            </el-form>
        </div> -->
        <div class="rsvp__contact">
            <!-- 궁금하신 사항이 있으시다면 연락주세요. -->
            <div class="rsvp__button">
                <a href="https://open.kakao.com/o/sq8e99Ke" target="blank">
                    <el-button :icon="UserFilled" :plain="true">{{ $t("message.date5") }}</el-button>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { UserFilled } from '@element-plus/icons-vue'
    import { ref, reactive } from 'vue'
    import divider from "../assets/img/divider.png"    
            
    const form = reactive({
        newTodo: '',
        name: '',
        number: '',
        side: '',
    })

    const Value = ref(new Date(2022, 11, 17))
    const Range = [new Date(2022, 11, 11), new Date(2022, 11, 17)]
</script>

<style scoped>    
.el-calendar .el-calendar__header {
    justify-content: center;
}

.el-calendar-table__row .is-selected {
    color: white !important;
    font-weight: bold;
}
.rsvp__info {
    text-align: center;
    font-weight: bold;
    font-size: 1em;
}
.rsvp__address{
    text-align: center;
}
.rsvp__calendar {
    margin: 2em 0;
}

.rsvp__contact {
    text-align: center;
    /* padding: 1em; */
}

.rsvp__button {
    margin: 1em 0;
}

.rsvp__form {
    background-color: white;
    padding: 1em;
}

.rsvp__form-title {
    margin-bottom: 1em;
}

/* .rsvp__form-submit {
    font-weight: bold;
} */
</style>