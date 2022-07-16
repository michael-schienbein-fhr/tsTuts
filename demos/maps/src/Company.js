"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.color = 'green';
        this.companyName = faker_1.faker.company.companyName();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.latitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "\n        <div>\n            <h1>Company Name: ".concat(this.companyName, "</h1>\n            <h3>Catchphrase: ").concat(this.catchPhrase, "</h3>\n        </div>\n        ");
    };
    return Company;
}());
exports.Company = Company;
