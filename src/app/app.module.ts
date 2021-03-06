import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FavouriteComponent } from "./favourite/favourite.component";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import "nativescript-localstorage";
import { DataService } from "./data.service";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptCommonModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FavouriteComponent
    ],
    providers: [
        DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
