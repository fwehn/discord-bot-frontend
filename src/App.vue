<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <button @click="copyLinkToClipboard">Copy Invite-Link!</button>
    <ServerOverview v-if="!selectedServer" @clicked="changeToServerDetailsComponent"/>
    <ServerDetails v-else :serverData="selectedServer" @clicked="changeToServerDetailsComponent"/>
  </div>
</template>

<script>
import ServerOverview from "@/components/ServerOverview";
import ServerDetails from "@/components/ServerDetails";

export default {
  name: 'App',
  data(){
    return {
      selectedServer: null
    }
  },
  components: {
    ServerDetails,
    ServerOverview
  },
  created() {
    document.title = "Discord-Bot";
  },
  methods: {
    changeToServerDetailsComponent(server) {
      this.selectedServer = server
    },
    copyLinkToClipboard(){
      let text = "https://discord.com/api/oauth2/authorize?client_id=900462208822165634&permissions=8&scope=bot%20applications.commands";

      navigator.clipboard.writeText(text).then(function() {
        alert('Copied');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1fdfe;
  background: #2f3137;
  margin-top: 60px;
}
</style>
