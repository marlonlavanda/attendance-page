<template>
  <div>
    <Header></Header>
    <div class="bv-example-row">
      <b-row class="text-center mt-5">
        <b-col cols="4">
          <SideBar></SideBar>
        </b-col>
        <b-col>
          <b-button variant="danger" class="mb-3">Button</b-button>
          <Table :asset="asset"></Table>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "../components/table.vue";
import SideBar from "../components/side-bar.vue";
import Header from "../components/header.vue";

import api from "../api.js";

export default {
  name: "Home",
  components: {
    Table,
    SideBar,
    Header,
  },
  data() {
    return {
      asset: [],
    };
  },
  created() {
    api.getAssets().then((asset) => (this.asset = asset));
  },
};
</script>
