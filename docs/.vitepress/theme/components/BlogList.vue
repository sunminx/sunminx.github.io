<template>
    <div class="blog-list">
      <div v-for="post in posts" :key="post.url" class="blog-post">
        <h2><a :href="post.url">{{ post.title }}</a></h2>
        <div class="post-meta">
          <span class="date">{{ post.date }}</span>
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <p class="excerpt">{{ post.excerpt }}</p>
        <a :href="post.url" class="read-more">阅读更多 →</a>
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
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .blog-post {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--vp-c-divider);
  }
  
  .blog-post h2 {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
  }
  
  .blog-post h2 a {
    color: var(--vp-c-text);
    text-decoration: none;
  }
  
  .blog-post h2 a:hover {
    color: var(--vp-c-brand);
  }
  
  .post-meta {
    margin-bottom: 1rem;
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
    margin: 1rem 0;
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