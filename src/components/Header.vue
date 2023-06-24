<template>
  <header>
    <div class="logo"><img id="logo" src="@/assets/logo.png" /></div>
    <div class="nav-general">
      <nav>
        <router-link to="/">Início</router-link>
        <router-link to="/quemSomos">Quem Somos</router-link>
        <router-link to="/faleConosco">Fale Conosco</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  //props: ["logo","alt"]
};
</script>
<style>
header {
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #154134;
  border-bottom: 4px solid #111;
}
.nav-general {
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
}
nav {
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 10vw;
  margin-bottom: 20px;
}
.nav-general a {
  display: flex;
  align-items: flex-end;
  border: unset;
  flex-grow: 1;
  height: 100%;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 30px;
  font-family: sans-serif;
  font-style: normal;
}

nav a:hover {
  transform: scale(1.1);
  color: #47d7ac;
}
.logo {
  width: 120px;
  min-width: 120px;
  height: 120px;
  margin: 10px;
  margin-right: 5vw;
  display: flex;
  align-items: center;
}
</style>