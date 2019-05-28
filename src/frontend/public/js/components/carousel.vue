<template>
    <div class="custom-carousel">
        <u-carousel :autoplay="true" :nav="false" items=1 @changed="addAnimation">
            <div>
                <div class="item-carousel-caption">
                    <h1 class="animated fadeInLeft">Easy To Create, <br>Easy To Edit </h1>
                    <p class="animated fadeInUp">Is there any way I can share myprogramme line-up with my participants? Yes!</p>
                </div>
                <img src="./../img/banners/slider1.png" />
            </div>
            <div>
                <div class="item-carousel-caption">
                    <h1 class="animated fadeInLeft">Easy To Create, <br>Easy To Edit </h1>
                    <p class="animated fadeInUp">Easily create a programme line-up for your event, edit and update as the event goes on and participants receive live updates.</p>
                </div>
                <img src="./../img/banners/slider3.png" />
            </div>
            
        </u-carousel>
    </div>
</template>
<script>
const carousel = require('vue-owl-carousel')
module.exports = {
    methods: {
        addAnimation (event){
            // select the current active element
            let item = event.item.index-2
            $('h1').removeClass('animated fadeInLeft')
            $('p').removeClass('animated fadeInUp')
            $('.owl-item').not('cloned').eq(item).find('h1').addClass('animated fadeInLeft')
            $('.owl-item').not('cloned').eq(item).find('p').addClass('animated fadeInUp')
        }
    },
    components:{
        'u-carousel' : carousel
    }
}
</script>
<style scoped>

</style>