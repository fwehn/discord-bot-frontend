<template>
 <div class="bg-discord-700 w-full h-screen">
   <h1 class="text-discord-500">{{botInformation["username"]}}</h1>
   <div class="flex gap-2">
    <form class="flex flex-col gap-2 items-center">
      <label class="text-discord-500" for="ISentence">Satz:</label>
      <input id="ISentence" type="text" v-model="newSentence" placeholder="Bitte gib einen Satz ein..." class="ml-2">
      <button class="mainButton w-56" @click="createSentence">Hinzufügen</button>
    </form>

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
    createSentence(event){
      event.preventDefault();
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