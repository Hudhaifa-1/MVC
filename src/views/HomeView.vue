<script>
//? (1)
//? Look hussien , our project should contian three folders , or if you want make it two ( wihtout the api folder, up to you)
//? ApiFolder -> every axiso operation you should place it here
//? StoreFolder -> every mdole you should palce it here // ViewsFolder -> every thing related to UI (not logic) place it here
//? (2) // For view files:
//? you have two different ways to implement the 'Script section' 
//? 1-> Composition api 
//? 2-> Option api
// Please un coment the following scripts 

</script>

<script setup>
//? 1-> Composition api 
// import TheWelcome from "../components/TheWelcome.vue";
// import { onMounted, computed } from "vue";
// import { useUserStore } from "@/stores/user";

// const userStore = useUserStore();

// // using the computed property , we get the user data from the store
// const user_data = computed(() => userStore.user);

// const get_user_data = async () => {
//   // using the 'userStore object' we are able to access the user store actions 'fetch_user'
//   userStore
//     .fetch_user()
//     .then(() => {
//       // Do what you want to do after fetching the user
//       // for example you want to navigate to the dashboard page
//       // router.push({name: "dahsboard"})
//     })
//     .catch((e) => {
//       // Catch the error here , log it, create an alret
//     });
// };

// // Once the page is created , please get the user data
// onMounted(() => {
//   get_user_data();
// });
//
</script>


 <script>
//? 2-> Option api
// import TheWelcome from "../components/TheWelcome.vue";
// import { useUserStore } from "@/stores/user";
// import { mapActions, mapState } from 'pinia';

// export default {
//   data() {
//     return {
//       // place your varibles here
//       //loadingBoolean: false
//     };
//   },
//   // place your methods here
//   methods: {
//     get_user_data() {
//       this.fetchUserData().then(() => {
//         // Same the above
//       }).catch((e) => {
//         // Same the above
//       })
//       },
//       ...mapActions(useUserStore, {fetchUserData: "fetch_user"})
//   },

//   computed: {
//     ...mapState(useUserStore, ["user"])
//   },

//   mounted(){
//     this.get_user_data();
//   }
// };
//
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
