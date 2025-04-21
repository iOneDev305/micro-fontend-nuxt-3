<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">API Example</h2>
    
    <!-- GET Request Example -->
    <div class="mb-4">
      <button
        @click="fetchData"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Fetch Data
      </button>
      <div v-if="data" class="mt-2">
        <pre>{{ JSON.stringify(data, null, 2) }}</pre>
      </div>
    </div>

    <!-- POST Request Example -->
    <div class="mb-4">
      <input
        v-model="formData.title"
        type="text"
        placeholder="Enter title"
        class="border p-2 rounded mr-2"
      />
      <button
        @click="submitData"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </div>

    <!-- Error Display -->
    <div v-if="error" class="text-red-500 mt-2">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useApi } from '@shared/composables/useApi';

const api = useApi();
const data = ref(null);
const error = ref('');
const formData = ref({
  title: '',
});

const fetchData = async () => {
  try {
    error.value = '';
    const response = await api.get('/example');
    if (response.success) {
      data.value = response.data;
    } else {
      error.value = response.error.message;
    }
  } catch (e) {
    error.value = 'Failed to fetch data';
  }
};

const submitData = async () => {
  try {
    error.value = '';
    const response = await api.post('/example', formData.value);
    if (response.success) {
      data.value = response.data;
      formData.value.title = ''; // Clear form
    } else {
      error.value = response.error.message;
    }
  } catch (e) {
    error.value = 'Failed to submit data';
  }
};
</script> 