<template>
  <div>
    <div class="title-page">
    <h2>VIDRO</h2>
</div>
<div class="row">
   <div class="column">
    <button class="collapsible" @click="toggleContent">BARREIRO</button>
    <div class="content">
      <p>ADEMAR MALDONADO: av. Afonso Vaz de Melo com rua Risoleta Fernandes, próximo ao Habib's - Praça Geraldo Mansur</p>
      <p>BARREIRO DE BAIXO: rua Vicente de Azevedo, 301 - área interna da Gelu Barreiro</p>
      <p>LINDEIA: av. Flor de Seda, próximo ao nº 941</p>
      <p>PONGELUPE: rua Augusto Degois, entre as ruas W-4 e Nelson de Paula Pires </p>
      <p>TIROL: rua Bráulio Gomes Nogueira, próximo ao nº 835</p>
    </div>

    <button class="collapsible" @click="toggleContent">CENTRO-SUL</button>
    <div class="content">
      <p>BH Recicla é Rua dos Angelins 10 - Belo Horizonte - MG, 30510-790</p>
    </div>

    <button class="collapsible" @click="toggleContent">LESTE</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>

    <button class="collapsible" @click="toggleContent">NORDESTE</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>

    <button class="collapsible" @click="toggleContent">NORTE</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>

    <button class="collapsible" @click="toggleContent">OESTE</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>

    <button class="collapsible" @click="toggleContent">PAMPULHA</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>

    <button class="collapsible" @click="toggleContent">LESTE</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>

    <button class="collapsible" @click="toggleContent">VENDA NOVA</button>
    <div class="content">
      <p>Conteúdo 3</p>
    </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleContent(event) {
      event.target.classList.toggle("active");
      var content = event.target.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
  }
}
</script>

<style>
.content {
  display: none;
  padding: 10px;
}
button.collapsible {
  display: block;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  text-align: left;
  color: black;
}

button.collapsible:before {
  content: "▶";
  color: black;
  margin-right: 5px;
}
button.collapsible.active:before {
  content: "▼";
}
</style>