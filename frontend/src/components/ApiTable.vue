<template>
  <div>
    <!-- <ApiForm :form="form" @save="saveApi" /> -->
    <h2>API Mock List</h2>
    <ApiForm ref="apiForm" :form="form" @save="saveApi" />
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>URL</th>
          <th>Method</th>
          <th>Description</th>
          <th>Mapping Property</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="api in apis" :key="api.id">
          <td>{{ api.id }}</td>
          <td>{{ api.name }}</td>
          <td>{{ api.url }}</td>
          <td>{{ api.method }}</td>
          <td>{{ api.description }}</td>
          <td>
            <div class="d-flex align-items-center">
              <select class="form-select me-2" v-model="api.apiPropertyId" @change="bindProperty(api, $event)">
                <option v-for="property in properties" :key="property.id" :value="property.id">
                  {{ property.propertyName }}
                </option>
              </select>
              <button class="btn btn-secondary btn-sm" @click="unbindProperty(api)">Unbind</button>
            </div>
          </td>
          <td>
            <button class="btn btn-primary btn-sm"  @click="editApi(api)">Edit</button>
            <button class="btn btn-danger btn-sm"  @click="deleteApi(api.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiForm from './ApiForm.vue';
import apiService from '../services/apiService';

export default {
  components: {
    ApiForm
  },
  data() {
    return {
      apis: [],
      properties: [],
      form: {
        id: null,
        name: '',
        url: '',
        method: '',
        description: ''
      }
    };
  },
  methods: {
    async fetchApis() {
      const response = await apiService.getApis();
      this.apis = response.data.sort((a, b) => a.id - b.id);
    },
    async fetchProperties() {
      const response = await apiService.getApiProperties();
      this.properties = response.data;
    },
    async saveApi(api) {
      // await apiService.saveApi(api);
      // this.resetForm();
      // alert('API saved successfully');
      // this.fetchApis();

      try {
        const response = await apiService.saveApi(api);
        console.log(response);
        alert('API saved successfully');
        this.fetchApis();
      } catch (error) {
        // 如果 error response 存在，则提示 data 的内容
        if (error.response) {
          // 将 error.response.data 转换为字符串
          const data = JSON.stringify(error.response.data);
          alert(`Error: ${error.response.statusText}, info: ${data}`);
        } else {
          alert(`Error: ${error.message}`);
        }
        this.fetchApis();
      }

    },
    editApi(api) {
      this.form = { ...api };
      this.$refs.apiForm.openModal(this.form);
    },
    async deleteApi(id) {
      try {
        await apiService.deleteApi(id);
        alert('API deleted successfully');
        this.fetchApis();
      } catch (error) {
        // 如果 error response 存在，则提示 data 的内容
        if (error.response) {
          // 将 error.response.data 转换为字符串
          const data = JSON.stringify(error.response.data);
          alert(`Error: ${error.response.statusText}, info: ${data}`);
        } else {
          alert(`Error: ${error.message}`);
        }
        this.fetchApis();
      }

    },
    async bindProperty(api, event) {
      console.log(api);
      const propertyId = event.target.value;
      // console.log(propertyId);

      try {
        const response = await apiService.bindProperty(api.id, propertyId);
        console.log(response);
        alert('Property bound successfully');
        this.fetchApis();
        
      } catch (error) {
        // 如果 error response 存在，则提示 data 的内容
        if (error.response) {
          // 将 error.response.data 转换为字符串
          const data = JSON.stringify(error.response.data);
          alert(`Error: ${error.response.statusText}, info: ${data}`);
        } else {
          alert(`Error: ${error.message}`);
        }
        this.fetchApis();
      }
    },
    async unbindProperty(api) {
      try {
        const response = await apiService.unbindProperty(api.id);
        console.log(response);
        alert('Property unbound successfully');
        api.propertyId = null;
        this.fetchApis();
      } catch (error) {
        // 如果 error response 存在，则提示 data 的内容
        if (error.response) {
          // 将 error.response.data 转换为字符串
          const data = JSON.stringify(error.response.data);
          alert(`Error: ${error.response.statusText}, info: ${data}`);
        } else {
          alert(`Error: ${error.message}`);
        }
        this.fetchApis();
      }
    },
    resetForm() {
      this.form = { id: null, name: '', description: '' };
    }
  },
  mounted() {
    this.fetchApis();
    this.fetchProperties();
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.btn {
  margin-right: 5px;
}
  </style>