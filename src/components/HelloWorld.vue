<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form" label-width="120px">
      <ElInput
        v-model="userId"
        class="base-input"
        placeholder="아이디를 입력해주세요."
        autosize
      />

      <ElInput
        v-if="password !== undefined"
        v-model="password"
        class="base-input"
        placeholder="비밀번호를 입력해주세요."
        autosize
        autocomplete="off"
        show-password
      />
      <ElInput
        v-if="authNumber !== undefined"
        v-model="authNumber"
        class="base-input"
        placeholder="인증번호를 입력해주세요."
        autosize
      />
    </el-form>
    <p>{{ userId }}</p>
    <div>
      <b>REFS :{{ readerNumber }}</b>
      <button @click="readerNumber = 'thank'">변경</button>
      <br />
      <b>ComputedRefs :{{ computedReaderNumber }}</b> <br />
      <div class="boxStyle">
        find Data: <input v-model="searchText" /><br />
        <div v-show="listMatchingSearchQuery.length > 0">
          <p v-for="(item, i) in listMatchingSearchQuery" :key="i">
            {{ item.no }} / {{ item.title }}
          </p>
        </div>
        <p v-show="listMatchingSearchQuery.length === 0">
          검색된 값이 없습니다.
        </p>
      </div>
      <div class="boxStyle">
        <p v-for="(item, i) in userLists" :key="i">
          {{ item.no }} / {{ item.title }}
        </p>
      </div>
      <br />
      {{ apiData }}
      <br />
      <p v-for="(item, i) in state" :key="i">
        {{ item.first }}<button @click="item.first++">add</button><br />{{
          item.second
        }}<button @click="item.second++">add</button>
      </p>
      <p></p>
    </div>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import userListTitleSearch from "@/composables/userListTitleSearch";
import useUserLists from "@/composables/useUserLists";
import { ref, reactive, toRefs, getCurrentInstance, computed } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const apiData = proxy.$api;
    //context :  Non-reactive Obejct { attrs, slots, emit }, attrs, slots의 변경을 감지하려면 onUpdated를 사용해야함.
    const readerNumber = ref(props.msg); //refs값은 템플릿에서 사용시 자동으로 언래핑된다. ref: 반응적인 변수객체, 단 하나의 property를 가짐 .value
    const computedReaderNumber = computed(
      () => readerNumber.value + "computed"
    );
    const state = reactive([
      { first: 0, second: 10 },
      { first: 0, second: 10 },
    ]); //reactive는 객체를 반응형으로 만든다.
    const searchText = ref("");
    const { msg } = toRefs(props); //props 구조분해할 때 반응성을 유지하려먼 toRefs를 사용해야한다.
    const { userLists } = useUserLists(msg);
    const { listMatchingSearchQuery } = userListTitleSearch(
      userLists,
      searchText
    );
    const isWhiteIp = true;
    const form = {};
    if (isWhiteIp) {
      form.password;
    }
    return {
      readerNumber,
      computedReaderNumber,
      apiData,
      state,
      searchText,
      userLists,
      listMatchingSearchQuery,
      isWhiteIp,
      form,
      userId: ref(""),
      password: ref(isWhiteIp ? "" : undefined),
      authNumber: ref(!isWhiteIp ? "" : undefined),
    };
  },
  // mounted() {
  //   console.log(this.$store);
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.boxStyle {
  border: 1px solid #000;
  padding: 15px;
  max-width: 300px;
  margin: 10px auto;
}
.base-input {
  margin: 10px;
  max-width: 300px;
}
</style>
