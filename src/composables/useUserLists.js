import { ref, onMounted, watch } from "vue";

const promiseFunc = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (data === "Welcome") {
        resolve([
          {
            no: 1,
            title: "hello",
          },
          {
            no: 2,
            title: "love",
          },
        ]);
      } else {
        resolve([
          {
            no: 3,
            title: "two",
          },
          {
            no: 4,
            title: "three",
          },
        ]);
      }
    }, 250);
  });
};

export default function useUserLists(msg) {
  const userLists = ref([]);
  const getUserList = async () => {
    userLists.value = await promiseFunc(msg.value);
  };

  onMounted(getUserList); // setup 안에 선언된 변수가 함수일 경우 실행시키기 위해 onMounted를 선언해서 실행시킬수 있다.
  watch(msg, getUserList);

  return {
    userLists,
    getUserList,
  };
}
