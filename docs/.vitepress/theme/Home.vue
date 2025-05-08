<template>
  <div class="home">
    <blog-list :posts="posts" />
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
import BlogList from "./components/BlogList.vue";
import { data as posts } from "../post.data.js";

export default {
  name: "Home",
  components: {
    Aside,
    BlogList,
  },
  data: () => {
    return {
      posts,
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
