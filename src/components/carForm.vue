<template>
  <div class="card_content">
    <img src="../assets/Images/Titre.png" alt="logo" class="img-fluid mb-4" />
    <img src="../assets/Images/Etape2.png" alt="step2" class="img-fluid" />
    <p>
      Lors de cette souscription, nous aurons également besoin d’informations
      essentielles concernant votre véhicule. Cela nous permettra de
      personnaliser nos services en fonction de vos besoins spécifiques et de
      vous offrir une expérience sur mesure.
    </p>

    <div class="car_info">
      <div class="row">
        <div class="col-md-6 mb-2">
          <img
            src="../assets//Images/Voiture.png"
            alt="car"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6 mb-2">
          <div class="form_card">
            <input
              name="circulationDate"
              id="circulationDate"
              placeholder="Date de mise en circulation :"
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              v-model="carData.circulationDate"
              :class="{ invalid: errors.circulationDate }"
            />
            <span v-if="errors.circulationDate" class="error"
              >{{ errors.circulationDate }}
            </span>
            <input
              type="text"
              name="model"
              id="model"
              placeholder="Modèle :"
              v-model="carData.model"
              :class="{ invalid: errors.model }"
            />
            <span v-if="errors.model" class="error"
              >{{ errors.model }}
            </span>
            <input
              type="text"
              name="marque"
              id="model"
              placeholder="Marque :"
              v-model="carData.marque"
              :class="{ invalid: errors.marque }"
            />
            <span v-if="errors.marque" class="error"
              >{{ errors.marque }}
            </span>
            <input
              type="text"
              name="registration"
              id="registration"
              placeholder="Immatriculation :"
              v-model="carData.registration"
             :class="{ invalid: errors.registration }"
            />
            <span v-if="errors.registration" class="error"
              >{{ errors.registration }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex mt-3 justify-content-center align-items-center">
      <button class="previousBtn me-3 h-100" @click="previousComponent">
        Précédent
      </button>
      <button class="nextBtn" @click="submitCarForm">Envoyer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carForm",
  props: {
    formData:  {
        circulationDate: "",
        model: "",
        marque: "",
        registration: "",
      },
  },
  data() {
    return {
      carData:{...this.formData},
      errors: {},
      labels: [
        "Date de mise en circulation",
        "Modèle",
        "Marque",
        "Immatriculation",
      ],
    };
  },
  methods: {
    validateField(key, value) {
      if (!value) {
        this.errors[key] = `${this.labels[this.getIndexByKey(key)]} est requis`;
      } else {
        delete this.errors[key];
      }
    },
    getIndexByKey(key) {
      const keys = Object.keys(this.carData);
      return keys.indexOf(key);
    },
    submitCarForm() {
      this.errors = {};
      Object.entries(this.carData).forEach(([key, value], index) => {
        if (!value) {
          this.errors[key] = `${this.labels[index]} est requis`;
        }
      });

      if (Object.keys(this.errors).length === 0) {
        this.$emit("carFormSubmitted", this.carData);
      }
    },
    previousComponent() {
      this.$emit("previous",this.carData);
    },
  },
  watch: {
    "carData.circulationDate"(newValue) {
      this.validateField("circulationDate", newValue);
    },
    "carData.model"(newValue) {
      this.validateField("model", newValue);
    },
    "carData.marque"(newValue) {
      this.validateField("marque", newValue);
    },
    "carData.registration"(newValue) {
      this.validateField("registration", newValue);
    },
  },
};
</script>

<style scoped>
.card_content {
  width: 80%;
  height: 100%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

p {
  font-family: "glimer-regular", sans-serif;
  margin-top: 1rem;
}

.form_card {
  background-color: #f7f5f5;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding: 1.5rem 0.8rem;
  border-radius: 10px;
  /* height: 100%; */
  width: 100%;
}

@media screen and (max-width: 991px) {
  :root {
    font-size: 12px;
  }
}
</style>
