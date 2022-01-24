import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { environment } from '../environments/environment';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { ScanerPipe } from './scaner.pipe';
import { NgProgressModule } from '@ngx-progressbar/core';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { ImageResizer } from '@ionic-native/image-resizer/ngx';
import { DocumentScanner } from '@awesome-cordova-plugins/document-scanner/ngx';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx'
import { FilePath } from '@ionic-native/file-path/ngx'

import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
// @ionic-native/document-scanner/ngx

@NgModule({
  declarations: [AppComponent, ScanerPipe,],
  entryComponents: [],
  imports: [
     BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFireStorageModule,
     AngularFireDatabaseModule,
     AngularFirestoreModule,
     NgProgressModule,
    
      
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ,
    DocumentScanner, 
    File,
    DocumentViewer, 
    PhotoViewer, 
    ImageResizer, 
    FileOpener, 
    Chooser,
    FileChooser,
    FilePath,
    StatusBar,
    SplashScreen
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
