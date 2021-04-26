<template>
  <div class="vuetify">
    <div class="plate">
      <p class="text">SOCCERSCORE</p>
    </div>
    <div class="ct-center">
      <div class="row">
        <a href="premeir-standing" class="btn space">
          <img src="../../../assets/Premeir.png" class="image-home-premeir " />
        </a>
      </div>
      <div class="row">
        <a href="laliga-standing" class="btn">
          <img
            src="../../../assets/Laliga2-edit.png"
            class="image-home-laliga "
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
#home {
  align-content: center;
  size: 60;
}
body {
  background-color: #c4c4c4;
}

.text {
  position: absolute;
  top: 10%;
  right: 50%;
  transform: translate(50%, -50%);
  text-transform: uppercase;
  font-family: verdana;
  font-size: 50px;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
.ct-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.space {
  margin-top: 50px;
  margin-bottom: 50px;
}

.image-home-premeir {
  width: 500px;
  height: 200px;
  opacity: 1;
  border: 2px solid transparent;
  border-radius: 30px;
  background-color: aliceblue;
  padding: 20px 50px;
  margin-top: 140px;
}
.image-home-laliga {
  width: 500px;
  height: 230px;
  opacity: 1;
  border: 2px solid transparent;
  border-radius: 30px;
  background-color: aliceblue;
  background-position: center;
  background-size: cover;
  padding: 20px 50px;

}
.vuetify {
  background-image: url(../../../assets/background-homepage.jpg);
  background-size: cover;
  height: 100vh;
  background-position: center;
}
</style>
