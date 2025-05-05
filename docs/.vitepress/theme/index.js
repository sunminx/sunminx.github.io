import DefaultTheme from 'vitepress/theme'
import BlogList from './components/BlogList.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('BlogList', BlogList)
  }
}