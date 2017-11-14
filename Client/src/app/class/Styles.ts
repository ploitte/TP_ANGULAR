import { Color } from "./Color";

export class Styles {

    public bgColor:Color;
    public textColor:Color;
    public borderColor:Color;
    public border:number;

    constructor(){
        this.bgColor = new Color();
        this.textColor = new Color();
        this.borderColor = new Color();
        this.border = 0;
    }

    gotToString(){

    }

}