<template>
  <div class="home-view">
    <HomeTitle />

    <HomeContent />
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle";
import HomeContent from "./HomeContent";

export default {
  name: "HomeView",
  components: { HomeTitle, HomeContent }
};
</script>
