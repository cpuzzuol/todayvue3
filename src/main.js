import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { loadFonts } from './plugins/webfontloader'
import utils, {appStates} from "@/assets/Utils"
import axios from "axios"
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css'
import "./assets/scss/admin.scss"
import "./assets/scss/today.scss"

loadFonts()

const emutodayApp = createApp(App)
emutodayApp.use(store)
emutodayApp.use(router)
emutodayApp.use(VuesticPlugin)
emutodayApp.config.globalProperties.$utils = utils
emutodayApp.config.globalProperties.$http = axios
emutodayApp.config.globalProperties.$appStates = appStates
emutodayApp.mount('#app')
