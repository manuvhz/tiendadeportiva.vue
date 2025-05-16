<template>
    <v-app-bar :elevation="2"
     height="200"
     color="red"
     class="fondo">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
      
        <v-app-bar-title>Application Bar</v-app-bar-title>
        <CarritoCompra></CarritoCompra>
      </v-app-bar>
</template>
<style scoped>
.fondo{
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucGzaJ4tCfSdzj8xy2JKGA_CLnTrW0LzE3g&s");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; 
}
</style>