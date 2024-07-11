<template>
  <div class="card_header">
    <img src="../assets/Images/Titre.png" alt="logo" class="img-fluid" />
    <img
      src="../assets/Images/Etape1.png"
      alt="step1"
      class="img-fluid mt-4 mb-3"
    />
  </div>
  <div class="card_body">
    <div class="instructions">
      <p class="mb-3 mt-2">
        Pour souscrire à notre
        <span class="colored_text">Assistance Auto,</span> nous vous demandons
        de remplir certains <b>champs obligatoires.</b> Ces informations sont
        essentielles pour personnaliser nos services en fonction de vos besoins
        spécifiques.
      </p>
      <p class="confidentiality">
        Soyez assuré que nous traitons vos données avec la plus grande
        confidentialité et dans le respect des réglementations en vigueur
        concernant la protection des données personnelles.
      </p>
    </div>

    <form class="form" @submit.prevent="submitUserForm">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="form_card">
            <img
              src="../assets/Images/Carte_identite.png"
              alt="identity"
              class="img-fluid"
            />
            <div class="inputs">
              <input
                type="text"
                name="firstName"
                id="firstName"
                v-model="userData.firstName"
                placeholder="Nom :"
                :class="{ invalid: errors.firstName }"
              />
              <span v-if="errors.firstName" class="error">{{
                errors.firstName
              }}</span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Prénom :"
                v-model="userData.lastName"
                :class="{ invalid: errors.lastName }"
              />
              <span v-if="errors.lastName" class="error">{{
                errors.lastName
              }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="form_card">
            <img
              src="../assets/Images/Gateau.png"
              alt="birthday"
              class="img-fluid"
            />
            <div class="inputs">
              <input
                name="birthdayDate"
                id="birthdayDate"
                placeholder="Date de naissance :"
                type="text"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                v-model="userData.birthdayDate"
                :class="{ invalid: errors.birthdayDate }"
              />
              <span v-if="errors.birthdayDate" class="error">{{
                errors.birthdayDate
              }}</span>
              <input
                type="text"
                name="birthdayPlace"
                id="birthdayPlace"
                placeholder="Lieu de naissance :"
                v-model="userData.birthdayPlace"
                :class="{ invalid: errors.birthdayPlace }"
              />
              <span v-if="errors.birthdayPlace" class="error">{{
                errors.birthdayPlace
              }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="form_card">
            <img
              src="../assets/Images/Telephone.png"
              alt="phone"
              class="img-fluid"
            />
            <div class="inputs">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Adress e-mail :"
                v-model="userData.email"
                 :class="{ invalid: errors.email }"
              />
              <span v-if="errors.birthdayPlace" class="error">{{
                errors.email
              }}</span>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Telephone :"
                v-model="userData.phoneNumber"
                :class="{ invalid: errors.phoneNumber }"
              />
              <span v-if="errors.birthdayPlace" class="error">{{
                errors.phoneNumber
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="form_card">
            <img
              src="../assets/Images/Personnage_telephone.png"
              alt="Code Postal"
              class="img-fluid"
            />
            <div class="inputs">
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                placeholder="Code Postal :"
                v-model="userData.postalCode"
                :class="{ invalid: errors.postalCode }"
              />
              <span v-if="errors.postalCode" class="error">{{
                errors.postalCode
              }}</span>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Ville :"
                v-model="userData.city"
                 :class="{ invalid: errors.city }"
              />
              <span v-if="errors.city" class="error">{{
                errors.city
              }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="form_card">
            <img
              src="../assets/Images/Personne_chemise_rouge.png"
              alt="identity"
              class="img-fluid"
            />
            <div class="inputs">
              <input
                type="text"
                name="profession"
                id="profession"
                placeholder="Profession :"
                v-model="userData.profession"
                 :class="{ invalid: errors.profession }"
              />
              <span v-if="errors.profession" class="error">{{
                errors.profession
              }}</span>
              <input
                type="text"
                name="familyStatus"
                id="familyStatus"
                placeholder="Situation Familiale :"
                v-model="userData.familyStatus"
                  :class="{ invalid: errors.familyStatus }"
              />
              <span v-if="errors.familyStatus" class="error">{{
                errors.familyStatus
              }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-3 justify-content-center align-items-center">
        <button class="previousBtn me-3 h-100" @click="previousComponent">
          Précédent
        </button>
        <button class="nextBtn" @click="submitUserForm">Suivant</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    formData:  {
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
  },
  // computed: {
  //   currentComponent() {
  //     return this.pagesArray[this.currentComponentIndex];
  //   },
  // },
  data() {
    return {
      userData:{ ...this.formData },
      errors: {},
      labels: [
        "Nom",
        "Prénom",
        "Date de naissance",
        "Lieu de naissance",
        "Adress e-mai",
        "Telephone",
        "Code Postal",
        "Ville",
        "Profession",
        "Situation Familiale ",
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
      const keys = Object.keys(this.userData);
      return keys.indexOf(key);
    },

    submitUserForm() {
      console.log("formData ",this.formData);
      console.log("userData ",this.userData);
      this.errors = {
      };

      Object.entries(this.userData).forEach(([key, value], index) => {
        if (!value) {
          this.errors[key] = `${this.labels[index]} est requis`;
        }
      });

      if (Object.keys(this.errors).length === 0 && this.userData) {
        this.$emit("userFormSubmitted", this.userData);
      }
    },
    previousComponent() {
      this.$emit("previous");
    },
  },

  // Watch on each input to validate the value
  watch: {
    "userData.firstName"(newValue) {
      this.validateField("firstName", newValue);
    },
    "userData.lastName"(newValue) {
      this.validateField("lastName", newValue);
    },
    "userData.birthdayDate"(newValue) {
      this.validateField("birthdayDate", newValue);
    },
    "userData.birthdayPlace"(newValue) {
      this.validateField("birthdayPlace", newValue);
    },
    "userData.email"(newValue) {
      this.validateField("email", newValue);
    },
    "userData.phoneNumber"(newValue) {
      this.validateField("phoneNumber", newValue);
    },
    "userData.postalCode"(newValue) {
      this.validateField("postalCode", newValue);
    },
    "userData.city"(newValue) {
      this.validateField("city", newValue);
    },
    "userData.profession"(newValue) {
      this.validateField("profession", newValue);
    },
    "userData.familyStatus"(newValue) {
      this.validateField("familyStatus", newValue);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card_header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.instructions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  width: 60%;
  font-family: "glimer-regular", sans-serif;
}

.confidentiality {
  font-size: 10px;
  color: #707070;
  font-family: "glimer-light", sans-serif;
}

form {
  margin: 2rem 0;
  /* padding: 1rem 2rem; */
}

.form_card {
  background-color: #f7f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0.8rem;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}

.inputs {
  display: block;
}

@media screen and (max-width: 991px) {
  .form_card {
    flex-direction: column;
    margin: 8px auto;
  }
}
</style>
