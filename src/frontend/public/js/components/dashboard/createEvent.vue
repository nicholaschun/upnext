<template>
    <div>
         <div class="col-md-3">
             <side-nav title="Create Lineup" />    
        </div>
        <div class="col-md-9">
            <lineup-nav />
        </div>
    </div>
</template>
<script>
const lineupNav = require('./subComponents/lineupNav.vue')
const sideNav = require('./subComponents/sideNav.vue')
module.exports =  {

components: {
    'lineup-nav' : lineupNav,
    'side-nav' : sideNav
}
}
</script>
<style scoped>

</style>


