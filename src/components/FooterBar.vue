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
  padding: 24px 0 8px 0;
  position: relative;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 32px;
}
.footer-left .company {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 8px;
}
.footer-left .contact {
  font-size: 0.95em;
  margin-top: 4px;
}
.footer-right {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-top: 8px;
}
.footer-right a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}
.footer-bottom {
  text-align: center;
  margin-top: 24px;
  font-size: 0.95em;
  color: #bbb;
}
</style>
