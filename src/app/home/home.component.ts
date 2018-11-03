import { Component, OnInit } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { RouterExtensions } from 'nativescript-angular/router';
const firebase = require("nativescript-plugin-firebase");


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  playerOptions = {
    audioFile: 'https://www.computerhope.com/jargon/m/example.mp3',
    loop: false,
    completeCallback: function () {
      console.log('finished playing');
    },
    errorCallback: function (errorObject) {
      console.log(JSON.stringify(errorObject));
    },
    infoCallback: function (args) {
      console.log(JSON.stringify(args));
    }
  };


  languageData = [
    { english: "chair", chinese: "椅子" },
    { english: "second", chinese: "椅子" },
    { english: "third", chinese: "椅子" },
    { english: "forth", chinese: "椅子" }
  ];

  searchBarheight;

  constructor(private routerExtensions: RouterExtensions) {
    this._player = new TNSPlayer();
  }


  ngOnInit() {
   
  }


  getData() {
    firebase.auth().signInAnonymously()
    .then(() => {
      firebase.getValue('/companies')
      .then(result => console.log(JSON.stringify(result)))
      .catch(error => console.log("Error: " + error));
    })
    .catch(err => console.log("Login error: " + JSON.stringify(err)));
  }

  saveData() {


    // to store an array of JSON objects
    firebase.setValue(
      '/companies',
      [
        { name: 'Telerik', country: 'Bulgaria' },
        { name: 'Google', country: 'USA' }
      ]
    );
  }

  dataItems = ['a', 'b', 'v', 'e'];
  onClear() { }
  onSubmit() { }



  private _player: TNSPlayer;


  stateAudioSound() {
    this._player
      .playFromUrl(this.playerOptions)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log('something went wrong...', err);
      });
  }

  public togglePlay() {
    if (this._player.isAudioPlaying()) {
      this._player.pause();
    } else {
      this._player.play();
    }
  }

  private _trackComplete(args: any) {
    console.log('reference back to player:', args.player);
    // iOS only: flag indicating if completed succesfully
    console.log('whether song play completed successfully:', args.flag);
  }

  private _trackError(args: any) {
    console.log('reference back to player:', args.player);
    console.log('the error:', args.error);
    // Android only: extra detail on error
    console.log('extra info on the error:', args.extra);
  }


  favourite() {
    this.routerExtensions.navigate(['/favorite'], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }
}



// : if request.auth != null