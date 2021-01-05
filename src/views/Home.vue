<template>
  <div>
    <ap-table :character="character"></ap-table>
  </div>
</template>
<script>
import api from '@/api'
import ApTable from '@/components/ApTable'

export default {
  name: "Home",

  components: {ApTable},

  data() {
    return{
      character:[]
    }
  },
  created() {
    api.getCharacters()
    .then(character => (this.character = character))
  } 
}
</script>