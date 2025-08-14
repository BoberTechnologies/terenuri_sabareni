<template>
  <div class="contact-container">
    <form id="contactform" class="form-box" @submit.prevent="handleSubmit">
      <div class="form-wrapper">
        <div class="head-text-box">
          <p class="contactus-head">Contacteaza-ne</p>
        </div>

        <div class="form-row">
          <div class="input-group half-width">
            <label for="firstName" class="input-title">PRENUME</label>
            <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                class="input"
                required
            />
          </div>
          <div class="input-group half-width">
            <label for="lastName" class="input-title">NUME</label>
            <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                class="input"
                required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="input-group half-width">
            <label for="email" class="input-title">EMAIL</label>
            <input
                id="email"
                v-model="form.email"
                type="email"
                class="input"
                required
            />
          </div>
          <div class="input-group half-width">
            <label for="phone" class="input-title">TELEFON</label>
            <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="input"
            />
          </div>
        </div>

        <div class="input-group full-width">
          <label for="message" class="input-title">CE VREI SA NE SPUI</label>
          <textarea
              id="message"
              v-model="form.message"
              placeholder="Mesaj..."
              class="textinput"
              rows="4"
              required
          ></textarea>
        </div>

        <div class="btn-wrapper">
          <button type="submit" class="submit-btn">Submit</button>
        </div>

        <p v-if="submitted" class="success-message">Thank you for contacting us!</p>
      </div>
    </form>

    <aside class="contact-info">
      <h3>Informatii de contact</h3>
      <p><strong>Adresa:</strong> 198 West 21th Street, Suite 721, New York NY 10016</p>
      <p><strong>Telefon:</strong> <a href="tel:+1235235598">+1 235 2355 98</a></p>
      <p><strong>Email:</strong> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
    </aside>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true

  // Reset form fields
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.message = ''

  setTimeout(() => (submitted.value = false), 3000)
}
</script>

<style scoped>
@font-face {
  font-family: 'Nunito';
  src: url('@/../res/fonts/Nunito-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Nunito';
  src: url('@/../res/fonts/Nunito-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

.contact-container {
  font-family: 'Nunito', Arial, sans-serif;
  display: flex;
  max-width: 75rem;
  margin: 3rem auto;
  gap: 0;
  background: transparent;
  min-height: 31.25rem;
  width: 80%; /* Keeping your requested width */
}

.form-box {
  background: #fff;
  padding: 1.25rem;
  border-radius: 0.5rem 0 0 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.head-text-box {
  margin-bottom: 2rem;
}

.contactus-head {
  font-weight: 700;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.half-width {
  flex: 1 1 45%;
}

.full-width {
  flex: 1 1 100%;
}

.input-title {
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.375rem;
}

.input {
  height: 2rem;
  padding: 0.25rem 0.625rem;
  border: 2px solid #a2a2a2;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #1c3b28;
}

.textinput {
  padding: 0.75rem;
  border: 2px solid #a2a2a2;
  border-radius: 0.25rem;
  min-height: 10rem;
  outline: none;
  transition: border-color 0.3s ease;
  resize: none;
}

.textinput:focus {
  border-color: #1c3b28;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.submit-btn {
  min-width: 10rem;
  height: 2.5rem;
  background-color: #1c3b28;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #14521f;
}

.success-message {
  color: #2e7d32;
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
}

/* Contact Info Panel */
.contact-info {
  background: #1c3b28;
  color: white;
  padding: 2.5rem 2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.1);
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-box,
.contact-info {
  flex: 0 0 50%;
  max-width: 50%;
  box-sizing: border-box;
  /* Removed height property and relying on flexbox for equal height */
  overflow-y: auto;
}

.contact-info h3 {
  margin-bottom: 1rem;
  font-weight: 700;
}

.contact-info p {
  margin-bottom: 0.8rem;
}

.contact-info a {
  color: #a8d0ff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* Responsive media query for smaller screens */
@media (orientation: portrait) {
  .contact-container {
    flex-direction: column;
    width: 90%;
    min-height: auto;
  }
  .form-box,
  .contact-info {
    flex: none;
    max-width: 100%;
    border-radius: 0;
  }
  .form-box {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .contact-info {
    border-radius: 0 0 0.5rem 0.5rem;
  }
}
</style>
