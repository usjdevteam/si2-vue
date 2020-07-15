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
                        ref="form" id="formAdd"
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
                                    v-model="institution.nameFr"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.institution.nameFr.$touch()"
                                    @blur="$v.institution.nameFr.$touch()"
                                    :error-messages="nameFrErrors"
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

                    <div style="margin-top: 3%">
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
                                    v-model="institution.nameEn"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.institution.nameEn.$touch()"
                                    @blur="$v.institution.nameEn.$touch()"
                                    :error-messages="nameEnErrors"
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

                    <div style="margin-top: 3%">
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
                                    v-model="institution.nameAr"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.institution.nameAr.$touch()"
                                    @blur="$v.institution.nameAr.$touch()"
                                    :error-messages="nameArErrors"
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

                    <div style="margin-top: 3%">
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
                                    v-model="institution.code "
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.institution.code.$touch()"
                                    @blur="$v.institution.code.$touch()"
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
                    <div style="margin-top: 3%">
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
                                        v-model="institution.address.countryFr"
                                        id="country" 
                                        name="country"
                                        :items="countryList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        placeholder="Select..."
                                        @input="$v.institution.address.countryFr.$touch()"
                                        @blur="$v.institution.address.countryFr.$touch()"
                                        :error-messages="countryFrErrors"
                                        >
                                           <option v-for="country in countryList" :key="country" :value="country">{{ country }}</option>
                                        </v-select>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelCountryArabic">
                                            دولة 
                                        </span>

                                        <v-select class="u-text-padding"
                                        v-model="institution.address.countryAr"
                                        id="countryAr" 
                                        name="countryAr"
                                        :items="countryArList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        placeholder="...أختر"
                                        @input="$v.institution.address.countryAr.$touch()"
                                        @blur="$v.institution.address.countryAr.$touch()"
                                        :error-messages="countryArErrors"
                                        >
                                            <option v-for="country in countryArList" :key="country" :value="country">{{ country }}</option>
                                        </v-select>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelCity">
                                            City 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.cityFr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.address.cityFr.$touch()"
                                        @blur="$v.institution.address.cityFr.$touch()"
                                        :error-messages="cityFrErrors"
                                        ></v-text-field>

                                        <span class="u-card-labelArabic">
                                            مدينة 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.cityAr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.address.cityAr.$touch()"
                                        @blur="$v.institution.address.cityAr.$touch()"
                                        :error-messages="cityArErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelStreet">
                                            Street 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.streetFr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.address.streetFr.$touch()"
                                        @blur="$v.institution.address.streetFr.$touch()"
                                        :error-messages="streetFrErrors"
                                        ></v-text-field>

                                        <span class="u-card-labelArabic">
                                            شارع 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.streetAr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.address.streetAr.$touch()"
                                        @blur="$v.institution.address.streetAr.$touch()"
                                        :error-messages="streetArErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelLatitude">
                                            Latitude 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.latitude"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.address.latitude.$touch()"
                                        @blur="$v.institution.address.latitude.$touch()"
                                        :error-messages="latitudeErrors"
                                        ></v-text-field>
                                   
                                        <span class="u-card-labelLongitude">
                                            Longitude 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.longitude"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.address.longitude.$touch()"
                                        @blur="$v.institution.address.longitude.$touch()"
                                        :error-messages="longitudeErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>

                                         <span class="u-card-labelMap">
                                            Map <br/>Location 
                                        </span>
        
                                       
                                        <div class="gmap_canvas"   
                                            >
                                            <iframe width="100%" height="100%"
                                            id="gmap_canvas"
                                            :src="`https://maps.google.com/maps?q=lebanon&t=&z=13&ie=UTF8&iwloc=&output=embed&q=${this.institution.address.latitude} ${this.institution.address.longitude}&z=14`"
                                            frameborder="0" scrolling="no" 
                                            marginheight="0" marginwidth="0"></iframe>
                                        </div>
                                  
                                  </v-row>


                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>
                    </div>
                    <!-- -->

                    <div style="margin-top: 3%">
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
                                        v-model="institution.contactInfo.email"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.contactInfo.email.$touch()"
                                        @blur="$v.institution.contactInfo.email.$touch()"
                                        :error-messages="emailErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelPhone">
                                            Phone 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.contactInfo.phone"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.contactInfo.phone.$touch()"
                                        @blur="$v.institution.contactInfo.phone.$touch()"
                                        :error-messages="phoneErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                            <span class="u-card-labelFax">
                                                Fax 
                                            </span>

                                            <v-text-field class="u-text-padding"
                                            v-model="institution.contactInfo.fax"
                                            color ="#031250"
                                            required
                                            outlined
                                            dense
                                            @input="$v.institution.contactInfo.fax.$touch()"
                                            @blur="$v.institution.contactInfo.fax.$touch()"
                                            :error-messages="faxErrors"
                                            ></v-text-field>
                                    </v-row>

                                </v-card-text>
                            </v-window-item>
                            </v-window>

                            <v-divider></v-divider>
                        </v-card>

                         <div class="col-md-12 pt-2 no-padding">
                            <div class="row">
                            
                                <div class="col-md-2">
                                </div>

                                <v-spacer></v-spacer>
                                <div class="col-md-5 ">
                                    <div class="text-right">
                                        <v-btn                                             
                                            class="ma-1 u-btn u-btn-outlined-primary"
                                            @click="insertNewInstitution"
                                            >
                                            Add New
                                            </v-btn>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        

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