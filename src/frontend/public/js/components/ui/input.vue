<template>
    <div>
        <input :type="type" :name="name" :value="value" @input="updateInput($event.target.value)" :placeholder="placeholder" class="form-control">
    </div>
</template>
<script>
module.exports = {
    props: ['value', 'type', 'placeholder', 'name'],
    methods: {
        updateInput (value) {
            this.$emit('input', value)
        }
    }
}
</script>
<style scoped>
.form-control:focus{
    box-shadow: none !important;
    -webkit-box-shadow:none !important;
}
.form-control{
    box-shadow: none !important;
    -webkit-box-shadow:none !important;
}
input{
    display: block;
    /* border-radius: 6px !important; */
    border:1px solid var(--upnext-input-border);
    width: 100%;
    outline: none;
}
</style>
