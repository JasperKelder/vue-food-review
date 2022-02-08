<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      idNumber: 4,
      foodname: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      types: {
        val: [],
        isValid: true,
      },
      image: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  computed: {
    id() {
      return 'r' + this.idNumber;
    },
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.foodname.val === '') {
        this.foodname.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.types.val.length === 0) {
        this.types.isValid = false;
        this.formIsValid = false;
      }
      if (this.image.val === '') {
        this.image.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      this.idNumber += 1;

      const formData = {
        id: this.id,
        food: this.foodname.val,
        desc: this.description.val,
        types: this.types.val,
        image: this.image.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !foodname.isValid }">
      <label for="foodname">Food Name</label>
      <input
        type="text"
        id="foodname"
        v-model.trim="foodname.val"
        @blur="clearValidity('foodname')"
      />
    </div>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
    </div>

    <div class="form-control" :class="{ invalid: !image.isValid }">
      <label for="image">Image URL</label>
      <input
        type="text"
        id="image"
        v-model.trim="image.val"
        @blur="clearValidity('image')"
      />
    </div>

    <div class="form-control" :class="{ invalid: !types.isValid }">
      <h3>Type of food</h3>
      <p v-if="!types.isValid">At least one type of food must be selected.</p>

      <div>
        <input
          type="checkbox"
          id="breakfast"
          value="breakfast"
          v-model="types.val"
          @blur="clearValidity('types')"
        />
        <label for="breakfast">Breakfast</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="lunch"
          value="lunch"
          v-model="types.val"
          @blur="clearValidity('types')"
        />
        <label for="lunch">Lunch</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="dinner"
          value="dinner"
          v-model="types.val"
          @blur="clearValidity('types')"
        />
        <label for="dinner">Dinner</label>
      </div>
    </div>
    <p v-if="!formIsValid">
      Please fix the highlighted errors and submit again.
    </p>

    <base-button mode="alt">Submit</base-button>
  </form>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label,
p {
  display: block;
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0.5rem;
  cursor: pointer;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 2px solid #219ebc;
  font: inherit;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: #ff7d00;
}

form {
  padding: 1rem;
}
</style>
