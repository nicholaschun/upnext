<template>
  <button  :type="type" :disabled="disabled">
    <slot>Button</slot>
  </button>
</template>
<script>
module.exports = {
  props: {
    
    type: {
      required: true
    },
    disabled: {
      required: false
    }
  }
}
</script>
<style scoped>
button {
  outline: none;
  border: none;
  background: transparent;
  transition: 0.3s;
  height: 35px;
}
button[disabled] {
  background: var(--upnext-disabled-button);
  border: 1px solid var(--upnext-disabled-button);
}
.default-button {
  background: var(--upnext-yellow);
  color: white;
  padding: 6px 25px 3px 25px;
  border-radius: 40px;
  font-size: 1em;
  border: 1px solid var(--upnext-yellow);
  outline: none;
}
.question-button {
  background: transparent;
  color: var(--upnext-input-addon);
  padding: 6px 15px 3px 12px;
  border-radius: 40px;
  font-size: 1em;
  border: 1px solid var(--upnext-blue);
  outline: none;
}
.transparent-button {
  background: transparent !important;
  color: white;
  padding: 6px 15px 3px 12px;
  border-radius: 40px;
  font-size: 1em;
  outline: none;
}
.round-button {
  position: fixed;
  background: var(--upnext-yellow);
  padding: 22px;
  width: 100px;
  height: 100px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  top: 70%;
  left: 5%;
  z-index: 9999;
  color: white;
  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  font-family: GillSansRegular;
}
</style>
