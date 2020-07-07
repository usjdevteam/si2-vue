<template>
    <div class="col-md-12 no-padding no-padding-top" >
        <v-app-bar
            color="rgba(218, 210, 197, 0.51)"
            height = "80vh"
        >
        
            <v-img
                class="mx-2"
                :src="require('@/assets/images/logoUSJ145.png')"
                max-width="161"
                max-height="60"
                contain
            ></v-img>
            
            <v-spacer></v-spacer>
            
            <v-btn class="ma-2 u-btn u-btn-outlined-primary u-btn-lg" large>Sign in</v-btn>
            
        </v-app-bar>

        <v-container>

        <v-layout row>
            <v-flex md6 class="padding-top-5-p">
                <div class="col-md-12">
                    <h1 class='usj-color-primary'>Welcome to your digital information system</h1>
                    <hr class="u-hr u-hr-red margin-top-2-p">
                </div>
            <div class="col-md-12">
            
                <v-form
                    ref="form"
                >
                    <v-text-field
                    v-model="formLoginData.email"
                    class="width-80-p"
                    label="E-mail"
                    color ="#031250"
                    required
                    outlined
                    dense
                    @input="$v.formLoginData.email.$touch()"
                    @blur="$v.formLoginData.email.$touch()"
                    :error-messages="emailErrors"
                    ></v-text-field>
                    

                    <v-text-field
                    v-model="formLoginData.password"
                    class="width-80-p"
                    label="Password"
                    :type="'password'"
                    color ="#031250"
                    required
                    dense
                    outlined
                    @input="$v.formLoginData.password.$touch()"
                    @blur="$v.formLoginData.password.$touch()"
                    :error-messages="passwordErrors"
                    ></v-text-field>



                    <v-alert
                        v-if="formLoginData.successLogin == false"
                        class="width-80-p u-alert u-alert-danger-outlined"
                        outlined
                        dense
                        
                        >
                        <strong>Incorrect email/password</strong>
                    </v-alert>

                    <div class="col-md-12 no-padding">
                        <!-- <v-btn text large class="usj-color-primary text-capitalize">Forgot password?</v-btn> -->
                        <a class="u-link">Forgot password?</a>
                    </div>
                    
                    <div class="col-md-12 no-padding">
                        <v-btn large
                        class="mr-4 u-btn u-btn-lg u-btn-rounded-primary width-80-p"
                        @click="signIn" 
                        >
                        Sign in
                        </v-btn>
                    </div>


                </v-form>
            
            </div>
            </v-flex>
            <v-flex md6>
                <div class="col-md-12">
                    <div class="padding-middle-10-p">
                        <div class="cercle ">
                            <v-img id="img-login"
                                :src="require('@/assets/images/loginIn.png')"
                                contain
                            ></v-img>
                        </div>
                    </div>
                    

                </div>
            </v-flex>
        </v-layout> 
        </v-container>
    </div>


  
</template>


<script src="./SignInController.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/signIn";
</style>