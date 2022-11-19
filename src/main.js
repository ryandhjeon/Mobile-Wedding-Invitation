import { createApp } from "vue";
import { createI18n } from 'vue-i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import "./assets/main.css";
import { messages } from "./util/messages";
import naver from 'vue-naver-maps'

const i18n = createI18n({
    locale: 'ko', 
    fallbackLocale: 'en',
    messages
})

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.use(i18n)
app.use(VueGtag, {
    config: { 
        id: "G-CY4KC0YD55",
        params: {
            anonymize_ip: true
        } }
    
  })
app.mount('#app')

/* ------------------------------ */

const faders = document.querySelectorAll
('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

