<template>
  <div>
    <!-- <ApiForm :form="form" @save="saveApi" /> -->

        <!-- 模态框 -->
      <div class="modal fade" id="dryRunModal" tabindex="-1" aria-labelledby="dryRunModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="dryRunModalLabel">Dry Run Result</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {{ dryRunMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

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
            <button class="btn btn-info btn-sm" @click="dryRunApi(api)">Dry Run</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Toast Container -->
    <div id="toast-container" class="position-fixed top-0 end-0 p-3" style="z-index: 1050;"></div>

  </div>
</template>

<script>
import ApiForm from './ApiForm.vue';
import apiService from '../services/apiService';
import { Modal, Toast} from 'bootstrap';

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
      },
      dryRunMessage: '' // 保存 Dry Run 的结果消息
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
      try {
        const response = await apiService.saveApi(api);
        this.resetForm();
        console.log(response);
        this.showToast('API saved successfully', 'success');
        this.fetchApis();
      } catch (error) {
        this.handleError(error);
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
        this.showToast('API deleted successfully', 'success');
        this.fetchApis();
      } catch (error) {
        this.handleError(error);
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
        this.showToast('Property bound successfully', 'success');
        this.fetchApis();
        
      } catch (error) {
        this.handleError(error);
        this.fetchApis();
      }
    },
    async unbindProperty(api) {
      try {
        const response = await apiService.unbindProperty(api.id);
        console.log(response);
        this.showToast('Property unbound successfully', 'success');
        api.propertyId = null;
        this.fetchApis();
      } catch (error) {
        this.handleError(error);
        this.fetchApis();
      }
    },
    
    async dryRunApi(api) {        
      const url_name = api.name;
      try {
        const response = await apiService.dryrunApi(api);
        console.log(response);
        this.showModal(url_name, response); // 显示模态框
      } catch (error) {
        if (error.response) {
          this.showModal(url_name, error.response)
        } else {
          this.dryRunMessage = `Dry Run Error: ${error.message}`;
          alert(this.dryRunMessage);
        }
      }
    },

    showModal(url_name, response) {
      // 使用模态框显示结果
      console.log(response);
      const formattedData = JSON.stringify(response.data, null, 2); // 格式化JSON数据，缩进为2个空格
      const statusCode = response.status;
      const modalElement = document.getElementById('dryRunModal');
      const modalBody = modalElement.querySelector('.modal-body');
      
      modalBody.innerHTML = `
        <strong>API Name:</strong> ${url_name} <br><br>
        <strong>Status Code:</strong> ${statusCode} <br><br>
        <strong>Response:</strong> <br>
        <pre>${formattedData}</pre>
      `;

      const modal = new Modal(document.getElementById('dryRunModal'));
      modal.show();
    },

    handleError(error) {
      if (error.response) {
        const data = JSON.stringify(error.response.data);
        this.showToast(`Error: ${error.response.statusText}, info: ${data}`, 'danger');
      } else {
        this.showToast(`Error: ${error.message}`, 'danger');
      }
    },

    resetForm() {
      this.form = { id: null, name: '', description: '' };
    },

    showToast(message, type = 'success') {
      const toastContainer = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `toast align-items-center text-white bg-${type} border-0`;
      toast.setAttribute('role', 'alert');
      toast.setAttribute('aria-live', 'assertive');
      toast.setAttribute('aria-atomic', 'true');

      toast.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      `;

      toastContainer.appendChild(toast);
      const bsToast = new Toast(toast);
      bsToast.show();
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