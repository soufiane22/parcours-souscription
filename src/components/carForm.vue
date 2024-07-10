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
            />
            <input type="text" name="model" id="model" placeholder="Modèle :" />
            <input
              type="text"
              name="marque"
              id="model"
              placeholder="Marque :"
            />
            <input
              type="text"
              name="registration"
              id="registration"
              placeholder="Immatriculation :"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carForm",
  props: {
    msg: String,
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
