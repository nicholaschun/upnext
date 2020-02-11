<template>
    <div>
         <div class="col-md-3">
             <side-nav title="Event Lineup" />    
        </div>
        <div class="col-md-9">
            <lineup-nav />
        </div>
    </div>
</template>
<script>
const lineupNav = require('./../dashboard/subComponents/lineupNav.vue')
const sideNav = require('./../dashboard/subComponents/sideNav.vue')
module.exports =  {

components: {
    'lineup-nav' : lineupNav,
    'side-nav' : sideNav
}
}
</script>
<style scoped>

</style>


