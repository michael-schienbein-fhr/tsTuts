import {faker} from "@faker-js/faker";

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName("female");
        this.location = {
            // convert string from faker.address.lat/lng to number
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}

