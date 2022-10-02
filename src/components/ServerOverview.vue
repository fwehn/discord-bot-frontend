<template>
  <div>
    <h1>Server</h1>

    <h2 v-if="loading">Loading...</h2>

    <ul v-else>
      <li v-bind:key="id" v-for="(server, id) in server" @click="goToServerDetails(server, id)">
        <h3>{{server['name']}}</h3>
        <h4>{{server['members']}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import {apiGetCall} from "@/apiFunctions";

export default {
  name: "ServerOverview",
  data() {
    return {
      loading: true,
      server: {}
    }
  },
  methods: {
    goToServerDetails(serverData, id) {
      this.$emit('clicked', { serverData, id});
    },
    getServerList() {
      apiGetCall("server").then(data => {
        this.server = data;
        this.loading = false;
      }).catch(console.error);
    }
  },
  created() {
    this.getServerList();
  }
}
</script>

<style scoped>
  div {

  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  li {
    width: 200px;
    height: 200px;
    background: #363940;
    border: 1px solid #363940;
    border-radius: 10px;
  }

  li:hover{
    background: #3b3e45;
  }
</style>