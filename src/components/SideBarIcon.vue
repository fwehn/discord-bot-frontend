<template>
  <div class="group
              relative flex items-center justify-center
              h-12 w-12 mt-2 mb-2 mx-auto
              bg-discord-800 text-green-600 hover:bg-green-600 hover:text-discord-100
              rounded-3xl hover:rounded-xl
              transition-all duration-300 ease-linear
              cursor-pointer">

    <p>{{name.charAt(0)}}</p>

    <span class="group-hover:scale-100
                 absolute w-auto p-2 m-2 min-w-max left-14
                 rounded-md shadow-md
                 text-white bg-discord-900
                 text-xs font-bold
                 transition-all duration-100 scale-0 origin-left">
      {{name}}: {{memberCount || 0}}
    </span>
  </div>
</template>

<script>
export default {
  name: "SideBarIcon",
  props: {
    id: null,
    name: null,
    memberCount: null
  }
}
</script>

<style scoped>
</style>