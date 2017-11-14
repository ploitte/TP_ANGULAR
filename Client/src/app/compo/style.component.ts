import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Color } from "../class/Color";
import { Styles } from "../class/Styles";



@Component({
    selector: "app-style",
    template:`
        <span>{{ name }}</span>
            <label>R:</label><input type="range" min=0 max=255 [(ngModel)]="color.red" (ngModelChange)="change()" />
            <label>G:</label><input type="range" min=0 max=255 [(ngModel)]="color.green" (ngModelChange)="change()" />
            <label>B:</label><input type="range" min=0 max=255 [(ngModel)]="color.blue" (ngModelChange)="change()" /> 
            {{color.goToString()}} 
    `,
    styleUrls: ["../css/custom.component.css"]
})


export class StylesComponent{

    @Input()
    public name: string;

    public color: Color = new Color();
    
    @Output()
    public stylesChanges: EventEmitter<Color> = new EventEmitter();

    change(){
        this.stylesChanges.emit( this.color );
    }


}