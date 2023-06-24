<template>
  <div id="general-content">
    <div id="text" class="principal">
      <h4>Quem somos:</h4>
      <p>
        Nós desenvolvemos este aplicativo com a finalidade de ajudar as pessoas
        a reciclarem de forma correta e consciente. Com a nossa plataforma, é
        possível encontrar em Belo Horizonte-MG pontos de coletas de materiais
        recicláveis e eletrônicos, além de informações úteis sobre como separar
        e descartar corretamente. Estamos comprometidos com a preservação do
        meio ambiente e a educação ambiental, e acreditamos que pequenas
        atitudes podem fazer uma grande diferença.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quem Somos",
  components: {},
};
</script>
<style>
#general-content{
  padding: 50px;
  height: 100%;
  width: 100%;
}
.principal {
  background: rgba(30, 30, 30, 0.19);
  border: 1px solid #000000;
  height: 100%;
}
#text {
  color: #154134;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-align: center;
}
</style>