<template>
  <div>
    <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :class="className"
      v-bind="$attrs"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @change="updateInput"
      @input="updateInput"
    />
    <small v-if="error" class="form-error animated fadeInUp2">{{
      error
    }}</small>
  </div>
</template>
<script>
module.exports = {
  $_veeValidate: {
    name() {
      return this.name
    },
    value() {
      return this.value
    }
  },
  props: {
    value: String,
    className: String,
    placeholder: String,
    name: String,
    error: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'text',
      validator: val => {
        return (
          ['url', 'text', 'password', 'email', 'search'].indexOf(val) !== -1
        )
      }
    }
  },
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted() {
    this.$el.value = this.value
  }
}
</script>
<style scoped>
.form-control:focus {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
.form-control {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border-radius: 20px !important;
}
input {
  display: block;
  /* border-radius: 6px !important; */
  border: 1px solid var(--upnext-input-border);
  width: 100%;
  height: 35px;
  outline: none;
}
</style>
