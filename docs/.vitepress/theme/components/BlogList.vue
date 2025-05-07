<template>
  <div class="box">
    <div class="blog-list">
      <div v-for="post in currentPosts" :key="post.url" class="blog-post">
        <h3>{{ post.frontmatter.title }}</h3>
        <div class="post-meta">
          <span class="date">{{ post.frontmatter.date.substring(0, 10) }}</span>
          <span v-for="tag in post.frontmatter.tags" :key="tag" class="tag">
            <a href="">{{ tag }}</a>
          </span>
        </div>
        <p class="excerpt">{{ post.frontmatter.excerpt }}</p>
        <div class="read-more">more ..</div>
      </div>
    </div>
    <div v-if="totalPages > 1" class="pagination">
      <button
        class="prev-next"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        &laquo; 上一页
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        class="prev-next"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        下一页 &raquo;
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "BlogList",
  props: {
    posts: {
      type: Array,
    },
  },
  data: () => {
    return {
      total: 0,
      index: 0,
      perPage: 1,
      currentPage: 1,
      totalPages: 0,
      currentPosts: [],
    };
  },
  created() {
    this.total = this.posts.length;
    this.totalPages = Math.ceil(this.total / this.perPage);
    this.currentPosts = this.posts.slice(this.index, this.index + this.perPage);
  },
  methods: {
    goToPage(page) {
      if (this.currentPage === page) {
        return;
      }
      this.currentPage = page;
      this.index = (this.currentPage - 1) * this.perPage;
      this.currentPosts = this.posts.slice(
        this.index,
        this.index + this.perPage
      );
    },
  },
};
</script>
  
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog-list {
  width: 790px;
  margin: 0 auto;
  padding: 2rem 0;
}
.blog-post {
  margin-bottom: 1.2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  background: rgba(255, 255, 255, 0.2); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 背景模糊 */
  border-radius: 10px; /* 可选圆角 */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.blog-post h3 {
  margin: 0;
}
.post-meta {
  margin-bottom: 0.3rem;
  color: var(--vp-c-text-2);
}
.post-meta .date {
  font-family: "Courier New";
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}
.tag {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.2rem 0.2rem;
  font-size: 0.8rem;
}
.excerpt {
  font-size: 0.9rem;
  margin: 0 0 0 0;
  color: var(--vp-c-text-1);
}
.read-more {
  font-size: 0.9rem;
  color: var(--vp-c-brand);
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}
.pagination {
  display: flex;
  gap: 8px;
}
.pagination button {
  padding: 5px 10px;
  cursor: pointer;
}
.pagination button.active {
  background: #42b983;
  color: white;
  border: 0px;
}
.prev-next {
  padding: 0 12px !important;
}
</style>
