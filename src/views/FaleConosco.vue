<template>
  <div class="content-geral-fale-conosco">
    <form @submit.prevent="submitForm">
      <div class="card-fale-conosco">
        <div>
          <h2>SAC</h2>
          <div class="form-group">
            <div class="input-form">
              <input placeholder="Nome:" type="text" id="name" v-model="name" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-form">
              <input
                placeholder="Email"
                type="email"
                id="email"
                v-model="email"
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-form">
              <textarea
                placeholder="Mensagem:"
                id="message"
                v-model="message"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" class="submit-button">Enviar</button>
      </div>
    </form>
    <div class="imagem-fale-conosco">
      <div class="imagem-content spin-content">
        <img src="@/assets/FaleConosco.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
    },
  },
};
</script>
<style>
form {
  width: 40%;
  height: 100%;
  padding: 20px;
}
.content-geral-fale-conosco {
  display: flex;
  height: 90%;
}
.imagem-fale-conosco {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}
.imagem-content {
  height: 100%;
  width: 50%;
}
.card-fale-conosco {
  background: #b9deb1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
}
.card-fale-conosco h2 {
  text-align: center;
  opacity: 0.7;
}
.card-fale-conosco input {
  border: none;
  background: #d9d9d9;
  border-radius: 20px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.card-fale-conosco textarea {
  border: none;
  background: #d9d9d9;
  border-radius: 15px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 64px;
  max-height: 25vh;
  padding: 10px;
  box-sizing: border-box;
}
::-webkit-input-placeholder {
  padding-left: 18px;
  font-size: 18px;
}
input:-moz-placeholder {
  padding-left: 18px;
  font-size: 18px;
}
textarea:-moz-placeholder {
  padding-left: 18px;
  font-size: 18px;
}
.input-form {
  margin-top: 15px;
}
.content-geral-fale-conosco button {
  height: 50px;
  font-size: 28px;
}
</style>
