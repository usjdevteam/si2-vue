<template>
  <v-app>
      <v-app-bar
      clipped-left
      app color="#031250" class="u-header"
    >
      <div class="u-title-background-danger" @click="drawer = !drawer">
        <p class="u-title-first">
          SI<span class="u-title-second">2</span>
        </p>
      </div>

      <v-spacer></v-spacer>

      <span>
          <v-text-field
           
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
         <v-avatar >
          <v-img class="u-question"
                  :src="require('@/assets/images/questionmark.png')"
          ></v-img>
        </v-avatar>
        <div>
          <!-- <v-menu left bottom>
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
          </v-menu> -->


    <!-- GEO -->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="indigo"
            dark
            v-on="on"
          >
            Menu as Popover
          </v-btn>
        </template>
  
        <v-card>
            <div class="col-md-12">
                adasd
            </div>
          <!-- <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>
  
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
                <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list> -->
  
          <v-divider></v-divider>
  
          <!-- <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="message" color="purple"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Enable messages</v-list-tile-title>
            </v-list-tile>
  
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="hints" color="purple"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Enable hints</v-list-tile-title>
            </v-list-tile>
          </v-list> -->
  
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-menu>



        </div>

    </v-app-bar>

       <v-navigation-drawer
      v-model="drawer"
      app
      clipped

    >
    <v-list-item-group active-class="#031250">
        
        <v-list-item one-line>
            <v-list-item-content class="u-sideMenu-avatar">
                <v-list-item-title class="u-sideMenu-profile">
                    <v-img
                        :src="require('@/assets/images/avatar.png')"
                    ></v-img>
                </v-list-item-title>

                <v-list-item-subtitle class="u-sideMenu-profileText">Welcome, Antoinette!</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

      <v-list>
          <v-expansion-panels class="u-sideMenu-Panel">

            <v-list-item link class="u-sideMenu-home">

            <v-list-item-avatar>
                <!-- <font-awesome-icon class="u-sideMenu-avatar-specialMargin"/> -->
                     <v-img class="u-sideMenu-avatar-specialMargin"
                        :src="require('@/assets/images/home.png')"
                     ></v-img>
            </v-list-item-avatar>

            <v-list-item-title class="u-sideMenu-homeTitle">
                Home</v-list-item-title>

             <v-icon class="u-sideMenu-avatar-homeIcon">
                mdi-chevron-right
            </v-icon>
        </v-list-item>

        <v-divider></v-divider>

                <!-- Institutions -->
                <v-expansion-panel class="u-sideMenu-panelMargin">
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/institutions.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">Institutions</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">All Institutions</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                    </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-divider></v-divider>

                    <!-- Programs -->
                    <v-expansion-panel class="u-sideMenu-panelMargin">
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/programs.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">Programs</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">All Programs</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-divider></v-divider>

                    <!-- Cohorts -->
                    <v-expansion-panel  class="u-sideMenu-panelMargin"> 
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain
                                :src="require('@/assets/images/cohorts.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">Cohorts</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">All Cohorts</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Cohort Courses</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Cohort Subscribers</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-divider></v-divider>

                    <!-- Courses -->
                   <v-expansion-panel class="u-sideMenu-panelMargin">
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/courses.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">Courses</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">All Courses</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Course Subscribers</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-divider></v-divider>

                    <!-- Documents -->
                    <v-expansion-panel class="u-sideMenu-panelMargin">
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/documents.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">Documents</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">All Documents</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                    </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-divider></v-divider>

                    <!-- Users -->
                    <v-expansion-panel class="u-sideMenu-panelMargin">
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/users.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">Users</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">All Users</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                    </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-divider></v-divider>
                    
                    <!-- SI2Admin -->
                    <v-expansion-panel class="u-sideMenu-panelMargin">
                    <v-expansion-panel-header class="u-sideMenu-expansion">

                        <v-list-item-avatar>
                            <v-img contain class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/si2admin.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle">SI2 Admin</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Manage Roles</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content>
                            <v-list-item-title class="u-sideMenu-subItem">Manage ProgramLevels</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                    </v-expansion-panel-content>
                    </v-expansion-panel>
        </v-expansion-panels>
      </v-list>


    </v-list-item-group>
    </v-navigation-drawer>

    <v-main>
      <div col-md-12>
        <router-view></router-view>
      </div>

    </v-main>
  </v-app>
</template>
<script src="./ApplicationLayout.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/ApplicationBar";
    @import "../../../src/assets/styles/components/ApplicationLayout";
    @import "../../../src/assets/styles/components/ApplicationSideMenu";
</style>
