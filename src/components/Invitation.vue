<template>
    <div class="container fade-in">
        <div class="story1">
            {{ $t("message.quote1") }} <br/> {{ $t("message.quote2") }}
            <div>{{ $t("message.quote3") }}</div>
        </div>
        
        <div class="story2">
            <!-- 각자의 길을 열심히 걸어온 저희가 <br /> 이제는 손잡고 함께 발 맞춰가는 <br /> 새로운 여정을 시작합니다. <br /> 사랑하는 이 사람과 있는 힘을 다해 <br /> 멋있고 행복한 여정을 만들어 나가겠습니다. <br /> 뜻깊은 날 함께 축복해 주시면 <br /> 더 없는 기쁨으로 간직하겠습니다. -->

            {{ $t("message.story1") }} <br />
            {{ $t("message.story2") }} <br />
            {{ $t("message.story3") }} <br />
            {{ $t("message.story4") }} <br />
            {{ $t("message.story5") }} <br />
            {{ $t("message.story6") }} <br />
            {{ $t("message.story7") }}
        </div> 
        
        <div class="directory">
            <div><span class="bold">{{ $t("message.daughter1") }}</span>{{ $t("message.daughter2") }}<span class="bold">{{ $t("message.daughter3") }}</span></div>
            <div><span class="bold">{{ $t("message.son1") }}</span>{{ $t("message.son2") }}<span class="bold">{{ $t("message.son3") }}</span></div>
        </div>

    </div>
</template>

<script>

</script>

<style> 
.directory {
    text-align: center;
    margin-top: 4em;
}
.story1 {
    text-align: center;
    margin-bottom: 4em;
}

.story1-sub {
    margin: 1em auto;
}

.story2 {
    text-align: center;
}
</style>