<template>
    <div>



    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
        <!-- <v-row
          align="left"
          justify="center"
        > -->
          <router-view/>
        </v-row>
      </v-container>
    </v-content>
  

</div>

</template>

<script>
export default {
    name: 'Application',
   
}
</script>

