<template>
 <div class="bg-discord-700 w-full h-screen">
   <h1 class="text-discord-500">{{botInformation["username"]}}</h1>
   <div class="flex gap-2">
     <label class="text-discord-500">
       Satz:
       <input id="ISentence" type="text" v-model="newSentence" placeholder="Bitte gib einen Satz ein..." class="ml-2">
     </label>

     <button class="mainButton" @click="createSentence">Hinzufügen</button>
   </div>
 </div>
</template>

<script>
import {apiGetCall, apiPostCall} from "@/assets/apiFunctions";

export default {
  name: "BotDetails",
  data(){
    return {
      botInformation: {},
      newSentence: ""
    }
  },
  created() {
    this.getBotInformation();
  },
  methods: {
    getBotInformation(){
      apiGetCall("")
          .then(data => this.botInformation = data)
          .catch(console.error);
    },
    createSentence(){
      apiPostCall("sentence", {sentence: this.newSentence})
          .then(res => {
            alert(res["message"]);
            this.newSentence = "";
          }).catch(alert);
    }
  }
}
</script>

<style scoped>

</style>