<template>
  <section id="home-page">
    <div class="content-general-home">
      <div class="card-home">
        <div>
          <div class="img-card"><img id="img" src="@/assets/locais.png" /></div>
          <div class="titulo-card"><p>LOCAIS</p></div>
        </div>
        <div class="content-button">
          <button @click="$router.push('/locais')" class="btn-home">
            Clique aqui
          </button>
        </div>
      </div>
      <div class="card-home">
        <div>
          <div class="img-card"><img id="img" src="@/assets/dicas.png" /></div>
          <div class="titulo-card"><p>DICAS</p></div>
        </div>
        <div class="content-button">
          <button @click="$router.push('/dicas')" class="btn-home">
            Clique aqui
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.content-general-home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 100px;
  padding: 50px 100px;
  box-sizing: border-box;
}
.card-home {
  background: rgba(0, 0, 0, 0.2);
  max-width: 30%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
}
.titulo-card {
  text-align: center;
  margin-top: 10px;
  font-weight: 800;
  color: #154134;
  font-size: 20px;
}
.img-card {
  width: 200px;
  height: 200px;
}
.content-button {
  width: 100%;
  height: auto;
}
.btn-home {
  padding: 15px 0px;
  margin-top: 20px;
  border-radius: 13px;
  font-size: 1.6rem;
  height: unset;
}
</style>