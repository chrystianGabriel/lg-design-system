<template>
  <div>
    <lg-aa-template-padrao>
      <Home/>
    </lg-aa-template-padrao>
  </div>
</template>
<script>

import Home from './views/Home/Home';
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.lg-aa-layout {
  padding-top: 66px;
  height: 100%;
  margin: 0;
}
/* Conteudo */
.lg-aa-layout__conteudo {
  width: 100%;
  min-height: 100%;
  height: auto !important;
  height: 100%;
}
/* Conteúdo da função */
.lg-aa-layout__conteudo__main {
  display: block;
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  z-index: 0;
}
/* Rodapé */
.lg-aa-layout__rodape {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f1f1f1;
  width: 100%;
  margin: -80px auto 0;
  height: 80px;
  position: fixed;
  bottom: 0;
}
.lg-aa-layout__rodape__logo {
  background: url("https://www.lg.com.br/site2017/uploads/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 100%;
  float: left;
}
.lg-aa-layout__rodape__copyright {
  width: 100%;
  float: right;
  text-align: right;
}
.lg-aa-layout__rodape__copyright::before {
  content: "Copyright © 2020 LG lugar de gente - Todos os direitos reservados";
}
/* Utilidades */
.lg-aa-separador--vertical {
  border-left: 1px solid #c8cfd8;
  display: inline-block;
  height: 20px;
  position: absolute;
  top: 4px;
  bottom: 0;
  margin: auto;
  margin-left: -1px;
  left: 250px;
}
.lg-aa-layout a:hover,
.lg-aa-layout a:focus {
  text-decoration: none;
}
</style>
