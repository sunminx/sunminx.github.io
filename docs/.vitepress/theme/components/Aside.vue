<template>
  <div class="aside">
    <div class="profile">
      <img src="../../../public/favicon.png" class="favicon" />
      <h5>sunmin</h5>
      <div class="stats">
        <div class="stats-item">
          <span class="count">{{ count }}</span>
          <span class="label">博客文章</span>
        </div>
        <div class="split"></div>
        <div class="stats-item">
          <span class="count">+{{ countInMonth }}</span>
          <span class="label">本月更新</span>
        </div>
        <div class="split"></div>
        <div class="stats-item">
          <span class="count">+{{ countInWeek }}</span>
          <span class="label">本周更新</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: {
    posts: {
      type: Array,
    },
  },
  data: () => {
    return {
        count: 0,
        countInMonth: 0,
        countInWeek: 0,
    }
  },
  created() {
    const now = new Date()
    this.count = this.posts.length
    this.posts.forEach(post => {
        const date = new Date(post.frontmatter.date)
        if (now.getMonth() === date.getMonth()) {
            this.countInMonth += 1
            if (now.getDate() - date.getDate() < 8)
                this.countInWeek += 1
        }
    })
  }
};
</script>

<style scoped>
.aside {
  width: 200px;
  margin: 0 2rem;
  border: 1px;
}
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  background: rgba(255, 255, 255, 0.2); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 背景模糊 */
  border-radius: 10px; /* 可选圆角 */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.favicon {
  width: 60px; /* 设置宽度 */
  height: 60px; /* 设置高度，应与宽度相同 */
  border-radius: 50%; /* 关键属性，设置为50%即可形成圆形 */
  object-fit: cover; /* 确保图片比例正确 */
  border: 2px solid #fff; /* 可选：添加白色边框 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 可选：添加阴影效果 */
}
.profile h4 {
  margin: 0;
}
.stats {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 6px;
}
.stats .stats-item {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
}
.stats .stats-item .count {
  font-size: 0.9rem;
}
.stats .stats-item .label {
  font-size: 0.7rem;
  color: #86909c;
}
.stats .split {
  width: 1px;
  height: 10px;
  background: #4e5969;
}
</style>