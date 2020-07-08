<template>
    <div class="col-md-12 no-padding-top" >
        <v-container>
            <v-layout row>
                <v-flex md12>
                    <div class="col-md-12">
                        <v-row>
                            <h3 class="margin-right-2-p">Institution</h3>
                            <v-btn class="ma-1 u-btn u-btn-outlined-primary">Add New</v-btn>
                        </v-row>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex md12>
                    <div clas="col-md-12">
                        <!-- SEARCH -->
                        <div class="row">
                            <!-- <div class="col-md-4 offset-md-5">

                                <v-text-field
                                label=""
                                :type="'text'"
                                color ="#031250"
                                dense
                                outlined
                                class="pull-right"
                                ></v-text-field>
                            </div>
                            <div class="col-md-3">
                                <v-btn class="ma-2 u-btn u-btn-outlined-primary pull-right">Search Institutions</v-btn>
                            </div> -->

                            <!-- <v-text-field  color ="#031250" dense outlined class="col-md-3 u-input-super-dense pull-right"></v-text-field> -->

                            
                            
                            <div class="col-md-2">
                                <span>10 from x</span>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="col-md-5 ">
                                <form class="form-inline pull-right">
                                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" v-model="institutionSearchText" >
                                    <v-btn class="mb-2 u-btn u-btn-outlined-primary" @click="searchInstitution">Search Institutions</v-btn>
                                </form>
                            </div>


                        </div>
                           <!-- SEARCH -->   
                        <v-data-table
                            :headers="headers"
                            :items="institutions"
                            :items-per-page="5"
                            class="u-table u-table-primary u-table-bordered-primary"
                        >
                        <template #item.full_address="{ item }">{{item.address.streetFr}} - {{item.address.cityFr}} - {{item.address.countryFr}}</template>
                        <template #item.editRow> <font-awesome-icon icon="edit" size="2x" /></template>
                        
                        </v-data-table>
                        <div class="text-center pt-2">
                            <v-pagination v-model="page" :length="pageCount"></v-pagination>
                        </div>

                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>




<script>
export default {
    name: 'Home'
}
</script>