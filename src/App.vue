<template>
  <div class="flex pl-16">
    <SideBar @clicked="changeContent"/>
    <BotDetails v-if="pageIndex === 0"/>
    <ServerDetails v-else-if="pageIndex === 1" :key="pageData['id']" :serverData="pageData"/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import ServerDetails from "@/components/ServerDetails.vue";
import BotDetails from "@/components/BotDetails.vue";

export default {
  name: 'App',
  data(){
    return {
      pageIndex: 0,
      pageData: null
    }
  },
  components: {
    BotDetails,
    ServerDetails,
    SideBar,
  },
  created() {
    document.title = "Discord-Bot";
  },
  methods: {
    changeContent(input){
      this.pageIndex = input["pageIndex"];
      this.pageData = input["pageData"];
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

<style src="./assets/main.css"></style>