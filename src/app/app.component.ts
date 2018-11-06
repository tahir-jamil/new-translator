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
            // apiKey: "AIzaSyBLTOepm1aFUV3MS6ihkMK_F1e-2w5VUO8",
            // authDomain: "translator-13fc2.firebaseapp.com",
            // databaseURL: "https://translator-13fc2.firebaseio.com",
            // projectId: "translator-13fc2",
            // storageBucket: "translator-13fc2.appspot.com",
            // messagingSenderId: "1041056354956"
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
