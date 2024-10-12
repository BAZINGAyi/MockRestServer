<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<!-- frontend/src/App.vue -->
<!-- <template>
  <div id="app">
    <h1>API Management</h1>
    <ApiTable :apis="apis" @edit="editApi" @delete="deleteApi" />
    <ApiForm :form="form" @save="saveApi" />
  </div>
</template>

<script>
import ApiTable from './components/ApiTable.vue';
import ApiForm from './components/ApiForm.vue';
import apiService from './services/apiService';

export default {
  components: {
    ApiTable,
    ApiForm
  },

  data() {
    return {
      apis: [],
      form: {
        id: null,
        name: '',
        description: ''
      }
    };
  },

  methods: {
    async fetchApis() {
      const response = await apiService.getApis();
      this.apis = response.data;
    },

    async saveApi(api) {
      console.log(api);
      await apiService.saveApi(api);
      this.resetForm();
      this.fetchApis();
    },

    editApi(api) {
      this.form = { ...api };
    },

    async deleteApi(id) {
      await apiService.deleteApi(id);
      this.fetchApis();
    },

    resetForm() {
      this.form = { id: null, name: '', description: '' };
    }
  },
  mounted() {
    this.fetchApis();
  }
};
</script>

<style>
/* Add some basic styling */
</style> -->



<template>
  <div id="app">
    <nav>
      <router-link to="/p_apis">APIs</router-link>
      <router-link to="/p_api-properties">API Properties</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>