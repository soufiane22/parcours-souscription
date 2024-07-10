<template>
  <div class="container">
    <div class="container_content">
      <div class="card">
        <component :is="currentComponent"></component>
        <div class="d-flex mt-3">
          <button class="previousBtn me-3" v-if="currentComponentIndex > 0"  @click="previousComponent">Précédent</button>
          <button class="nextBtn"  @click="nextComponent">Suivant</button>
        </div>

      </div>
      <div class="description">
        <p>
          TUTASSUR GRENOBLE SAS au capital de 3000€ - RCS GRENOBLE 919 676 817 –
          SIRET 919 676 817 00019 – APE 6622Z Siège social : 4 Boulevard
          Gambetta – 38000 Grenoble – Tél. + 33 (0)4.65.84.25.34 - TVA
          Intracommunautaire FR02919676817 Cabinet de courtage en assurance
          immatriculé à l’ORIAS (www.orias.fr) sous le numéro 22005579 Sous le
          contrôle de l’Autorité de Contrôle Prudentiel et de Résolution (ACPR)
          – 4 place de Budapest 75009 PARIS.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HomeContent from "./HomeContent.vue";
import AssistanceComponent from "./AssistanceComponent.vue";
import UserForm from "./UserForm.vue";
import carForm from "./carForm.vue";
import "../assets/style.css";
export default {
  name: "HomePage",
  components: {
    HomeContent,
    AssistanceComponent,
    UserForm,
    carForm
  },
  props: {
    msg: String,
  },
  data() {
    return {
      currentComponentIndex: 0,
      pagesArray: ["HomeContent","AssistanceComponent","UserForm","carForm"]
    };
  },
  computed: {
    currentComponent() {
      return this.pagesArray[this.currentComponentIndex];
    }
  },
  methods: {
    nextComponent() {
      this.currentComponentIndex = (this.currentComponentIndex + 1) % this.pagesArray.length;
    },
    previousComponent() {
      this.currentComponentIndex = this.currentComponentIndex - 1;  
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: fit-content;
  /* margin : 1.5rem 1rem;  */
}
.container_content {
  margin: 1.8rem 0;
  /* width: 80%;
  height: 90%; */
}
.card {
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}
button{

  color: white;
  padding: 0.6rem 1.8rem;
  border-radius: 25px;
  border:none;
  font-weight: 700;
  margin-top: 0.8rem;
  min-width: 8rem;
}
.nextBtn{
  background-color: #6D4AE7;
}
.previousBtn{
  background-color: #B7B7B7;
}
.description {
  display: flex;
  justify-content: center;
  text-align: left;
}

.description > p {
  width: 80%;
  color: #707070;
  align-items: center;
  justify-self: center;
  font-family: "glimer-light", sans-serif;
}

@media screen and (max-width: 991px) {
  :root{
    font-size: 12px;
  }
}
</style>
