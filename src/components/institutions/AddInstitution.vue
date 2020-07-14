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
                                    v-model="formAddInstitution.nameFr"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.nameFr.$touch()"
                                    @blur="$v.formAddInstitution.nameFr.$touch()"
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
                                    v-model="formAddInstitution.nameEn"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.nameEn.$touch()"
                                    @blur="$v.formAddInstitution.nameEn.$touch()"
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
                                    v-model="formAddInstitution.nameAr"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.formAddInstitution.nameAr.$touch()"
                                    @blur="$v.formAddInstitution.nameAr.$touch()"
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
                                    v-model="formAddInstitution.code "
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
                                        v-model="formAddInstitution.countryFr"
                                        id="country" 
                                        name="country"
                                        :items="countryList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        placeholder="Select..."
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
                                        :items="countryArList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        placeholder="...أختر"
                                        @input="$v.formAddInstitution.countryAr.$touch()"
                                        @blur="$v.formAddInstitution.countryAr.$touch()"
                                        :error-messages="countryArErrors"
                                        >
                                            <option v-for="country in countryArList" :key="country.id" :value="country.value">{{ country }}</option>
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
                                        @change="latitudeChange"
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
                                        @change="longitudeChange"
                                        :error-messages="longitudeErrors"
                                        ></v-text-field>
                                    </v-row>

                                    <v-row>
                                         <span class="u-card-labelMap">
                                            Map <br/>Location 
                                        </span>

                                        <div class="mapouter">
                                        <div class="gmap_canvas"   
                                            >
                                            <iframe width="100%" height="100%"
                                            id="gmap_canvas"
                                            :src="`https://maps.google.com/maps?q=lebanon&t=&z=13&ie=UTF8&iwloc=&output=embed&q=${this.lat} ${this.lng}&z=14`"
                                            frameborder="0" scrolling="no" 
                                            marginheight="0" marginwidth="0"></iframe>
                                        </div>
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
                                <div class="col-md-12">
                                    <v-row>
                                       <v-col class="col-md-11">
                                       </v-col>
                                       <v-col class="col-md-1">
                                            <v-btn                                             
                                            class="ma-1 u-btn u-btn-outlined-primary"
                                            @click="insertNewInstitution"
                                            >
                                            Add New
                                            </v-btn>
                                       </v-col>
                                    </v-row>
                                </div>
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