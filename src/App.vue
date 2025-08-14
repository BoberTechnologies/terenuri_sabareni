<script setup>
import TopNavbar from './components/TopNavbar.vue';
import BurgerMenu from './components/BurgerMenu.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <TopNavbar />
  <BurgerMenu />
  <div class="container">
    <router-view />
  </div>
  <FooterBar />
</template>

<style>
:root {
  /* Font families */
  --font-heading: 'Bitter', serif;
  --font-title: 'Montserrat', sans-serif;
  --font-subtitle: 'Josefin Sans', sans-serif;
  --font-paragraph: 'Merriweather', serif;

  /* Font sizes */
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --font-size-title: 2.2rem;
  --font-size-subtitle: 1.3rem;
  --font-size-paragraph: 1rem;

  /* Font weights */
  --font-weight-heading: 700;
  --font-weight-title: 600;
  --font-weight-subtitle: 500;
  --font-weight-paragraph: 400;
}

html, body {
  font-family: var(--font-paragraph);
  font-size: 16px;
  color: #222;
  background: #fff;
  margin: 0;
  padding: 0;
}

body, input, button, textarea, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-heading);
  margin: 0 0 0.5em 0;
}
h2 {
  font-family: var(--font-title);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-title);
  margin: 0 0 0.5em 0;
}
h3 {
  font-family: var(--font-subtitle);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-subtitle);
  margin: 0 0 0.5em 0;
}
.subtitle, .image-title {
  font-family: var(--font-subtitle);
  font-size: var(--font-size-subtitle);
  font-weight: var(--font-weight-subtitle);
  margin: 0 0 0.5em 0;
}
.title, .contactus-head {
  font-family: var(--font-title);
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-title);
  margin: 0 0 0.5em 0;
}
.paragraph, p, li, a, span, label, .image-paragraph {
  font-family: var(--font-paragraph);
  font-size: var(--font-size-paragraph);
  font-weight: var(--font-weight-paragraph);
  margin: 0 0 1em 0;
}

/* Remove all text styling from components/pages, use only these classes */
.container {
  min-height: 80vh;
}
</style>
