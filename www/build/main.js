webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_library__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__moods_moods__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//By Rekar Dilzar Rashid Botany +9647504051800
let TabsPage = class TabsPage {
    constructor(platform, splashScreen) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__library_library__["a" /* LibraryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__moods_moods__["a" /* MoodsPage */];
    }
};
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="{{\'browse\' | translate}}" tabIcon="musical-note"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{\'moods\' | translate}}" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="{{\'search\' | translate}}" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="{{\'library\' | translate}}" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export audioProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WebAudioProvider; });
/* unused harmony export CordovaMediaProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Creates an audio provider based on the environment.
 * If running from within a browser, then defaults to HTML5 Audio. If running on a device, it will check for Cordova and Media plugins and use
 * a native audio player, otherwise falls back to HTML5 audio.
 *
 * @method factory
 * @static
 * @return {IAudioProvider} An IAudioProvider instance
 */
function audioProviderFactory() {
    return window.hasOwnProperty('cordova') && window.hasOwnProperty('Media') ? new CordovaMediaProvider() : new WebAudioProvider();
}
/**
 * Base class for audio providers
 *
 * @export
 * @abstract
 * @class AudioProvider
 * @implements {IAudioProvider}
 */
let AudioProvider = AudioProvider_1 = class AudioProvider {
    constructor() {
    }
    /**
     * Creates an IAudioTrack instance from a JSON object.
     * Not implemented in base class.
     *
     * @method create
     * @param {ITrackConstraint} track A JSON object containing at least a src property
     * @return null
     */
    create(track) {
        console.error('Not implemented in base class');
        return null;
    }
    /**
     * Adds an existing IAudioTrack instance to the array of managed tracks.
     *
     * @method add
     * @param {IAudioTrack} audioTrack An instance of IAudioTrack
     */
    add(audioTrack) {
        AudioProvider_1.tracks.push(audioTrack);
    }
    ;
    /**
     * Plays a given track.
     *
     * @method play
     * @param {number} index The track id
     */
    play(index) {
        if (index === undefined || index > AudioProvider_1.tracks.length - 1)
            return;
        this._current = index;
        AudioProvider_1.tracks[index].play();
    }
    ;
    /**
     * Pauses a given track.
     *
     * @method pause
     * @param {number} [index] The track id, or if undefined it will pause whichever track currently playing
     */
    pause(index) {
        if (this._current === undefined || index > AudioProvider_1.tracks.length - 1)
            return;
        index = index || this._current;
        AudioProvider_1.tracks[index].pause();
    }
    ;
    seekTo(time) {
        AudioProvider_1.tracks[this._current].seekTo(time);
    }
    ;
    eraseTracks() {
        if (AudioProvider_1.tracks.length > 0) {
            if (this._current != undefined) {
                AudioProvider_1.tracks[this._current].pause();
            }
            AudioProvider_1.tracks.length = 0;
        }
    }
    ;
    /**
     * Stops a given track.
     *
     * @method stop
     * @param {number} [index] The track id, or if undefined it will stop whichever track currently playing
     */
    stop(index) {
        if (this._current === undefined || index > AudioProvider_1.tracks.length - 1)
            return;
        index = index || this._current;
        AudioProvider_1.tracks[index].stop();
        this._current = undefined;
    }
    ;
    /**
     * Gets an array of tracks managed by this provider
     *
     * @property tracks
     * @readonly
     * @type {IAudioTrack[]}
     */
    get tracks() {
        return AudioProvider_1.tracks;
    }
    /**
     * Gets current track id
     *
     * @property current
     * @type {number}
     */
    get current() {
        return this._current;
    }
    /**
     * Sets current track id
     *
     * @property current
     */
    set current(v) {
        this._current = v;
    }
};
AudioProvider.tracks = [];
AudioProvider = AudioProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AudioProvider);

/**
 * Creates an HTML5 audio provider
 *
 * @export
 * @class WebAudioProvider
 * @constructor
 * @extends {AudioProvider}
 */
let WebAudioProvider = WebAudioProvider_1 = class WebAudioProvider extends AudioProvider {
    constructor() {
        super();
        console.log('Using Web Audio provider');
    }
    create(track) {
        let audioTrack = new __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__["a" /* WebAudioTrack */](track.src, track.preload);
        Object.assign(audioTrack, track);
        let trackId = WebAudioProvider_1.tracks.push(audioTrack);
        audioTrack.id = trackId - 1;
        return audioTrack;
    }
};
WebAudioProvider = WebAudioProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebAudioProvider);

/**
 * Creates a Cordova audio provider
 *
 * @export
 * @class CordovaMediaProvider
 * @constructor
 * @extends {AudioProvider}
 */
let CordovaMediaProvider = CordovaMediaProvider_1 = class CordovaMediaProvider extends AudioProvider {
    constructor() {
        super();
        console.log('Using Cordova Media provider');
    }
    create(track) {
        let audioTrack = new __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__["a" /* CordovaAudioTrack */](track.src);
        Object.assign(audioTrack, track);
        let trackId = CordovaMediaProvider_1.tracks.push(audioTrack);
        audioTrack.id = trackId - 1;
        return audioTrack;
    }
};
CordovaMediaProvider = CordovaMediaProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CordovaMediaProvider);

var AudioProvider_1, WebAudioProvider_1, CordovaMediaProvider_1;
//# sourceMappingURL=ionic-audio-providers.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//By Rekar Dilzar Rashid Botany +9647504051800
let Video = class Video {
    constructor(md, sanitizer, favorite, bg, platform, share, actionSheetCtrl, navCtrl, navParams, musicservice) {
        this.md = md;
        this.sanitizer = sanitizer;
        this.favorite = favorite;
        this.bg = bg;
        this.platform = platform;
        this.share = share;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicservice = musicservice;
        this.opened = false;
        this.videos = this.navParams.get('videos');
        this.tracks = this.navParams.get('video');
        this.current = this.videos.indexOf(this.tracks);
        this.link = "https://www.youtube.com/embed/" + this.tracks.video + "?autoplay=1";
        console.log(this.link);
        this.musicservice.uploadVideoAnalytics(this.tracks);
        this.youtube = this.sanitizer.bypassSecurityTrustUrl(this.link);
        console.log(this.youtube);
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened || this.favorite.islist || this.favorite.isnewlist) {
                    this.opened = false;
                    this.favorite.islist = false;
                    this.favorite.isnewlist = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                        this.favorite.list.dismiss();
                        this.favorite.newlist.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.playlist = false;
    }
    back() {
        this.navCtrl.pop();
    }
    youtubeURL() {
        return this.sanitizer.bypassSecurityTrustUrl('https://www.youtube.com/embed/' + this.tracks.video + '?autoplay=1');
    }
    play(i) {
        this.current = i;
        this.tracks = this.videos[i];
        this.link = "https://www.youtube.com/embed/" + this.tracks.video + "?autoplay=1";
        this.youtube = this.sanitizer.bypassSecurityTrustUrl(this.link);
        this.musicservice.uploadVideoAnalytics(this.tracks);
    }
    next() {
        if (this.current == this.videos.length - 1) {
            this.play(0);
        }
        else if (this.current < this.videos.length - 1) {
            this.play(this.current + 1);
        }
    }
    prev() {
        if (this.current == 0) {
            this.play(this.videos.length - 1);
        }
        else if (this.current > 0) {
            this.play(this.current - 1);
        }
    }
    shareTrack() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* Share */], {
            title: this.tracks.title,
            art: this.tracks.art,
            artist: this.tracks.artist,
            album: this.tracks.album
        });
    }
    gotoartist() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__artist_artist__["a" /* Artist */], { 'artistKey': this.tracks.artistId });
    }
    gotoalbum() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__album_album__["a" /* Album */], {
            albumKey: this.tracks.albumId,
            artistKey: this.tracks.artistId
        });
    }
    action() {
        this.actions = this.actionSheetCtrl.create({
            title: this.tracks.title,
            buttons: [
                {
                    text: 'Go to Music',
                    handler: () => {
                        this.opened = false;
                        this.musicservice.play(this.videos, this.current);
                        this.navCtrl.pop();
                    }
                },
                {
                    text: 'Go to Album',
                    handler: () => {
                        this.opened = false;
                        this.gotoalbum();
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartist();
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
        this.playlist = false;
        this.link = "";
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.playlist = false;
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        this.playlist = false;
    }
    togglePlaylist() {
        this.playlist = !this.playlist;
    }
    swipePlay(event) {
        if (event.direction == 2) {
            //this.musicservice.next();
        }
        if (event.direction == 4) {
            //this.musicservice.prev();
        }
    }
};
Video = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-video',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/video/video.html"*/'<!--\n  Generated template for the Player page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n  style="background: #141e30; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#cb356b, #bd3f32); /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to top, #000,#cb356b, #bd3f32);text-align: center"\n\n\n-->\n\n\n<div class="background-image" [style.backgroundImage]="\'url(\' + tracks.art + \')\'"  ></div>\n<ion-content   style="background: rgba(0, 0, 0, 0.6) !important;text-align: center" >\n\n<ion-row [class.hide]="md.full">\n\n  <ion-col col-2 color="danger" style="color: white" >\n   \n             <button (click)="back()"  ion-button clear style="color:white" icon-only  > <ion-icon name="arrow-back"></ion-icon></button>\n  </ion-col>\n      <ion-col col-8 color="danger" style="color: white" >\n                     <button (click)="back()"  ion-button clear style="color:white"   > \n                       {{tracks.artist}}\n                       </button>\n\n            \n\n      </ion-col>\n\n            <ion-col col-2 color="danger" style="color: white" >\n\n             <button (click)="action()"  ion-button clear style="color:white" icon-only  > <ion-icon name="more"></ion-icon></button>\n            </ion-col>\n\n</ion-row>\n              <button [hidden]="link" (click)="play(current)"  ion-button clear style="color:white;font-size: 5rem" icon-only  > <ion-icon name="play"></ion-icon></button>\n\n  <iframe [hidden]="!link"  type="text/html" [class.full]="md.full"  [class.small]="!md.full"  \n  [src]="link | safe "\n  frameborder="0"></iframe>\n\n\n\n\n\n  <ion-row [hidden]="md.full">\n\n\n\n\n<ion-col col-2 style="text-align: center">\n  \n  <button (click)="prev()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-backward"></ion-icon></button>\n\n</ion-col>\n\n<ion-col col-8 style="text-align: center">\n       <button  ion-button block clear style="color:white;height: 50% !important;font-size: 1.6rem" (click)="gotoalbum()" >\n         <span class="shadowt" style="text-overflow: ellipsis;overflow: hidden" >  {{tracks.title}}\n         </span>\n          </button>\n          \n          \n<button  ion-button block clear style="color:#AAA;height: 50% !important"  (click)="gotoartist()" >\n   <span  class="shadowt"  style="text-overflow: ellipsis;overflow: hidden;color:azure">{{tracks.album}} \n   </span>\n   </button>\n</ion-col>\n\n<ion-col col-2 style="text-align: center">\n  \n   <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n\n</ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<hr  [hidden]="md.full">\n\n <ion-list no-lines style="background-color: transparent"  [hidden]="md.full">\n  <ion-item *ngFor="let track of videos;let i=index"  block clear  style="background-color: transparent;color:white" (click)="play(i)">\n    <ion-avatar item-left>\n      <img src="{{track.art}}">\n    </ion-avatar>\n    <h2>{{track.title}}</h2>\n    <p style="color:white">{{track.artistName}}</p>\n         <ion-icon *ngIf="track.key == tracks.key" name="play" style="opacity: 0.8;color:#bd3f32" item-left ></ion-icon>\n\n  </ion-item>\n\n    <ion-item style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/video/video.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_music_data__["a" /* MusicData */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */]])
], Video);

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_music_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let WelcomePage = class WelcomePage {
    constructor(md, fav, platform, navCtrl, navParams) {
        this.md = md;
        this.fav = fav;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.state = 'true';
        this.popularArtistsPlaylists = [];
        this.artistb = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.popularArtists = this.md.popularArtist;
        this.allArtists = this.md.artists;
        this.popularArtistsPlaylists = [];
        this.allArtists.subscribe(all => {
            all.forEach(alle => {
                this.popularArtistsPlaylists.push(alle);
            });
        });
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
            });
        });
    }
    isf(key) {
        if (this.fav.isFollow(key))
            return 'true';
        else
            return 'false';
    }
    isnf(key) {
        if (this.fav.isFollow(key))
            return 'false';
        else
            return 'true';
    }
    ionViewDidLoad() {
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }
};
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/welcome/welcome.html"*/'\n\n<ion-header  no-border >\n\n   <ion-navbar  color="danger" style="color:white;text-align: center">\n\n\n    \n      {{\'welcomeFollow\' | translate}}\n   \n\n\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n\n\n\n  <ion-row col-12 style="height: 20%" [hidden]="popularArtistsPlaylists.length > 0"></ion-row>\n\n<ion-row [hidden]="popularArtistsPlaylists.length > 0">\n<ion-col col-12 style="text-align: center">\n  <ion-spinner icon="lines" style="width:100px;height:100px;color:white;text-align: center"></ion-spinner>\n\n</ion-col>\n\n\n<ion-col col-2>\n\n</ion-col>\n\n<ion-col col-8 style="text-align: center;color: white">\n{{ \'welcome\' | translate}}\n</ion-col>\n\n<ion-col col-2>\n  \n\n</ion-col>\n\n\n\n</ion-row>\n\n\n\n\n\n\n    \n<ion-row>\n\n  <ion-col  col-4 class="scroll-item" *ngFor="let artist of popularArtistsPlaylists " (click)="fav.toggleFollow(artist.$key)"   style="text-align: center;margin:0px;position: relative">\n        <ion-icon   [hidden]="!fav.isFollow(artist.$key)" class="heart" name="star"></ion-icon>\n<img [hidden]="fav.isFollow(artist.$key)" class="shadow" [src]="artist.image" style="width: 80px;height: 80px;color:azure">\n\n<img [hidden]="!fav.isFollow(artist.$key)" class="shadow" [src]="artist.image" style="width: 80px;height: 80px;color:azure;border-radius: 100px">\n<p style="color:azure">{{artist.name}}</p>\n    </ion-col>\n\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_music_data__["a" /* MusicData */], __WEBPACK_IMPORTED_MODULE_2__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_audio_ionic_audio_providers__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offline__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_music_controls__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















let MusicService = class MusicService {
    constructor(filePath, offline, transfer, file, alertCtrl, af, afAuth, fire, platform, auth, audio, fav, musicControls, md) {
        this.filePath = filePath;
        this.offline = offline;
        this.transfer = transfer;
        this.file = file;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.afAuth = afAuth;
        this.fire = fire;
        this.platform = platform;
        this.auth = auth;
        this.audio = audio;
        this.fav = fav;
        this.musicControls = musicControls;
        this.md = md;
        this.internalVal = null;
        this.busy = false;
        this.error = true;
        this.likeNum = 0;
        this.wait = false;
        this.shuffle = false;
        this.repeat = 0;
        this.playingTrack = { key: 0 };
        this.platform.ready().then(() => {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!this.platform.is('cordova')) {
                return false;
            }
            if (this.platform.is('ios')) {
                this.storageDirectory = file.documentsDirectory;
            }
            else if (this.platform.is('android')) {
                this.storageDirectory = file.externalRootDirectory + 'firespotify/';
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    music(track) {
        this.musicControls.updateDismissable(true);
        //this.musicControls.destroy();
        this.musicControls.create({
            track: track.title,
            artist: track.artist,
            cover: track.art,
            // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
            //           or a remote url ('http://...', 'https://...', 'ftp://...')
            isPlaying: true,
            dismissable: true,
            // hide previous/next/close buttons:
            hasPrev: true,
            hasNext: true,
            hasClose: true,
            // iOS only, optional
            album: track.albumName,
            duration: this.audio.tracks[this.audio.current].duration,
            elapsed: this.audio.tracks[this.audio.current].progress,
            // Android only, optional
            // text displayed in the status bar when the notification (and the ticker) are updated
            ticker: 'Now playing ' + track.name
        });
        this.musicControls.subscribe().subscribe(action => {
            switch (action) {
                case 'music-controls-next':
                    this.next();
                    break;
                case 'music-controls-previous':
                    this.prev();
                    break;
                case 'music-controls-pause':
                    this.pause();
                    this.musicControls.updateIsPlaying(false);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-play':
                    this.audio.play(0);
                    this.musicControls.updateIsPlaying(true);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-destroy':
                    this.musicControls.destroy();
                    this.stop();
                    break;
                // Headset events (Android only)
                case 'music-controls-media-button':
                    // Do something
                    break;
                case 'music-controls-headset-unplugged':
                    this.pause();
                    this.musicControls.updateIsPlaying(false);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-headset-plugged':
                    this.audio.play(0);
                    this.musicControls.updateIsPlaying(true);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-media-button-next':
                    this.next();
                    break;
                case 'music-controls-media-button-pause':
                    this.pause();
                    this.musicControls.updateIsPlaying(false);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-media-button-play':
                    this.audio.play(0);
                    this.musicControls.updateIsPlaying(true);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-media-button-play-pause':
                    this.audio.play(0);
                    this.musicControls.updateIsPlaying(true);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-media-button-previous':
                    this.prev();
                    break;
                case 'music-controls-media-button-stop':
                    this.stop();
                    break;
                case 'music-controls-media-button-fast-forward':
                    this.seekTo();
                    break;
                case 'music-controls-media-button-rewind':
                    this.seekBack();
                    break;
                case 'music-controls-media-button-skip-backward':
                    this.seekBack();
                    break;
                case 'music-controls-media-button-skip-forward':
                    this.seekTo();
                    break;
                case 'music-controls-media-button-step-backward':
                    this.seekBack();
                    break;
                case 'music-controls-media-button-step-forward':
                    this.seekTo();
                    break;
                case 'music-controls-media-button-meta-left':
                    break;
                case 'music-controls-media-button-meta-right':
                    break;
                case 'music-controls-media-button-music':
                    this.audio.play(0);
                    this.musicControls.updateIsPlaying(true);
                    this.musicControls.updateDismissable(true);
                    break;
                case 'music-controls-media-button-volume-up':
                    break;
                case 'music-controls-media-button-volume-down':
                    break;
                case 'music-controls-media-button-volume-mute':
                    break;
                case 'music-controls-media-button-headset-hook':
                    this.pause();
                    this.musicControls.updateIsPlaying(false);
                    this.musicControls.updateDismissable(true);
                    break;
                default:
                    this.audio.play(0);
                    break;
            }
        });
        this.musicControls.listen(); // activates the observable above
    }
    progress() {
        return Math.trunc((this.audio.tracks[this.audio.current].progress
            /
                this.audio.tracks[this.audio.current].duration)
            * 100);
    }
    download() {
        const name = this.tracks[this.current].title + " - " + this.tracks[this.current].artist + '.mp3';
        this.offline.download(this.tracks[this.current].src, name);
        const namepic = this.tracks[this.current].title + " - " + this.tracks[this.current].artist + '.png';
        this.offline.download(this.tracks[this.current].art, namepic);
    }
    retrieve(name) {
        this.offline.retrieve(name);
    }
    retrieveImage() {
        const name = this.tracks[this.current].title + " - " + this.tracks[this.current].artist + '.png';
        this.offline.retrieve(name);
    }
    isFav() {
        return this.fav.isFav(this.tracks[this.current].key);
    }
    likes() {
        return 0;
    }
    like() {
        this.fav.like(this.tracks[this.current].key);
    }
    unLike() {
        this.fav.unLike(this.tracks[this.current].key);
    }
    favorite() {
        this.fav.favorite(this.tracks[this.current].key);
    }
    unFavorite() {
        this.fav.unFavorite(this.tracks[this.current].key);
    }
    seekTo() {
        let seek = this.audio.tracks[0].progress + 5;
        this.audio.seekTo(seek);
    }
    seekBack() {
        let seek = this.audio.tracks[0].progress - 5;
        this.audio.seekTo(seek);
    }
    toggleShuffle() {
        this.shuffle = !this.shuffle;
    }
    toggleRepeat() {
        switch (this.repeat) {
            case 0:
                this.repeat = 1;
                break;
            case 1:
                this.repeat = 2;
                break;
            case 2:
                this.repeat = 0;
                break;
        }
    }
    uploadVideoAnalytics(track) {
        this.af.list("popularVideo/" + track.key + "/played").push({
            uid: this.auth.uid,
            timespan: Date.now()
        });
        this.af.list("popularArtist/" + track.artistId + "/played").push({
            uid: this.auth.uid,
            timespan: Date.now()
        });
        this.af.list("popularAlbum/" + track.albumId + "/played").push({
            uid: this.auth.uid,
            timespan: Date.now()
        });
    }
    uploadAnalytics(track) {
        this.af.list("popularTrack/" + track.key + "/played").push({
            uid: this.auth.uid,
            timespan: Date.now()
        });
        this.af.list("popularArtist/" + track.artistId + "/played").push({
            uid: this.auth.uid,
            timespan: Date.now()
        });
        this.af.list("popularAlbum/" + track.albumId + "/played").push({
            uid: this.auth.uid,
            timespan: Date.now()
        });
    }
    play(tracks, track) {
        //console.log(this.wait);
        if (!this.wait) {
            this.wait = true;
            __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
                if (this.audio.current != undefined) {
                    this.likesData = this.af.list('likedTrack/' + this.tracks[this.current].key);
                    this.likesData.subscribe(like => {
                        if (like[0] != undefined)
                            this.likeNum = like[0].$value;
                        else
                            this.likeNum = 0;
                    });
                }
                if (this.audio.tracks[0].isLoading == false) {
                    this.wait = false;
                }
                else {
                    this.wait = true;
                }
                if (this.audio.tracks[0].isFinished) {
                    if (!this.busy) {
                        this.finish();
                    }
                }
                if (this.audio.tracks[0].error) {
                    if (this.error) {
                        let alert = this.alertCtrl.create({
                            title: 'An Error Occured/No Connection',
                            subTitle: 'Restart the app',
                            buttons: [{
                                    text: 'Restart', role: 'cancel',
                                    handler: () => {
                                        window.location.reload();
                                    }
                                }],
                        });
                        alert.present();
                        this.error = false;
                    }
                }
            });
            this.playingTrack = tracks[track];
            if (this.audio.current != undefined) {
                this.audio.pause();
                this.audio.seekTo(0);
            }
            this.tracks = tracks;
            this.current = track;
            this.audio.current = 0;
            this.audio.eraseTracks();
            /*
          const name= tracks[track].title + " - " + tracks[track].artist+'.mp3';
          const namep= tracks[track].title + " - " + tracks[track].artist+'.png';
             this.file.checkFile(this.storageDirectory, name)
                .then(x => {
                  this.file.readAsDataURL
          const path =this.storageDirectory + name.replace(/ /g, '%20');
          const pathp =this.storageDirectory + name.replace(/ /g, '%20');
          
          tracks[track].src=path;
          tracks[track].art=pathp;
                  this.audio.create(tracks[track]);
          
                this.audio.play(0);
          
          
                })
                .catch((err) => {
          console.log(err);
            this.audio.create(tracks[track]);
                this.audio.play(0);
                
                });
                */
            this.audio.create(tracks[track]);
            this.audio.play(0);
            if (this.platform.is('cordova')) {
                this.music(tracks[track]);
                this.musicControls.updateIsPlaying(true);
            }
            this.uploadAnalytics(tracks[track]);
        }
    }
    playtrack(track) {
        this.wait = true;
        if (this.audio.current != undefined) {
            this.audio.pause();
            this.audio.seekTo(0);
        }
        this.audio.eraseTracks();
        this.audio.current = 0;
        /*
        const name= this.tracks[track].title + " - " + this.tracks[track].artist+'.mp3';
        const namep= this.tracks[track].title + " - " + this.tracks[track].artist+'.png';
           this.file.checkFile(this.storageDirectory, name)
              .then(x => {
                this.file.readAsDataURL
        const path =this.storageDirectory + name.replace(/ /g, '%20');
        const pathp =this.storageDirectory + name.replace(/ /g, '%20');
             this.tracks[track].src=path;
        this.tracks[track].art=pathp;
                this.audio.create(this.tracks[track]);
        
              this.audio.play(0);
        
        
              })
              .catch((err) => {
          this.audio.create(this.tracks[track]);
              this.audio.play(0);
                
        
                
        
              });
        */
        this.audio.create(this.tracks[track]);
        this.audio.play(0);
        this.uploadAnalytics(this.tracks[track]);
        this.wait = true;
    }
    playnext(trackk) {
        clearTimeout(this.timer);
        if (this.audio.current != undefined) {
            this.audio.pause();
            this.audio.seekTo(0);
        }
        if (!this.wait) {
            const track = trackk;
            this.wait = true;
            if (this.audio.current != undefined) {
                this.audio.pause();
                this.audio.seekTo(0);
            }
            this.playingTrack = this.tracks[track];
            this.current = track;
            if (this.platform.is('cordova')) {
                this.music(this.tracks[track]);
            }
            this.timer = setTimeout(() => { this.playtrack(track); }, 500);
        }
    }
    pause() {
        if (this.audio.current != undefined) {
            this.audio.pause();
            this.musicControls.updateIsPlaying(false);
        }
    }
    stop() {
        if (this.audio.current != undefined) {
            this.audio.seekTo(0);
            this.audio.pause();
            this.musicControls.updateIsPlaying(false);
        }
    }
    next() {
        if (this.audio.current != undefined && !this.wait) {
            if (this.shuffle && this.tracks.length != 1) {
                while (true) {
                    let t = Math.floor((Math.random() * (this.tracks.length)) + 0);
                    if (t != this.current) {
                        this.playnext(t);
                        break;
                    }
                }
            }
            else {
                if (this.current < this.tracks.length - 1) {
                    this.playnext(this.current + 1);
                }
                else {
                    this.playnext(0);
                }
            }
        }
    }
    prev() {
        if (this.audio.current != undefined && !this.wait) {
            if (this.shuffle) {
                while (true) {
                    let t = Math.floor((Math.random() * (this.tracks.length)) + 0);
                    if (t != this.current) {
                        this.playnext(t);
                        break;
                    }
                }
            }
            else {
                if (this.current > 0) {
                    this.playnext(this.current - 1);
                }
                else {
                    this.playnext(this.tracks.length - 1);
                }
            }
        }
    }
    finish() {
        if (this.audio.current != undefined) {
            this.busy = true;
            if (this.repeat != 2) {
                if (this.shuffle) {
                    while (true) {
                        let t = Math.floor((Math.random() * (this.tracks.length)) + 0);
                        if (t != this.current) {
                            this.playnext(t);
                            break;
                        }
                    }
                }
                else {
                    if (this.current < this.tracks.length - 1) {
                        this.playnext(this.current + 1);
                    }
                    else {
                        if (this.repeat == 1) {
                            this.playnext(0);
                        }
                        else if (this.repeat == 0) {
                            //this.stop();
                            if (this.platform.is('cordova')) {
                                this.musicControls.updateIsPlaying(false);
                            }
                        }
                        else {
                            this.playnext(this.current);
                        }
                    }
                }
                this.timer = setTimeout(() => { this.busy = false; }, 500);
            }
            else {
                this.audio.play(0);
                this.uploadAnalytics(this.tracks[this.current]);
                this.timer = setTimeout(() => { this.busy = false; }, 500);
            }
        }
    }
};
MusicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_14_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_6__offline__["a" /* Offline */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["a" /* AngularFireAuth */], Object, __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__app_shared_audio_ionic_audio_providers__["a" /* AudioProvider */], __WEBPACK_IMPORTED_MODULE_3__favorite__["a" /* Favorite */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_music_controls__["a" /* MusicControls */], __WEBPACK_IMPORTED_MODULE_5__music_data__["a" /* MusicData */]])
], MusicService);

//# sourceMappingURL=musicservice.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/*
  Generated class for the Favorite provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let Favorite = class Favorite {
    constructor(alertCtrl, af, afAuth, fire, toast, auth) {
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.afAuth = afAuth;
        this.fire = fire;
        this.toast = toast;
        this.auth = auth;
        this.fav = [];
        this.islist = false;
        this.isnewlist = false;
        this.fol = [];
        this.popb = false;
        this.allpopular = [];
        this.uid = this.auth.uid;
        this.favorites = this.af.list('favorites/' + this.uid);
        this.playlists = this.af.list('playlists/' + this.uid);
        this.favorites.subscribe(fav => {
            this.fav = [];
            fav.forEach(element => {
                this.fav.push(element.$key);
            });
        });
        this.favorites.take(1);
        this.following = this.af.list('following/' + this.uid);
        this.following.subscribe(fav => {
            this.fol = [];
            fav.forEach(element => {
                this.fol.push(element.$key);
            });
        });
        this.following.take(1);
        this.tracks = this.af.list('/tracks');
        this.tracks.take(1);
        this.tracks.subscribe(all => {
            if (this.popb == false) {
                this.allpopular = [];
                all.forEach(alle => {
                    this.following.subscribe(fav => {
                        fav.forEach(art => {
                            if (art.$key == alle.artist) {
                                this.allpopular.push({
                                    src: alle.url,
                                    video: alle.video,
                                    artist: alle.artistName,
                                    title: alle.name,
                                    art: alle.albumArt,
                                    preload: 'metadata',
                                    key: alle.$key,
                                    artistId: alle.artist,
                                    albumId: alle.album,
                                    album: alle.albumName,
                                    artistName: alle.artistName,
                                });
                                this.allpopular = this.Shuffle(this.allpopular);
                            }
                        });
                    });
                });
                this.popb = true;
            }
        });
    }
    toggleFollow(key) {
        if (this.isFollow(key)) {
            this.unFollow(key);
        }
        else {
            this.follow(key);
        }
    }
    Shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.trunc(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
            ;
        return o;
    }
    isFollow(key) {
        //console.log(this.fav);
        if (this.fol.indexOf(key) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    follow(key) {
        //console.log(track);
        if (this.isFollow(key)) {
        }
        else {
            this.af.list('followedArtist/' + key + '/followed/' + this.uid).push(true);
            this.af.list('following/' + this.uid + "/" + key).push(true).then(x => {
                this.following.subscribe(fav => {
                    this.fol = [];
                    fav.forEach(element => {
                        this.fol.push(element.$key);
                    });
                });
                this.following.take(1);
            });
        }
    }
    unFollow(key) {
        this.af.list('followedArtist/' + key + '/followed/').remove(this.uid);
        this.following.remove(key).then(x => {
            this.following.subscribe(fav => {
                this.fol = [];
                fav.forEach(element => {
                    this.fol.push(element.$key);
                });
            });
            this.following.take(1);
        });
    }
    like(track) {
        this.af.list('likedTrack/' + track + '/liked/' + this.uid).push(true);
    }
    unLike(track) {
        this.af.list('likedTrack/' + track + '/liked/').remove(this.uid);
    }
    isFav(track) {
        //console.log(this.fav);
        if (this.fav.indexOf(track) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    favorite(track) {
        //console.log(track);
        if (this.isFav(track)) {
        }
        else {
            this.like(track);
            this.af.list('favorites/' + this.uid + "/" + track).push(true).then(x => {
                this.favorites.subscribe(fav => {
                    this.fav = [];
                    fav.forEach(element => {
                        this.fav.push(element.$key);
                    });
                });
                this.favorites.take(1);
            });
        }
    }
    unFavorite(track) {
        this.unLike(track);
        this.favorites.remove(track).then(x => {
            this.favorites.subscribe(fav => {
                this.fav = [];
                fav.forEach(element => {
                    this.fav.push(element.$key);
                });
            });
            this.favorites.take(1);
        });
    }
    playlist(list, track) {
        this.af.list('playlists/' + this.uid + '/' + list + '/tracks/' + track).push(true);
    }
    newplaylist(list, track) {
        this.af.list('playlists' + '/' + this.uid + '/').push({
            name: list,
            tracks: {
                [track]: {
                    1: true
                }
            }
        });
    }
    unPlaylist(list, track) {
        this.af.list('playlists/' + this.uid + '/' + list + '/tracks/').remove(track);
    }
    addNewPlaylistAlert(track) {
        this.newlist = this.alertCtrl.create({
            title: 'New Playlist',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'playlist name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        this.isnewlist = false;
                    }
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.isnewlist = false;
                        this.newplaylist(data.name, track);
                    }
                }
            ]
        });
        this.newlist.present();
        this.isnewlist = true;
    }
    playlistAlert(track) {
        this.list = this.alertCtrl.create();
        this.list.setTitle('Select a Playlist');
        this.list.addInput({ type: 'radio', label: 'New Playlist', value: 'new', name: 'list' });
        this.af.list('playlists/' + this.uid).subscribe(l => {
            l.forEach(x => {
                this.list.addInput({ type: 'radio', label: x.name, value: x.$key, name: 'list' });
            });
        });
        this.list.addButton({
            text: 'Cancel',
            handler: data => {
                this.islist = false;
            }
        });
        this.list.addButton({
            text: 'OK',
            handler: data => {
                this.islist = false;
                if (data == 'new') {
                    this.addNewPlaylistAlert(track);
                }
                else {
                    this.playlist(data, track);
                }
            }
        });
        this.list.present();
        this.islist = true;
    }
};
Favorite = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], Object, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
], Favorite);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









let AuthService = class AuthService {
    constructor(alertCtrl, af, afAuth, fire, platform, fb) {
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.afAuth = afAuth;
        this.fire = fire;
        this.platform = platform;
        this.fb = fb;
        afAuth.authState.subscribe((user) => {
            if (!user) {
                this.uid = null;
                return;
            }
            this.uid = user.uid;
        });
    }
    signInWithFacebook() {
        if (this.platform.is('cordova')) {
            return this.fb.login(['email']).then(res => {
                const facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                return __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInWithCredential(facebookCredential).then(res => {
                    this.af.object('/users/' + this.uid).subscribe(res1 => {
                        if (res1.role > -1) { }
                        else {
                            this.af.object('/users/' + this.uid + '/role').set(0);
                        }
                    });
                });
            })
                .catch((error) => {
                throw error;
            });
        }
        else {
            return this.afAuth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider())
                .then(res => {
                this.af.object('/users/' + this.uid).subscribe(res => {
                    if (res.role > -1) { }
                    else {
                        this.af.object('/users/' + this.uid + '/role').set(0);
                    }
                });
            });
        }
    }
    signInWithGoogle() {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider())
            .then(res => {
            this.af.object('/users/' + this.uid).subscribe(res => {
                if (res.role > -1) { }
                else {
                    this.af.object('/users/' + this.uid + '/role').set(0);
                }
            });
        });
    }
    registerUser(email, password, password2) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
            this.af.object('/users/' + this.uid).subscribe(res => {
                if (res.role > -1) { }
                else {
                    this.af.object('/users/' + this.uid + '/role').set(0);
                }
            });
            return res;
        })
            .catch((error) => {
            throw error;
        });
    }
    signIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
            this.af.object('/users/' + this.uid).subscribe(res => {
                if (res.role > -1) { }
                else {
                    this.af.object('/users/' + this.uid + '/role').set(0);
                }
            });
        })
            .catch((error) => {
            throw error;
        });
    }
    signOut() {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signOut();
    }
    forgotPassword(email) {
        return __WEBPACK_IMPORTED_MODULE_4_firebase__["app"]().auth().sendPasswordResetEmail(email)
            .then((s) => {
            let alert = this.alertCtrl.create({
                title: 'Password Reset',
                subTitle: 'Check your inbox to reset your password',
                buttons: ['Dismiss']
            });
            alert.present();
        })
            .catch((error) => {
            throw error;
        });
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], Object, __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__playlist_playlist__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favorites_favorites__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__welcome_welcome__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//By Rekar Dilzar Rashid Botany +9647504051800


let LibraryPage = class LibraryPage {
    constructor(bg, actionSheetCtrl, alert, platform, navCtrl, musicservice, fav, af, md) {
        this.bg = bg;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alert = alert;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.fav = fav;
        this.af = af;
        this.md = md;
        this.artists = [];
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.playlists = this.md.playlists;
        this.md.playlists.subscribe(x => {
        });
        this.tracks = this.musicservice.audio.tracks[0];
        this.fav.following.subscribe(fav => {
            this.artists = [];
            fav.forEach(element => {
                this.md.artists.subscribe(tracks => {
                    tracks.forEach(track => {
                        if (element.$key == track.$key) {
                            console.log(element);
                            this.artists.push({
                                cover: track.cover,
                                image: track.image,
                                name: track.name,
                                key: track.$key
                            });
                        }
                    });
                });
            });
        });
    }
    playmix(track) {
        this.musicservice.play(this.fav.allpopular, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    followArtist() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__welcome_welcome__["a" /* WelcomePage */]);
    }
    favorites() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__favorites_favorites__["a" /* FavoritesPage */]);
    }
    playlist(id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__playlist_playlist__["a" /* PlaylistPage */], {
            playlist: id,
            name: name
        });
    }
    gotoartist(artistKey) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__artist_artist__["a" /* Artist */], { 'artistKey': artistKey });
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillEnter() {
        this.tracks = this.musicservice.audio.tracks[0];
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__player_player__["a" /* Player */]);
    }
};
LibraryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-library',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/library/library.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-title center>\n      {{\'library\' | translate}}\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n\n\n<ion-item *ngIf="fav.fol.length >0"  style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'mix\' | translate}}</ion-item>\n\n\n\n<ion-scroll *ngIf="fav.fol.length >0" scrollX style="height:200px;">\n\n  <div [hidden]="fav.allpopular.length > 0" class="scroll-item"   style="text-align: center;margin:10px">\n  <ion-spinner icon="lines" style="width:120px;height:120px;color: white;text-align: center"></ion-spinner>\n<p style="color:azure">Loading...</p>\n\n    </div>\n\n  <div class="scroll-item" *ngFor="let artist of fav.allpopular; let i =index " [hidden]="i >= 50" (click)="playmix(i)" style="text-align: center;margin:10px;width: 120px">\n<img class="shadow" src="{{artist.art}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure;text-overflow: ellipsis;overflow: hidden">{{artist.title}}</p>\n<p style="color:darkgray;margin-top:-10px;color:azure;font-size: 80%">{{artist.artistName}}</p>\n    </div>\n\n\n</ion-scroll>\n\n\n\n\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n \n  <ion-item block clear (click)="favorites()"  style="background-color: transparent;color:white" >\n\n   \n    <h2 >{{\'favorites\' |translate}}</h2>\n\n          <ion-icon name="heart" style="opacity: 0.5"  item-right></ion-icon>\n\n  </ion-item>\n<hr>\n  <ion-item block clear  style="background-color: transparent;color:white" >\n\n   \n    <h2>{{\'playlists\' |translate}}</h2>\n\n          <ion-icon name="list" style="opacity: 0.5" item-right></ion-icon>\n\n  </ion-item>\n\n  <ion-item block clear *ngFor="let p of md.playlists | async"  style="background-color: transparent;color:white" >\n\n   \n    <h2 (click)="playlist(p.$key,p.name)">&nbsp;&nbsp; {{p.name}}</h2>\n\n  </ion-item>\n\n\n\n  <hr>\n  <ion-item (click)="followArtist()" block clear  style="background-color: transparent;color:white" >\n\n   \n    <h2>{{\'followedartists\'| translate}}</h2>\n\n          <ion-icon name="star" style="opacity: 0.5" item-right></ion-icon>\n\n  </ion-item>\n\n  <ion-item block clear *ngFor="let p of artists"  style="background-color: transparent;color:white" >\n <ion-avatar item-left (click)="gotoartist(p.key)">\n      <img class="shadow" src="{{p.image}}">\n    </ion-avatar>\n   \n    <h2 (click)="gotoartist(p.key)">&nbsp;&nbsp; {{p.name}}</h2>\n\n  </ion-item>\n\n\n\n\n\n\n    <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n\n\n\n<ion-footer  style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top,#000,#42275a); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000,#42275a);border: none">\n\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n      \n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/library/library.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_3__providers_favorite__["a" /* Favorite */],
        __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_music_data__["a" /* MusicData */]])
], LibraryPage);

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebAudioTrack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

window.AudioContext = window['AudioContext'] || window['webkitAudioContext'];
/**
 * Creates an HTML5 audio track
 *
 * @export
 * @class WebAudioTrack
 * @constructor
 * @implements {IAudioTrack}
 */
let WebAudioTrack = class WebAudioTrack {
    constructor(src, preload = 'none', ctx = undefined) {
        // audio context not needed for now
        // this.ctx = this.ctx || new AudioContext();
        this.src = src;
        this.preload = preload;
        this.ctx = ctx;
        this.isPlaying = false;
        this.isFinished = false;
        this._progress = 0;
        this._completed = 0;
        this.createAudio();
    }
    createAudio() {
        this.audio = new Audio();
        this.audio.src = this.src;
        this.audio.preload = this.preload;
        //this.audio.controls = true;
        //this.audio.autoplay = false;
        this.audio.addEventListener("timeupdate", (e) => { this.onTimeUpdate(e); }, false);
        this.audio.addEventListener("error", (err) => {
            console.log(`Web Audio error => track ${this.src}`, err);
            this.isPlaying = false;
        }, false);
        this.audio.addEventListener("canplay", () => {
            console.log(`WebLoaded track ${this.src}`);
            this._isLoading = false;
            this._hasLoaded = true;
        }, false);
        this.audio.addEventListener("playing", () => {
            console.log(`Web Playing track ${this.src}`);
            this.isFinished = false;
            this.isPlaying = true;
        }, false);
        this.audio.addEventListener("ended", () => {
            this.isPlaying = false;
            this.isFinished = true;
            console.log('Web Finished playback');
        }, false);
        this.audio.addEventListener("durationchange", (e) => {
            this._duration = e.target.duration;
        }, false);
    }
    onTimeUpdate(e) {
        if (this.isPlaying && this.audio.currentTime > 0) {
            this._progress = this.audio.currentTime;
            this._completed = this.audio.duration > 0 ? Math.trunc(this.audio.currentTime / this.audio.duration * 100) / 100 : 0;
        }
    }
    static formatTime(value) {
        let s = Math.trunc(value % 60);
        let m = Math.trunc((value / 60) % 60);
        let h = Math.trunc(((value / 60) / 60) % 60);
        return h > 0 ? `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}` : `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
    /**
     * Gets the track id
     *
     * @property id
     * @type {number}
     */
    get id() {
        return this._id;
    }
    /**
     * Sets the track id
     *
     * @property id
     */
    set id(v) {
        this._id = v;
    }
    /**
     * Gets the track duration, or -1 if it cannot be determined
     *
     * @property duration
     * @readonly
     * @type {number}
     */
    get duration() {
        return this._duration;
    }
    /**
     * Gets current track time (progress)
     *
     * @property progress
     * @readonly
     * @type {number}
     */
    get progress() {
        return this._progress;
    }
    /**
     * Gets current track progress as a percentage
     *
     * @property completed
     * @readonly
     * @type {number}
     */
    get completed() {
        return this._completed;
    }
    /**
     * Gets any errors logged by HTML5 audio
     *
     * @property error
     * @readonly
     * @type {MediaError}
     */
    get error() {
        return this.audio.error;
    }
    /**
     * Gets a boolean value indicating whether the current source can be played
     *
     * @property canPlay
     * @readonly
     * @type {boolean}
     */
    get canPlay() {
        let format = `audio/${this.audio.src.substr(this.audio.src.lastIndexOf('.') + 1)}`;
        return this.audio && this.audio.canPlayType(format) != '';
    }
    /**
     * Gets a boolean value indicating whether the track is in loading state
     *
     * @property isLoading
     * @readonly
     * @type {boolean}
     */
    get isLoading() {
        return this._isLoading;
    }
    /**
     * Gets a boolean value indicating whether the track has finished loading
     *
     * @property hadLoaded
     * @readonly
     * @type {boolean}
     */
    get hasLoaded() {
        return this._hasLoaded;
    }
    /**
     * Plays current track
     *
     * @method play
     */
    play() {
        if (!this.audio) {
            this.createAudio();
        }
        if (!this._hasLoaded) {
            console.log(`Web Loading track ${this.src}`);
            this._isLoading = true;
        }
        //var source = this.ctx.createMediaElementSource(this.audio);  
        //source.connect(this.ctx.destination);
        this.audio.play();
    }
    /**
     * Pauses current track
     *
     * @method pause
     */
    pause() {
        if (!this.isPlaying)
            return;
        console.log(`Web Pausing track ${this.src}`);
        this.audio.pause();
        this.isPlaying = false;
    }
    /**
     * Stops current track and releases audio
     *
     * @method stop
     */
    stop() {
        if (!this.audio)
            return;
        this.pause();
        this.audio.removeEventListener("timeupdate", (e) => { this.onTimeUpdate(e); });
        this.isFinished = true;
        this.destroy();
    }
    /**
     * Seeks to a new position within the track
     *
     * @method seekTo
     * @param {number} time the new position to seek to
     */
    seekTo(time) {
        this.audio.currentTime = time;
    }
    /**
     * Releases audio resources
     *
     * @method destroy
     */
    destroy() {
        this.audio = undefined;
        console.log(`WebReleased track ${this.src}`);
    }
};
WebAudioTrack = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()),
    __metadata("design:paramtypes", [String, String, AudioContext])
], WebAudioTrack);

//# sourceMappingURL=ionic-audio-web-track.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaAudioTrack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Cordova Media audio track
 *
 * @export
 * @class CordovaAudioTrack
 * @constructor
 * @implements {IAudioTrack}
 */
let CordovaAudioTrack = class CordovaAudioTrack {
    constructor(src) {
        this.src = src;
        this.isPlaying = false;
        this.isFinished = false;
        this._progress = 0;
        this._completed = 0;
        if (window['cordova'] === undefined || window['Media'] === undefined) {
            console.log('Cordova Media is not available');
            return;
        }
        ;
        this.createAudio();
    }
    createAudio() {
        this.audio = new Media(this.src, () => {
            console.log('Finished playback');
            this.stopTimer();
            this.isFinished = true;
            this.destroy(); // TODO add parameter to control whether to release audio on stop or finished
        }, (err) => {
            console.log(`Cordova Audio error => track ${this.src}`, err);
        }, (status) => {
            switch (status) {
                case Media.MEDIA_STARTING:
                    console.log(`Cordova Loaded track ${this.src}`);
                    this._hasLoaded = true;
                    break;
                case Media.MEDIA_RUNNING:
                    console.log(`Cordova Playing track ${this.src}`);
                    this.isPlaying = true;
                    this._isLoading = false;
                    break;
                case Media.MEDIA_PAUSED:
                    this.isPlaying = false;
                    break;
                case Media.MEDIA_STOPPED:
                    this.isPlaying = false;
                    break;
            }
        });
    }
    startTimer() {
        this._timer = setInterval(() => {
            if (this._duration === undefined || this._duration < 0) {
                this._duration = Math.round(this.audio.getDuration() * 100) / 100;
            }
            this.audio.getCurrentPosition((position) => {
                if (position > -1) {
                    this._progress = Math.round(position * 100) / 100;
                    this._completed = this._duration > 0 ? Math.round(this._progress / this._duration * 100) / 100 : 0;
                }
            }, (e) => {
                console.log("Cordova Error getting position", e);
            });
        }, 1000);
    }
    stopTimer() {
        clearInterval(this._timer);
    }
    /** public members */
    /**
   * Gets the track id
   *
   * @property id
   * @type {number}
   */
    get id() {
        return this._id;
    }
    /**
   * Sets the track id
   *
   * @property id
   */
    set id(v) {
        this._id = v;
    }
    /**
   * Gets the track duration, or -1 if it cannot be determined
   *
   * @property duration
   * @readonly
   * @type {number}
   */
    get duration() {
        return this._duration;
    }
    /**
   * Gets current track time (progress)
   *
   * @property progress
   * @readonly
   * @type {number}
   */
    get progress() {
        return this._progress;
    }
    /**
   * Gets current track progress as a percentage
   *
   * @property completed
   * @readonly
   * @type {number}
   */
    get completed() {
        return this._completed;
    }
    /**
     * Gets any errors logged by HTML5 audio
     *
     * @property error
     * @readonly
     * @type {MediaError}
     */
    get error() {
        return this.audio.error;
    }
    /**
   * Gets a boolean value indicating whether the current source can be played
   *
   * @property canPlay
   * @readonly
   * @type {boolean}
   */
    get canPlay() {
        return true;
    }
    /**
   * Gets a boolean value indicating whether the track is in loading state
   *
   * @property isLoading
   * @readonly
   * @type {boolean}
   */
    get isLoading() {
        return this._isLoading;
    }
    /**
   * Gets a boolean value indicating whether the track has finished loading
   *
   * @property hadLoaded
   * @readonly
   * @type {boolean}
   */
    get hasLoaded() {
        return this._hasLoaded;
    }
    /**
   * Plays current track
   *
   * @method play
   */
    play() {
        if (!this.audio) {
            this.createAudio();
        }
        if (!this._hasLoaded) {
            console.log(`Cordova Loading track ${this.src}`);
            this._isLoading = true;
        }
        this.audio.play();
        this.startTimer();
    }
    /**
   * Pauses current track
   *
   * @method pause
   */
    pause() {
        if (!this.isPlaying)
            return;
        console.log(`Cordova Pausing track ${this.src}`);
        this.audio.pause();
        this.stopTimer();
    }
    /**
   * Stops current track and releases audio
   *
   * @method stop
   */
    stop() {
        this.audio.stop(); // calls Media onSuccess callback
    }
    /**
   * Seeks to a new position within the track
   *
   * @method seekTo
   * @param {number} time the new position (milliseconds) to seek to
   */
    seekTo(time) {
        // Cordova Media reports duration and progress as seconds, so we need to multiply by 1000
        this.audio.seekTo(time * 1000);
    }
    /**
     * Releases audio resources
     *
     * @method destroy
     */
    destroy() {
        this.audio.release();
        console.log(`Cordova Released track ${this.src}`);
    }
};
CordovaAudioTrack = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [String])
], CordovaAudioTrack);

//# sourceMappingURL=ionic-audio-cordova-track.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









let MusicData = class MusicData {
    constructor(Statusbar, Screenorientation, af, afAuth, fire, _auth) {
        this.Statusbar = Statusbar;
        this.Screenorientation = Screenorientation;
        this.af = af;
        this.afAuth = afAuth;
        this.fire = fire;
        this._auth = _auth;
        this.full = false;
        this.Screenorientation.onChange().subscribe(a => {
            if (this.Screenorientation.type == 'portrait-primary' ||
                this.Screenorientation.type == 'portrait-secondary' ||
                this.Screenorientation.type == 'portrait') {
                this.full = false;
                this.Statusbar.show();
            }
            else {
                this.Statusbar.hide();
                this.full = true;
            }
        });
        this.user = this._auth.uid;
        this.popularArtist = this.af.list('/popularArtist', { query: {
                orderByChild: "count",
                limitToLast: 50
            } });
        /* this.popularAlbum=this.af.database.list('/popularAlbum',{query:{
          orderByChild:"count",
          limitToFirst:50
        }}) */
        this.popularTrack = this.af.list('/popularTrack', { query: {
                orderByChild: "count",
                limitToLast: 50
            } });
        this.popularVideos = this.af.list('/popularVideo', { query: {
                orderByChild: "count",
                limitToLast: 50
            } });
        this.popularArtist.take(1);
        this.popularVideos.take(1);
        //this.popularAlbum.take(1);
        this.popularTrack.take(1);
        this.artists = this.af.list('/artists');
        /* this.newArtists=this.af.database.list('/artists',{
          query:{
            orderByChild:"timestamp",
            limitToLast:50
          }
        }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        */
        this.albums = this.af.list('/albums');
        this.newAlbums = this.af.list('/albums', {
            query: {
                orderByChild: "release",
                limitToLast: 50
            }
        }).map((array) => array.reverse());
        this.tracks = this.af.list('/tracks');
        this.newTracks = this.af.list('/tracks', {
            query: {
                orderByChild: "chosen",
                equalTo: true,
                limitToLast: 50
            }
        }).map((array) => array.reverse());
        this.videos = this.af.list('/tracks').map((array) => array.reverse());
        this.playlists = this.af.list('/playlists/' + this.user);
        this.favorite = this.af.list('/favorite/' + this.user);
    }
};
MusicData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], Object, __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]])
], MusicData);

//# sourceMappingURL=music-data.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the OfflineProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
let Offline = class Offline {
    constructor(filePath, alertCtrl, transfer, file, storage, platform) {
        this.filePath = filePath;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.storage = storage;
        this.platform = platform;
        this.storageDirectory = '';
        this.platform.ready().then(() => {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!this.platform.is('cordova')) {
                return false;
            }
            if (this.platform.is('ios')) {
                this.storageDirectory = file.documentsDirectory;
            }
            else if (this.platform.is('android')) {
                this.storageDirectory = file.externalRootDirectory + 'firespotify/';
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    download(file, name) {
        console.log(file + " : " + name);
        this.platform.ready().then(() => {
            const fileTransfer = this.transfer.create();
            const imageLocation = file;
            fileTransfer.download(imageLocation, this.storageDirectory + name).then((entry) => {
                console.log(entry);
                console.log(entry.toURL());
            }, (error) => {
                console.log(error);
            });
        });
    }
    retrieve(name) {
        this.file.checkFile(this.storageDirectory, name)
            .then(x => {
            this.file.readAsDataURL;
            const path = this.storageDirectory + name.replace(/ /g, '%20');
            console.log(" offline : " + path);
            return path.toString();
        })
            .catch((err) => {
            console.log(err);
            return false;
        });
    }
};
Offline = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _f || Object])
], Offline);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let PlaylistPage = class PlaylistPage {
    constructor(bg, actionSheetCtrl, alert, platform, navParam, navCtrl, musicservice, fav, af, md) {
        this.bg = bg;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alert = alert;
        this.platform = platform;
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.fav = fav;
        this.af = af;
        this.md = md;
        this.myTracks = [];
        this.opened = false;
        this.id = this.navParam.get('playlist');
        this.name = this.navParam.get('name');
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened) {
                    this.opened = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.af.list('playlists/' + this.md.user + '/' + this.id + '/tracks').subscribe(fav => {
            this.myTracks = [];
            fav.forEach(element => {
                this.md.tracks.subscribe(tracks => {
                    tracks.forEach(track => {
                        if (element.$key == track.$key) {
                            this.myTracks.push({
                                src: track.url,
                                video: track.video,
                                artist: track.artistName,
                                title: track.name,
                                art: track.albumArt,
                                preload: 'metadata',
                                key: track.$key,
                                artistId: track.artist,
                                albumId: track.album,
                                album: track.albumName,
                                artistName: track.artistName
                            });
                        }
                    });
                });
            });
        });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    shuffle() {
        let t = Math.floor((Math.random() * (this.myTracks.length)) + 0);
        this.musicservice.play(this.myTracks, t);
        this.tracks = this.musicservice.audio.tracks[0];
        this.musicservice.shuffle = true;
    }
    gotoartist2(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': track.artistId });
    }
    gotoalbum2(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__album_album__["a" /* Album */], {
            albumKey: track.albumId,
            artistKey: track.artistId
        });
    }
    more(track) {
        this.actions = this.actionSheetCtrl.create({
            title: track.name,
            buttons: [
                {
                    text: 'Remove from Playlist',
                    handler: () => {
                        this.opened = false;
                        this.fav.unPlaylist(this.id, track.key);
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartist2(track);
                    }
                },
                {
                    text: 'Go to Album',
                    handler: () => {
                        this.opened = false;
                        this.gotoalbum2(track);
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack2(track);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    shareTrack2(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* Share */], {
            title: track.title,
            artist: track.artistName,
            art: track.art,
            album: track.albumName
        });
    }
    shareTrack(title, subtitle, art, album) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* Share */], {
            title: title,
            subtitle: subtitle,
            art: art,
            album: album
        });
    }
    gotoartist(id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': id });
    }
    gotoalbum(albumId, artistId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__album_album__["a" /* Album */], {
            albumKey: albumId,
            artistKey: artistId
        });
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillEnter() {
        this.tracks = this.musicservice.audio.tracks[0];
    }
    play(track) {
        this.musicservice.play(this.myTracks, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__player_player__["a" /* Player */]);
    }
};
PlaylistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-playlist',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/playlist/playlist.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-title center>\n{{name}}\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n\n\n<ion-row [hidden]="myTracks.length > 0">\n  <ion-col col-12></ion-col>\n<ion-col col-3>\n\n</ion-col>\n\n<ion-col col-6 style="text-align: center">\n<ion-icon style="font-size:10rem;color: white;text-align: center" name="heart"></ion-icon>\n</ion-col>\n\n<ion-col col-3>\n\n</ion-col>\n\n\n<ion-col col-2>\n\n</ion-col>\n\n<ion-col col-8 style="text-align: center;color: white">\n  {{\'noSongsPlaylist\' | translate}}\n</ion-col>\n\n<ion-col col-2>\n\n</ion-col>\n\n\n</ion-row>\n\n\n\n<ion-row>\n\n  <ion-col col-3>\n</ion-col>\n\n<ion-col col-6 style="color:white;text-align: center">\n\n\n<button ion-button color="dark" style="border-radius: 100px;opacity:0.5" (click)="shuffle()" *ngIf="myTracks.length>0">{{\'shuffleAll\' | translate}}</button>\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n</ion-row>\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n \n  <ion-item *ngFor="let track of myTracks;let i=index" block clear  style="background-color: transparent;color:white" >\n\n    <ion-avatar item-left (click)="play(i)">\n      <img class="shadow" src="{{track.art}}">\n    </ion-avatar>\n    <h2 (click)="play(i)">{{track.title}}</h2>\n    <p  (click)="play(i)" style="color:floralwhite">{{track.artist}}</p>\n\n          <ion-icon name="more" style="opacity: 0.5" (click)="more(track)" item-right></ion-icon>\n\n  </ion-item>\n\n    <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n\n\n\n<ion-footer  style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top,#000,#42275a); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000,#42275a);border: none">\n\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n      \n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/playlist/playlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_3__providers_favorite__["a" /* Favorite */],
        __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_music_data__["a" /* MusicData */]])
], PlaylistPage);

//# sourceMappingURL=playlist.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let FavoritesPage = class FavoritesPage {
    constructor(bg, actionSheetCtrl, alert, platform, navCtrl, musicservice, fav, af, md) {
        this.bg = bg;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alert = alert;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.fav = fav;
        this.af = af;
        this.md = md;
        this.myTracks = [];
        this.opened = false;
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened) {
                    this.opened = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.fav.favorites.subscribe(fav => {
            this.myTracks = [];
            fav.forEach(element => {
                this.md.tracks.subscribe(tracks => {
                    tracks.forEach(track => {
                        if (element.$key == track.$key) {
                            this.myTracks.push({
                                src: track.url,
                                video: track.video,
                                artist: track.artistName,
                                title: track.name,
                                art: track.albumArt,
                                preload: 'metadata',
                                key: track.$key,
                                artistId: track.artist,
                                albumId: track.album,
                                album: track.albumName,
                                artistName: track.artistName
                            });
                        }
                    });
                });
            });
        });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    shuffle() {
        let t = Math.floor((Math.random() * (this.myTracks.length)) + 0);
        this.musicservice.play(this.myTracks, t);
        this.tracks = this.musicservice.audio.tracks[0];
        this.musicservice.shuffle = true;
    }
    gotoartist2(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': track.artistId });
    }
    gotoalbum2(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__album_album__["a" /* Album */], {
            albumKey: track.albumId,
            artistKey: track.artistId
        });
    }
    more(track) {
        this.actions = this.actionSheetCtrl.create({
            title: track.name,
            buttons: [
                {
                    text: 'Remove from favorites',
                    handler: () => {
                        this.opened = false;
                        this.fav.unFavorite(track.key);
                    }
                },
                {
                    text: 'Add to Playlist',
                    handler: () => {
                        this.opened = false;
                        this.fav.playlistAlert(track.key);
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartist2(track);
                    }
                },
                {
                    text: 'Go to Album',
                    handler: () => {
                        this.opened = false;
                        this.gotoalbum2(track);
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack2(track);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    shareTrack2(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* Share */], {
            title: track.title,
            artist: track.artistName,
            art: track.art,
            album: track.albumName
        });
    }
    shareTrack(title, subtitle, art, album) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* Share */], {
            title: title,
            subtitle: subtitle,
            art: art,
            album: album
        });
    }
    gotoartist(id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': id });
    }
    gotoalbum(albumId, artistId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__album_album__["a" /* Album */], {
            albumKey: albumId,
            artistKey: artistId
        });
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillEnter() {
        this.tracks = this.musicservice.audio.tracks[0];
    }
    play(track) {
        this.musicservice.play(this.myTracks, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__player_player__["a" /* Player */]);
    }
};
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/favorites/favorites.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-title center>\n      {{\'favorites\' | translate}}\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-content style="   background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n    \n<ion-row [hidden]="myTracks.length > 0">\n  <ion-col col-12></ion-col>\n<ion-col col-3>\n\n</ion-col>\n\n<ion-col col-6 style="text-align: center">\n<ion-icon style="font-size:10rem;color: white;text-align: center" name="heart"></ion-icon>\n</ion-col>\n\n<ion-col col-3>\n\n</ion-col>\n\n\n<ion-col col-2>\n\n</ion-col>\n\n<ion-col col-8 style="text-align: center;color: white">\n  {{\'noSongsFavorite\' | translate}}\n</ion-col>\n\n<ion-col col-2>\n\n</ion-col>\n\n\n</ion-row>\n\n\n\n<ion-row>\n\n  <ion-col col-3>\n</ion-col>\n\n<ion-col col-6 style="color:white;text-align: center">\n\n\n<button ion-button color="dark" style="border-radius: 100px;opacity:0.5" (click)="shuffle()" *ngIf="myTracks.length>0">{{\'shuffleAll\' | translate}}</button>\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n</ion-row>\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n \n  <ion-item *ngFor="let track of myTracks;let i=index" block clear  style="background-color: transparent;color:white" >\n\n    <ion-avatar item-left (click)="play(i)">\n      <img class="shadow" src="{{track.art}}">\n    </ion-avatar>\n    <h2 (click)="play(i)">{{track.title}}</h2>\n    <p  (click)="play(i)" style="color:floralwhite">{{track.artist}}</p>\n\n          <ion-icon name="more" style="opacity: 0.5" (click)="more(track)" item-right></ion-icon>\n\n  </ion-item>\n\n    <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n\n\n<ion-footer  style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top,#000,#42275a); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000,#42275a);border: none">\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n\n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/favorites/favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_3__providers_favorite__["a" /* Favorite */],
        __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_music_data__["a" /* MusicData */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//By Rekar Dilzar Rashid Botany +9647504051800
let SearchPage = class SearchPage {
    constructor(kb, bg, actionSheetCtrl, favorite, alert, platform, navCtrl, musicservice, af, md) {
        this.kb = kb;
        this.bg = bg;
        this.actionSheetCtrl = actionSheetCtrl;
        this.favorite = favorite;
        this.alert = alert;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.af = af;
        this.md = md;
        this.searchArtist = [];
        this.searchAlbum = [];
        this.searchTracks = [];
        this.playlists = [];
        this.result = true;
        this.opened = false;
        this.kb.hideKeyboardAccessoryBar(false);
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened) {
                    this.opened = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tracks = this.musicservice.audio.tracks[0];
        this.trackss = this.md.tracks;
        this.albums = this.md.albums;
        this.artists = this.md.artists;
        this.kb.onKeyboardShow().subscribe(data => {
            this.keyboard = true;
        });
        this.kb.onKeyboardHide().subscribe(data => {
            this.keyboard = false;
        });
    }
    hidekb() {
        if (this.keyboard) {
            this.kb.close();
        }
    }
    gotoartist(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__artist_artist__["a" /* Artist */], { 'artistKey': track });
    }
    gotoalbum(album, artist) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__album_album__["a" /* Album */], {
            albumKey: album,
            artistKey: artist
        });
    }
    gotoartistt(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__artist_artist__["a" /* Artist */], { 'artistKey': track.artist });
    }
    gotoalbumt(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__album_album__["a" /* Album */], {
            albumKey: track.album,
            artistKey: track.artist
        });
    }
    more(track) {
        this.actions = this.actionSheetCtrl.create({
            title: track.name,
            buttons: [
                {
                    text: 'Add to favorite',
                    handler: () => {
                        this.opened = false;
                        this.favorite.favorite(track.$key);
                    }
                },
                {
                    text: 'Add to Playlist',
                    handler: () => {
                        this.opened = false;
                        this.favorite.playlistAlert(track.$key);
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartistt(track);
                    }
                },
                {
                    text: 'Go to Album',
                    handler: () => {
                        this.opened = false;
                        this.gotoalbumt(track);
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack(track);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    shareTrack(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__share_share__["a" /* Share */], {
            title: track.name,
            artist: track.artistName,
            art: track.albumArt,
            album: track.albumName
        });
    }
    play(track, i) {
        this.musicservice.play(this.playlists, i);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    search(ev) {
        this.result = true;
        var val = ev.target.value;
        if (val) {
            this.result = false;
            if (val != "" && val.length >= 3) {
                this.trackss.subscribe((_items) => {
                    this.searchTracks = [];
                    this.playlists = [];
                    _items.forEach(item => {
                        if ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.artistName.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                            this.result = true;
                            this.searchTracks.push(item);
                            this.playlists.push({ src: item.url,
                                video: item.video,
                                artist: item.artistName,
                                title: item.name,
                                art: item.albumArt,
                                preload: 'metadata',
                                key: item.$key,
                                artistId: item.artist,
                                albumId: item.album,
                                album: item.albumName });
                        }
                    });
                });
                this.albums.subscribe((_items) => {
                    this.searchAlbum = [];
                    _items.forEach(item => {
                        if ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.artistName.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                            this.searchAlbum.push(item);
                        }
                    });
                });
                this.artists.subscribe((_items) => {
                    this.searchArtist = [];
                    _items.forEach(item => {
                        if ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1)) {
                            this.searchArtist.push(item);
                        }
                    });
                });
            }
            else {
                this.searchTracks = [];
                this.searchArtist = [];
                this.searchAlbum = [];
            }
        }
        else {
            this.searchTracks = [];
            this.searchArtist = [];
            this.searchAlbum = [];
        }
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillEnter() {
        this.tracks = this.musicservice.audio.tracks[0];
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
        console.log("finish method");
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__player_player__["a" /* Player */]);
    }
};
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/search/search.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-searchbar (ionInput)="search($event)" style="background-color: transparent"></ion-searchbar>\n\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-content (click)="hidekb()" style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n<ion-row [hidden]="searchArtist.length!=0 || searchTracks.length!=0 || searchAlbum.length!=0">\n  <ion-col col-12></ion-col>\n<ion-col col-3>\n\n</ion-col>\n\n<ion-col col-6 style="text-align: center">\n<ion-icon style="font-size:10rem;color: white;text-align: center" name="search"></ion-icon>\n</ion-col>\n\n<ion-col col-3>\n\n</ion-col>\n\n\n<ion-col col-2>\n\n</ion-col>\n\n<ion-col col-8 style="text-align: center;color: white">\n{{ \'searchpage\' | translate}}\n</ion-col>\n\n<ion-col col-2>\n  \n\n</ion-col>\n\n\n<ion-col col-2>\n\n</ion-col>\n\n<ion-col [hidden]="result" col-8 style="text-align: center;color: white">\n{{ \'noResult\' | translate}}\n</ion-col>\n\n<ion-col col-2>\n\n</ion-col>\n\n</ion-row>\n\n\n\n\n<ion-item no-lines [hidden]="searchTracks.length==0" style="background-color: transparent;color:white">{{ \'songs\' | translate}}</ion-item>\n\n\n<ion-list [hidden]="searchTracks.length==0" no-lines >\n\n\n\n\n<ion-item *ngFor="let artist of searchTracks ;let i= index " block clear    style="background-color: transparent;color:white" >\n    <ion-avatar item-left (click)="play(artist,i)">\n            <img class="shadow" [src]="artist.albumArt">\n    </ion-avatar>\n    <h2 (click)="play(artist,i)"> <ion-icon name="play" style="opacity: 0.5" *ngIf="artist.$key == musicservice.playingTrack.key"> &nbsp; </ion-icon> {{artist.name}}</h2>\n    <p  (click)="play(artist,i)"style="color:floralwhite">{{artist.artistName}}</p>\n              <ion-icon name="more" style="opacity: 0.5" (click)="more(artist)" item-right></ion-icon>\n\n  </ion-item>\n</ion-list>\n\n\n\n<ion-item no-lines [hidden]="searchArtist.length==0" style="background-color: transparent;color:white">{{ \'artists\' | translate}}</ion-item>\n\n <ion-list [hidden]="searchArtist.length==0" no-lines style="background-color: transparent"  >\n\n\n\n\n  <ion-item *ngFor="let artist of searchArtist" block clear  (click)="gotoartist(artist.$key)"   style="background-color: transparent;color:white" >\n    <ion-avatar item-left>\n      <img class="shadow" [src]="artist.image">\n    </ion-avatar>\n    <h2>{{artist.name}}</h2>\n  </ion-item>\n</ion-list>\n\n\n\n\n\n<ion-item no-lines [hidden]="searchAlbum.length==0" style="background-color: transparent;color:white">{{ \'albums\' | translate}}</ion-item>\n\n<ion-list [hidden]="searchAlbum.length==0"  no-lines >\n\n\n\n\n<ion-item *ngFor="let artist of searchAlbum" block clear  (click)="gotoalbum(artist.$key,artist.artist)"   style="background-color: transparent;color:white" >\n    <ion-avatar item-left>\n                  <img class="shadow" [src]="artist.image">\n    </ion-avatar>\n    <h2>{{artist.name}}</h2>\n  </ion-item>\n</ion-list>\n\n\n\n\n\n\n<ion-item *ngIf="tracks" no-lines style="background-color: transparent"></ion-item>\n\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n\n\n<ion-footer  style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top,#000,#42275a); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000,#42275a);border: none">\n\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n      \n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_musicservice__["a" /* MusicService */],
        __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_music_data__["a" /* MusicData */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_video__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_take__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__welcome_welcome__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















//By Rekar Dilzar Rashid Botany +9647504051800


let HomePage = class HomePage {
    constructor(storage, bg, splashScreen, alert, platform, md, _auth, navCtrl, musicservice, af) {
        this.storage = storage;
        this.bg = bg;
        this.splashScreen = splashScreen;
        this.alert = alert;
        this.platform = platform;
        this.md = md;
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.af = af;
        this.newVideos = [];
        this.playlists = [];
        this.videoPlaylists = [];
        this.popularTracksPlaylists = [];
        this.popularVideosPlaylists = [];
        this.popularArtistsPlaylists = [];
        this.popularAlbumsPlaylists = [];
        this.videob = false;
        this.trackb = false;
        this.artistb = false;
        this.albumb = false;
        this.loadedNewAlbum = false;
        storage.get('follow').then((val) => {
            if (val != null) {
                //this.navCtrl.push(WelcomePage);
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__welcome_welcome__["a" /* WelcomePage */]);
                storage.set('follow', true);
            }
        });
        platform.ready().then(() => {
            if (this.splashScreen) {
                setTimeout(() => {
                    this.splashScreen.hide();
                }, 500);
            }
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.allAlbums = this.md.albums;
        this.allArtists = this.md.artists;
        this.allTracks = this.md.tracks;
        this.allVideos = this.md.videos;
        this.md.newAlbums.subscribe(x => { this.loadedNewAlbum = true; });
        //this.newArtists = this.md.newArtists;
        this.newAlbums = this.md.newAlbums;
        this.newTracks = this.md.newTracks;
        //this.newPlaylists = this.md.newPlaylists;
        this.popularTracks = this.md.popularTrack;
        this.popularVideos = this.md.popularVideos;
        //this.popularAlbums=this.md.popularAlbum;
        this.popularArtists = this.md.popularArtist;
        this.newTracks.subscribe(snapshots => {
            this.playlists = [];
            snapshots.forEach(element => {
                this.playlists.push({ src: element.url,
                    video: element.video,
                    artist: element.artistName,
                    title: element.name,
                    art: element.albumArt,
                    preload: 'metadata',
                    key: element.$key,
                    artistId: element.artist,
                    albumId: element.album,
                    album: element.albumName,
                    artistName: element.artistName
                });
            });
        });
        this.allVideos.subscribe(snapshots => {
            this.videoPlaylists = [];
            snapshots.forEach(element => {
                if (element.video) {
                    this.videoPlaylists.push({ src: element.url,
                        video: element.video,
                        artist: element.artistName,
                        title: element.name,
                        art: element.albumArt,
                        preload: 'metadata',
                        key: element.$key,
                        artistId: element.artist,
                        albumId: element.album,
                        album: element.albumName,
                        artistName: element.artistName
                    });
                }
            });
        });
        this.popularVideos.subscribe(pop => {
            if (this.videob == false) {
                this.popularVideosPlaylists = [];
                pop.forEach(pope => {
                    this.allTracks.subscribe(all => {
                        all.forEach(alle => {
                            if (alle.$key == pope.$key) {
                                this.popularVideosPlaylists.push({ src: alle.url,
                                    video: alle.video,
                                    artist: alle.artistName,
                                    title: alle.name,
                                    art: alle.albumArt,
                                    preload: 'metadata',
                                    key: alle.$key,
                                    artistId: alle.artist,
                                    albumId: alle.album,
                                    album: alle.albumName,
                                    artistName: alle.artistName,
                                });
                            }
                        });
                    });
                });
                this.videob = true;
            }
        });
        this.popularTracks.subscribe(pop => {
            if (this.trackb == false) {
                this.popularTracksPlaylists = [];
                pop.forEach(pope => {
                    this.allTracks.subscribe(all => {
                        all.forEach(alle => {
                            if (alle.$key == pope.$key) {
                                this.popularTracksPlaylists.push({ src: alle.url,
                                    video: alle.video,
                                    artist: alle.artistName,
                                    title: alle.name,
                                    art: alle.albumArt,
                                    preload: 'metadata',
                                    key: alle.$key,
                                    artistId: alle.artist,
                                    albumId: alle.album,
                                    album: alle.albumName,
                                    artistName: alle.artistName,
                                });
                            }
                        });
                    });
                });
                this.trackb = true;
            }
        });
        this.popularArtists.subscribe(pop => {
            if (this.artistb == false) {
                this.popularArtistsPlaylists = [];
                pop.forEach(pope => {
                    this.allArtists.subscribe(all => {
                        all.forEach(alle => {
                            if (alle.$key == pope.$key) {
                                this.popularArtistsPlaylists.push(alle);
                            }
                        });
                    });
                });
                this.artistb = true;
            }
        });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    gotoartist(artistKey) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__artist_artist__["a" /* Artist */], { 'artistKey': artistKey });
    }
    gotoalbum(albumKey, artistKey) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__album_album__["a" /* Album */], {
            albumKey: albumKey,
            artistKey: artistKey
        });
    }
    menu() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* Menu */]);
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillEnter() {
        this.tracks = this.musicservice.audio.tracks[0];
    }
    playVideo(track) {
        this.musicservice.pause();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__video_video__["a" /* Video */], {
            videos: this.videoPlaylists,
            video: this.videoPlaylists[track]
        });
    }
    playpopVideo(track) {
        this.musicservice.pause();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__video_video__["a" /* Video */], {
            videos: this.popularVideosPlaylists,
            video: this.popularVideosPlaylists[track]
        });
    }
    play(track) {
        this.musicservice.play(this.playlists, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    playpop(track) {
        this.musicservice.play(this.popularTracksPlaylists, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
        console.log("finish method");
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* Player */]);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/home/home.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-title center>\n      {{\'browse\' | translate}}\n    </ion-title>\n\n <ion-buttons end>\n      <button (click)="menu()" ion-button icon-only >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n   \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="   background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n\n\n\n\n\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'newSong\' | translate}}</ion-item>\n\n\n\n<ion-scroll scrollX style="height:200px;">\n\n  <div [hidden]="playlists.length > 0" class="scroll-item"   style="text-align: center;margin:10px">\n<ion-icon style="font-size:5rem;color: white;text-align: center" name="musical-notes"></ion-icon>\n<p style="color:azure">Loading...</p>\n    </div>\n\n  <div class="scroll-item" *ngFor="let artist of newTracks | async;let i=index " (click)="play(i)" style="text-align: center;margin:10px;width: 120px">\n<img class="shadow" src="{{artist.albumArt}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure;text-overflow: ellipsis;overflow: hidden">{{artist.name}}</p>\n<p style="color:darkgray;margin-top:-10px;color:azure;font-size: 80%">{{artist.artistName}}</p>\n    </div>\n\n\n</ion-scroll>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'trendingNow\' | translate}}</ion-item>\n\n<ion-scroll scrollX style="height:200px;">\n    \n<div [hidden]="popularTracksPlaylists.length > 0" class="scroll-item"   style="text-align: center;margin:10px">\n<ion-icon style="font-size:5rem;color: white;text-align: center" name="musical-notes"></ion-icon>\n<p style="color:azure">Loading...</p>\n    </div>\n\n  <div class="scroll-item" *ngFor="let artist of popularTracksPlaylists ; let i=index;"  (click)="playpop(i)" style="text-align: center;margin:10px;width: 120px;">\n<img class="shadow" src="{{artist.art}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure;text-overflow: ellipsis;overflow: hidden">{{artist.title}}</p>\n<p style="color:darkgray;margin-top:-10px;color:azure;font-size: 80%">{{artist.artistName}}</p>\n    </div>\n\n\n\n</ion-scroll>\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'artists\' | translate}}</ion-item>\n\n<ion-scroll scrollX style="height:200px;">\n    \n    <div [hidden]="popularArtistsPlaylists.length > 0" class="scroll-item"   style="text-align: center;margin:10px">\n<ion-icon style="font-size:5rem;color: white;text-align: center" name="musical-notes"></ion-icon>\n<p style="color:azure">Loading...</p>\n    </div>\n\n  <div class="scroll-item" *ngFor="let artist of popularArtistsPlaylists  "  (click)="gotoartist(artist.$key)"  style="text-align: center;margin:10px">\n\n<img class="shadow" src="{{artist.image}}" style="width: 120px;height: 120px;color:azure;border-radius: 100px">\n<p style="color:azure">{{artist.name}}</p>\n    </div>\n\n\n</ion-scroll>\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'newAlbums\' | translate}}</ion-item>\n\n<ion-scroll scrollX style="height:200px;">\n\n      <div [hidden]="loadedNewAlbum" class="scroll-item"   style="text-align: center;margin:10px">\n<ion-icon style="font-size:5rem;color: white;text-align: center" name="musical-notes"></ion-icon>\n<p style="color:azure">Loading...</p>\n    </div>\n\n\n  <div class="scroll-item" *ngFor="let artist of newAlbums | async " (click)="gotoalbum(artist.$key,artist.artist)" style="text-align: center;margin:10px;width: 120px">\n<img class="shadow" src="{{artist.image}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure;text-overflow: ellipsis;overflow: hidden">{{artist.name}}</p>\n<p style="color:darkgray;margin-top:-10px;color:azure;font-size: 80%">{{artist.artistName}}</p>\n\n    </div>\n\n\n</ion-scroll>\n       \n\n\n\n<!--\n\n<ion-item style="background-color: transparent;color:azure;text-align: center" no-lines>New Singers</ion-item>\n\n<ion-scroll scrollX style="height:180px;">\n  <div class="scroll-item" *ngFor="let artist of newArtists | async " (click)="gotoartist(artist.$key)" style="text-align: center;margin:10px">\n<img src="{{artist.image}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure">{{artist.name}}</p>\n    </div>\n\n\n</ion-scroll>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>Popular Albums</ion-item>\n\n<ion-scroll scrollX style="height:200px;">\n    \n  <div class="scroll-item" *ngFor="let artist of popularAlbumsPlaylists  " (click)="gotoalbum(artist.$key,artist.artist)" style="text-align: center;margin:10px">\n\n<img src="{{artist.image}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure">{{artist.name}}</p>\n<p style="color:darkgray;margin-top:-10px;color:azure">{{artist.artistName}}</p>\n  </div>\n\n\n</ion-scroll>\n-->\n\n\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'newVideo\' | translate}}</ion-item>\n\n\n\n<ion-scroll scrollX style="height:200px;">\n\n  <div [hidden]="videoPlaylists.length > 0" class="scroll-item"   style="text-align: center;margin:10px">\n<ion-icon style="font-size:5rem;color: white;text-align: center" name="musical-notes"></ion-icon>\n<p style="color:azure">Loading...</p>\n    </div>\n\n  <div class="scroll-item" *ngFor="let artist of videoPlaylists ;let i=index " (click)="playVideo(i)" style="text-align: center;margin:10px;width: 120px">\n<img class="shadow" src="{{artist.art}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure;text-overflow: ellipsis;overflow: hidden">{{artist.title}}</p>\n<p style="color:darkgray;margin-top:-10px;color:azure;font-size: 80%">{{artist.artistName}}</p>\n    </div>\n\n\n</ion-scroll>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-item style="background-color: transparent;color: azure;text-align: center" no-lines>{{\'trendingNowVideo\' | translate}} </ion-item>\n\n<ion-scroll scrollX style="height:200px;">\n    \n<div [hidden]="popularVideosPlaylists.length > 0" class="scroll-item"   style="text-align: center;margin:10px">\n<ion-icon style="font-size:5rem;color: white;text-align: center" name="musical-notes"></ion-icon>\n<p style="color:azure">Loading...</p>\n    </div>\n\n  <div class="scroll-item" *ngFor="let artist of popularVideosPlaylists ; let i=index"  (click)="playpopVideo(i)" style="text-align: center;margin:10px;width: 120px">\n<img class="shadow" src="{{artist.art}}" style="width: 120px;height: 120px;color:azure">\n<p style="color:azure;text-overflow: ellipsis;overflow: hidden">{{artist.title}} </p>\n<p style="color:darkgray;margin-top:-10px;color:azure;font-size: 80%">{{artist.artistName}}</p>\n    </div>\n\n\n\n</ion-scroll>\n\n\n\n\n\n\n\n\n<ion-item *ngIf="tracks" no-lines style="background-color: transparent"></ion-item>\n\n \n  \n\n</ion-content>\n\n\n\n\n\n\n<ion-footer  style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top,#000,#42275a); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000,#42275a);border: none">\n\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_16__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__providers_music_data__["a" /* MusicData */], __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//By Rekar Dilzar Rashid Botany +9647504051800

let Menu = class Menu {
    constructor(storage, platform, actionSheetCtrl, translate, navCtrl, navParams, _auth, musicservice) {
        this.storage = storage;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auth = _auth;
        this.musicservice = musicservice;
        this.opened = false;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened) {
                    this.opened = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
            });
        });
    }
    setLang(lang) {
        this.translate.use(lang);
        this.translate.setDefaultLang(lang);
        this.storage.set('lang', lang);
    }
    langs() {
        this.actions = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'English',
                    handler: () => {
                        this.opened = false;
                        this.setLang('en');
                    }
                },
                {
                    text: 'العربية',
                    handler: () => {
                        this.opened = false;
                        this.setLang('ar');
                    }
                },
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Menu');
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }
    logout() {
        this.musicservice.pause();
        setTimeout(() => {
            this._auth.signOut();
        }, 500);
    }
    followfb() {
        window.open('https://m.facebook.com/', '_system');
    }
    followig() {
        window.open('https://www.instagram.com/', '_system');
    }
    contact() {
        window.open(`mailto:info@example.net`, '_system');
    }
    about() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* About */]);
    }
};
Menu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/menu/menu.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-title center>\n      {{\'menu\' | translate}}\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);ext-align: center" >\n\n<ion-list no-lines>\n<ion-item  style="background-color: transparent;color:white">\n</ion-item>\n\n\n<ion-item (click)="langs()" style="background-color: transparent;color:white">\n<h2>{{\'language\' | translate}}</h2>\n</ion-item>\n<ion-item (click)="about()" style="background-color: transparent;color:white">\n<h2>{{\'about\' | translate}}</h2>\n</ion-item>\n<ion-item (click)="contact()" style="background-color: transparent;color:white">\n<h2>{{\'contact\' | translate}}</h2>\n</ion-item>\n<ion-item (click)="logout()" style="background-color: transparent;color:white">\n<h2>{{\'logout\' | translate}}</h2>\n</ion-item>\n\n\n\n</ion-list>\n\n \n  \n\n</ion-content>\n<ion-footer style="text-align: center">\n  <img (click)="followfb()" style="width:30px;margin: 10px" src="assets/facebook.png">\n\n<img (click)="followig()" style="width:30px;margin: 10px" src="assets/instagram.png">\n\n<br><br><br><br><br>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_musicservice__["a" /* MusicService */]])
], Menu);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//By Rekar Dilzar Rashid Botany +9647504051800

let About = class About {
    constructor(bg, platform, favorite, actionSheetCtrl, params, _auth, navCtrl, musicservice) {
        this.bg = bg;
        this.platform = platform;
        this.favorite = favorite;
        this.actionSheetCtrl = actionSheetCtrl;
        this.params = params;
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
    }
};
About = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/about/about.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger" style="background-color: transparent">\n\n\n    \n\n   \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n<br><br><br>\n<ion-row >\n  <ion-col col-12></ion-col>\n<ion-col col-3>\n\n</ion-col>\n\n<ion-col col-6 style="text-align: center">\n  <img  src="assets/logo.png" style="width: 80%">\n<br>\n</ion-col>\n\n<ion-col col-3>\n\n</ion-col>\n\n\n<ion-col col-1>\n\n</ion-col>\n\n<ion-col col-10 style="text-align: center;color: white">\n  <h4 class="about" >{{\'aboutText\' | translate}}</h4>\n\n<ion-icon style="font-size:2rem;color: white;text-align: center;font-weight: 100" name="musical-note"></ion-icon> &nbsp;\n<ion-icon style="font-size:2rem;color: white;text-align: center;font-weight: 100" name="musical-notes"></ion-icon> &nbsp;&nbsp;\n<ion-icon style="font-size:2rem;color: white;text-align: center;font-weight: 100" name="musical-note"></ion-icon>\n\n</ion-col>\n\n<ion-col col-1>\n\n</ion-col>\n\n\n</ion-row>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */]])
], About);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mood_mood__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//By Rekar Dilzar Rashid Botany +9647504051800
let MoodsPage = class MoodsPage {
    constructor(bg, alert, platform, navCtrl, musicservice, fav, af, md) {
        this.bg = bg;
        this.alert = alert;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.fav = fav;
        this.af = af;
        this.md = md;
        this.moodsList = [];
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.moods = this.af.list('/moods', { preserveSnapshot: true });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    moodOpen(moodData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__mood_mood__["a" /* Mood */], {
            mood: moodData
        });
    }
    ionViewWillEnter() {
        this.tracks = this.musicservice.audio.tracks[0];
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__player_player__["a" /* Player */]);
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
};
MoodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-moods',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/moods/moods.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n    <ion-title center>\n      {{\'moods\' | translate}}\n    </ion-title>\n\n   \n  </ion-navbar>\n\n</ion-header>\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n <ion-row>\n<ion-col col-6 *ngFor="let mood of moods | async" style="padding: 2.5%" (click)="moodOpen(mood)">\n<img  class="shadow" src="{{mood.val().image}}">\n<!-- <p style="color:white">{{mood.val().name}}</p> -->\n</ion-col>\n\n </ion-row>\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n\n<ion-footer  style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top,#000,#42275a); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000,#42275a);border: none">\n\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n      \n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/moods/moods.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_3__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_music_data__["a" /* MusicData */]])
], MoodsPage);

//# sourceMappingURL=moods.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mood; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//By Rekar Dilzar Rashid Botany +9647504051800
let Mood = class Mood {
    constructor(bg, platform, favorite, actionSheetCtrl, params, _auth, navCtrl, musicservice, af) {
        this.bg = bg;
        this.platform = platform;
        this.favorite = favorite;
        this.actionSheetCtrl = actionSheetCtrl;
        this.params = params;
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.af = af;
        this.playlists = [];
        this.opened = false;
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened) {
                    this.opened = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.mood = this.params.get('mood');
        af.list('/tracks/', { preserveSnapshot: true })
            .subscribe(snapshots => {
            snapshots.forEach(element => {
                if (element.val().mood == this.mood.val().name ||
                    element.val().mood2 == this.mood.val().name ||
                    element.val().mood3 == this.mood.val().name) {
                    this.playlists.push({ src: element.val().url,
                        video: element.val().video,
                        artist: element.val().artistName,
                        title: element.val().name,
                        art: element.val().albumArt,
                        preload: 'metadata',
                        key: element.key,
                        artistId: element.val().artist,
                        albumId: element.val().album,
                        album: element.val().albumName });
                }
            });
        });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        this.tracks = this.musicservice.audio.tracks[0];
    }
    play(track) {
        this.musicservice.play(this.playlists, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    shuffle() {
        let t = Math.floor((Math.random() * (this.playlists.length)) + 0);
        this.musicservice.play(this.playlists, t);
        this.tracks = this.musicservice.audio.tracks[0];
        this.musicservice.shuffle = true;
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
        console.log("finish method");
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* Player */]);
    }
    gotoartist(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': track.artistId });
    }
    gotoalbum(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__album_album__["a" /* Album */], {
            albumKey: track.albumId,
            artistKey: track.artistId
        });
    }
    more(track) {
        this.actions = this.actionSheetCtrl.create({
            title: track.name,
            buttons: [
                {
                    text: 'Add to favorite',
                    handler: () => {
                        this.opened = false;
                        this.favorite.favorite(track.key);
                    }
                },
                {
                    text: 'Add to Playlist',
                    handler: () => {
                        this.opened = false;
                        this.favorite.playlistAlert(track.key);
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartist(track);
                    }
                },
                {
                    text: 'Go to Album',
                    handler: () => {
                        this.opened = false;
                        this.gotoalbum(track);
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack(track);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    shareTrack(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__share_share__["a" /* Share */], {
            title: track.name,
            artist: track.artistName,
            art: track.albumArt,
            album: track.albumName
        });
    }
};
Mood = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mood',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/mood/mood.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger" style="background-color: transparent">\n\n\n    \n\n   \n  </ion-navbar>\n\n</ion-header>\n\n<div class="background-image" [style.backgroundImage]="\'url(\' + mood.val().image + \')\'"  ></div>\n\n<ion-content style="background: rgba(0, 0, 0, 0.6) !important;text-align: center" >\n\n<ion-row style="height: auto">\n\n<ion-col col-3>\n</ion-col>\n\n<ion-col col-6>\n<img  class="shadow" src="{{mood.val().image}}" style="width:100%;height: auto;min-height: 150px;background-color: rgba(0,0,0,0.5)">\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n\n<ion-col col-3>\n</ion-col>\n\n<ion-col col-6 style="color:white;text-align: center">\n<h4>{{mood.val().name}}</h4>\n<br><br>\n\n<button ion-button color="danger" style="border-radius: 100px;opacity:0.5" (click)="shuffle()" *ngIf="playlists.length>0">{{\'shuffleAll\' | translate}}</button>\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n</ion-row>\n\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n\n\n\n\n\n<ion-item *ngFor="let track of playlists;let i=index" block clear  style="background-color: transparent;color:white" >\n\n    <ion-avatar item-left (click)="play(i)">\n      <img  class="shadow" src="{{track.art}}">\n    </ion-avatar>\n    <h2 (click)="play(i)">{{track.title}}</h2>\n    <p  (click)="play(i)" style="color:floralwhite">{{track.artist}}</p>\n\n          <ion-icon name="more" style="opacity: 0.5" (click)="more(track)" item-right></ion-icon>\n\n  </ion-item>\n\n\n  <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n    <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n  <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n<ion-footer  style="background: #cb356b; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000, #151515); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000, #151515);">\n\n        <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/mood/mood.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], Mood);

//# sourceMappingURL=mood.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//By Rekar Dilzar Rashid Botany +9647504051800

let Login = class Login {
    constructor(alertCtrl, kb, bg, storage, navCtrl, navParams, af, afService, platform, splashScreen) {
        this.alertCtrl = alertCtrl;
        this.kb = kb;
        this.bg = bg;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afService = afService;
        this.registerPage = false;
        this.fb = false;
        this.kb.onKeyboardShow().subscribe(data => {
            this.fb = true;
        });
        this.kb.onKeyboardHide().subscribe(data => {
            this.fb = false;
        });
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
            if (splashScreen) {
                setTimeout(() => {
                    splashScreen.hide();
                }, 500);
            }
        });
        this.afService.afAuth.authState.subscribe((user) => {
            if (!user) {
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
        });
        this.loginData = { email: "admin@example.com", password: "password" };
        this.registerData = { email: "", password: "", password2: "" };
        /*
         storage.get('email').then((val) => {
                 this.loginData.email=val;
               })
                storage.get('password').then((val) => {
                 this.loginData.password=val;
               })
                  */
    }
    page() {
        this.registerPage = !this.registerPage;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }
    signInWithFacebook() {
        this.afService.signInWithFacebook()
            .then(() => this.onSignInSuccess())
            .catch(error => {
            let alert = this.alertCtrl.create({
                title: 'Facebook Login',
                subTitle: 'Your Facebook doesn\'t contain email address',
                buttons: ['Dismiss'],
            });
            alert.present();
        });
    }
    signInWithGoogle() {
        this.afService.signInWithGoogle()
            .then(() => this.onSignInSuccess());
    }
    signIn() {
        this.afService.signIn(this.loginData.email, this.loginData.password)
            .then(x => {
            this.storage.set('email', this.loginData.email);
            this.storage.set('password', this.loginData.password);
        })
            .catch((error) => {
            console.log(error);
            let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Email Address or Password Incorrect',
                buttons: ['Dismiss']
            });
            alert.present();
        });
    }
    register() {
        this.afService.registerUser(this.registerData.email, this.registerData.password, this.registerData.password2)
            .then(x => {
            this.storage.set('email', this.registerData.email);
            this.storage.set('password', this.registerData.password);
        })
            .catch((error) => {
            let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Email Address is not valid or already in use',
                buttons: ['Dismiss']
            });
            alert.present();
        });
    }
    forgotPassword() {
        this.afService.forgotPassword(this.loginData.email)
            .catch((error) => {
            let alert = this.alertCtrl.create({
                title: 'Password Reset',
                subTitle: error.message,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    }
    onSignInSuccess() {
        //this.navCtrl.setRoot(TabsPage);
    }
};
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content style=" background: #000000; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000000,#151515, #434343); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000000,#151515, #434343);text-align: center\n" >\n\n<ion-row [hidden]="fb" style="height: 13%">\n\n\n</ion-row >\n\n<ion-row style="height: 15%">\n   <ion-col col-2>\n  </ion-col>\n  <ion-col col-8 style="text-align: center">\n<img src="assets/logo.png" style="width: 100%">\n  </ion-col>\n   <ion-col col-2>\n  </ion-col>\n</ion-row>\n<ion-row style="height: 1%">\n\n\n</ion-row >\n\n<ion-row style="height: 46%;text-align: center" >\n<ion-row  [hidden]="registerPage" style="width: 100%">\n  <ion-col col-2>\n  </ion-col>\n  <ion-col col-8 style="text-align: center;border-radius: 3px;">\n<ion-list no-lines>\n <ion-item  style="background-color: rgba(255, 255, 255, 0);">\n    <ion-label color="primary" floating><ion-icon name="mail"></ion-icon> {{\'email\' | translate}}</ion-label>\n    <ion-input type="text" [(ngModel)]="loginData.email" style="color:white"></ion-input>\n  </ion-item>\n\n   <ion-item  style="background-color: rgba(255, 255, 255, 0);">\n    <ion-label color="primary" floating><ion-icon name="lock"></ion-icon> {{\'password\' | translate}}</ion-label>\n    <ion-input type="password" [(ngModel)]="loginData.password" style="color: white"></ion-input>\n  </ion-item>\n</ion-list>\n \n  </ion-col>\n<ion-col col-2>\n</ion-col>\n\n<ion-col col-2>\n</ion-col>\n\n<ion-col col-4>\n\n<button (click)="signIn()" ion-button style="opacity: 0.8;box-shadow: 0px 10px 30px #151515;border-radius: 20px" color="white" block >{{\'login\' | translate}}</button>\n</ion-col>\n\n<ion-col col-4>\n\n<button (click)="signInWithFacebook()" ion-button style="opacity: 0.8;box-shadow: 0px 10px 30px #151515;border-radius: 20px" color="light" block icon-left> <ion-icon name="logo-facebook"></ion-icon> Facebook</button>\n\n\n</ion-col>\n\n</ion-row>\n\n\n\n<ion-row  [hidden]="!registerPage" style="width: 100%">\n  <ion-col col-2>\n  </ion-col>\n  <ion-col col-8 style="text-align: center;border-radius: 3px;">\n<ion-list no-lines>\n <ion-item  style="background-color: rgba(255, 255, 255, 0);">\n    <ion-label color="primary" floating><ion-icon name="mail"></ion-icon> {{\'email\' | translate}}</ion-label>\n    <ion-input type="text" [(ngModel)]="registerData.email" style="color:white"></ion-input>\n  </ion-item>\n\n   <ion-item  style="background-color: rgba(255, 255, 255, 0);">\n    <ion-label color="primary" floating><ion-icon name="lock"></ion-icon> {{\'password\' | translate}}</ion-label>\n    <ion-input type="password" [(ngModel)]="registerData.password" style="color: white"></ion-input>\n  </ion-item>\n\n \n</ion-list>\n \n  </ion-col>\n\n<ion-col col-2>\n</ion-col>\n\n\n\n<ion-col col-2>\n</ion-col>\n\n\n<ion-col col-8>\n\n<button (click)="register()" ion-button style="opacity: 0.8;box-shadow: 0px 10px 30px #151515;border-radius: 20px" color="white" block >{{\'signUp\' | translate}}</button>\n\n\n</ion-col>\n\n<ion-col col-2>\n</ion-col>\n\n</ion-row>\n</ion-row>\n<ion-row style="height: 15%">\n\n</ion-row>\n\n\n\n<ion-row style="height: 10%">\n\n\n\n\n<ion-col col-6 style="text-align: left">\n<button (click)="forgotPassword()" ion-button style="opacity: 0.8" clear block >{{\'forgotPassword\' | translate}}</button>\n\n\n</ion-col>\n\n<ion-col col-6 style="text-align: right">\n<button (click)="page()" *ngIf="!registerPage" ion-button style="opacity: 0.8" clear block >{{\'newUser\' | translate}}</button>\n<button (click)="page()" *ngIf="registerPage" ion-button style="opacity: 0.8" clear block >{{\'alreadyUser\' | translate}}</button>\n\n\n</ion-col>\n\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(286);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//By Rekar Dilzar Rashid Botany +9647504051800
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_video_video__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_safe__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_search__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_library_library__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_playlist_playlist__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_moods_moods__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mood_mood__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_shared_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_audio_ionic_audio_module__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ngx_translate_core__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ngx_translate_http_loader__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_keyboard__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_screen_orientation__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_welcome_welcome__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_file_transfer__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_file__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_offline__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_file_path__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_common_http__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//By Rekar Dilzar Rashid Botany +9647504051800









//By Rekar Dilzar Rashid Botany +9647504051800

//By Rekar Dilzar Rashid Botany +9647504051800


//By Rekar Dilzar Rashid Botany +9647504051800





// Import the AF2 Module















// AF2 Settings
//Replace this with your own keys from console.firebase.com
const firebaseConfig = {
    apiKey: "AIzaSyD70l8eAE8lEOw4ggZElSLbgoykOCF6BeM",
    authDomain: "awaza-47e7f.firebaseapp.com",
    databaseURL: "https://awaza-47e7f.firebaseio.com",
    projectId: "awaza-47e7f",
    storageBucket: "awaza-47e7f.appspot.com",
    messagingSenderId: "739916983861"
};
/* unused harmony export firebaseConfig */

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_33__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__pipes_safe__["a" /* Safe */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_38__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_player_player__["a" /* Player */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* About */],
            __WEBPACK_IMPORTED_MODULE_13__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_playlist_playlist__["a" /* PlaylistPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_moods_moods__["a" /* MoodsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_mood_mood__["a" /* Mood */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_artist_artist__["a" /* Artist */],
            __WEBPACK_IMPORTED_MODULE_20__pages_album_album__["a" /* Album */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* Share */],
            __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* Menu */],
            __WEBPACK_IMPORTED_MODULE_6__pages_video_video__["a" /* Video */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_43__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_32__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_32__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_43__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_24__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '',
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_25__shared_audio_ionic_audio_module__["a" /* IonicAudioModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_29_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_31_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_38__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_library_library__["a" /* LibraryPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_playlist_playlist__["a" /* PlaylistPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_moods_moods__["a" /* MoodsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_mood_mood__["a" /* Mood */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* About */],
            __WEBPACK_IMPORTED_MODULE_5__pages_player_player__["a" /* Player */],
            __WEBPACK_IMPORTED_MODULE_19__pages_artist_artist__["a" /* Artist */],
            __WEBPACK_IMPORTED_MODULE_20__pages_album_album__["a" /* Album */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_8__pages_share_share__["a" /* Share */],
            __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* Menu */],
            __WEBPACK_IMPORTED_MODULE_6__pages_video_video__["a" /* Video */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_26__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_41__providers_offline__["a" /* Offline */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_video__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//By Rekar Dilzar Rashid Botany +9647504051800
let Player = class Player {
    constructor(md, favorite, bg, platform, share, actionSheetCtrl, navCtrl, navParams, musicservice) {
        this.md = md;
        this.favorite = favorite;
        this.bg = bg;
        this.platform = platform;
        this.share = share;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicservice = musicservice;
        this.opened = false;
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened || this.favorite.islist || this.favorite.isnewlist) {
                    this.opened = false;
                    this.favorite.islist = false;
                    this.favorite.isnewlist = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                        this.favorite.list.dismiss();
                        this.favorite.newlist.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.tracks = this.musicservice.audio.tracks[0];
        this.playlist = false;
    }
    playVideo() {
        this.musicservice.pause();
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__video_video__["a" /* Video */], {
            videos: this.musicservice.tracks,
            video: this.musicservice.playingTrack
        });
    }
    shareTrack() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__share_share__["a" /* Share */], {
            title: this.tracks.title,
            art: this.tracks.art,
            artist: this.tracks.artist,
            album: this.tracks.album
        });
    }
    gotoartist() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': this.tracks.artistId });
    }
    gotoalbum() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__album_album__["a" /* Album */], {
            albumKey: this.tracks.albumId,
            artistKey: this.tracks.artistId
        });
    }
    action() {
        this.actions = this.actionSheetCtrl.create({
            title: this.tracks.title,
            buttons: [
                {
                    text: 'Download',
                    handler: () => {
                        this.opened = false;
                        this.musicservice.download();
                    }
                },
                {
                    text: 'Add to Playlist',
                    handler: () => {
                        this.opened = false;
                        this.favorite.playlistAlert(this.tracks.key);
                    }
                },
                {
                    text: 'Go to Album',
                    handler: () => {
                        this.opened = false;
                        this.gotoalbum();
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartist();
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
        this.playlist = false;
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        this.playlist = false;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        this.playlist = false;
        this.tracks = this.musicservice.audio.tracks[0];
    }
    togglePlaylist() {
        this.playlist = !this.playlist;
    }
    next() {
        if (this.musicservice.wait) {
            console.log("waiting");
        }
        else {
            this.musicservice.next();
            this.tracks = this.musicservice.audio.tracks[0];
        }
    }
    prev() {
        if (this.musicservice.wait) {
            console.log("waiting");
        }
        else {
            this.musicservice.prev();
            this.tracks = this.musicservice.audio.tracks[0];
        }
    }
    fav() {
    }
    more() { }
    play(track) {
        this.musicservice.playnext(track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    swipePlay(event) {
        if (event.direction == 2) {
            this.musicservice.next();
            this.tracks = this.musicservice.audio.tracks[0];
        }
        if (event.direction == 4) {
            this.musicservice.prev();
            this.tracks = this.musicservice.audio.tracks[0];
        }
    }
};
Player = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-player',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/player/player.html"*/'<!--\n  Generated template for the Player page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n  style="background: #141e30; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#cb356b, #bd3f32); /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to top, #000,#cb356b, #bd3f32);text-align: center"\n\n\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title  center>{{musicservice.playingTrack.artist}}</ion-title>\n\n    <ion-buttons end>\n      <button (click)="togglePlaylist()" ion-button icon-only >\n        <ion-icon [hidden]="playlist" name="list" style="opacity: 0.5"></ion-icon>\n         <ion-icon [hidden]="!playlist" name="play" style="opacity: 0.5"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<div class="background-image" [style.backgroundImage]="\'url(\' + musicservice.audio.tracks[0].art + \')\'"  ></div>\n\n\n\n\n<ion-content [hidden]="playlist || !md.full"  style="background: rgba(0, 0, 0, 0.6) !important;text-align: center" >\n  <ion-row style="height:100%" >\n\n<ion-col col-6 style="text-align: center;height: 100%"> \n\n  <ion-row  (swipe)="swipePlay($event)" style="height: 100%">\n    \n<ion-col col-12 style="text-align: center;height: 100%;position: relative"> \n             <ion-icon (click)="playVideo()" *ngIf="musicservice.playingTrack.video" class="videologo" name="logo-youtube"></ion-icon>\n\n  <img class="shadow" style="height: 100%" src={{musicservice.playingTrack.art}}>\n</ion-col>\n\n  </ion-row>\n</ion-col>\n\n\n<ion-col col-6 style="text-align: center;height: 100%"> \n\n  <ion-row style="height:50%">\n\n\n\n\n<ion-col col-12 style="text-align: center">\n       <h2 class="shadowt" style="text-overflow: ellipsis;overflow: hidden;color:white" >  {{musicservice.playingTrack.title}}\n         </h2>\n          \n          <br>\n<h2 class="shadowt"  style="text-overflow: ellipsis;overflow: hidden;color:azure">{{musicservice.playingTrack.artist}} - {{musicservice.playingTrack.album}} \n   \n   </h2>\n</ion-col>\n\n\n<ion-col col-6  style="text-align: center">\n       <button (click)="musicservice.favorite()" *ngIf="!musicservice.isFav()"  ion-button clear style="color:white" icon-only  > <ion-icon name="heart-outline"></ion-icon>{{musicservice.likeNum}}</button>\n       <button (click)="musicservice.unFavorite()" *ngIf="musicservice.isFav()"  ion-button clear style="color:#bd3f32" icon-only  > <ion-icon name="heart"></ion-icon>{{musicservice.likeNum}}</button>\n\n</ion-col>\n\n<ion-col col-6 style="text-align: center">\n       <button (click)="action()"  ion-button clear style="color:white" icon-only  > <ion-icon name="more"></ion-icon></button>\n\n</ion-col>\n\n\n\n  </ion-row>\n\n\n\n\n\n\n  <ion-row style="height:20%">\n    <ion-col col-12>\n<audio-track-progress-bar progress duration [audioTrack]="musicservice.audio.tracks[0]" style="color:white">\n\n</audio-track-progress-bar>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style="height:20%">\n\n\n<ion-col col-3 style="text-align: center">\n     <button (click)="musicservice.toggleShuffle()" *ngIf="musicservice.shuffle"  ion-button clear style="color:#bd3f32" icon-only  > <ion-icon name="shuffle"></ion-icon></button>\n     <button (click)="musicservice.toggleShuffle()" *ngIf="!musicservice.shuffle"   ion-button clear style="color:white" icon-only  > <ion-icon name="shuffle"></ion-icon></button>\n\n</ion-col>\n\n\n<ion-col col-2 style="text-align: center">\n  \n     <button (click)="musicservice.prev()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-backward"></ion-icon></button>\n\n</ion-col>\n\n<ion-col col-2 style="text-align: center">\n  \n  <audio-track-play class="large" [audioTrack]="musicservice.audio.tracks[0]" style="font-size: 150%">\n          </audio-track-play>\n\n</ion-col>\n\n<ion-col col-2 style="text-align: center">\n   <button (click)="musicservice.next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n\n</ion-col>\n\n\n<ion-col col-3 style="text-align: center">\n   <button (click)="musicservice.toggleRepeat()" *ngIf="musicservice.repeat == 0"  ion-button clear style="color:white" icon-only  > <ion-icon name="repeat" ></ion-icon></button>\n\n   <button (click)="musicservice.toggleRepeat()" *ngIf="musicservice.repeat == 1"  ion-button clear style="color:#bd3f32" icon-only  > <ion-icon name="repeat"></ion-icon></button>\n\n   <button (click)="musicservice.toggleRepeat()" *ngIf="musicservice.repeat == 2"  ion-button clear style="color:#bd3f32" icon-only  >1 <ion-icon name="repeat"></ion-icon></button>\n\n</ion-col>\n\n  </ion-row>\n\n\n</ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content  [hidden]="playlist || md.full"  style="background: rgba(0, 0, 0, 0.6) !important;text-align: center" >\n\n\n  <ion-row style="height:60%" (swipe)="swipePlay($event)">\n    \n<ion-col col-12 style="text-align: center;height: 100%;position: relative"> \n             <ion-icon (click)="playVideo()" *ngIf="musicservice.playingTrack.video" class="videologo" name="logo-youtube"></ion-icon>\n\n  <img class="shadow" style="height: 100%" src={{musicservice.playingTrack.art}}>\n</ion-col>\n\n  </ion-row>\n\n\n\n\n  <ion-row style="height:15%">\n\n<ion-col col-2  style="text-align: center">\n       <button (click)="musicservice.favorite()" *ngIf="!musicservice.isFav()"  ion-button clear style="color:white" icon-only  > <ion-icon name="heart-outline"></ion-icon>{{musicservice.likeNum}}</button>\n       <button (click)="musicservice.unFavorite()" *ngIf="musicservice.isFav()"  ion-button clear style="color:#cb356b" icon-only  > <ion-icon name="heart"></ion-icon>{{musicservice.likeNum}}</button>\n\n</ion-col>\n\n\n\n\n<ion-col col-8 style="text-align: center">\n       <button  ion-button block clear style="color:white;height: 50% !important;font-size: 1.6rem" (click)="gotoalbum()" >\n         <span class="shadowt" style="text-overflow: ellipsis;overflow: hidden" >  {{musicservice.playingTrack.title}}\n         </span>\n          </button>\n          \n          <br>\n<button  ion-button block clear style="color:#AAA;height: 50% !important"  (click)="gotoartist()" >\n   <span  class="shadowt"  style="text-overflow: ellipsis;overflow: hidden;color:azure">{{musicservice.playingTrack.artist}} - {{musicservice.playingTrack.album}} \n   </span>\n   </button>\n</ion-col>\n\n\n<ion-col col-2 style="text-align: center">\n       <button (click)="action()"  ion-button clear style="color:white" icon-only  > <ion-icon name="more"></ion-icon></button>\n\n</ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n  <ion-row style="height:15%">\n    <ion-col col-12>\n<audio-track-progress-bar progress duration [audioTrack]="musicservice.audio.tracks[0]" style="color:white">\n\n</audio-track-progress-bar>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style="height:10%">\n\n\n<ion-col col-3 style="text-align: center">\n     <button (click)="musicservice.toggleShuffle()" *ngIf="musicservice.shuffle"  ion-button clear style="color:#cb356b" icon-only  > <ion-icon name="shuffle"></ion-icon></button>\n     <button (click)="musicservice.toggleShuffle()" *ngIf="!musicservice.shuffle"   ion-button clear style="color:white" icon-only  > <ion-icon name="shuffle"></ion-icon></button>\n\n</ion-col>\n\n\n<ion-col col-2 style="text-align: center">\n  \n     <button (click)="musicservice.prev()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-backward"></ion-icon></button>\n\n</ion-col>\n\n<ion-col col-2 style="text-align: center">\n  \n  <audio-track-play class="large" [audioTrack]="musicservice.audio.tracks[0]" style="font-size: 150%">\n          </audio-track-play>\n\n</ion-col>\n\n<ion-col col-2 style="text-align: center">\n   <button (click)="musicservice.next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n\n</ion-col>\n\n\n<ion-col col-3 style="text-align: center">\n   <button (click)="musicservice.toggleRepeat()" *ngIf="musicservice.repeat == 0"  ion-button clear style="color:white" icon-only  > <ion-icon name="repeat" ></ion-icon></button>\n\n   <button (click)="musicservice.toggleRepeat()" *ngIf="musicservice.repeat == 1"  ion-button clear style="color:#cb356b" icon-only  > <ion-icon name="repeat"></ion-icon></button>\n\n   <button (click)="musicservice.toggleRepeat()" *ngIf="musicservice.repeat == 2"  ion-button clear style="color:#cb356b" icon-only  >1 <ion-icon name="repeat"></ion-icon></button>\n\n</ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n<ion-content [hidden]="!playlist" style="background: rgba(0, 0, 0, 0.6) !important;text-align: center">\n\n  <ion-item block clear  style="background-color: transparent;color:white">\n    \n    <h2>{{ \'nowPlaying\' | translate}}</h2>\n \n  </ion-item>\n\n <ion-list no-lines style="background-color: transparent">\n  <ion-item *ngFor="let track of musicservice.tracks;let i=index" [hidden]="i != musicservice.current" block clear  style="background-color: transparent;color:white" (click)="play(i)">\n    <ion-avatar item-left>\n      <img src="{{track.art}}">\n    </ion-avatar>\n    <h2>{{track.title}}</h2>\n    <p style="color:white">{{track.artist}}</p>\n\n     <ion-icon name="play" style="opacity: 0.8;color:#cb356b" item-left ></ion-icon>\n\n  </ion-item>\n</ion-list>\n\n<hr>\n\n <ion-list no-lines style="background-color: transparent">\n  <ion-item *ngFor="let track of musicservice.tracks;let i=index" [hidden]="i == musicservice.current" block clear  style="background-color: transparent;color:white" (click)="play(i)">\n    <ion-avatar item-left>\n      <img src="{{track.art}}">\n    </ion-avatar>\n    <h2>{{track.title}}</h2>\n    <p style="color:white">{{track.artist}}</p>\n  </ion-item>\n\n    <ion-item style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n<ion-footer [hidden]="!playlist"  style="\n  background-color: #000000 !important;  /* fallback for old browsers */\nbackground-color: -webkit-linear-gradient(to bottom, #141e30, #000000) !important;  /* Chrome 10-25, Safari 5.1-6 */\nbackground-color: linear-gradient(to bottom, #141e30, #000000) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n">\n\n      <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n      \n       \n\n<ion-row>\n\n  <ion-col col-8 >\n\n<button  ion-button clear block  small style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n {{musicservice.audio.tracks[0].title}} -  \n{{musicservice.audio.tracks[0].artist}}\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-4 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n          <audio-track-play light [audioTrack]="musicservice.audio.tracks[0]" style="font-size: 150%">\n          </audio-track-play>\n\n\n   \n\n  \n <button (click)="musicservice.next()" small ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/player/player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_music_data__["a" /* MusicData */], __WEBPACK_IMPORTED_MODULE_4__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */]])
], Player);

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__album_album__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//By Rekar Dilzar Rashid Botany +9647504051800

let Artist = class Artist {
    constructor(fav, bg, platform, params, _auth, navCtrl, musicservice, af) {
        this.fav = fav;
        this.bg = bg;
        this.platform = platform;
        this.params = params;
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.af = af;
        this.playlists = [];
        this.followNum = 0;
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.artistKey = this.params.get('artistKey');
        this.albums = af.list('/albums/', { query: {
                orderByChild: 'artist',
                equalTo: this.artistKey
            } });
        this.af.list('/artists', { preserveSnapshot: true, query: {
                orderByKey: true,
                equalTo: this.artistKey
            } })
            .subscribe(snapshots => {
            this.artistName = snapshots[0].val().name;
            this.artistImage = snapshots[0].val().cover;
        });
        this.trackss = af.list('/tracks/', { query: {
                orderByChild: 'artist',
                equalTo: this.artistKey
            } });
        this.trackss.subscribe(snapshots => {
            snapshots.forEach(element => {
                this.artistName = element.artistName;
                this.playlists.push({ src: element.url,
                    artist: element.artistName,
                    title: element.name,
                    art: element.albumArt,
                    preload: 'metadata',
                    key: element.$key,
                    artistId: element.artist,
                    albumId: element.album,
                    album: element.albumName });
            });
        });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    shuffle() {
        let t = Math.floor((Math.random() * (this.playlists.length)) + 0);
        this.musicservice.play(this.playlists, t);
        this.tracks = this.musicservice.audio.tracks[0];
        this.musicservice.shuffle = true;
    }
    gotoalbum(albumKey, artistKey) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__album_album__["a" /* Album */], {
            albumKey: albumKey,
            artistKey: artistKey
        });
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        this.tracks = this.musicservice.audio.tracks[0];
        this.follow = this.af.list('followedArtist/' + this.artistKey);
        this.follow.subscribe(like => {
            if (like[0] != undefined)
                this.followNum = like[0].$value;
            else
                this.followNum = 0;
        });
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
        console.log("finish method");
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* Player */]);
    }
};
Artist = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-artist',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/artist/artist.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger">\n\n\n\n   \n  </ion-navbar>\n\n</ion-header>\n\n<div class="background-image" [style.backgroundImage]="\'url(\' + artistImage + \')\'"  ></div>\n\n\n<ion-content style="background: rgba(0, 0, 0, 0.5) !important;text-align: center" >\n\n\n<ion-row style="height: auto">\n\n\n\n<ion-col col-12>\n<img src="{{artistImage}}" style="width:100%;height: auto;min-height: 150px;background-color: rgba(0,0,0,0.5)">\n</ion-col>\n\n\n\n\n\n<ion-col col-3>\n</ion-col>\n\n<ion-col col-6 style="color:white;text-align: center">\n<h4>{{artistName}}</h4>\n\n<button (click)="fav.follow(artistKey)" *ngIf="!fav.isFollow(artistKey)"  ion-button clear style="color:white" icon-only  >Follow <ion-icon name="star-outline"></ion-icon>{{followNum}}</button>\n<button (click)="fav.unFollow(artistKey)" *ngIf="fav.isFollow(artistKey)"  ion-button clear style="color:#FFD700" icon-only  >Unfollow <ion-icon name="star"></ion-icon>{{followNum}}</button>\n\n<button ion-button color="danger" style="border-radius: 100px;opacity:0.5" (click)="shuffle()" *ngIf="playlists.length>0">{{\'shuffleAll\' | translate}}</button>\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n\n\n\n\n\n</ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n\n\n\n\n  <ion-item *ngFor="let album of albums | async  " block clear (click)="gotoalbum(album.$key,album.artist)"  style="background-color: transparent;color:white" >\n    <ion-avatar item-left>\n      <img src="{{album.image}}">\n    </ion-avatar>\n    <h2>{{album.name}}</h2>\n    <p style="color:azure">{{album.release}}</p>\n  </ion-item>\n\n    <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n\n</ion-list>\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n<ion-footer  style="background: #cb356b; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000, #151515); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000, #151515);">\n\n        <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n      \n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/artist/artist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
], Artist);

//# sourceMappingURL=artist.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let MyApp = class MyApp {
    constructor(storage, bg, translate, afService, platform, statusBar, splashScreen) {
        this.storage = storage;
        this.bg = bg;
        this.translate = translate;
        this.afService = afService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        translate.setDefaultLang('en');
        storage.get('lang').then((val) => {
            if (val != null) {
                translate.setDefaultLang(val);
            }
            else {
                translate.setDefaultLang('en');
            }
        });
        this.afService.afAuth.authState.subscribe((user) => {
            if (!user) {
                this.isLoggedIn = false;
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */];
            }
            else {
                this.isLoggedIn = true;
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
        });
        this.platform.ready().then(() => {
            __WEBPACK_IMPORTED_MODULE_10_firebase__["messaging"]().getToken().then((t) => {
                console.log(t);
            }).catch((e) => {
                console.log(e);
            });
            __WEBPACK_IMPORTED_MODULE_10_firebase__["messaging"]().onMessage(x => {
                console.log(x);
            });
            this.statusBar.overlaysWebView(true);
            this.statusBar.styleBlackTranslucent();
            this.statusBar.backgroundColorByHexString("#734b6d");
            //this.splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_share__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//By Rekar Dilzar Rashid Botany +9647504051800

let Album = class Album {
    constructor(bg, platform, favorite, actionSheetCtrl, params, _auth, navCtrl, musicservice, af) {
        this.bg = bg;
        this.platform = platform;
        this.favorite = favorite;
        this.actionSheetCtrl = actionSheetCtrl;
        this.params = params;
        this._auth = _auth;
        this.navCtrl = navCtrl;
        this.musicservice = musicservice;
        this.af = af;
        this.playlists = [];
        this.opened = false;
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.opened) {
                    this.opened = false;
                    setTimeout(() => {
                        this.actions.dismiss();
                    }, 100);
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.artistKey = this.params.get('artistKey');
        this.albumKey = this.params.get('albumKey');
        this.trackss = af.list('/tracks/', { query: {
                orderByChild: 'album',
                equalTo: this.albumKey
            } });
        this.trackss.subscribe(snapshots => {
            snapshots.forEach(element => {
                this.artistName = element.artistName;
                this.playlists.push({ src: element.url,
                    video: element.video,
                    artist: element.artistName,
                    title: element.name,
                    art: element.albumArt,
                    preload: 'metadata',
                    key: element.$key,
                    artistId: element.artist,
                    albumId: element.album,
                    album: element.albumName });
            });
        });
        this.af.list('/albums', { preserveSnapshot: true, query: {
                orderByKey: true,
                equalTo: this.albumKey
            } })
            .subscribe(snapshots => {
            this.albumName = snapshots[0].val().name;
            this.albumImage = snapshots[0].val().image;
        });
        this.tracks = this.musicservice.audio.tracks[0];
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the APIs
        this.tracks = this.musicservice.audio.tracks[0];
        __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_IntervalObservable__["IntervalObservable"].create(200).subscribe(n => {
            this.tracks = this.musicservice.audio.tracks[0];
        });
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        this.tracks = this.musicservice.audio.tracks[0];
    }
    play(track) {
        this.musicservice.play(this.playlists, track);
        this.tracks = this.musicservice.audio.tracks[0];
    }
    shuffle() {
        let t = Math.floor((Math.random() * (this.playlists.length)) + 0);
        this.musicservice.play(this.playlists, t);
        this.tracks = this.musicservice.audio.tracks[0];
        this.musicservice.shuffle = true;
    }
    next() {
        this.musicservice.next();
        this.tracks = this.musicservice.audio.tracks[0];
    }
    finish() {
        this.musicservice.finish();
        console.log("finish method");
    }
    player() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* Player */]);
    }
    gotoartist(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__artist_artist__["a" /* Artist */], { 'artistKey': track.artist });
    }
    more(track) {
        this.actions = this.actionSheetCtrl.create({
            title: track.name,
            buttons: [
                {
                    text: 'Add to favorites',
                    handler: () => {
                        this.opened = false;
                        this.favorite.favorite(track.$key);
                    }
                },
                {
                    text: 'Add to Playlist',
                    handler: () => {
                        this.opened = false;
                        this.favorite.playlistAlert(track.$key);
                    }
                },
                {
                    text: 'Go to Artist',
                    handler: () => {
                        this.opened = false;
                        this.gotoartist(track);
                    }
                },
                {
                    text: 'Share',
                    handler: () => {
                        this.opened = false;
                        this.shareTrack(track);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.opened = false;
                    }
                }
            ]
        });
        this.actions.present();
        this.opened = true;
    }
    shareTrack(track) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__share_share__["a" /* Share */], {
            title: track.name,
            artist: track.artistName,
            art: track.albumArt,
            album: track.albumName
        });
    }
};
Album = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-album',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/album/album.html"*/'<ion-header no-border >\n\n   <ion-navbar color="danger" style="background-color: transparent">\n\n\n    \n\n   \n  </ion-navbar>\n\n</ion-header>\n<div class="background-image" [style.backgroundImage]="\'url(\' + albumImage + \')\'"  ></div>\n\n<ion-content style="background: rgba(0, 0, 0, 0.5) !important;text-align: center" >\n\n<ion-row style="height: auto">\n\n<ion-col col-3>\n</ion-col>\n\n<ion-col col-6>\n<img class="shadow" src="{{albumImage}}" style="width:100%;height: auto;min-height: 150px;background-color: rgba(0,0,0,0.5)">\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n\n<ion-col col-3>\n</ion-col>\n\n<ion-col col-6 style="color:white;text-align: center">\n<h4>{{albumName}}</h4>\n{{artistName}}<br><br>\n\n<button ion-button color="danger" style="border-radius: 100px;opacity:0.5" (click)="shuffle()" *ngIf="playlists.length>0">{{\'shuffleAll\' | translate}}</button>\n</ion-col>\n\n<ion-col col-3>\n</ion-col>\n\n\n</ion-row>\n\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n\n\n\n\n  <button  ion-item detail-none *ngFor="let track of trackss | async ;let i= index " block clear  style="background-color: transparent;color:white"  >\n    \n<span item-left (click)="play(i)" style="width: 80%">\n    <h2 > &nbsp;             <ion-icon name="play" style="opacity: 0.5" *ngIf="track.$key == musicservice.playingTrack.key"></ion-icon>\n &nbsp;  {{track.name}} </h2>\n\n</span>\n        <ion-icon name="more" style="opacity: 0.5" (click)="more(track)" item-right></ion-icon>\n\n  </button>\n  \n\n  <ion-item *ngIf="tracks" style="background-color: transparent;color:white" ></ion-item>\n</ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n\n<ion-footer  style="background: #cb356b; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000, #151515); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #000, #151515);">\n\n        <div *ngIf="tracks" style="height: 3px;z-index: 9999;background-color:#cb356b"\n      [style.width.%]="musicservice.progress()"></div>\n       \n\n<ion-row *ngIf="tracks">\n\n  <ion-col col-8 (click)="player()">\n\n<button  ion-button clear block   style="color: white;">\n\n<span style="overflow: hidden;text-overflow: ellipsis">\n  \n{{tracks.title}} - {{tracks.artist}}\n\n</span>\n\n</button>\n\n\n\n\n  </ion-col>\n\n  <ion-col col-2 style="text-align: right">\n\n<!-- <button (click)="prevTrack(selectedTrack)" ion-button color="dark" icon-only small > <ion-icon name="skip-backward"></ion-icon></button>\n-->\n         <audio-track-play light [audioTrack]="tracks">\n          </audio-track-play>\n\n  </ion-col>\n\n    <ion-col col-2 style="text-align: right">\n\n <button (click)="next()"  ion-button clear style="color:white" icon-only  > <ion-icon name="skip-forward"></ion-icon></button>\n \n\n  </ion-col>\n</ion-row>\n\n\n\n\n         \n\n\n         \n\n\n  \n \n\n\n\n\n</ion-footer>\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/album/album.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_favorite__["a" /* Favorite */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], Album);

//# sourceMappingURL=album.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Safe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Youtube pipe.
  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
let Safe = class Safe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value, args) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
Safe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'safe'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], Safe);

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_musicservice__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_music_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_music_controls__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_musicservice__["a" /* MusicService */], __WEBPACK_IMPORTED_MODULE_2__providers_favorite__["a" /* Favorite */], __WEBPACK_IMPORTED_MODULE_3__providers_music_data__["a" /* MusicData */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_music_controls__["a" /* MusicControls */]]
        };
    }
};
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({})
], SharedModule);

var SharedModule_1;
//By Rekar Dilzar Rashid Botany +9647504051800
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicAudioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_audio_track_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_audio_track_play_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_audio_time_pipe__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_audio_providers__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let IonicAudioModule = IonicAudioModule_1 = class IonicAudioModule {
    /**
     * Configures Ionic Audio to use either Cordova or HTML5 audio.
     * If no ```audioProvider``` is set it will automatically choose one based on the current environment
     */
    static forRoot(audioProvider) {
        return {
            ngModule: IonicAudioModule_1,
            providers: [
                audioProvider || { provide: __WEBPACK_IMPORTED_MODULE_7__ionic_audio_providers__["a" /* AudioProvider */], useClass: __WEBPACK_IMPORTED_MODULE_7__ionic_audio_providers__["b" /* WebAudioProvider */] }
            ]
        };
    }
};
IonicAudioModule = IonicAudioModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_audio_track_component__["a" /* AudioTrackComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__["b" /* AudioTrackProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__["a" /* AudioTrackProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_audio_track_play_component__["a" /* AudioTrackPlayComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_audio_time_pipe__["a" /* AudioTimePipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_audio_track_component__["a" /* AudioTrackComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__["b" /* AudioTrackProgressComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__["a" /* AudioTrackProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_audio_track_play_component__["a" /* AudioTrackPlayComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_audio_time_pipe__["a" /* AudioTimePipe */]
        ],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], IonicAudioModule);

var IonicAudioModule_1;
/**
 * Configures Ionic Audio to use either Cordova or HTML5 audio.
 * If no ```audioProvider``` is set it will automatically choose one based on the current environment
 */
/*
export class IonicAudioModule {

static forRoot(audioProvider?:  {
    provide: typeof AudioProvider;
    useFactory: () => CordovaMediaProvider | WebAudioProvider;
}): ModuleWithProviders {

  return {
    ngModule: IonicAudioModule,
    providers: [
      audioProvider || { provide: AudioProvider, useClass: WebAudioProvider }
    ]
  };
}
}
*/
//# sourceMappingURL=ionic-audio.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTrackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * # ```<audio-track>```
 *
 * Creates a top level audio-track component
 *
 * ## Usage
 *
 * ````
 *   <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *   ...
 *   </audio-track>
 * ````
 * @element audio-track
 * @export
 * @class AudioTrackComponent
 */
let AudioTrackComponent = class AudioTrackComponent {
    constructor(_audioProvider) {
        this._audioProvider = _audioProvider;
        /**
         * Output property expects an event handler to be notified whenever playback finishes
         *
         * @property onFinish
         * @type {EventEmitter}
         */
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
        this._isFinished = false;
    }
    ngOnInit() {
        if (!(this.track instanceof __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__["a" /* WebAudioTrack */]) && !(this.track instanceof __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__["a" /* CordovaAudioTrack */])) {
            this._audioTrack = this._audioProvider.create(this.track);
        }
        else {
            Object.assign(this._audioTrack, this.track);
            this._audioProvider.add(this._audioTrack);
        }
        // update input track parameter with track is so we pass it to WebAudioProvider if needed
        this.track.id = this._audioTrack.id;
    }
    play() {
        this._audioTrack.play();
        this._audioProvider.current = this._audioTrack.id;
    }
    pause() {
        this._audioTrack.pause();
        this._audioProvider.current = undefined;
    }
    toggle() {
        if (this._audioTrack.isPlaying) {
            this.pause();
        }
        else {
            this.play();
        }
    }
    seekTo(time) {
        this._audioTrack.seekTo(time);
    }
    get id() {
        return this._audioTrack.id;
    }
    get art() {
        return this.track.art;
    }
    get artist() {
        return this.track.artist;
    }
    get title() {
        return this.track.title;
    }
    get progress() {
        return this._audioTrack.progress;
    }
    get isPlaying() {
        return this._audioTrack.isPlaying;
    }
    get duration() {
        return this._audioTrack.duration;
    }
    get completed() {
        return this._audioTrack.completed;
    }
    get canPlay() {
        return this._audioTrack.canPlay;
    }
    get error() {
        return this._audioTrack.error;
    }
    get isLoading() {
        return this._audioTrack.isLoading;
    }
    get hasLoaded() {
        return this.hasLoaded;
    }
    ngDoCheck() {
        if (!Object.is(this._audioTrack.isFinished, this._isFinished)) {
            // some logic here to react to the change
            this._isFinished = this._audioTrack.isFinished;
            // track has stopped, trigger finish event
            if (this._isFinished) {
                this.onFinish.emit(this.track);
            }
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AudioTrackComponent.prototype, "track", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
    __metadata("design:type", Object)
], AudioTrackComponent.prototype, "onFinish", void 0);
AudioTrackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'audio-track',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__["a" /* AudioProvider */]])
], AudioTrackComponent);

//# sourceMappingURL=ionic-audio-track-component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AudioTrackProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTrackProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * # ```<audio-track-progress>```
 *
 * Renders a timer component displaying track progress and duration
 *
 * ## Usage
 * ````
 * <audio-track-progress [audioTrack]="track"></audio-track-progress>
 * ````
 *
 * @element audio-track-progress
 * @parents audio-track
 * @export
 * @class AudioTrackProgressComponent
 */
let AudioTrackProgressComponent = class AudioTrackProgressComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AudioTrackProgressComponent.prototype, "audioTrack", void 0);
AudioTrackProgressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'audio-track-progress',
        template: '<em *ngIf="audioTrack.duration > 0">{{audioTrack.progress | audioTime}} / </em><em>{{audioTrack.duration | audioTime}}</em>'
    })
], AudioTrackProgressComponent);

/**
 * # ```<audio-track-progress-bar>```
 *
 * Renders a progress bar with optional timer, duration and progress indicator
 *
 * ## Usage
 * ````
 *  <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>
 * ````
 *
 * @element audio-track-progress-bar
 * @parents audio-track
 * @export
 * @class AudioTrackProgressBarComponent
 */
let AudioTrackProgressBarComponent = class AudioTrackProgressBarComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.completed = 0;
        this.range = 0;
    }
    /**
     * Input property indicating whether to display track progress
     *
     * @property @Input() progress
     * @type {boolean}
     */
    set progress(v) {
        this.showProgress = true;
    }
    /**
     * Input property indicating whether to display track duration
     *
     * @property @Input() duration
     * @type {boolean}
     */
    set duration(v) {
        this.showDuration = true;
    }
    ngOnInit() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%');
    }
    ngDoCheck() {
        if (this.audioTrack.completed > 0 && !Object.is(this.audioTrack.completed, this.completed)) {
            this.completed = this.audioTrack.completed;
            this.range = Math.round(this.completed * 100 * 100) / 100;
        }
    }
    seekTo() {
        let seekTo = Math.round(this.audioTrack.duration * this.range) / 100;
        if (!Number.isNaN(seekTo))
            this.audioTrack.seekTo(seekTo);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AudioTrackProgressBarComponent.prototype, "audioTrack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AudioTrackProgressBarComponent.prototype, "progress", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AudioTrackProgressBarComponent.prototype, "duration", null);
AudioTrackProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'audio-track-progress-bar',
        template: `
    <ion-range [(ngModel)]="range" min="0" max="100" (ionChange)="seekTo()" name="progress" ngDefaultControl>
      <time *ngIf="showProgress" range-left>{{audioTrack.progress | audioTime}}</time>
      <time *ngIf="showDuration" range-right>{{audioTrack.duration | audioTime}}</time>
    </ion-range>
    `
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
], AudioTrackProgressBarComponent);

//# sourceMappingURL=ionic-audio-track-progress-component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTrackPlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * # ```<audio-track-play>```
 *
 * Renders a play/pause button that optionally displays a loading spinner
 *
 * ## Usage
 * ````
 * <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *  <ion-item>
 *    <audio-track-play item-left [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>
 *    <h3>{{audio.title}}</h3>
 *  </ion-item>
 * </audio-track>
 * ````
 * If placed within a ```<ion-thumnbail>``` component it will render as a semi-transparent button layover (see live demo).
 * Passing a ```<ion-spinner>``` as a child element will display a loading spinner while loading.
 *
 * ````
 * <audio-track #audio [track]="track" (onFinish)="onTrackFinished($event)">
 *   <ion-item>
 *       <ion-thumbnail item-left>
 *         <img src="{{audio.art}}">
 *         <audio-track-play dark [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>
 *       </ion-thumbnail>
 *       <p><strong>{{audio.title}}</strong></p>
 *   </ion-item>
 * </audio-track>
 * ````
 * [disabled]="audioTrack.error || audioTrack.isLoading"
 * @element audio-track-play
 * @parents audio-track
 * @export
 * @class AudioTrackPlayComponent
 */
let AudioTrackPlayComponent = class AudioTrackPlayComponent {
    constructor(el) {
        this.el = el;
    }
    /**
     * Renders the component using the light theme
     *
     * @property @Input() light
     * @type {boolean}
     */
    set light(val) {
        this.el.nativeElement.firstElementChild.classList.add('light');
    }
    /**
     * Renders the component using the dark theme
     *
     * @property @Input() dark
     * @type {boolean}
     */
    set dark(val) {
        this.el.nativeElement.firstElementChild.classList.add('dark');
    }
    toggle(event) {
        if (this.audioTrack.isPlaying) {
            this.audioTrack.pause();
        }
        else if (!this.audioTrack.isPlaying && !this.audioTrack.isLoading) {
            this.audioTrack.play();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AudioTrackPlayComponent.prototype, "audioTrack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AudioTrackPlayComponent.prototype, "light", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AudioTrackPlayComponent.prototype, "dark", null);
AudioTrackPlayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'audio-track-play',
        template: `
    <button ion-button icon-only clear (click)="toggle($event)" >
      <ion-icon name="pause" *ngIf="audioTrack.isPlaying && !audioTrack.isLoading"></ion-icon>
      <ion-icon name="play" *ngIf="!audioTrack.isPlaying && !audioTrack.isLoading"></ion-icon>
      <ion-icon name="play" *ngIf="audioTrack.isLoading && !audioTrack.error"></ion-icon>
      <ion-icon name="close" *ngIf="audioTrack.error"></ion-icon>
      <ng-content *ngIf="audioTrack.isLoading && !audioTrack.error"></ng-content>
    </button>
    `
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], AudioTrackPlayComponent);

//# sourceMappingURL=ionic-audio-track-play-component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * A pipe to convert milliseconds to a string representation
 *
 * @export
 * @class AudioTimePipe
 * @implements {PipeTransform}
 */
let AudioTimePipe = class AudioTimePipe {
    /**
     * Transforms milliseconds to hh:mm:ss
     *
     * @method transform
     * @param {number} [value] The milliseconds
     * @return {string} hh:mm:ss
     */
    transform(value) {
        if (value === undefined || Number.isNaN(value))
            return '';
        let s = Math.trunc(value % 60);
        let m = Math.trunc((value / 60) % 60);
        let h = Math.trunc(((value / 60) / 60) % 60);
        return h > 0 ? `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}` : `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
};
AudioTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'audioTime' })
], AudioTimePipe);

//# sourceMappingURL=ionic-audio-time-pipe.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Share; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//By Rekar Dilzar Rashid Botany +9647504051800
let Share = class Share {
    constructor(bg, platform, sh, navParams, navCtrl) {
        this.bg = bg;
        this.platform = platform;
        this.sh = sh;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.tabBarElement.style.display = 'none';
        this.title = this.navParams.get("title");
        this.artist = this.navParams.get("artist");
        this.art = this.navParams.get("art");
        this.pic = "";
        this.link = "http://fasttv.vintv.net/awazaImage/awaza.php?artist=" + this.navParams.get("artist") + "&song=" + this.navParams.get("title") + "&album=" + this.navParams.get("album");
        this.link = encodeURI(this.link);
        this.text = '#Awaza';
        this.sms = "#NowPlaying " + this.title + " by " + this.artist + " on Awaza";
        platform.ready().then(() => {
            platform.registerBackButtonAction(() => {
                if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                }
                else {
                    this.bg.moveToBackground();
                }
            });
        });
    }
    ionViewDidLoad() {
    }
    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }
    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
    }
    share() {
        /* this.sh.share(this.text ,'', 'http://fasttv.vintv.net/icon2.png',this.link)
           .then((data) =>
           {
              console.log('Shared via SharePicker');
           })
           .catch((err) =>
           {
              console.log('Was not shared via SharePicker');
           });*/
    }
    sharefb(art) {
        //this.sh.shareViaFacebook(this.text,this.pic,this.link);
    }
    shareig(art) {
        //this.sh.shareViaInstagram(this.text,'http://fasttv.vintv.net/icon2.png');
    }
    sharewa(art) {
        //this.sh.shareViaWhatsApp(this.sms,'http://fasttv.vintv.net/icon2.png',this.link);
    }
    sharesms() {
        //this.sh.shareViaSMS(this.sms,null);
    }
    shareem() {
        //this.sh.shareViaEmail(this.sms,'Awaza',null,null,this.link,'http://www.fasttv.vintv.net/icon2.png');
    }
};
Share = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-share',template:/*ion-inline-start:"/Users/rekarbotany/Desktop/firespotify/src/pages/share/share.html"*/'<ion-header no-border >\n\n<ion-navbar color="danger" style="background-color: transparent" >\n  <ion-title style="color: white">{{ \'share\' | translate}}</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content style="background: #42275a; /* fallback for old browsers */\n  background: -webkit-linear-gradient(to top, #000,#42275a, #734b6d); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top,#000, #42275a, #734b6d);text-align: center" >\n\n\n\n\n\n\n\n <ion-list no-lines style="background-color: transparent">\n\n\n\n  <ion-item  block clear (click)="share()"  style="background-color: transparent;color:white" >\n    <ion-avatar item-left>\n      <img class="shadow" src="{{art}}">\n    </ion-avatar>\n    <h2>{{title}}</h2>\n    <p style="color:azure">{{artist}}</p>\n  </ion-item>\n\n<br><hr>\n\n  <ion-item style="background-color: transparent;color:white" (click)="sharefb(art)">{{ \'shareOn\' | translate}} Facebook</ion-item>\n  <ion-item style="background-color: transparent;color:white" (click)="sharewa(art)" >{{ \'shareOn\' | translate}} Whatsapp</ion-item>\n\n\n</ion-list>\n\n\n\n\n\n\n\n\n\n\n\n\n \n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/rekarbotany/Desktop/firespotify/src/pages/share/share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], Share);

//# sourceMappingURL=share.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map