import DefaultTheme from 'vitepress/theme'
import Home from './Home.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('Home', Home)
  }
}