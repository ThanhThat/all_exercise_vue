<template>
  <h1 class="text-center text-info">Framework Exercises Vue 3</h1>
  <div class="container mt-4">
    <div class="row">
      <div class="col col-12 col-md-4" v-for="(project, index) in projects" :key="index">
        <a class="link-info" :href="project.url" target="_blank">
          <base-card :srcImg="project.srcImg" :title="project.name">
            <template #cardBody>
              <h5 class="text-info">
                {{ project.name }}
              </h5>
            </template>
          </base-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Digital Clock',
          url: 'https://digital-clock-taupe.vercel.app/',
          srcImg: '/images/ex1.jpeg'
        },
        {
          name: 'Multiplication App',
          url: 'https://ex2-multiplication-vue.vercel.app/',
          srcImg: '/images/ex2.jpeg'
        },
        {
          name: 'Button Ripple Effect',
          url: 'https://ex3-button-vue.vercel.app/',
          srcImg: '/images/ex3.jpeg'
        },
        {
          name: 'Realtime Character',
          url: 'https://ex4-realtime-character-vue.vercel.app/',
          srcImg: '/images/ex4.jpeg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
