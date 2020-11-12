<template>
  <div>
    <img class="img-comic" :src="info.img" :alt="info.alt" />
    <ButtonComic>Get Radom Comic</ButtonComic>
  </div>
</template>

<script>
import ButtonComic from "@/components/ButtonComic";
export default {
  name: "HomeContent",
  components: { ButtonComic },
  props: {
    info: {
      info: Object,
      default: () => {}
    }
  }
};
</script>

<style>
.img-comic {
  box-shadow: 0 100px 107px #05134125;
}
</style>
