<template>
  <div class="about-page">
    <div class="hero-section">
      <BackgroundCard
          title=""
          text=""
          :background="stair_right"
          width="100%"
          height="100vh"
          :fade-stops="[
          'rgba(0,0,0,1) 50%',
          'rgba(0,0,0,0) 95%'
        ]"
      />
      <div class="content-container">
        <div class="title-content">
          <h1 class="title">Title Here</h1>
        </div>
        <div class="text-content">
          <h2 class="subtitle">Subtitle Here</h2>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet faucibus enim vitae dignissim. Nulla nec porta dolor, ac feugiat nisi. Vivamus tempor luctus maximus. Aliquam condimentum vel sapien sit amet scelerisque. Donec sed fringilla turpis. Donec eu quam at urna sollicitudin consectetur sed et odio. Integer a lacus augue. Aliquam tristique libero eu justo venenatis, a efficitur nisi tincidunt. Sed vestibulum libero sit amet enim posuere, eget sollicitudin urna finibus. Pellentesque et facilisis nulla. Morbi ante enim, bibendum id dolor nec, consectetur semper risus. Proin nec lacus id justo blandit fermentum. Phasellus odio ligula, interdum rhoncus scelerisque lobortis, posuere in tellus. Nunc porttitor at leo quis scelerisque. Duis fermentum semper tortor hendrerit tristique. Vestibulum suscipit odio vel urna volutpat luctus.
            Donec ultrices elit vel nulla ornare convallis. Donec cursus lorem elit, sit amet fermentum odio porta id. Nulla eget ultrices erat, imperdiet facilisis nisl. Etiam ac euismod lorem, et fringilla tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum maximus aliquet velit, et sagittis nulla accumsan non. Suspendisse blandit consectetur placerat. Vestibulum nec neque sapien. Vestibulum nulla sem, porttitor vel urna eleifend, vulputate interdum quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at felis eget velit dignissim tempor. Duis gravida sit amet lorem ac sollicitudin. Etiam eget ullamcorper felis.
            Sed maximus eros vitae orci facilisis malesuada. Pellentesque eu scelerisque nisi. Maecenas mauris ligula, pharetra ac sagittis eget, sagittis vitae massa. Nam nisl est, sagittis sed neque eu, consectetur tempor lectus. Sed commodo fermentum turpis. Praesent pharetra risus vitae elit suscipit, non lobortis sem mollis. Vestibulum at nunc sit amet justo luctus imperdiet vel a risus. Maecenas turpis sapien, dapibus quis feugiat eu, elementum nec velit. Integer laoreet nisi a erat fermentum porttitor. Nam at urna ut arcu iaculis volutpat eu eget mauris. Sed aliquam lorem nec velit consectetur eleifend. Vivamus vel convallis nunc, sed scelerisque est. Maecenas condimentum ut lorem sit amet mattis.
            Praesent fermentum dapibus nulla, in ultrices urna convallis quis. Vestibulum vel lectus mattis, aliquam tortor non, viverra mi. Nulla tristique ut leo ac mattis. Curabitur mauris erat, commodo id metus ac, efficitur fermentum nisl. Sed euismod lorem non viverra feugiat. Sed porttitor massa at tristique tempus. Donec tincidunt a dui nec consequat. Morbi varius euismod tellus, at rutrum mi dignissim ac.
            Etiam euismod nisi vitae pellentesque sodales. Aenean non lectus non ante semper maximus vitae pulvinar odio. Etiam tristique eget nunc ac ultricies. Mauris condimentum erat ac leo dapibus malesuada. Sed et facilisis massa, sit amet lacinia neque. Praesent ornare leo sed ornare ullamcorper. Cras sed velit eu metus faucibus gravida eleifend sed eros. Mauris sem nunc, viverra sed vehicula non, commodo ut eros. Suspendisse potenti. Sed faucibus a nibh non tristique.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {stair_right} from "@/imports/homeImports.js";
import BackgroundCard from "@/components/BackgroundCard.vue";

export default {
  name: 'AboutPage',
  components: {BackgroundCard},
  computed: {
    stair_right() {
      return stair_right
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
  display: block;
  position: absolute;
  top: 40%; /* Changed from `bottom` to `top` */
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

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .text-content {
    width: 90%;
    left: 5%;
    top: 50%; /* Adjusted for mobile */
    transform: translateY(-50%); /* Center vertically on mobile */
    max-height: 40%;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .paragraph {
    font-size: 0.9rem;
  }
}
</style>