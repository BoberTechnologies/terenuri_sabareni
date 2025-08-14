<template>
  <div class="home-container">
    <BackgroundCard
        :background="homeImage"
        title="Bine ai venit in Sabareni"
        text="Descoperă terenuri disponibile și informații utile despre zonă."
        width="100%"
        height="100%"
        :fade-stops="[
    'rgba(0,0,0,1) 0%',
    'rgba(0,0,0,0.9) 70%',
    'rgba(0,0,0,0.7) 80%',
    'rgba(0,0,0,0) 100%']"
    />
  </div>

  <div class="carousel">
    <Carousel :images="homeImages"/>
  </div>

  <div class="section-content">
    <div class="section-image">
      <BackgroundCard title="Dezvoltare imobiliara"
                      text="Loturi cu utilități, drum amenajat și autorizații. Acces rapid spre București."
                      :background="harta"
                      height="100%"
                      width="100%"
                      :fade-stops=" [
    'rgba(0,0,0,0) 0%',
    'rgba(0,0,0,1) 20%',
    'rgba(0,0,0,1) 80%',
    'rgba(0,0,0,0) 100%']"
      />
    </div>
    <p>Parcelele respectă normele urbanistice și permit obținerea rapidă a autorizației de construire.</p>
  </div>

  <div class="strips-content">
    <EdgeStrip right-text="Află mai multe despre proiect" center-text="Despre" to="/about"/>
    <EdgeStrip right-text="Vezi lista terenurilor disponibile" center-text="Terenuri" to="/plots"/>
    <EdgeStrip right-text="Descoperă localizarea pe hartă" center-text="Localizare" to="localize"/>
    <EdgeStrip right-text="Contactează-ne rapid" center-text="Contact" scroll-to-contact/>
  </div>

  <div class="filler-content">
    <div class="filler-image">
      <BackgroundCard
          title="Proiectare și utilități finalizate"
          text="Rețelele de gaze și electricitate sunt deja realizate. Cumpără și construiește fără griji!"
          width="100%"
          height="100%"
          :background="img7"
          :fade-stops="[
        'rgba(0,0,0,1) 0%',
        'rgba(0,0,0,1) 100%'
      ]"
      />
    </div>
  </div>

  <div class="pop-images">
    <ImageCard :image="house_black" class="pop-image">
      <template #title>Expertiză completă</template>
      <template #paragraph>Te ajutăm cu autorizații, echipe de construcții și utilități. Vizitează terenul și vezi diferența!</template>
    </ImageCard>
    <ImageCard :image="house_blue" class="pop-image">
      <template #title>Accesibilitate și locație</template>
      <template #paragraph>Terenuri aproape de pădure și cu acces rapid la București.</template>
    </ImageCard>
    <ImageCard :image="house_yellow" class="pop-image">
      <template #title>Urbanism și autorizații</template>
      <template #paragraph>Parcelele respectă normele urbanistice și permit autorizație rapidă.</template>
    </ImageCard>
  </div>

  <div class="form-class" >
    <BackgroundCard
        title=""
        text=""
        :background="stair_left"
        width="50%"
        height="100%"
        :fade-stops="[
        'rgba(0,0,0,1) 0%',
        'rgba(0,0,0,1) 100%'
      ]"/>
    <BackgroundCard
        title=""
        text=""
        :background="stair_right"
        width="50%"
        height="100%"
        :fade-stops="[
        'rgba(0,0,0,1) 0%',
        'rgba(0,0,0,1) 100%'
      ]"/>
    <ContactForm class="contact-form" id="contactform"/>
  </div>

</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  BackgroundCard,
  Carousel,
  EdgeStrip,
  ContactForm,
  ImageCard,
  homeImage,
  img6,
  img7,
  homeImages,
  house_black,
  house_blue,
  house_yellow,
  stair_left,
  stair_right,
  harta
} from '../imports//homeImports.js'

const route = useRoute();

function scrollToContactForm() {
  const element = document.querySelector('#contactform');
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (element.offsetHeight / 2);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

onMounted(() => {
  if (route.query.contact) {
    setTimeout(scrollToContactForm, 350);
  }
});

watch(
  () => route.query.contact,
  (val) => {
    if (val) setTimeout(scrollToContactForm, 350);
  }
);
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  height: 100vh;
  text-align: center;
  background: rgba(255, 255, 255, 0);
}

.carousel{
  margin-top: 25vh;
  margin-bottom: 25vh;
}

.section-content {
  display: flex;
  width: 100%;
  height: 100%; /* make sure container fills viewport height */
}

.section-content p{
  flex: 1;
  align-self: center;
  text-align: center;
  justify-content: center;
  display: flex;
}

.section-image {
  height: 100vh;
  width: 50vw;
  flex-shrink: 0; /* don't shrink the image container */
  background: rgba(255, 255, 255, 0.1);
}

.strips-content{
  margin-top: 10vh;
}

.filler-image {
  width: 100%;
  height: 50vh;
  /* Make this a flex container as well to center the card inside if needed */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  overflow: hidden;
}

.pop-images{
  margin-top: 20vh;
  display: flex;
  overflow-x: hidden;
  width: 100%;
  gap: 15vw;
  align-items: center;
  justify-content: center;
}

.pop-image{
  align-self: flex-start;
  width: 12vw;
}

.form-class {
  display: flex;
  width: 100%;
  min-height: 45rem; /* Replaced fixed vh with a flexible min-height in rem */
  position: relative; /* To position form absolutely */
  margin-top: 10vh;
  flex-wrap: nowrap; /* default: no wrap */
  height: 160vh;
}

.form-class > *:not(.contact-form) {
  flex: 1; /* Make each BackgroundCard take half the width */
}

/* Position contact form centered above backgrounds */
.contact-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; /* Above background cards */
}

@media (orientation: portrait) {
  .section-image {
    width: 100vw;
    height: 40vh;
  }
  .section-content{
    display: block;
  }
  .section-content p{
    display: inline-block;
    margin-top: 5vh;
  }
  .filler-image {
    width: 100vw;
  }
  .pop-images {
    flex-direction: column;      /* stack vertically */
    gap: 5vh;                    /* vertical gap between cards */
  }
  .pop-image {
    align-self: center;
    width: 40vw;                 /* 40% of viewport width */
  }
  .form-class {
    flex-direction: column !important;
    min-height: 100%; /* Let the content determine the height */
    overflow: hidden;
  }
  .form-class > *:not(.contact-form) {
    flex: none;
    width: 100% !important;
    height: 100% !important; /* half viewport height */
    margin: 0; /* remove any margin */
    padding: 0; /* remove any padding */
    box-sizing: border-box;
  }

  /* Keep the contact form positioned in the middle */
  .contact-form {
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
