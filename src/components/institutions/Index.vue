<template>
    <div class="col-md-12 no-padding-top" >
        <v-container>
            <v-layout row>
                <v-flex md12>
                    <div class="col-md-12">
                        <v-row>
                            <h3 class="margin-right-2-p line-height-2-p5-rem dark-blue-color">Institutions</h3>
                            <v-btn class="ma-1 u-btn u-btn-outlined-primary" @click="addInstitution">Add New</v-btn>
                        </v-row>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex md12>
                    <div clas="col-md-12">
                        <!-- SEARCH -->
                        <div class="row">
                            
                            <div class="col-md-2 padding-top-2-p no-padding-bottom" v-if="institutions.data.length > 0">
                                <span class="lato dark-blue-color text-bold">{{getNumberString}}</span>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="col-md-5 no-padding-bottom">
                                <form class="form-inline pull-right ">
                                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" v-model="pageInstitutionOption.institutionSearchText" >
                                    <v-btn class="mb-2 u-btn u-btn-outlined-primary" @click="searchInstitution">Search Institutions</v-btn>
                                </form>
                            </div>


                        </div>
                           <!-- SEARCH -->   
                        <v-data-table
                            :headers="headers"
                            :items="institutions.data"
                            :loading="loading"
                            :items-per-page="institutions.pagination.pageSize"
                            class="u-table u-table-primary u-table-bordered-primary"
                            id="all-institutions-table"
                        >
                        <template #item.nameFr="{ item }"><a @click="viewInstitution(item.id)">{{item.nameFr}}</a></template>
                        <template #item.full_address="{ item }">{{item.address.streetFr}} - {{item.address.cityFr}} - {{item.address.countryFr}}</template>
                        <template #item.editRow="{ item }" > 
                            <!-- <font-awesome-icon class="u-cursor" icon="edit" size="lg" @click="editInstitution(item.id)" /> -->
                                <a @click="editInstitution(item.id)" >
                                    <img :src="require('@/assets/images/edit-pencil.png')" height="50%" class="pull-right">
                                </a>
                        </template>
                        </v-data-table>
                        <div class="col-md-12 pt-2 no-padding" v-if="institutions.data.length > 0">
                            <div class="row">
                            
                                <div class="col-md-2">
                                    <span class="lato dark-blue-color text-bold">{{getNumberString}}</span>
                                </div>

                                <v-spacer></v-spacer>
                                <div class="col-md-5 ">
                                    <div class="text-right no-select u-cursor">
                                        <a class="lato dark-blue-color text-bold pagination-number" v-show="pageInstitutionOption.pageNumber !=1" @click="gotoPageInstutionTable('prev')" >&#60;</a>
                                        <span class="lato text-bold pagination-number" v-bind:class="{ 'u-page-active' : isActivePage(n),'dark-blue-color' : isNotActivePage(n)}" v-show="showPageNumber(n)" v-for="(n,index) in institutions.pagination.totalPages" :key="index" @click="paginate(n)">{{n}}</span>
                                        <a class="lato dark-blue-color text-bold pagination-number" v-show="pageInstitutionOption.pageNumber != institutions.pagination.totalPages" @click="gotoPageInstutionTable('next')">&#62;</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./IndexController.js"> </script>

<style lang="scss">
    @import "../../../src/assets/styles/components/InstitutionIndex";
</style>