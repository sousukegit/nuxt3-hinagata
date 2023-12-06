<template>
<button @click="switchMode" class="border-emerald-800 border-4 rounded-sm bg-white text-black dark:bg-black dark:text-white">
    {{ darkOrEmpty ||"light"}}mode
</button>

</template>


<script lang="ts" setup>

defineProps<{
    darkOrEmpty:string|null;
    switchMode:()=>void;
}>();



</script>