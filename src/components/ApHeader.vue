<template>
  <header class="shadow w-screen">
    <!-- <nav>
      <nav class="flex items-center justify-between flex-wrap bg-pink-400 p-6">

        
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav> -->
    <div class="flex justify-between flex-wrap bg-pink-400 p-6">
          <div class="flex">
            <div>
            <span class="font-semibold text-xl tracking-tight ml-20 "><i class="fas fa-bars text-gray-800"></i></span>
            <span class="font-semibold text-xl tracking-tight ml-10 "><i class="fas fa-headset text-gray-800"></i></span>
            <span class="font-semibold text-xl tracking-tight ml-10 "><i class="fas fa-microphone text-gray-800"></i></span>


            </div>
            <div class="flex items-center ml-20">
              <i class="fas fa-search text-gray-800"></i>
              <input type="text" placeholder="Search..." 
              class=" rounded-full w-full p-2  text-sm ml-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
            </div>
            
          </div>
          <div>
            <span class="text-xl tracking-tight mr-20 "><i class="fas fa-sign-out-alt text-gray-800"></i></span>
          </div>
        </div>
  </header>
</template>
<script>
export default {
  name: "ApHeader",
  components: {},
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
