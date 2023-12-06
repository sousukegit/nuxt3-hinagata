<template>
   <div :class="mode">
  <ModeSwitcher :dark-or-empty="mode" :switch-mode="switchMode"></ModeSwitcher>
  
 
  <div class="bg-emerald-200 dark:bg-emerald-900 dark:text-white" >sousuek</div>

  <div class="bg-blue-400 dark:bg-red-600">hogehogehgoe</div>




    </div>


</template>

<script setup lang="ts">
//ダークかライトか切り替え用のrefを用意
const mode = useCookie("mode",{maxAge:60*60*24*365,})
const switchMode = () =>{
  mode.value =mode.value? "" :"dark";
  
}

 


</script>