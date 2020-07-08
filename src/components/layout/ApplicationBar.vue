<template>
  <!-- <v-app id="inspire">

    <v-app-bar app color="#031250" class="u-header">
      
   
          <div class="u-title-background-danger">
            <p class="u-title-first">
              SI<span class="u-title-second">2</span>
            </p>
          </div>


        <v-spacer></v-spacer>

      <span>
          <v-text-field
            v-model="search"
            clearable
            flat
            solo
            hide-details
            hide-selected
            prepend-inner-icon="search"
            label="Search"
            class="u-searchBar"
          ></v-text-field>
       </span>

        <div>
          <v-img class="u-question"
                 :src="require('@/assets/images/questionmark.png')"
          ></v-img>
        </div>


        <div>
          <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-avatar >
                      <v-img
                          class="u-avatar"
                          :src="require('@/assets/images/avatar.png')"
                      ></v-img>
                    </v-avatar>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
                >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

  </v-app-bar>
  <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >

                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>      
  </v-app> -->

    <v-app-bar
      clipped-left
      app color="#031250" class="u-header"
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
      <div class="u-title-background-danger">
        <p class="u-title-first">
          SI<span class="u-title-second">2</span>
        </p>
      </div>

      <v-spacer></v-spacer>

      <span>
          <v-text-field
            v-model="search"
            clearable
            flat
            solo
            hide-details
            hide-selected
            prepend-inner-icon="search"
            label="Search"
            class="u-searchBar"
          ></v-text-field>
      </span>
        <div>
          <v-img class="u-question"
                  :src="require('@/assets/images/questionmark.png')"
          ></v-img>
        </div>
        <div>
          <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-avatar >
                      <v-img
                          class="u-avatar"
                          :src="require('@/assets/images/avatar.png')"
                      ></v-img>
                    </v-avatar>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
                >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <!-- <span class="title ml-3 mr-5">Google&nbsp;<span class="font-weight-light">Keep</span></span> -->
      <!-- <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field> -->

      <!-- <v-spacer></v-spacer>  -->
    </v-app-bar>


</template>




<script src="./ApplicationBar.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/ApplicationBar";
</style>

