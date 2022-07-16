"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = require("@faker-js/faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.faker.name.firstName("female");
        this.location = {
            // convert string from faker.address.lat/lng to number
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude())
        };
    }
    return User;
}());
exports.User = User;
