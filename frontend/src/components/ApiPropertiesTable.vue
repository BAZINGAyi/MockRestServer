<template>
    <div>
      <h2>API Properties List</h2>
      <ApiPropertyForm ref="apiPropertyForm" :form="form" @save="saveApiProperty" />
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Name</th>
            <th>Response Status Code</th>
            <th>Response Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in properties" :key="property.id">
            <td>{{ property.id }}</td>
            <td>{{ property.propertyName }}</td>
            <td>{{ property.responseStatusCode }}</td>
            <td>
              <textarea class="form-control" rows="3" readonly v-model="property.responseContent"></textarea>
            </td>
            <td>
                <button class="btn btn-primary btn-sm" @click="editApiProperty(property)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="deleteApiProperty(property.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </template>
  
  <script>
  import ApiPropertyForm from './ApiPropertyForm.vue';
  import apiService from '../services/apiService';
  
  export default {
    components: {
      ApiPropertyForm
    },

    data() {
      return {
        properties: [],
        form: {
          id: null,
          propertyName: '',
          responseStatusCode: '',
          responseContent: ''
        },
        showModal: true
      };
    },

    methods: {
      async fetchApiProperties() {
        const response = await apiService.getApiProperties();
        this.properties = response.data.sort((a, b) => a.id - b.id);
      },

      async saveApiProperty(property) {
        await apiService.saveApiProperty(property);
        this.resetForm();
        alert('API Property saved successfully');
        this.fetchApiProperties();
      },

      editApiProperty(property) {
        this.form = { ...property };
        this.$refs.apiPropertyForm.openModal(this.form);
      },

      async deleteApiProperty(id) {
        try {
          await apiService.deleteApiProperty(id);
          this.fetchApiProperties();
        } catch (error) {
            // 如果 error response 存在，则提示 data 的内容
            console.log(error)
            if (error.response) {
                // 将 error.response.data 转换为字符串
                const data = JSON.stringify(error.response.data);
                alert(`Error: ${error.response.statusText}, info: ${data}`);
            } else {
                alert(` Error: ${error.message}`);
            }
        }
        
      },

      resetForm() {
        this.form = { id: null, propertyName: '', responseStatusCode: '', responseContent: '' };
      },

    },

    mounted() {
      this.fetchApiProperties();
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