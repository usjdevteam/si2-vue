<template>
    <div class="col-md-12 no-padding-top" >
        <v-container>

        <v-layout row>
            <v-flex md12>
                <div class="col-md-12">
                    <v-row>
                        <h3 class='margin-right-2-p u-spacing u-header-text'>Edit Institution</h3>
                        <v-btn
                        class="ma-1 u-btn u-btn-outlined-primary"
                        @click="editInstitution"
                        >
                        Save
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
                                    v-model="institution.nameFr"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.institution.nameFr.$touch()"
                                    @blur="$v.institution.nameFr.$touch()"
                                    :error-messages="nameFrErrors"
                                    >
                                         {{institution.nameFr ? institution.nameFr : ''}}
                                    </v-text-field>

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
                                    >
                                        {{institution.nameEn ? institution.nameEn : ''}}
                                    </v-text-field>

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
                                    
                                    >
                                        {{institution.nameAr ? institution.nameAr : ''}}
                                    </v-text-field>

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
                                    v-model="institution.code"
                                    color ="#031250"
                                    required
                                    outlined
                                    dense
                                    @input="$v.institution.code.$touch()"
                                    @blur="$v.institution.code.$touch()"
                                    :error-messages="codeErrors"
                                    >
                                        {{institution.code ? institution.code : null}}
                                    </v-text-field>

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
                                        @input="$v.institution.countryFr.$touch()"
                                        @blur="$v.institution.countryFr.$touch()"
                                        :error-messages="countryFrErrors"
                                        >
                                           <option v-for="country in countryList" :key="country.id" :value="country.value">{{ country }}</option>
                                        </v-select>
                                    
                                        <span class="u-card-labelArabic">
                                            دولة 
                                        </span>

                                        <v-select class="u-text-paddingAr"
                                        v-model="institution.address.countryAr"
                                        id="countryAr" 
                                        name="countryAr"
                                        :items="countryArList"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        placeholder="...أختر"
                                        @input="$v.institution.countryAr.$touch()"
                                        @blur="$v.institution.countryAr.$touch()"
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
                                        v-model="institution.address.cityFr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.cityFr.$touch()"
                                        @blur="$v.institution.cityFr.$touch()"
                                        :error-messages="cityFrErrors"
                                        >
                                            {{institution.address.cityFr ? institution.address.cityFr : ''}}
                                        </v-text-field>

                                        <span class="u-card-labelArabic">
                                            مدينة 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.cityAr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.cityAr.$touch()"
                                        @blur="$v.institution.cityAr.$touch()"
                                        :error-messages="cityArErrors"
                                        >
                                            {{institution.address.cityAr ? institution.address.cityAr : ''}}
                                        </v-text-field>
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
                                        @input="$v.institution.streetFr.$touch()"
                                        @blur="$v.institution.streetFr.$touch()"
                                        :error-messages="streetFrErrors"
                                        >
                                            {{institution.address.streetFr ? institution.address.streetFr : ''}}
                                        </v-text-field>

                                        <span class="u-card-labelArabic">
                                            شارع 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.streetAr"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.streetAr.$touch()"
                                        @blur="$v.institution.streetAr.$touch()"
                                        :error-messages="streetArErrors"
                                        >
                                            {{institution.address.streetAr ? institution.address.streetAr : ''}}
                                        </v-text-field>
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
                                        @input="$v.institution.latitude.$touch()"
                                        @blur="$v.institution.latitude.$touch()"
                                        @change="latitudeChange"
                                        :error-messages="latitudeErrors"
                                        >
                                            {{institution.address.latitude ? institution.address.latitude : 0}}
                                            
                                        </v-text-field>
                                    </v-row>

                                    <v-row>
                                        <span class="u-card-labelLongitude">
                                            Longitude 
                                        </span>

                                        <v-text-field class="u-text-padding"
                                        v-model="institution.address.longitude"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.longitude.$touch()"
                                        @blur="$v.institution.longitude.$touch()"
                                        @change="longitudeChange"
                                        :error-messages="longitudeErrors"
                                        >
                                            {{institution.address.longitude ? institution.address.longitude : 0}}
                                        </v-text-field>
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
                                        v-model="institution.contactInfo.email"
                                        color ="#031250"
                                        required
                                        outlined
                                        dense
                                        @input="$v.institution.email.$touch()"
                                        @blur="$v.institution.email.$touch()"
                                        :error-messages="emailErrors"
                                        >
                                            {{institution.contactInfo.email ? institution.contactInfo.email : ''}}
                                        </v-text-field>
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
                                        @input="$v.institution.phone.$touch()"
                                        @blur="$v.institution.phone.$touch()"
                                        :error-messages="phoneErrors"
                                        >
                                            {{institution.contactInfo.phone ? institution.contactInfo.phone : ''}}
                                        </v-text-field>
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
                                            @input="$v.institution.fax.$touch()"
                                            @blur="$v.institution.fax.$touch()"
                                            :error-messages="faxErrors"
                                            >
                                                {{institution.contactInfo.fax ? institution.contactInfo.fax : ''}}
                                            </v-text-field>
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
                                            @click="editInstitution"
                                            >
                                            Save
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


<script src="./EditInstitutionController.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/AddInstitution";
</style>