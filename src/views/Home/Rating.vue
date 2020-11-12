<template>
  <div>
    <div class="rating">
      <input type="radio" name="star" id="star1" checked="checked" />
      <label for="star1">
        <img src="../../assets/img/five.png" />
        <h4>Love it</h4>
      </label>
      <input type="radio" name="star" id="star2" />
      <label for="star2">
        <img src="../../assets/img/four.png" />
        <h4>Liked it</h4>
      </label>
      <input type="radio" name="star" id="star3" />
      <label for="star3">
        <img src="../../assets/img/three.png" />
        <h4>It's Ok</h4>
      </label>
      <input type="radio" name="star" id="star4" />
      <label for="star4">
        <img src="../../assets/img/two.png" />
        <h4>Dislike It</h4>
      </label>
      <input type="radio" name="star" id="star5" />
      <label for="star5">
        <img src="../../assets/img/one.png" />
        <h4>Hated It</h4>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating"
};
</script>

<style lang="scss">
.rating {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
}

.rating input {
  display: none;
}

.rating img {
  width: 40px;
}

.rating label {
  position: relative;
  width: 0;
  height: 128px;
  cursor: pointer;
  transition: 0.5s;
  filter: grayscale(1);
  text-align: center;
  opacity: 0;
}

.rating:hover label {
  width: 160px;
  opacity: 0.2;
}

.rating input:hover + label,
.rating input:checked + label {
  filter: grayscale(0);
  opacity: 1;
  width: 160px;
}

.rating label h4 {
  font-size: 24px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-50px) scale(0);
  transition: 0.5s;
}
.rating input:hover + label h4,
.rating input:checked + label h4 {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
