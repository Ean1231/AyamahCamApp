import { Component, OnInit } from '@angular/core';
import { DocumentScanner, DocumentScannerOptions, DocumentScannerSourceType } from '@awesome-cordova-plugins/document-scanner/ngx';
import { NavController, Platform } from '@ionic/angular';
import { ServiceService } from '../service.service';
import ScanbotSDK from 'cordova-plugin-scanbot-sdk';

import { FileChooser } from '@ionic-native/file-chooser/ngx'
import { FilePath } from '@ionic-native/file-path/ngx'

import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  myPlatform: any;
  mobileDevice: any;
  private SBSDK = ScanbotSDK.promisify();
  pages;

  returnpath: string="";

  constructor(
    private chooser: Chooser, 
    public documentScanner: DocumentScanner, 
    public platform:Platform, 
    public service: ServiceService, 
    public navCtrl: NavController,
    public filePath: FilePath,
    public fileChooser: FileChooser
    ) {
    if (this.platform.is('android')) {
            this.myPlatform = "Browser";
            console.log('I am on a web browser')
          } else {
            this.mobileDevice = "True"
          }

          // platform.ready().then(() => this.initScanbotSDK());
          // this.pick();
   }

   ngOnInit() {
  }

chooseFile(){
  this.fileChooser.open().then((fileurl) =>{
    this.filePath.resolveNativePath(fileurl).then((resolvenativepath) =>{
      this.returnpath = resolvenativepath;
    })
  })
}


pick() {
    this.chooser.getFile()
     .then(file => 
     
    console.log(file,'This is file' ? file.name : 'canceled')
    ).catch((error: any) =>
    console.error(error)
  );
  
  }



   private async initScanbotSDK() {
    await this.SBSDK.initializeSdk({
      loggingEnabled: true,
      licenseKey: 'lqZC1oUPiB20ZH0QKRpgyUbo9uPCgB', // see the license key notes!
      storageImageFormat: 'JPG',
      storageImageQuality: 80
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    });
   }

   async startDocumentScanner() {
       const result = await this.SBSDK.UI.startDocumentScanner({
       uiConfigs: {
        // Customize colors, text resources, behavior, etc..
        cameraPreviewMode: 'FIT_IN',
        orientationLockMode: 'PORTRAIT',
        pageCounterButtonTitle: '%d Page(s)',
        multiPageEnabled: true
      }
    });
  
    if (result.status === 'CANCELED') {
      // user has canceled the scanning operation
      return;
    }
  
    // Get the scanned pages from result:
    this.pages = result.pages;
  }

  convertFileUri(fileUri) {
    return (<any>window).Ionic.WebView.convertFileSrc(fileUri);
  }
  }



 


