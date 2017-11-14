import { Component, OnInit } from "@angular/core";
import { Styles } from "../class/Styles";
import { Color } from "../class/Color";
import { Carte } from "../class/Carte";
import * as $ from 'jquery';

@Component({
    selector: "app-custom",
    templateUrl: "../dom/custom.component.html",
    styleUrls: ["../css/custom.component.css"]
})


export class CustomComponent implements OnInit{
    
    ngOnInit(): void {
        
    }

    public file:any;

    public cartes:Carte[]= [];
    public styles:Styles = new Styles();
    public carte:Carte= new Carte("", "", "", "", "", "", "", this.styles, "");

    constructor(){}

    addCarte(){
        this.cartes.push(this.carte);
        console.log(this.cartes);
    }

    goToString(red:number, green:number, blue:number){
        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    showFile(){
        console.log(this.cartes);
    }
}
