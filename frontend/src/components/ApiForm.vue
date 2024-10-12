<!-- frontend/src/components/ApiForm.vue -->
  <template>
    <div>
      <button class="btn btn-primary mb-3" @click="openModal">Add New Mock API</button>
  
      <!-- Modal -->
      <div class="modal fade" id="apiModal" tabindex="-1" aria-labelledby="apiModalLabel" aria-hidden="true" ref="apiModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="apiModalLabel">API Mock</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm" class="mt-4">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" v-model="localForm.name" placeholder="Name" required />
                </div>
                <div class="form-group">
                <label for="url">URL:</label>
                <input type="text" class="form-control" v-model="localForm.url" placeholder="URL" required />
                </div>
                <div class="form-group">
                  <label for="method">Method:</label>
                  <select class="form-control" v-model="localForm.method" required>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="description">Description:</label>
                  <input type="text" class="form-control" v-model="localForm.description" placeholder="Description" />
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-success btn-lg">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import { ref, onMounted, watch } from 'vue';
  import { Modal } from 'bootstrap';
  
  export default {
    props: {
      form: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        localForm: { ...this.form },
        modalInstance: null
      };
    },
    watch: {
      form: {
        handler(newForm) {
          this.localForm = { ...newForm };
        },
        deep: true
      }
    },
    methods: {
      submitForm() {
        this.$emit('save', this.localForm);
        this.closeModal();
      },
      openModal(form = null) {
        if (form) {
          this.localForm = { ...form };
        }
        this.modalInstance.show();
      },
      closeModal() {
        this.modalInstance.hide();
        this.resetForm();
      },
      resetForm() {
        this.localForm = { id: null, name: '', url: '', method: '', description: '' };
      }
    },
    mounted() {
      this.modalInstance = new Modal(this.$refs.apiModal);
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  </style>