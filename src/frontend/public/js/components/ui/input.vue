<template>
    <div>
        <input :type="type" :placeholder="placeholder" class="form-control">
    </div>
</template>
<script>
module.exports = {
    props: {
        type: String,
        placeholder: String
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
