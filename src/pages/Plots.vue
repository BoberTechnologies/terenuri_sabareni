<template>
  <div class="about-page">
    <!-- HERO -->
    <div class="hero-section">
      <BackgroundCard
          title=""
          text=""
          :background="Street"
          width="100%"
          height="100vh"
          :fade-stops="[
          'rgba(0,0,0,1) 50%',
          'rgba(0,0,0,0) 100%'
        ]"
      />
      <div class="content-container">
        <div class="title-content">
          <h1 class="title">Terenuri de vânzare în Săbăreni</h1>
        </div>
        <div class="text-content">
          <h2 class="subtitle">Alege locul potrivit pentru casa ta sau pentru investiție</h2>
          <p class="paragraph">
            Descoperă oferta noastră de loturi cu suprafețe variate, situate în zone cu acces facil la utilități și infrastructură modernă.</p>
          <p class="paragraph">
            Fiecare parcelă respectă normele urbanistice și beneficiază de suport complet pentru obținerea autorizațiilor și branșamentelor. Consultă detaliile fiecărui teren și alege soluția potrivită pentru planurile tale.
          </p>
        </div>
      </div>
    </div>

    <!-- PRICE CAROUSEL SECTION -->
    <h2 class="carousel-heading">Terenuri disponibile</h2>

    <div class="teren1">
      <div class="section-content">
        <div class="section-image">
          <BackgroundCard title="Teren 1 - Strada Frasinului"
                          text="Terenuri cu suprafata utila de 400mp si cota de drum. Teren fara utilitati, sunt in lucru extinderea retelei de gaze si extinderea retelei electrice. Retelele de apa si canalizare sunt in faza de proiectare si avizare pe teritoriul comunei Sabareni."
                          :background="teren1_pret"
                          height="100%"
                          width="100%"
                          :fade-stops=" [
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,1) 25%',
          'rgba(0,0,0,1) 75%',
          'rgba(0,0,0,0) 100%']"
          />
        </div>
        <p>Pret de la 26€/mp</p>
      </div>
      <section class="carousel-section">
        <PriceCarousel :cards="cardData1" />
      </section>
    </div>

    <div class="teren2">
      <div class="section-content">
        <div class="section-image">
          <BackgroundCard title="Teren 2 - Strada Cereanca"
                          text="Terenuri cu suprafata utila de 400mp si cota de drum de 80,16mp | Teren cu utilitati: retea de gaze adusa la teren. Retelele de apa si canalizare sunt in faza de proiectare si avizare pe teritoriul comunei Sabareni."
                          :background="teren2_pret"
                          height="100%"
                          width="100%"
                          :fade-stops="[
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,1) 25%',
          'rgba(0,0,0,1) 75%',
          'rgba(0,0,0,0) 100%']"
          />
        </div>
        <p>Pret de la 28€/mp</p>
      </div>
      <section class="carousel-section">
        <PriceCarousel :cards="cardData2" />
      </section>
    </div>

    <div class="teren3">
      <div class="section-content">
        <div class="section-image">
          <BackgroundCard title="Teren 3 - Strada Salciei"
                          text="Terenuri cu suprafata utila de 400mp. Teren cu utilitati: retea electrica subterana existenta la teren, extinderea retelei de gaze este in lucru pe aceasta strada. Retelele de apa si canalizare sunt in faza de proiectare si avizare pe teritoriul comunei Sabareni."
                          :background="teren3_pret"
                          height="100%"
                          width="100%"
                          :fade-stops="[
          'rgba(0,0,0,0) 0%',
          'rgba(0,0,0,1) 25%',
          'rgba(0,0,0,1) 75%',
          'rgba(0,0,0,0) 100%']"
          />
        </div>
        <p>Pret de la 43€/mp</p>
      </div>
      <section class="carousel-section">
        <PriceCarousel :cards="cardData3" />
      </section>
    </div>


  </div>
</template>

<script>
import {
  Street,
  teren1_pret,
  teren2_pret,
  teren3_pret,
  BackgroundCard,
  PriceCarousel } from "@/imports/plotsImports.js";

export default {
  name: 'PlotsPage',
  components: { PriceCarousel, BackgroundCard },
  data() {
    return {
      Street: Street,
      teren1_pret: teren1_pret,
      teren2_pret: teren2_pret,
      teren3_pret: teren3_pret,
      cardData1: [
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        {  image: Street, value: "26", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
      ],
      cardData2: [
        { image: Street, value: "28", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "28", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "28", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
      ],
      cardData3: [
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
        { image: Street, value: "43", tooltip: "Prețurile sunt ușor negociabile în funcție de numărul de loturi achiziționate, modalitatea și rapiditatea plății. Se pot încheia precontracte cu plata unui avans pentru achiziție ulterioară." },
      ],
    }
  },
};
</script>

<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* HERO */
.hero-section {
  position: relative;
  height: 100vh;
}

.content-container {
  position: absolute;
  inset: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  pointer-events: none;
}

.title-content {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.title {
  font-size: 4rem;
  margin: 0;
  pointer-events: auto;
}

.text-content {
  position: absolute;
  top: 40%;
  left: 5%;
  width: 90%;
  max-height: 100%;
  text-align: left;
  pointer-events: auto;
}

.subtitle {
  font-size: 2rem;
  margin-bottom: 10px;
}

.paragraph {
  font-size: 1rem;
  line-height: 1.6;
}

/* PRICE CAROUSEL SECTION */
.carousel-section {
  position: relative;
  padding: 3rem 0;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.carousel-heading {
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
  font-size: 2rem;
  color: #333;
}

.section-image {
  height: 50vh;
  width: 50vw;
  flex-shrink: 0; /* don't shrink the image container */
  background: rgba(255, 255, 255, 0.1);
}
.section-content {
  display: flex;
  width: 100%;
  height: 100%; /* make sure container fills viewport height */
}

.section-content p{
  flex: 1;
  font-size: 1.2rem;
  align-self: center;
  text-align: center;
  justify-content: center;
  display: flex;
}

@media (orientation: portrait) {
  .title {
    font-size: 2.5rem;
  }
  .text-content {
    width: 90%;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    max-height: 40%;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .paragraph {
    font-size: 0.9rem;
  }
  .section-image {
    width: 100vw;
    height: 40vh;
  }
  .section-content{
    display: block;
  }
  .section-content p{
    display: inline-block;
  }
}
</style>
