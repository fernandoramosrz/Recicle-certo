<template>
  <div>
    <div class="title-page">
    <h2>PAPEL</h2>
</div>
<div class="row">
   <div class="column">
    <button class="collapsible" @click="toggleContent">BARREIRO</button>
    <div class="content">
      <p>ADEMAR MALDONADO: av. Afonso Vaz de Melo com rua Risoleta Fernandes, próximo ao Habib's - Praça Geraldo Mansur</p>
      <p>BARREIRO DE BAIXO: rua Vicente de Azevedo, 301 - área interna da Gelu Barreiro</p>
    </div>

    <button class="collapsible" @click="toggleContent">CENTRO-SUL</button>
    <div class="content">
      <p>CENTRO: av. Afonso Pena, 1.377 - Parque Municipal Américo Renné Giannetti</p>
    </div>

    <button class="collapsible" @click="toggleContent">LESTE</button>
    <div class="content">
      <p>SANTA INÊS: rua Gustavo da Silveira, 2.000, próximo à portaria da empresa CSEM Brasil</p>
    </div>

    <button class="collapsible" @click="toggleContent">NORDESTE</button>
    <div class="content">
      <p>CACHOEIRINHA: rua Simão Tamm, próximo ao número 317 - atrás da antiga fábrica de tecidos</p>
    </div>

    <button class="collapsible" @click="toggleContent">NORTE</button>
    <div class="content">
      <p>AARÃO REIS: rua Rubens de Souza Pimentel, próximo à rotatória - em frente ao Parque Nossa Senhora da Piedade</p>
    </div>

    <button class="collapsible" @click="toggleContent">OESTE</button>
    <div class="content">
      <p>ESTORIL: rua Nilo Antônio Gazire, 147 - área interna do Cemar</p>
    </div>

    <button class="collapsible" @click="toggleContent">PAMPULHA</button>
    <div class="content">
      <p> av. Antônio Francisco Lisboa - lado oposto ao nº 155</p>
    </div>

    <button class="collapsible" @click="toggleContent">VENDA NOVA</button>
    <div class="content">
      <p>JARDIM EUROPA: av. Vilarinho com av. Liege, 10 - área interna da Gelu Venda Nova</p>
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