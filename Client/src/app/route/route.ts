import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "../compo/app.component";
import { CustomComponent } from "../compo/custom.component";
import { ListeComponent } from "../compo/liste.component";



export const router: Routes = [
    { 
        path: "",
        redirectTo: "custom",
        pathMatch: "full"
    },
    {
        path: "custom",
        component: CustomComponent
    },
    {
        path: "liste",
        component: ListeComponent
    }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);