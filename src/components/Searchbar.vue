<template>
    <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search"
            class="Searchbar SearchbarSelector"
          ></v-text-field>
</template>


<style scoped>

    .Searchbar {
        background-color: #FFFFFF;
        border-radius: 9px;
        width: 253px;
        height: 35px;
        background-position-x: 886px;
        background-position-y: 15px;
    }

    .SearchbarSelector {
    background-color: #FFFFFF;
    border-radius: 9px;
    width: 253px;
    height: 35px;
    }
</style>