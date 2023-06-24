<template>
  <div id="app" class="app-container">
    <form>
      <div class="form-row">
        <div class="form-field">
          <label for="username">Nome:</label>
          <input type="text" id="username" name="username" v-model="username">
        </div>
      </div>
      <div class="form-row">
        <div class="form-field">
          <label for="birthdate">Data de Nascimento:</label>
          <input type="text" id="birthdate" name="birthdate" v-model="birthdate">
        </div>
      </div>
      <div class="form-field">
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" v-model="cpf">
      </div>
      <div class="form-field">
        <label for="city">Cidade:</label>
        <input type="text" id="city" name="city" v-model="city">
      </div>
      <div class="form-field">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" v-model="email">
      </div>
      <div class="form-field">
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <br>
      <button class="submit-button" @click="submitForm">Cadastrar</button>
    </form>
    <div class="footer">
      <!-- Conteúdo do rodapé -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      birthdate: '',
      cpf: '',
      city: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Adicione aqui o código para lidar com o envio do formulário
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh; /* Ocupa 100% da altura da janela */
  margin-bottom: -20px; /* Diminui o espaço após o rodapé */
  margin-top: 20px; /* Adiciona uma margem superior */
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0; /* Remove a margem inferior */
}

.form-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input {
  width: 400px; /* Ajuste o tamanho dos campos conforme necessário */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px; /* Arredonda as bordas */
  background-color: #f2f2f2; /* Define a cor de fundo para cinza */
}

.submit-button {
  width: 420px; /* Ajuste a largura do botão para corresponder ao tamanho dos campos */
  padding: 10px;
  border: none;
  border-radius: 10px; /* Arredonda as bordas */
  background-color: #154134; /* Define a cor de fundo para cinza */
  cursor: pointer;
  margin-bottom: 10px; /* Adiciona um espaçamento entre o botão e o link */
}

.footer {
  /* Estilos para o rodapé */
}
</style>
