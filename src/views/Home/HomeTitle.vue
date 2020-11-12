<template>
  <div>
    <h1>{{ info.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  props: {
    info: {
      info: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>
