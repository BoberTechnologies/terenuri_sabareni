<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div>
      <label for="name">Name:</label>
      <input v-model="form.name" id="name" type="text" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input v-model="form.email" id="email" type="email" required />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea v-model="form.message" id="message" required></textarea>
    </div>
    <button type="submit">Send</button>
    <p v-if="submitted" class="success-message">Thank you for contacting us!</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});
const submitted = ref(false);

function handleSubmit() {
  // Here you would typically send the form data to a server
  submitted.value = true;
  // Optionally reset the form
  form.name = '';
  form.email = '';
  form.message = '';
  setTimeout(() => (submitted.value = false), 3000);
}
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.contact-form div {
  margin-bottom: 1rem;
}
.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 1rem;
}
.contact-form button {
  padding: 0.5rem 1.5rem;
  background: #0078d4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.contact-form button:hover {
  background: #005fa3;
}
.success-message {
  color: #2e7d32;
  margin-top: 1rem;
  font-weight: 600;
}
</style>

