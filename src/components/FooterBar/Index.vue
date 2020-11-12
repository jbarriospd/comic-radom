<template>
  <footer class="footer">
    <PoweredByFoot :icons="icons" />

    <div class="footer-info">
      <div class="footer-made">
        <MadeByFoot />
      </div>
    </div>
  </footer>
</template>

<script>
import MadeByFoot from "./MadeByFoot";
import PoweredByFoot from "./PoweredByFoot";

export default {
  name: "FooterBar",
  components: { PoweredByFoot, MadeByFoot },
  data() {
    return {
      icons: [
        {
          classes: ["fab", "vuejs"],
          color: "#4fc08d",
          href: "https://vue.js.org/"
        },
        {
          classes: ["fab", "github"],
          color: "#e4e4e4",
          href: "https://github.com/jbarriospd"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.footer {
  background: #578;
  color: #fff;
  display: flex;
  justify-content: space-around;
}
</style>
