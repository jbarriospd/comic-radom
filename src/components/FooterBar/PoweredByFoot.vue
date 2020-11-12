<template>
  <div class="poweredby ">
    <p class="">Powered by</p>

    <ul class="poweredby-icons">
      <li class="" v-for="(icon, idx) in icons" :key="idx">
        <a :href="icon.href" target="_blank" :title="icon.href">
          <font-awesome-icon
            :icon="icon.classes"
            class="fa-lg"
            :style="{ color: icon.color }"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PoweredByFoot",
  props: {
    icons: {
      required: true,
      type: Array
    }
  }
};
</script>
<style lang="scss">
.poweredby {
  display: flex;
}
.poweredby-icons {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin-right: 5px;
}
</style>
