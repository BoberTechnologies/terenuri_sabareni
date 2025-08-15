<template>
  <div class="about-page">
    <div class="hero-section">
      <BackgroundCard
          title=""
          text=""
          :background="bg"
          width="100%"
          height="100vh"
          :fade-stops="[
          'rgba(0,0,0,1) 80%',
          'rgba(0,0,0,0) 100%'
        ]"
      />
      <div class="content-container">
        <div class="title-content">
          <h1 class="title">Despre proiect</h1>
        </div>
        <div class="text-content">
          <h2 class="subtitle">O comunitate în dezvoltare, aproape de natură și oraș</h2>
          <p class="paragraph">
            Complexul nostru imobiliar este format din loturi de teren cu utilități (gaze, curent) și drumuri amenajate, situate la doar 400m de pădurea Cereanca și la distanță rezonabilă de București, cu acces facil la DN7, A1 și viitoarea A0. 
          </p>
          <p class="paragraph">
            Investițiile semnificative în infrastructură, obținerea autorizațiilor și extinderea rețelelor de utilități diferențiază acest proiect de alte oferte din zonă. 
          </p>
          <p class="paragraph">
            Parcelele respectă normele urbanistice și permit obținerea rapidă a autorizației de construire. Proiectarea și execuția rețelelor au durat 18 luni, astfel încât tu să poți construi fără griji, beneficiind de suport complet pentru autorizații, echipe de construcții și branșamente. 
          </p>
          <h3 class="subtitle" style="margin-top: 5vh;">
            Vizitează terenul și descoperă avantajele unei investiții sigure într-o comunitate modernă, aproape de natură și oraș.
          </h3>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bg from "../../res/about/img9.jpeg";
import BackgroundCard from "@/components/BackgroundCard.vue";

export default {
  name: 'AboutPage',
  components: {BackgroundCard},
  computed: {
    bg() {
      return bg
    }
  },
};
</script>

<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
}
.hero-section {
  position: relative;
  height: 100vh;
}
.content-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  pointer-events: none;
}
.title-content {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
.text-content {
  display: block;
  position: absolute;
  top: 20%;
  left: 5%;
  width: 90%;
  max-height: 100%;
  text-align: left;
  pointer-events: auto;
}
.about-content {
  background-color: #f8f8f8;
  color: #333;
  padding: 50px 20px;
}
.about-section {
  max-width: 800px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
}

@media (orientation: portrait) {
  .text-content {
    width: 90%;
    left: 5%;
    top: 40%;
    transform: translateY(-50%);
    max-height: 40%;
  }
}
</style>