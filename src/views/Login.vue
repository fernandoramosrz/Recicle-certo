<template>
  <div id="app" class="app-container">
    <form @submit="createLogin">
      <div id="logo-container">
        <img id="logo" src="@/assets/logo.png" />
      </div>
      <div id="username-container">
        <label for="username"></label><br>
        <input type="text" id="username" name="username" v-model="username" placeholder="Digite seu nome de usuário">
      </div>
      <div id="password-container">
        <label for="password"></label><br>
        <input type="password" id="password" name="password" v-model="password" placeholder="Digite sua senha">
      </div>
      <br>
      <button class="submit-button" type="submit">Acessar</button>
      <router-link to="/cadastre-se">Toque aqui para se cadastrar</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    /*async createLogin(e) {
      e.preventDefault();

      const data = {
        username: this.username,
        password: this.password,
      };

      const dataJson = JSON.stringify(data);

      try {
        const response = await fetch("http://localhost:3000/logins", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson
        });

        if (response.ok) {
          const res = await response.json();
          console.log(res);
          // Limpar campos
          this.username = "";
          this.password = "";
        } else {
          console.log("Ocorreu um erro ao fazer login.");
        }
      } catch (error) {
        console.log("Ocorreu um erro ao fazer login:", error);
      }
    }*/
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa 100% da altura da janela */
  margin-bottom: -20px; /* Diminui o espaço após o rodapé */
}

#logo-container {
  text-align: center;
  margin-bottom: 20px;
}

#logo {
  width: 100px; /* Ajuste o tamanho da logo conforme necessário */
}

#username-container {
  text-align: center;
  margin-bottom: 10px;
}

#password-container {
  text-align: center;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#username,
#password {
  width: 300px; /* Ajuste o tamanho dos campos conforme necessário */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px; /* Arredonda as bordas */
  background-color: #f2f2f2; /* Define a cor de fundo para cinza */
}

.submit-button {
  width: 300px; /* Ajuste a largura do botão para corresponder ao tamanho dos campos */
  padding: 10px;
  border: none;
  border-radius: 10px; /* Arredonda as bordas */
  background-color: #154134; /* Define a cor de fundo para cinza */
  cursor: pointer;
  margin-bottom: 10px; /* Adiciona um espaçamento entre o botão e o link */
}

.redirect-text {
  text-align: center;
  margin-bottom: -5px; /* Reduz o espaço entre a frase e o rodapé */
}
</style>
