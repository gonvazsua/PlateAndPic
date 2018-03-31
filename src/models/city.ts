import { Province } from './province';

export class City {

    _id         : string;
    name        : string;
    province    : Province;

    constructor() {
        this._id = null;
        this.name = null;
        this.province = null;
    }

}