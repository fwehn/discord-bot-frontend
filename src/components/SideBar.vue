<template>
  <div class="fixed top-0 left-0 h-screen w-16 m-0
              flex flex-col items-center
              bg-discord-900 text-discord-100 shadow">

    <SideBarIcon :id="'0000'" :name="'Home'" @click.native="goToBotDetails"/>

    <span class="list-divider w-14"></span>

    <SideBarIcon v-bind:key="id" v-for="(server, id) in server" :id="id" :name="server['name']" :member-count="server['members']" @click.native="goToServerDetails(server, id)"/>
  </div>
</template>

<script>
import SideBarIcon from "@/components/SideBarIcon";
import {apiGetCall} from "@/apiFunctions";
export default {
  name: "SideBar",
  components: {SideBarIcon},
  data(){
    return {
      server: {}
    }
  },
  methods:{
    getServerList() {
      apiGetCall("server").then(data => {
        this.server = data;
      }).catch((err) => {
        console.error(err);
      });
    },
    goToBotDetails(){
      this.$emit('clicked', { pageIndex: 0, pageData: {}});
    },
    goToServerDetails(serverData, id) {
      this.$emit('clicked', { pageIndex: 1, pageData: { serverData, id}});
    }
  },
  created() {
    this.getServerList();
  }
}
</script>

<style scoped>

</style>