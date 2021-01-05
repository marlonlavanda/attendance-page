<template>

  <table>
    <thead>
      <tr class="bg-gray-800 border-b-2  text-white text-center">
        
        <th>
          Name
        </th>
        <th>Job title</th>
        <th>Register</th>
        <th>Status</th>
        <th>Late</th>
        <th>Time</th>
        <th>Unpaid Time</th>
        <th>View Recent Paylist</th>
        <th>View Preview Paylist</th>


        <!-- <td class="hidden sm:block"></td> -->

      </tr>
    </thead>
    <tbody>
      <tr v-for="c in character"
      :key="c.id"
      class="class=text-center border-b border-gray-200 hover:bg-gray-100 hover:bg-blue-100">
        <td>
          <img class="rounded-full w-20 mx-4"
        :src="`${c.image}`">
        <th >{{c.name}}</th>
        <tr>
          <i class="fas fa-file-signature w-8 text-gray-500 hover:text-gray-700"></i>
          <i class="fas fa-info w-8 text-gray-500 hover:text-gray-700"></i>
          <i class="fas fa-file-signature w-8 text-gray-500 hover:text-gray-700"></i>
        </tr>
        </td>
        <td>{{c.species}}</td>
        <td><i class="fas fa-check text-green-400"></i></td>
        <td>{{inWork}}</td>
        <td><i class="fas fa-exclamation text-orange-500"></i></td>
        <td>{{time}}</td>
        <!-- <td class="hidden sm:block"></td> -->
        <td >{{inWork}}</td>
        <td><i class="fas fa-eye text-pink-400 hover:text-pink-700"></i></td>
        <td><i class="far fa-file-alt text-pink-400 hover:text-pink-700"></i></td>


      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ApTable",
  data(){
    return{
      unpaidtime: '60 min',
      inWork: 'Present',
      time: '09:00 - 17:30',
      jobs: [
        
      ]
    }
  },
  props: {
    character: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
/* .up::before {
  content: "👆";
}

.down::before {
  content: "👇";
} */

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
