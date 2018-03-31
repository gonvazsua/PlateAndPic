import { Restaurant } from "./restaurant";
import { User } from "./user";

export class Plate {

    _id         : string;
    name        : string;      
    active      : boolean;       
    restaurant  : Restaurant;       
    createdBy   : User;       
    createdDate : Date;       
    updatedBy   : User;       
    updatedDate : Date;       

    constructor() {
        this._id         = null;
        this.name        = null;      
        this.active      = null;       
        this.restaurant  = null;       
        this.createdBy   = null;       
        this.createdDate = null;       
        this.updatedBy   = null;       
        this.updatedDate = null;
    }

}