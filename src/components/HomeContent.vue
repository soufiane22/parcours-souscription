<template>
  <div class="card_content">
    <p>
      Bienvenue. <br>
      Notre <b>assistance auto</b> est conçu pour vous offrir une
      tranquillité d’esprit totale lors de vos déplacements. Nous sommes
      disponibles
      <b>24 heures sur 24, 7 jours sur 7, où que vous soyez,</b> mettant ainsi
      votre sécurité au cœur de notre engagement.
    </p>
    <video
      src="../assets/Video/camion_1.mp4"
      autoplay="true"
      loop
      muted
      width="80%"
      height="70%"
      class="mb-3"
    ></video>
    <button class="nextBtn"  @click="nextComponent">Suivant</button>

  </div>
</template>

<script>
export default {
  name: "HomeContent",
  props: {
    // msg: String
  },
  methods: {
    nextComponent() {
      this.$emit('next');
    },
   }
  
};
// const description = ``
</script>

<style scoped>
.card_content {
  width: 65%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}
p{
    font-family: 'glimer-regular', sans-serif;
}

video{
    margin : 1rem 0;
}

@media screen and (max-width: 991px) {
  .card_content {
    width: 80%;
    flex-direction: column;
    margin: 8px auto;
  }
}

</style>
