<template>
  <div>
    <div class="title-page">
      <h2>Locais</h2>
      <p>Selecione a opção de acordo com o lixo que deseja descartar:</p>
    </div>
    <section id="page">
      <div class="content-general">
        <div class="card-trash">
          <div class="img-card-trash">
            <img id="img" src="@/assets/vidro.png" />
          </div>
          <button @click="$router.push('/vidro-locais')" class="btn-tash">
            Clique Aqui
          </button>
        </div>
        <div class="card-trash">
          <div class="img-card-trash">
            <img id="img" src="@/assets/plastico.png" />
          </div>
          <button @click="$router.push('/plastico')" class="btn-tash">
            Clique Aqui
          </button>
        </div>
        <div class="card-trash">
          <div class="img-card-trash">
            <img id="img" src="@/assets/papel.png" />
          </div>
          <button @click="$router.push('/papel-locais')" class="btn-tash">
            Clique Aqui
          </button>
        </div>
        <div class="card-trash">
          <div class="img-card-trash">
            <img id="img" src="@/assets/metal.png" />
          </div>
          <button @click="$router.push('/metal')" class="btn-tash">
            Clique Aqui
          </button>
        </div>
        <div class="card-trash">
          <div class="img-card-trash">
            <img id="img" src="@/assets/eletronicos.png" />
          </div>
          <button @click="$router.push('/eletronico')" class="btn-tash">
            Clique Aqui
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>

</style>