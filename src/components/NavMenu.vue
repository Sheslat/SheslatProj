<script lang="ts" setup></script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Base datos rol"
          ></v-list-item>
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
    </v-layout>
  </v-card>
</template>
