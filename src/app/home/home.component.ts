import { Component, OnInit } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '../data.service';
const firebase = require("nativescript-plugin-firebase");


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  // https://www.computerhope.com/jargon/m/example.mp3
  newUrlAudio = "";
  private _player: TNSPlayer;

  userData;



  searchBarheight;

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService) {
    this._player = new TNSPlayer();
  }


  ngOnInit() {
    this.userData = this.dataService.data;
  }



  getData() {
    
    // firebase.getValue('/companies')
    //   .then(result => console.log(JSON.stringify(result)))
    //   .catch(error => console.log("Error: " + error));
    firebase.storage.getDownloadUrl({
      // optional, can also be passed during init() as 'storageBucket' param so we can cache it
      bucket: 'gs://translator-13fc2.appspot.com',
      // the full path of an existing file in your Firebase storage
      remoteFullPath: 'SampleAudio_0.4mb.mp3'
    }).then(
      function (url) {
        console.log("Remote URL: " + url);
        if (url) {
          setTimeout(() => {
            this.stateAudioSound(url);
          }, 300);
        }
      },
      function (error) {
        console.log("Error: " + error);
      }
    );
    // this.stateAudioSound();
  }

  saveData() {

    firebase.push(
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


  stateAudioSound(url) {
    if (url) {

      this._player
        .playFromUrl({
          audioFile: url,
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
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log('something went wrong...', err);
        });
    }

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
    this.routerExtensions.navigate(['/favourite'], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }
}

