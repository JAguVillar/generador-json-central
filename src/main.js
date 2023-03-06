import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Editor from 'primevue/editor';
import InputText from 'primevue/inputtext';

const app = createApp(App)

app.use(PrimeVue)
app.component('Editor', Editor);
app.component('InputText', InputText);

app.mount('#app')
