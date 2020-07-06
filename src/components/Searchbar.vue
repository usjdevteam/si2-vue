<template>
    <v-text-field
            v-model="search"
            clearable
            flat
            hide-details
            prepend-inner-icon="search"
            label="Search"
            class="usj-Header-SearchBar"
          ></v-text-field>
</template>


<style scoped>

    .usj-Header-SearchBar {
        background-color: #FFFFFF;
        border-radius: 9px;
        width: 253px;
        height: 35px;
        background-position-x: 886px;
        background-position-y: 15px;
    }
</style>