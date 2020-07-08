<template>  

    <v-list-item-group v-model="selected" active-class="#031250">

        <v-list-item two-line>
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

        <v-expansion-panels :accordion="accordion" class="u-sideMenu-Panel">

            <v-list-item link class="u-sideMenu-home">

            <v-list-item-avatar>
                <font-awesome-icon class="u-sideMenu-avatar-specialMargin" icon="user-secret" />
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
</template>

<script src="./ApplicationSideMenu.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/ApplicationSideMenu";
</style>
