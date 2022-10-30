import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import './assets/main.css'

const app = createApp(App)

// const pinia = createPinia().use(piniaPluginPersistedstate)
const pinia = createPinia().use(createPersistedState({
  storage: sessionStorage,
  paths: ['count', 'count2'],
}))

app.use(pinia)

app.mount('#app')
