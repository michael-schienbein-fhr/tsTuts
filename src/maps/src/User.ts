import {faker} from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    color: string = 'red';

    constructor() {
        this.name = faker.name.firstName("female");
        this.location = {
            // convert string from faker.address.lat/lng to number
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}

