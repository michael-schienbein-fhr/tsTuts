"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1.faker.company.companyName();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.latitude())
        };
    }
    return Company;
}());
exports.Company = Company;
