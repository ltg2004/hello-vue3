<template>
  <el-container>
    <el-aside width="200px">
      <div id="nav">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              class="el-menu-vertical"
              mode="vertical"
              active-text-colot="#000"
              text-color="#666"
              @select="selectMenu"
            >
              <el-menu-item index="1" route="/">
                <i class="el-icon-menu"></i>
                Home
              </el-menu-item>
              <el-menu-item index="2" route="/about">
                <i class="el-icon-document"></i>
                About
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>

  <TeleportExample to="modal" v-if="$route.path === '/'" />
</template>
<script>
import TeleportExample from "@/components/teleport/TeleportExample";

export default {
  components: {
    TeleportExample,
  },
  methods: {
    selectMenu(index, indexPath, obj) {
      this.$router.push(obj.route);
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 200px;
  height: 100vh;
  height: 100vh;
  .el-menu-vertical {
    width: 200px;
    height: 100vh;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-main {
  padding: 0 !important;
}
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
