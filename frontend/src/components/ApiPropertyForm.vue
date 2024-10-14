<template>
    <div>

    <div class="d-flex justify-contentstart mb-3">
      <button class="btn btn-dark" @click="openModal">Add New Api Property</button>
    </div>
  
      <!-- Modal -->
      <div class="modal fade" id="propertyModal" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true" ref="propertyModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="propertyModalLabel">API Property Content</h5>
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="onSubmit" class="mt-4">
                <div class="form-group">
                  <label for="propertyName">Property Name:</label>
                  <input type="text" class="form-control" v-model="localForm.propertyName" required />
                </div>
                <div class="form-group">
                  <label for="responseStatusCode">Response Status Code:</label>
                  <input type="number" class="form-control" v-model="localForm.responseStatusCode" required />
                </div>
                <div class="form-group">
                  <label for="responseContent">Response Content (JSON):</label>
                  <textarea class="form-control" v-model="localForm.responseContent" @input="validateJson" rows="10" required></textarea>
                  <span v-if="jsonError" class="text-danger">Invalid JSON format</span>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-success btn-lg" :disabled="jsonError">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import { ref, onMounted, watch } from 'vue';
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
        jsonError: false,
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
      validateJson() {
        try {
          JSON.parse(this.localForm.responseContent);
          this.jsonError = false;
        } catch (e) {
          this.jsonError = true;
        }
      },
      onSubmit() {
        if (!this.jsonError) {
          this.$emit('save', this.localForm);
          this.closeModal();
        }
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
        this.localForm = { id: null, propertyName: '', responseStatusCode: '', responseContent: '' };
      }
    },
    mounted() {
      this.modalInstance = new Modal(this.$refs.propertyModal);
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  .text-danger {
    color: red;
  }
  </style>