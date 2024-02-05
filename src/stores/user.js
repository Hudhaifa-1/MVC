import { defineStore } from "pinia";
import user_api from "@/Api/user_api";

export const useUserStore = defineStore("user", {
  state: () => ({
    User: [],
  }),

  getters: {
    user: (state) => {
      return state.User;
    },
  },

  actions: {
    fetch_user() {
      let response = user_api.fetchUser();
      return response;
    },
  },
});
