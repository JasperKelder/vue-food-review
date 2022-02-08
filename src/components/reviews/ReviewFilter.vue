<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<template>
  <fieldset>
    <span>
      <input type="checkbox" id="breakfast" checked @change="setFilter" />
      <div class="filter-button">
        <label for="breakfast">Breakfast</label>
      </div>
    </span>
    <span>
      <input type="checkbox" id="lunch" checked @change="setFilter" />
      <div class="filter-button">
        <label for="lunch">Lunch</label>
      </div>
    </span>
    <span>
      <input type="checkbox" id="dinner" checked @change="setFilter" />
      <div class="filter-button">
        <label for="dinner">Dinner</label>
      </div>
    </span>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
  display: flex;
  justify-content: center;
  margin: 1.5rem 2rem;
}

label {
  cursor: pointer;
  padding: 0.2rem 1.5rem;
}

.filter-button {
  background-color: #15616d;
  border: 3px solid #001524;
  padding: 0.5rem;
  width: 5rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  transition: all 0.4s;
  border-radius: 1rem;
}

.filter-button:hover {
  box-shadow: 0 0 6px 1px #001524;
  border-color: #ff7d00;
}

#breakfast:checked + .filter-button,
#lunch:checked + .filter-button,
#dinner:checked + .filter-button {
  border-color: #ff7d00;
}

input[type='checkbox'] {
  display: none;
}
</style>
