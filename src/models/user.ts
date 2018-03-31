import { Restaurant } from "./restaurant";
import { City } from "./city";

export class User {

    _id               : string;
    password          : string;
    email             : string;
    firstname         : string;
    lastname          : string;
    username          : string;
    status            : string;
    role              : string;
    lastLogin         : Date;
    picture           : string;
    restaurants       : Array<Restaurant>;
    city              : City;
    updatedDate       : Date;
    createdDate       : Date;

    constructor() {
        this._id = null;
        this.password = null;
        this.email = null;
        this.firstname = null;
        this.lastname = null;
        this.username = null;
        this.status = null;
        this.role = null;
        this.lastLogin = null;
        this.picture = null;
        this.restaurants = null;
        this.city = null;
        this.updatedDate = null;
        this.createdDate = null;
    }

}