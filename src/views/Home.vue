<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>props message 입력창: <input v-model="msgData" /></div>
    <HelloWorld :msg="msgData" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msgData: "Welcome",
    };
  },
};
</script>
