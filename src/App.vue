<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>

    <MainLayout v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";

import LoadLayout from "./layouts/LoadLayout";
import MainLayout from "./layouts/MainLayout";
import BaseLoading from "@/components/BaseLoading.vue";

export default {
  name: "App",
  components: {
    LoadLayout,
    MainLayout,
    BaseLoading
  },
  computed: {
    ...mapState("loading", {
      isLoading: "isLoading"
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
