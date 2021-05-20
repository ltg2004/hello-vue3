import { computed } from "vue";

export default function userListTitleSearch(lists, searchText) {
  const listMatchingSearchQuery = computed(() => {
    return lists.value.filter((v) => {
      return v.title === searchText.value;
    });
  });

  return {
    listMatchingSearchQuery,
  };
}
