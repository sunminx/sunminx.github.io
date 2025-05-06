<template>
  <div class="home">
    <blog-list :posts="blogs"/>
    <Aside />
  </div>
</template>

<script>
import Aside from "./components/Aside.vue"
import BlogList from "./components/BlogList.vue"
import { data } from '../blogList.js'

export default {
    name: "Home",
    components: {
        Aside,
        BlogList
    },
    data: ()=> {
        return {
            blogs: data
        }
    }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: row;
}
</style>