<template>
  <div>
    <button v-if="!isOpen" class="burger-btn" @click="toggleMenu">
      <span class="burger-icon">&#9776;</span>
    </button>
    <transition name="drawer-fade">
      <div v-if="isOpen" class="drawer-overlay" @click.self="toggleMenu">
        <nav class="drawer-menu" :class="{ 'drawer-fade-leave-active': !isOpen }">
          <button class="arrow-btn-inside" @click="toggleMenu">
            <span class="material-symbols-outlined">➜</span>
          </button>
          <div class="drawer-links">
            <template v-for="link in links">
              <router-link
                  v-if="link.label !== 'Contact'"
                  :key="link.label"
                  :to="link.to"
                  class="drawer-link"
                  :class="{ 'active-link': $route.path === link.to }"
                  @click.native="toggleMenu"
                  :tabindex="$route.path === link.to ? -1 : 0"
                  :aria-disabled="$route.path === link.to ? 'true' : 'false'"
              >
                {{ link.label }}
              </router-link>
              <a
                  v-else
                  :key="'contact-link'"
                  href="#"
                  class="drawer-link"
                  @click.prevent="handleContactClick"
              >
                {{ link.label }}
              </a>
            </template>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data() {
    return {
      isOpen: false,
      links: [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/plots', label: 'Plots' },
        { to: '/localize', label: 'Localize' },
        { to: '/', label: 'Contact' },
      ],
    };
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleContactClick() {
      this.toggleMenu();
      if (this.$route.path === '/') {
        this.$nextTick(() => {
          const element = document.querySelector('#contactform');
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (element.offsetHeight / 2);
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      } else {
        this.$router.push('/').then(() => {
          // Use a short delay to ensure DOM is rendered
          setTimeout(() => {
            const element = document.querySelector('#contactform');
            if (element) {
              const y = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (element.offsetHeight / 2);
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 400);
        });
      }
    }
  },
  beforeUnmount() {
    document.body.classList.remove('no-scroll');
  }
};
</script>

<style scoped>
.burger-btn {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  z-index: 1201;
}
.burger-icon {
  font-size: 2.2rem;
  color: #116b2f;
  display: block;
  line-height: 1;
  width: 2.5rem;
  height: 2.5rem;
}
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.25);
  z-index: 1200;
  display: flex;
  justify-content: flex-end;
}

.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.2s;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}
.drawer-fade-enter-to,
.drawer-fade-leave-from {
  opacity: 1;
}

.drawer-menu {
  width: 16.25rem;
  height: 100%;
  background: linear-gradient(to bottom left, rgba(35,39,47,1) 40%, rgba(35,39,47,0.0) 100%);
  box-shadow: -0.125rem 0 0.5rem rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  animation: slideIn 0.4s;
}
.drawer-fade-leave-active .drawer-menu {
  animation: slideOut 0.4s forwards;
}

.arrow-btn-inside {
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  z-index: 1300;
  padding: 0;
  margin: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.material-symbols-outlined {
  font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-weight: normal;
  vertical-align: middle;
  color: #116b2f;
}
.drawer-links {
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
}
.drawer-link {
  margin: 0.75rem 0;
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding-left: 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
}
.drawer-link:hover {
  font-weight: bold;
  color: #116b2f;
  padding-left: 0;
}
.drawer-link.active-link {
  font-weight: bold;
  color: #116b2f;
  padding-left: 0;
  pointer-events: none;
  cursor: default;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
@keyframes slideOut {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}
</style>
<style>
.no-scroll {
  overflow: hidden !important;
  height: 100vh !important;
}
</style>
