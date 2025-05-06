<template>
    <div class="blog-list">
      <div v-for="post in posts" :key="post.url" class="blog-post">
        <h2><a :href="post.url">{{ post.title }}</a></h2>
        <div class="post-meta">
          <span class="date">{{ post.date }}</span>
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <p class="excerpt">{{ post.excerpt }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    posts: Array
  })
  </script>
  
  <style scoped>
  .blog-list {
    width: 790px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .blog-post {
    margin-bottom: 1.2rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    background: rgba(255, 255, 255, 0.2); /* 半透明背景 */
    backdrop-filter: blur(10px); /* 背景模糊 */
    border-radius: 10px; /* 可选圆角 */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  
  .blog-post h2 {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    border-top: 0px;
    padding-top: 12px;
  }
  
  .blog-post h2 a {
    color: var(--vp-c-text);
    text-decoration: none;
  }
  
  .blog-post h2 a:hover {
    color: var(--vp-c-brand);
  }
  
  .post-meta {
    margin-bottom: 0.7rem;
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
  }
  
  .tag {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.2rem 0.5rem;
    background: var(--vp-c-bg-soft);
    border-radius: 4px;
    font-size: 0.8rem;
  }
  
  .excerpt {
    margin: 1rem 0 0 0;
    color: var(--vp-c-text-1);
  }
  
  .read-more {
    display: inline-block;
    color: var(--vp-c-brand);
    font-weight: 500;
    text-decoration: none;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
  </style>