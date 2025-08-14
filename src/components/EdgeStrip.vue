<template>
  <div :style="stripStyle" class="edge-strip">
    <div class="strip-left">
      <button class="icon-button" @click="navigate">
        <img :src="arrow" alt="Next" class="counter" />
      </button>
    </div>
    <div class="strip-center">{{ centerText }}</div>
    <div class="strip-right">{{ rightText }}</div>
  </div>
</template>

<script>
import arrow from '../../res/Icons/arrow.svg'
import {useRouter} from 'vue-router'

export default {
  name: 'EdgeStrip',
  props: {
    centerText: { type: String, required: true },
    rightText: { type: String, required: true },
    to: String,
    background: { type: String, default: '#f6fff6' },
    color: { type: String, default: '#222' },
    scrollToContact: { type: Boolean, default: false },
  },
  setup(props){
    const router = useRouter()
    const navigate = () => {
      if (props.scrollToContact) {
        // Scroll to contact form
        const element = document.querySelector('#contactform');
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (element.offsetHeight / 2);
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else if (props.to) {
        router.push(props.to)
      }
    }
    return { arrow, navigate }
  },
  computed: {
    stripStyle() {
      return {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: this.background,
        color: this.color,
        padding: '8px 24px',
        boxSizing: 'border-box',
        flexWrap: 'wrap',
      };
    },
  },
  data(){return{
    arrow,
  }}
};
</script>

<style scoped>
.edge-strip {
  width: 100%;
  opacity: 0.8;
  font-family: "Bitter", serif;

  mask-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0));
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}

.strip-left {
  flex: 1;
  display: flex;
  align-items: center;
}

.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.icon-button:hover img {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

.icon-button:focus {
  outline: none;
}

.counter {
  height: 3em;
  margin-left: 1rem;
}

.strip-center {
  font-weight: bold;
  text-align: left;
  flex: 2;
  padding-left: 5rem;
}
.strip-right {
  text-align: left;
  flex: 1;
  justify-content: start;
}
</style>