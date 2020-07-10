<template>
    <div class="col-md-12 no-padding-top" >
        <v-container>

        <v-layout row>
            <v-flex md12>
                <div class="col-md-12">
                    <v-row>
                        <h3 class='margin-right-2-p u-spacing u-header-text'>Add New Institution</h3>
                        <v-btn
                        class="ma-1 u-btn u-btn-outlined-primary"
                        @click="insertNewInstitution"
                        >
                        Add New
                        </v-btn>
                    </v-row>
                </div>
            </v-flex>
        </v-layout>

        <v-layout row>
             <v-flex md12>
                <div class="col-md-12">
                    
                    <v-form
                        ref="form"
                    >

                    <div>
                        <v-card
                            class="mx-auto"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between u-card-header">
                                <h4 class="u-card-title">French Name</h4>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-window>

                                <v-window-item >
                                <v-card-text>
                                    <v-text-field
                                    v-model="formAddInstitution.frenchName"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.frenchName.$touch()"
                                    @blur="$v.formAddInstitution.frenchName.$touch()"
                                    :error-messages="frenchNameErrors"
                                    ></v-text-field>

                                    <span class="caption grey--text text--darken-1 u-card-code">
                                        Example: École supérieure d'ingénieurs de Beyrouth
                                    </span>
                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>
                    </div>

                    <div class="u-card-margin">
                        <v-card
                            class="mx-auto"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between u-card-header">
                                <h4 class="u-card-title">English Name</h4>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-window>

                                <v-window-item >
                                <v-card-text>
                                    <v-text-field
                                    v-model="formAddInstitution.englishName"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.englishName.$touch()"
                                    @blur="$v.formAddInstitution.englishName.$touch()"
                                    :error-messages="englishNameErrors"
                                    ></v-text-field>

                                    <span class="caption grey--text text--darken-1 u-card-code">
                                        Example: School of Engineering in Beirut
                                    </span>
                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>
                    </div>

                    <div class="u-card-margin">
                        <v-card
                            class="mx-auto"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between u-card-header">
                                <h4 class="u-card-title">Arabic Name</h4>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-window>

                                <v-window-item >
                                <v-card-text>
                                    <v-text-field
                                    v-model="formAddInstitution.arabicName"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.arabicName.$touch()"
                                    @blur="$v.formAddInstitution.arabicName.$touch()"
                                    :error-messages="arabicNameErrors"
                                    ></v-text-field>

                                    <span class="caption grey--text text--darken-1 u-card-code">
                                        Example: مَعْهَد الهَنْدَسة العالِي في بَيروت
                                    </span>
                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>
                    </div>

                    <div class="u-card-margin">
                        <v-card
                            class="mx-auto"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between u-card-header">
                                <h4 class="u-card-title">Code</h4>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-window>

                                <v-window-item >
                                <v-card-text>
                                    <v-text-field
                                    v-model="formAddInstitution.code"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.code.$touch()"
                                    @blur="$v.formAddInstitution.code.$touch()"
                                    :error-messages="codeErrors"
                                    ></v-text-field>

                                    <span class="caption grey--text text--darken-1 u-card-code">
                                        Example: ESIB - Maximum 6 characters
                                    </span>
                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>
                    </div>

                    <!-- -->
                    <div class="u-card-margin">
                        <v-card
                            class="mx-auto"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between u-card-header">
                                <h4 class="u-card-title">Address</h4>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-window>

                                <v-window-item>
                                <v-card-text>
                                    <v-row>
                                        <span class="u-card-label">
                                            Country 
                                        </span>
                                    
                                        <v-select class="u-textCountry-padding"
                                        v-model="formAddInstitution.countryFr"
                                        id="country" 
                                        name="country"
                                        :items="countryList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.countryFr.$touch()"
                                        @blur="$v.formAddInstitution.countryFr.$touch()"
                                        :error-messages="countryFrErrors"
                                        >
                                           <option v-for="country in countryList" :key="country.id" :value="country.value">{{ country }}</option>
                                        </v-select>
                                    
                                        <span class="u-card-labelArabic">
                                            دولة 
                                        </span>

                                        <v-select class="u-text-paddingAr"
                                        v-model="formAddInstitution.countryAr"
                                        id="countryAr" 
                                        name="countryAr"
                                        :items="countryList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.countryAr.$touch()"
                                        @blur="$v.formAddInstitution.countryAr.$touch()"
                                        :error-messages="countryArErrors"
                                        >
                                            <option v-for="country in countryList" :key="country.id" :value="country.value">{{ country }}</option>
                                        </v-select>
                                    </v-row>
                                    <v-row>
                                        <span class="u-card-labelCity">
                                            City 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.cityFr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.cityFr.$touch()"
                                        @blur="$v.formAddInstitution.cityFr.$touch()"
                                        :error-messages="cityFrErrors"
                                        ></v-text-field>

                                        <span class="u-card-labelArabic">
                                            مدينة 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.cityAr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.cityAr.$touch()"
                                        @blur="$v.formAddInstitution.cityAr.$touch()"
                                        :error-messages="cityArErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelStreet">
                                            Street 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.streetFr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.streetFr.$touch()"
                                        @blur="$v.formAddInstitution.streetFr.$touch()"
                                        :error-messages="streetFrErrors"
                                        ></v-text-field>

                                        <span class="u-card-labelArabic">
                                            شارع 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.streetAr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.streetAr.$touch()"
                                        @blur="$v.formAddInstitution.streetAr.$touch()"
                                        :error-messages="streetArErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelLatitude">
                                            Latitude 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.latitude"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.latitude.$touch()"
                                        @blur="$v.formAddInstitution.latitude.$touch()"
                                        :error-messages="latitudeErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelLongitude">
                                            Longitude 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.longitude"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.longitude.$touch()"
                                        @blur="$v.formAddInstitution.longitude.$touch()"
                                        :error-messages="longitudeErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                      <!-- <template> api of google name it map, and give it the lat and long
                                            <gmaps-map>
                                                <gmaps-marker :position="{ lat: -27, lng: 153 }" />
                                            </gmaps-map>
                                        </template>-->
                                    </v-row>

                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>
                    </div>
                    <!-- -->

                    <div class="mapouter">
                        <div class="gmap"  
                        :marker="{ lat: formAddInstitution.latitude, lng: formAddInstitution.longitude }">
                            <iframe width="600" height="500" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=lebanon&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" scrolling="no" 
                            marginheight="0" marginwidth="0"></iframe>
                            </div>
                    </div>

                    <div class="u-card-margin">
                        <v-card
                            class="mx-auto"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between u-card-header">
                                <h4 class="u-card-title">Contact Info</h4>
                            </v-card-title>

                            <v-divider></v-divider>

                            <v-window>

                                <v-window-item >
                                <v-card-text>
                                    <v-row>
                                        <span class="u-card-labelEmail">
                                            Email 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.email"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.email.$touch()"
                                        @blur="$v.formAddInstitution.email.$touch()"
                                        :error-messages="emailErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelPhone">
                                            Phone 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="formAddInstitution.phone"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.formAddInstitution.phone.$touch()"
                                        @blur="$v.formAddInstitution.phone.$touch()"
                                        :error-messages="phoneErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                            <span class="u-card-labelFax">
                                                Fax 
                                            </span>

                                            <v-text-field class="u-text-padding"
                                            v-model="formAddInstitution.fax"
                                            color ="#031250"
                                            required
                                            outlined
                                            dense
                                            @input="$v.formAddInstitution.fax.$touch()"
                                            @blur="$v.formAddInstitution.fax.$touch()"
                                            :error-messages="faxErrors"
                                            ></v-text-field>
                                    </v-row>

                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>

                        <v-layout row>
                            <v-flex md12>
                                <span class="col-md-12">
                                    <v-row>
                                        <span></span>
                                        <span></span>
                                        <v-btn
                                        class="ma-1 u-btn u-btn-outlined-primary"
                                        @click="insertNewInstitution"
                                        >
                                        Add New
                                        </v-btn>
    
                                    </v-row>
                                </span>
                            </v-flex>
                        </v-layout>

                    </div>
                    </v-form>
                
                </div>
            </v-flex>
        </v-layout> 
        </v-container>
    </div>


  
</template>


<script src="./AddInstitutionController.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/AddInstitution";
</style>