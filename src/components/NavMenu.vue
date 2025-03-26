<script lang="ts" setup>
import { ref } from 'vue'
const drawer = ref(true)
const rail = ref(false)
</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list>
          <v-list-item
            prepend-avatar="/assets/master.gif"
            title="Base datos rol"
          >
            <template v-slot:append>
              <v-btn
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-account"
            title="Personajes"
            to="personaje"
          >
          </v-list-item>
          <v-list-item prepend-icon="mdi-arm-flex" title="Bestia" to="bestia">
          </v-list-item>
          <v-list-item prepend-icon="mdi-earth" title="Pais" to="pais">
          </v-list-item>
          <v-list-item prepend-icon="mdi-map-marker" title="Lugar" to="lugar">
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar-check"
            title="Evento"
            to="evento"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Raza"
            to="raza"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-bank-outline"
            title="Cultura"
            to="cultura"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main><slot></slot></v-main>
    </v-layout>
  </v-card>
</template>
