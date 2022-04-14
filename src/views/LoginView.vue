<template>
  <div
    class="bg-neutral-800 h-screen flex flex-row justify-center items-center"
  >
  <div class="flex flex-row justify-center items-center absolute top-5 left-5">
    <img src="../assets/logo.png" class="mr-3 w-12"/>
    <div class="text-white text-2xl">Painel <strong>Admin</strong></div>
  </div>
    <div class="mx-auto w-1/4">
      <el-card shadow="never">
        <h3 class="text-3xl font-bold text-neural-800">Bem-vindo!</h3>
        <h2
          class="subpixel-antialiased text-base mt-2 mb-4 text-neutral-500"
        >
          Utilize seu e-mail e senha para acessar sua conta
        </h2>
        <el-form
          label-position="top"
          :model="data"
          :rules="rules"
          ref="login"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="E-mail" prop="email">
            <el-input
              placeholder="user@email.com"
              v-model="data.email"
            ></el-input>
          </el-form-item>
          <el-form-item label="Senha" prop="password">
            <el-input
              placeholder="Senha"
              v-model="data.password"
              show-password
            ></el-input>
          </el-form-item>

          <div class="w-full flex flex-col items-center">
            <el-link type="primary" class="mb-2">Esqueci minha senha</el-link>
            <el-button type="primary" @click="$router.push('/home')">Entrar</el-button>
          </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  setup() {},
};
</script>

<style scoped></style>
