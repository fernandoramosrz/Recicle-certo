<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
body {
  padding: 0;
  margin: 0;
}
main {
  height: calc(100vh - 164px);
  width: 100%;
}
div {
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
p {
  margin: 0;
  padding: 0;
}
.title-page h2 {
  font-size: 36px;
  color: #154134;
  font-weight: 800;
  margin: 0;
  margin-left: 60px;
}
.title-page p {
  color: #154134;
  font-size: 22px;
  text-align: center;
  font-weight: 800;
}
button:hover {
  transform: scale(1.1);
}
button {
  border-radius: 20px;
  background: #154134;
  border: none;
  color: white;
  width: 100%;
  height: 32px;
  transition: all 0.3s;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  border: none;
}

/*css dicas e locais*/
.btn-tash {
  border-radius: 20px;
  background: #154134;
  border: none;
  color: white;
  width: 100%;
  height: 32px;
}

.content-general {
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  column-gap: 100px;
}
.card-trash {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
}
.img-card-trash {
  display: block;
  max-width: 100%;
  height: 90%;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
}

.spin-content {
  animation: spin 60s linear infinite;
}
</style>
