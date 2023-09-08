<template>
  <div class="card">
    <img :src="srcImg" :alt="title" class="card-img img-fluid" />
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    srcImg: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
