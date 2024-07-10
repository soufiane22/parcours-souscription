<template>
  <div class="card_header">
    <img src="../assets/Images/Titre.png" alt="logo" class="img-fluid" />
    <img src="../assets/Images/Etape1.png" alt="step1" class="img-fluid mt-4 mb-3">
  </div>
  <div class="card_body">
    <div class="instructions">
      <p class="mb-3 mt-2">
        Pour souscrire à notre <span class="colored_text">Assistance Auto,</span> nous vous demandons de remplir
        certains <b>champs obligatoires.</b> Ces informations sont essentielles pour
        personnaliser nos services en fonction de vos besoins spécifiques.
      </p>
      <p class="confidentiality">
        Soyez assuré que nous traitons vos données avec la plus grande
        confidentialité et dans le respect des réglementations en vigueur
        concernant la protection des données personnelles.
      </p>
    </div>

    <form class="form">
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
                placeholder="Nom :"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Prénom :"
              />
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
              />
              <input
                type="text"
                name="birthdayPlace"
                id="birthdayPlace"
                placeholder="Lieu de naissance :"
              />
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
              />
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Telephone :"
              />
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
              />
              <input type="text" name="city" id="city" placeholder="Ville :" />
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
              />
              <input
                type="text"
                name="familyStatus"
                id="familyStatus"
                placeholder="Situation Familiale :"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    msg: String,
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
.instructions{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
p{
    width: 60%;
    font-family: "glimer-regular", sans-serif;
}
.confidentiality{
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
