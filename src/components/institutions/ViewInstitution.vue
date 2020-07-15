<template>
    <div class="col-md-12 no-padding-top" >
        <v-container>
            <v-layout row>
                <v-flex md12>
                    <div class="col-md-12">
                        <v-row>
                            <h3 class="margin-right-2-p dark-blue-color">View Institution</h3>
                            <v-btn class="ma-1 u-btn u-btn-outlined-primary" @click="editInstitution">Edit</v-btn>
                        </v-row>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex md12>
                    <div class="col-md-12">
                        <div clas="col-md-12" v-if="institution != {}">

                            <div class="row">
                                <div class="col-md-2" 
                                    v-if="institution.nameFr != null && institution.nameEn != null &&institution.nameAr != null" >
                                <label class="control-label">Name:</label>
                                </div>
                                <div class="col-md-10">
                                    <p class="control-label-data" v-if="institution.nameFr != null" >{{institution.nameFr}}</p>
                                    <p class="control-label-data" v-if="institution.nameEn != null" >{{institution.nameEn}}</p>
                                    <p class="control-label-data" v-if="institution.nameAr != null" >{{institution.nameAr}}</p>
                                </div>
                            </div>


                            <div class="row" v-if="institution.code != undefined">
                                <div class="col-md-2">
                                <label class="control-label">Code:</label>
                                </div>
                                <div class="col-md-10">
                                    <label class="control-label-data">{{institution.code}}</label>
                                </div>
                            </div>

                            <div class="row" v-if="institution.address != undefined">
                                <div class="col-md-2">
                                <label class="control-label">Address:</label>
                                </div>
                                <div class="col-md-10">
                                    <p class="control-label-data">{{institution.address.streetFr+", "+institution.address.cityFr+", "+institution.address.countryFr}}</p>
                                    <p class="control-label-data">{{institution.address.streetAr+", "+institution.address.cityAr+", "+institution.address.countryAr}}</p>
                                
                                </div>
                            </div>


                            <div class="row" v-if="institution.contactInfo != undefined">
                                <div class="col-md-2">
                                <label class="control-label">Email:</label>
                                </div>
                                <div class="col-md-10">
                                    <label class="control-label-data">{{institution.contactInfo.email}}</label>
                                    
                                </div>
                            </div>

                            <div class="row" v-if="institution.contactInfo != undefined">
                                <div class="col-md-2">
                                <label class="control-label">Phone:</label>
                                </div>
                                <div class="col-md-10">
                                    <label class="control-label-data">{{institution.contactInfo.phone}}</label>
                                    
                                </div>
                            </div>

                            <div class="row" v-if="institution.contactInfo != undefined">
                                <div class="col-md-2">
                                <label class="control-label">Fax:</label>
                                </div>
                                <div class="col-md-10">
                                    <label class="control-label-data">{{institution.contactInfo.fax}}</label>
                                    
                                </div>
                            </div>



                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


  <!--<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script> -->
<script src="./ViewInstitutionController.js"> </script>


<style lang="scss">
    @import "../../../src/assets/styles/components/viewInstitutionController";
</style>