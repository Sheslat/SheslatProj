<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <NavMenu>
    <v-container>
      <v-row align="center" style="height: 100vh" no-gutters>
        <v-col cols="12">
          <RouterView />
        </v-col>
      </v-row>
    </v-container>
  </NavMenu>
</template>
