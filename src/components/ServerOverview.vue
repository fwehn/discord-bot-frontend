<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-8xl text-green-700">Server</h1>

    <h2 v-if="loading" class="text-3xl">Loading...</h2>
    <h2 v-else-if="failed" class="text-red-700 text-3xl">Cannot connect to Bot</h2>
    <ul v-else class="flex gap-2">
      <li v-bind:key="id" v-for="(server, id) in server" @click="goToServerDetails(server, id)" class="flex flex-col items-center text-gray-300 w-52 h-52 bg-test-2 rounded-xl hover:bg-gray-500">
        <h3>{{server['name']}}</h3>
        <h4>{{server['members']}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import {apiGetCall} from "@/assets/apiFunctions.js";

export default {
  name: "ServerOverview",
  data() {
    return {
      loading: true,
      failed: false,
      server: {}
    }
  },
  methods: {
    goToServerDetails(serverData, id) {
      this.$emit('clicked', { pageIndex: 1, pageData: { serverData, id}});
    },
    getServerList() {
      apiGetCall("server").then(data => {
        this.server = data;
        this.loading = false;
      }).catch((err) => {
        this.loading = false;
        this.failed = true;
        console.error(err);
      });
    }
  },
  created() {
    this.getServerList();
  }
}
</script>

<!--<style scoped>-->
<!--  div {-->

<!--  }-->

<!--  ul {-->
<!--    display: flex;-->
<!--    list-style: none;-->
<!--    padding: 0;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--    gap: 10px;-->
<!--  }-->

<!--  li {-->
<!--    width: 200px;-->
<!--    height: 200px;-->
<!--    background: #363940;-->
<!--    border: 1px solid #363940;-->
<!--    border-radius: 10px;-->
<!--  }-->

<!--  li:hover{-->
<!--    background: #3b3e45;-->
<!--  }-->
<!--</style>-->