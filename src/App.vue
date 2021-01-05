<template>
  <main class="bg-gray-100">
    <ap-header></ap-header>
    <div class="container px-5 text-gray-800">
    <h2 class="font-bold mt-10">Today's Attendance - 04/11/2021</h2>
    </div>
    <router-view  class="container px-5 sm:px-10 py-10 flex justify-center"/>
  </main>
    
</template>

<script>
import ApHeader from '@/components/ApHeader'
// import ApTable from '@/components/ApTable'

export default {
  components: {ApHeader}
}
</script>

<style>

</style>
