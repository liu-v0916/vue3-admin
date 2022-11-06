import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'

async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupPlugins(app)

  await router.isReady() // 路由处理好后再挂载页面
  app.mount('#app')
}

bootstrap()
