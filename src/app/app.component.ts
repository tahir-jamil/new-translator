import { Component, OnInit } from "@angular/core";
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
    ngOnInit(): void {

        firebase.init({
            // storageBucket: "translator-13fc2.appspot.com",
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(
            instance => {
                console.log("firebase.init done");
            },
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    }
}
