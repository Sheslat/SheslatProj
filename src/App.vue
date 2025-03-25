<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <NavMenu></NavMenu>
  
  <v-container
    fluid
    class="d-flex align-center justify-center"
    style="height: 100vh"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="10">
        <RouterView />
      </v-col>
    </v-row>
  </v-container>
</template>
