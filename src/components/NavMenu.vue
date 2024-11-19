<script lang="ts" setup>

</script>
<template>
  <v-card>
   <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Base datos rol"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          
            <v-list-item prepend-icon="mdi-account" title="Personajes" value="myfiles">
              <RouterLink to="/personaje"></RouterLink>
            </v-list-item>
            <v-list-item prepend-icon="mdi-arm-flex" title="Bestia" value="shared">
              <RouterLink to="/bestia"></RouterLink>
            </v-list-item>
            <v-list-item prepend-icon="mdi-earth" title="Pais" value="starred">
              <RouterLink to="/pais"></RouterLink>
            </v-list-item>
            <v-list-item prepend-icon="mdi-map-marker" title="Lugar" value="myfiles">
              <RouterLink to="/lugar"></RouterLink>
            </v-list-item>
            <v-list-item prepend-icon="mdi-calendar-check" title="Evento" value="myfiles">
              <RouterLink to="/evento"></RouterLink>
            </v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Raza" value="myfiles">
              <RouterLink to="/raza"></RouterLink>
            </v-list-item>
            <v-list-item prepend-icon="mdi-bank-outline" title="Cultura" value="myfiles">
              <RouterLink to="/cultura"></RouterLink>
            </v-list-item>
         

        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>