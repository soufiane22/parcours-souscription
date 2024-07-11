<template>
  <div class="container">
    <div class="container_content">
      <div class="card">
        <component
          :is="currentComponent"
          :formData="formData"
          :ref="currentComponent" 
          @next="nextComponent"
          @previous="previousComponent"
          @userFormSubmitted="handleUserForm"
          @carFormSubmitted="handleCarForm"
        >
        </component>

        <div
          class="alert alert-success alert-dismissible"
          role="alert"
          v-if="submissionSucceed"
        >
          Inscription submitted successfully!
          <span
            type="button"
            class="close ms-4"
            data-dismiss="alert"
            aria-label="Close"
             @click="dismissAlert"
          >
            <span aria-hidden="true">&times;</span>
          </span>
        </div>

        <div
          class="alert alert-danger alert-dismissible"
          role="alert"
          v-if="submissionFailed"
        >
          Something went wrong, please try again later.
          <span
            type="button"
            class="close ms-4"
            data-dismiss="alert"
            aria-label="Close"
            @click="dismissAlert"
          >
            <span aria-hidden="true">&times;</span>
          </span>
        </div>
      </div>
      <div class="description">
        <p>
          {{description}}
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
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    HomeContent,
    AssistanceComponent,
    UserForm,
    carForm,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      currentComponentIndex: 0,
      pagesArray: ["HomeContent", "AssistanceComponent", "UserForm", "carForm"],
      userData: {
        firstName: "",
        lastName: "",
        birthdayDate: "",
        birthdayPlace: "",
        email: "",
        phoneNumber: "",
        postalCode: "",
        city: "",
        profession: "",
        familyStatus: "",
      },
      carData: {
        circulationDate: "",
        model: "",
        marque: "",
        registration: "",
      },
      submissionSucceed: null,
      submissionFailed: null,
      description : `
               TUTASSUR GRENOBLE SAS au capital de 3000€ - RCS GRENOBLE 919 676 817 –
          SIRET 919 676 817 00019 – APE 6622Z Siège social : 4 Boulevard
          Gambetta – 38000 Grenoble – Tél. + 33 (0)4.65.84.25.34 - TVA
          Intracommunautaire FR02919676817 Cabinet de courtage en assurance
          immatriculé à l’ORIAS (www.orias.fr) sous le numéro 22005579 Sous le
          contrôle de l’Autorité de Contrôle Prudentiel et de Résolution (ACPR)
          – 4 place de Budapest 75009 PARIS.`
    };
  },
  computed: {
    currentComponent() {
      return this.pagesArray[this.currentComponentIndex];
    },
  },
  methods: {
    nextComponent() {
      this.currentComponentIndex =
        (this.currentComponentIndex + 1) % this.pagesArray.length;
        if(this.currentComponentIndex == 3 ){
          this.formData = this.carData;
        }
        if(this.currentComponentIndex == 2 ){
          this.formData = this.userData;
        }
    },
    previousComponent(carData) {
      this.currentComponentIndex = this.currentComponentIndex - 1;
      if(this.currentComponentIndex == 2 ){
        this.formData = this.userData;
        this.carData = carData
      }
    },
    handleUserForm(data) {
      this.userData = data;
      this.nextComponent();
    },
    async handleCarForm(data) {
      this.carData = data;
      const inscriptionData = {
        ...this.userData,
        ...this.carData,
      };
      console.log({ inscriptionData: inscriptionData });
      try {
        const response = await axios.post(
          "http://localhost:3000/api/inscriptions",
          inscriptionData
        );
        console.log("Inscription submitted successfully:", response);
        this.submissionSucceed = true;
        this.formData = {};
        this.userData = {};
        this.carData ={};
        this.$refs.carForm.resetForm(); // reset the car from in the child component
      } catch (error) {
        console.error("Error submitting form:", error);
        this.submissionFailed = true;
      }
    },
    dismissAlert(){
      this.submissionSucceed = false;
      this.submissionFailed = false;
    }
  },
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
  :root {
    font-size: 12px;
  }
}
</style>
