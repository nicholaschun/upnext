<template>
    <div>
        <div class="search-bar">
         <input  type="text"  placeholder="Search events"/>
         <button><span class="fa fa-search"></span></button>
          <!-- <div>
             <ul v-if="successSearch" class="displaySearchBox animated fadeIn">
               <div>
                <li v-for="(search) in searchData" :key="search.id"><a :href="search.url_snippet"><span><img class="img-circle" :src="`${imageRepo}/${search.featured_image}`" /></span>{{search.event_name}}</a></li>
                </div>
            </ul>
          </div> -->
        </div>
    </div>
</template>
<script>
module.exports =  {
  data () {
    return {
        searchData: [],
        successSearch:false,
        search: '',
        }
    }
}
</script>
<style scoped>
   .displaySearchBox{
     padding:  0 !important;
     list-style-type: none;
     border-bottom-left-radius: 20px;
     border-bottom-right-radius: 20px;
     /* border-top-left-radius: 10px;
     border-top-right-radius: 10px; */
     background: white;
     position: absolute;
     width: 300px;
     z-index: -1;
     /* padding-top: 50px; */
     margin-top: -18px;
     /* margin-top: 5px; */
     background:white;
     -webkit-box-shadow: -1px 3px 11px -5px rgba(0,0,0,0.61);
     -moz-box-shadow: -1px 3px 11px -5px rgba(0,0,0,0.61);
     box-shadow: -1px 3px 11px -5px rgba(0,0,0,0.61);
   }
   
  .displaySearchBox div{
    margin-top:20px;
  }
  .displaySearchBox li a{
    display: block;
    list-style: none;
    padding: 10px;
    width: 100%;
    opacity: .2s;
    text-decoration: none;
    color: rgb(85, 85, 85);
  }
  .displaySearchBox li a img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .displaySearchBox li a:hover{
    background: rgb(230, 230, 230);
    /* border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px; */
    }
  .displaySearchBox li:last-child a:hover{
    background: rgb(230, 230, 230);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    }
  .displaySearchBox li:last-child a{
    border-bottom: none;
  }
  .search-bar{
    padding-left: 5px;
  }
  .search-bar input{
    background: white;
    width: 300px;
    border: 2px solid #ffffff;
    outline: none;
    border-radius: 20px;
    /* padding: 10px 8px 8px 17px; */
    padding: 6px 15px 3px 12px;

  }
  .search-bar button{
    background: transparent;
    margin-left: -40px;
    border: none;
    outline: none;
    color:rgb(130, 130, 130);
  }
</style>



