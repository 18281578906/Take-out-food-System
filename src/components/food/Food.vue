<template>
    <div>
        <header-common></header-common>  
        <router-view></router-view>
         <footer-common></footer-common>  
 
    </div>
</template>
<script>
import HeaderCommon from '../common/Header'
import FooterCommon from '../common/Footer'

export default {
    components:{
        HeaderCommon,
        FooterCommon
    },
    

    
}
</script>
<style scoped>

</style>
