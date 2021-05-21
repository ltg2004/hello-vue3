import { ref, onMounted } from "vue";

const promiseFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ]);
    }, 250);
  });
};

export default function getTableData() {
  const tableList = ref([]);
  const getTableList = async () => {
    tableList.value = await promiseFunc();
  };

  onMounted(getTableList); // setup 안에 선언된 변수가 함수일 경우 실행시키기 위해 onMounted를 선언해서 실행시킬수 있다.

  return {
    tableList,
    getTableList,
  };
}
