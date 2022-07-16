"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <reference types="@types/google.maps" />
// console.log('hello world');
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
// const user = new User();
// const company = new Company();
//
// console.log(company);
// console.log(user);
// new google.maps.Map(document.getElementById('map'), {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0
//     }
// })
var user = new User_1.User();
var company = new Company_1.Company();
var customMap = new CustomMap_1.CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
