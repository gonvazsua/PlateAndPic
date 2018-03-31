import { User } from "./user";
import { City } from "./city";
import { Plate } from "./plate";

export class Restaurant {

    _id               : string;
    name              : string;
    address           : string;
    phoneNumber       : string;
    latitude          : string;
    longitude         : string;
    apiPlaceId        : string;
    priveAverage      : number;
    rating            : number;
    description       : string;
    state             : number;
    picture           : string;
    city              : City;
    plates            : Array<Plate>;
    createdBy         : User;
    createdDate       : Date;
    updatedBy         : User;
    updatedDate       : Date;

    constructor() {
        this._id          = null;
        this.name         = null;
        this.address      = null;
        this.phoneNumber  = null;
        this.latitude     = null;
        this.longitude    = null;
        this.apiPlaceId   = null;
        this.priveAverage = null;
        this.rating       = null;
        this.description  = null;
        this.state        = null;
        this.picture      = null;
        this.city         = null;
        this.plates       = null;
        this.createdBy    = null;
        this.createdDate  = null;
        this.updatedBy    = null;
        this.updatedDate  = null;
    }

}