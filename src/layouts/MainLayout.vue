<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>

    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar/Index";

export default {
  name: "MainLayout",
  components: {
    FooterBar
  }
};
</script>

<style lang="scss">
.fade-enter-active {
  transition: transform 1s, opacity 2s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
