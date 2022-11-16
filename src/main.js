import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
// import "./assets/snow"

const app = createApp(App);
app.use(router);
app.use(ElementPlus)
app.mount('#app')

const faders = document.querySelectorAll
('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
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
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})