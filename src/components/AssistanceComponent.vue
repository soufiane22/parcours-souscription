<template>

    <div class="card_content">

      <img src="../assets/Images/Titre.png" alt="logo" class="img-fluid"/>
       <p>
        Chez <span class="colored_text">Tutassur</span>,
         rien de plus simple pour vous assurer.
          Il vous suffit de nous <b>envoyer ces quelques informations</b> 
          et nous nous chargeons du reste !
       </p>
       <img src="../assets//Images/Personnage_reflexion.png" alt="person" class="img-fluid">
       <p>
        Ne vous inquiétez pas, le processus est simple et se déroulera en deux étapes rapides.
       </p>
       <img src="../assets/Images/Presentation_etape.png" alt="stapes" class="img-fluid">

    </div>
</template>

<script>
export default {
  name: 'AssistanceComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.card_content {
  width: 65%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

p{
  font-family: 'glimer-regular', sans-serif;
  margin-top: 1rem;
}
.colored_text{
  color:#6D4AE7 ;
  font-weight: 700;
}

@media screen and (max-width: 991px) {
  :root{
    font-size: 12px;
  }
}

</style>