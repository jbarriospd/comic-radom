<template>
  <div>
    <button class="button" @click="getRandomComic">Get Ramdom Comic</button>
  </div>
</template>

<script>
export default {
  name: "ButtonComic",
  methods: {
    getRandomComic() {
      this.$store.dispatch("info/getToken");
    }
  }
};
</script>

<style lang="scss">
.button {
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 18px;
  height: 35px;
  cursor: pointer;
  background: #009898;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.19), 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #ffffff;
  border: none;
}
</style>
