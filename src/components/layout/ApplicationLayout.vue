<template>
  
  <v-app>
      <v-app-bar
      clipped-left
      app
      color="#031250"
      class="u-header"
    > 

      <v-toolbar-title @click="goToHomePage" class="u-title-background-danger" style="padding-left: 0; padding-top: 0; margin-left: 1%; ">
          <span class="u-title-first">
          <p><span class="u-title-second">SI</span><span>2</span></p>
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
        <div>
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
        </div>
    
    <div>
     
        <v-img class="u-question"
                  :src="require('@/assets/images/questionmark.png')"
          ></v-img>
     
    </div>

    <div>
        <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
        offset-x
        v-model="menu"
      >
        <template v-slot:activator="{ on }">
          <v-btn id="btn-avatar" icon v-on="on">
                  <v-img
                      class="u-avatar"
                      :src="require('@/assets/images/avatar.png')"
                      @click="overlay = !overlay" 
                  ></v-img>
            </v-btn>
        </template>
  
        <v-card >
            <div class="col-md-12 u-popup">
                <div class="row">
                  <div class="col-md-3">
                    <v-avatar >
                      <v-img
                          class="u-avatar"
                          :src="require('@/assets/images/avatar.png')"
                      ></v-img>
                    </v-avatar>
                  </div>
                  <div class="col-md-8 no-padding-bottom">
                    <h4 class="person-name">Antoinette Tamer</h4>
                    <p>Head of Unit - Teacher - Student</p>
                  </div>
                </div>
                <div class="row text-center">
                  <a class="text-center u-link-danger text-bold margin-left-35-p margin-bottom-4-p">View Profile</a>
                </div>

                  <div class="row">
                    <div class="col-md-12 u-list-item u-section-item">
                      <span>Account</span>
                    </div>
                   
                  </div>
                  <div class="row">
                    <div class="col-md-12 u-list-item u-sub-item">
                      <span>Settings</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 u-list-item u-sub-item">
                      <span>Change Password</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 u-list-item u-section-item">
                      <span>Manage</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 u-list-item u-sub-item">
                      <span>Subscriptions</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 u-list-item u-sub-item">
                      <span>Sign Out</span>
                    </div>
                  </div>
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
   
        
          <v-expansion-panels class="u-sideMenu-Panel" :focusable="focusable" :hover="hover">

          <v-expansion-panel class="u-sideMenu-panelMargin">
              <v-list-item link class="u-sideMenu-expansion" v-bind:class="{ 'text-bold u-menu-active' : isActiveTab() == 0 }"
              @click="routePages('home')">
            

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
        </v-expansion-panel>

        <v-divider></v-divider>

                <!-- Institutions -->
                <v-expansion-panel class="u-sideMenu-panelMargin" >
                    <v-expansion-panel-header class="u-sideMenu-expansion" v-bind:class="{ 'u-menu-active' : isActiveTab() == 1 || isActiveTab() == 2  }">

                        <v-list-item-avatar>
                            <v-img class="u-sideMenu-avatar-specialMargin"
                                :src="require('@/assets/images/institutions.png')"
                            ></v-img>
                        </v-list-item-avatar>

                        
                        <v-list-item-title class="u-sideMenu-expansionTitle" >Institutions</v-list-item-title>

                    </v-expansion-panel-header>
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        <v-list-item-content class= "u-content-subItems">

                            <v-list-item-title class="u-sideMenu-subItem"  v-bind:class="{ 'text-bold' : isActiveTab() == 1 }" @click="routePages('institutions')">All Institutions</v-list-item-title>

                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">

                            <v-list-item-title class="u-sideMenu-subItem" v-bind:class="{ 'text-bold' : isActiveTab() == 2 }" @click="routePages('institutions/add')">Add New</v-list-item-title>
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
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">All Programs</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
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
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">All Cohorts</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">Cohort Courses</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
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
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">All Courses</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
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
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">All Documents</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
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
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">All Users</v-list-item-title>
                        </v-list-item-content >
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
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
                    <v-expansion-panel-content class= "u-content-subItems">
                        <v-list-item
                        link
                        >
                        

                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">Manage Roles</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                           
                        <v-list-item-content class= "u-content-subItems">
                            <v-list-item-title class="u-sideMenu-subItem">Manage ProgramLevels</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                    </v-expansion-panel-content>
                    </v-expansion-panel>
        </v-expansion-panels>
    


    </v-list-item-group>

    <v-overlay absolute :value="overlay">
    </v-overlay>

    </v-navigation-drawer>


    <v-main>
        
      <div col-md-12>
        <div>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="u-icon-nav" v-if="!drawer" style="margin-left: 2%; "></v-app-bar-nav-icon>
        </div>

        <router-view></router-view>
      </div>

      <v-overlay absolute :value="overlay">
      </v-overlay>

    </v-main>

  </v-app>
</template>
<script src="./ApplicationLayout.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/ApplicationBar";
    @import "../../../src/assets/styles/components/ApplicationLayout";
    @import "../../../src/assets/styles/components/ApplicationSideMenu";
</style>
