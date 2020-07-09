<template>
    <v-navigation-drawer
        v-model="drawer" fixed
        absolute permanent
        class="usj-SideMenu" 
        >
        
        <v-list>
            <v-list-item></v-list-item>

            <v-list-item  two-line>
                <v-list-item-content class="usj-avatar-SideMenu">
                    <v-list-item-title class="usj-avatar-Header">
                    <v-list-item-avatar>
                        <v-img
                            :src="require('@/assets/images/avatar.png')"
                        ></v-img>
                    </v-list-item-avatar>
                    </v-list-item-title>

                    <v-list-item-subtitle class="usj-avatartitle-SideMenu ">Welcome, Antoinette!</v-list-item-subtitle>
                </v-list-item-content>

               
            </v-list-item>

            <v-divider></v-divider>

     <v-list>
         
      <v-list-item link>
        <v-list-item-icon>
              <v-list-item-avatar>
                        <v-img
                            :src="require('@/assets/images/home.png')"
                        ></v-img>
                    </v-list-item-avatar>
            </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>


      <v-expansion-panels>
          <!-- Institutions -->
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-list-item-icon>
                        <v-list-item-avatar>
                                    <v-img
                                        :src="require('@/assets/images/institutions.png')"
                                    ></v-img>
                                </v-list-item-avatar>
                    </v-list-item-icon>
                    Institutions
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-list-item
                    link
                    >
                    <v-list-item-icon>
                    </v-list-item-icon>
                    
                    <v-list-item-content>
                        <v-list-item-title>All Institutions</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                

                    <v-list-item
                    link
                    >
                    <v-list-item-icon>
                    </v-list-item-icon>
                    
                    <v-list-item-content>
                        <v-list-item-title>Add New</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-expansion-panel-content>
                </v-expansion-panel>


                <!-- Programs -->
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-list-item-icon>
                            <v-list-item-avatar>
                                        <v-img
                                            :src="require('@/assets/images/programs.png')"
                                        ></v-img>
                                    </v-list-item-avatar>
                            </v-list-item-icon>
                            Programs
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>All Programs</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <!-- Cohorts -->
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-list-item-icon>
                            <v-list-item-avatar>
                                        <v-img
                                            :src="require('@/assets/images/cohorts.png')"
                                        ></v-img>
                                    </v-list-item-avatar>
                            </v-list-item-icon>
                            Cohorts
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>All Cohorts</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Cohort Courses</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Cohort Subscribers</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                 <!-- Courses -->
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-list-item-icon>
                            <v-list-item-avatar>
                                        <v-img
                                            :src="require('@/assets/images/courses.png')"
                                        ></v-img>
                                    </v-list-item-avatar>
                            </v-list-item-icon>
                            Courses
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>All Courses</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Course Subscribers</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>

            <!-- Documents -->
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-list-item-icon>
                            <v-list-item-avatar>
                                        <v-img
                                            :src="require('@/assets/images/documents.png')"
                                        ></v-img>
                                    </v-list-item-avatar>
                            </v-list-item-icon>
                            Documents
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>All Documents</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <!-- Users -->
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-list-item-icon>
                            <v-list-item-avatar>
                                        <v-img
                                            :src="require('@/assets/images/users.png')"
                                        ></v-img>
                                    </v-list-item-avatar>
                            </v-list-item-icon>
                            Users
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>All Users</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Add New</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <!-- SI2Admin -->
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-list-item-icon>
                            <v-list-item-avatar>
                                        <v-img
                                            :src="require('@/assets/images/si2admin.png')"
                                        ></v-img>
                                    </v-list-item-avatar>
                            </v-list-item-icon>
                            SI2 Admin
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Manage Roles</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    

                        <v-list-item
                        link
                        >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title>Manage ProgramLevels</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-expansion-panel-content>
                </v-expansion-panel>
    </v-expansion-panels>

    </v-list>
    
    </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
    .usj-SideMenu {
        width: 1280px;
        height: 100%;
        background-position-x: 0px;
        background-position-y: 1px;
        color: #031250;
        border-color: #CCD3DC;
    }

    .usj-avatar-SideMenu {
        width: 280px;
        height: 186px;
        background-position-x: -1px;
        background-position-y: 64px;
        color: #FFFFFF;
        border-color: #CCD3DC;
        font-weight: 1px;
    }

    .usj-avatar-Header {
        width: 64px !important;
        height: 64px !important;
        background-position-x: 108px !important;
        background-position-y: 93px !important;
        align-items:center !important;
        padding-left: 40%;
    }

    .usj-avatartitle-SideMenu {
        width: 241px;
        height: 25px;
        background-position-x: 17px;
        background-position-y: 182px;
        color: #47525E;
        font-family: Lato;
        font-size: 19px;
        text-align: center;
        font-weight: 400;
        line-height: 24px;
    }

</style>