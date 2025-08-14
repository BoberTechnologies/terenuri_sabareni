<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-left">
        <div class="company">Terenuri sabareni</div>
        <div class="contact">Contact: info@example.com<br/>Phone: 0123-456-789</div>
      </div>
      <div class="footer-right">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/plots">Plots</router-link>
        <router-link to="/localize">Localize</router-link>
      </div>
    </div>
    <div class="footer-bottom">
      <span>powered by</span>
      <a href="https://b-tech.ro/" target="_blank" rel="noopener noreferrer">
        <img src="../../res/bTech.png" alt="Powered by logo" class="powered-by-logo">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>

<style scoped>
.footer {
  width: 100%;
  background: #111;
  color: #fff;
  padding: 1.2rem 0 0.4rem 0;
  position: relative;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1.6rem;
}
.footer-left .company {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}
.footer-left .contact {
  font-size: 0.8rem;
  margin-top: 0.2rem;
}
.footer-right {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  margin-top: 0.4rem;
}
.footer-right a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}
.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1.2rem;
  color: #bbb;
  gap: 0.5rem;
}

.footer-bottom span,
.footer-bottom a {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.7rem;
}

.powered-by-logo {
  height: 1rem;
  margin-left: 0.4rem;
  vertical-align: middle;
}

/* Media query for portrait mode on smaller screens */
@media (orientation: portrait) {
  .footer-top {
    justify-content: space-between;
  }
  .footer-left {
    margin-bottom: 0;
  }
  .footer-right {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
    margin-right: 0.5rem;
  }
}
</style>