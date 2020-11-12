<template>
  <div class="home-view">
    <HomeTitle :info="info" />

    <HomeContent :info="info" />
    <h2 class="rating-title">Do you like It?</h2>
    <Rating class="rating-container" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import HomeTitle from "./HomeTitle";
import HomeContent from "./HomeContent";
import Rating from "./Rating";

export default {
  name: "HomeView",
  components: { HomeTitle, HomeContent, Rating },

  computed: {
    ...mapState("info", {
      info: "info"
    })
  }
};
</script>

<style lang="scss">
.rating-container {
  display: flex;
  justify-content: center;
}
</style>
