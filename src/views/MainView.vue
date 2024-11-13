<template>    
    <div>
        <NavMenu></NavMenu>
    </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue';
import { createRazaRepository } from '@/modules/raza/infrastructure/RazaRepository';


const razaRepository = createRazaRepository()
console.log(razaRepository.getAll())
</script>

