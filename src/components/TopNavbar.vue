<template>
  <nav class="top-navbar">
    <h3 @click="$router.push('/')" style="cursor:pointer">Terenuri Sabareni</h3>

    <slot />
  </nav>
</template>

<script>
export default {
  name: 'TopNavbar',
};
</script>

<style scoped>
.top-navbar {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, rgba(35,39,47,0.7) 0%, rgba(35,39,47,0.0) 30%, rgba(35,39,47,0.0) 60%, rgba(35,39,47,0.5) 100%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

h3{
  color: white;
  font-size: 1.3rem;
}
</style>
