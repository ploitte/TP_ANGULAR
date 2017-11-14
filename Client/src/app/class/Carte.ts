import { Color } from "./Color";
import { Styles } from "./Styles";

export class Carte {

    public firstname:string;
    public lastname:string;
    public email:string;
    public mobile:string;
    public fixe:string;
    public fax:string;
    public description:string;
    public styles:Styles;
    public string:string;

    constructor(
        firstname:string,
        lastname:string,
        email:string,
        mobile:string,
        fixe:string,
        fax:string,
        description:string,
        styles:Styles,
        string:string
    ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobile = mobile;
        this.fixe = fixe;
        this.fax = fax;
        this.description = description;
        this.styles = styles;
        this.string = string;
    }


}