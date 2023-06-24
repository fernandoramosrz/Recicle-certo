<template>
  <div class="content-general-vidro">
    <div class="title-page"><h2>Vidro</h2></div>
    <h4>
      O vidro deve ser embalado em material resistente antes de ser encaminhado
      para a coleta seletiva para diminuir os riscos de acidentes.
    </h4>
    <div class="row">
      <div class="column">
        <h3>São vidros recicláveis:</h3>
        <p>• Frascos e potes;</p>
        <p>• Garrafas de cerveja;</p>
        <p>• Garrafas de refrigerante;</p>
        <p>• Garrafas de água e bebidas em geral;</p>
        <p>• Copos;</p>
        <p>• Vidros planos e lisos.</p>
      </div>
      <div class="column">
        <h3>Não deve descartar nos pontos de coleta:</h3>
        <p>• Espelhos;</p>
        <p>• Cerâmica;</p>
        <p>• Tubos de TV;</p>
        <p>• Vidros temperados;</p>
        <p>• Lâmpadas de LED e fluorescentes.</p>
      </div>
    </div>
    <div class="observacao">
      <h3>
        OBS: Todos os materiais separados para a coleta seletiva devem estar
        limpos e secos, para evitar mau cheiro e não atrair animais e vetores de
        doenças.
      </h3>
    </div>
    <div class="img-trash-vidro">
      <img id="img" src="@/assets/vidro.png" />
    </div>
  </div>
</template>
<style>
.content-general-vidro h3 {
  font-weight: 800;
}
.content-general-vidro div.observacao {
  position: fixed;
  bottom: 30px;
  z-index: 1;
  left: 60px;
  margin-right: 200px;
}
.img-trash-vidro {
  position: fixed;
  bottom: 30px;
  right: 5px;
  z-index: 1;
  max-height: 200px;
  max-width: 130px;
}
.content-general-vidro h4 {
  margin-left: 60px;
}
.column {
  width: 50%;
}
.row {
  display: flex;
  column-gap: 50px;
  margin-left: 60px;
}
</style>