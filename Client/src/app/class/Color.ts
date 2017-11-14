import { OnInit } from "@angular/core/src/metadata";

export class Color{

    public red:number;
    public green:number;
    public blue:number;
    public string:string;

    constructor(){
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.string = this.goToString();
    }

    goToString(){
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
    }

}