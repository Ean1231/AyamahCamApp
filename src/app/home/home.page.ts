import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { CameraPreview } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { Router } from '@angular/router';
import '@capacitor-community/camera-preview';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, AlertController } from  '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { ServiceService } from '../service.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
    hello: any;
    photo: any;
    showmessage: boolean;
    public photos = [];
    photoPreviw: boolean = true;

  constructor(public service: ServiceService, public router: Router, public firestore: AngularFirestore) {}
  addPhotoToGallery() {
      this.service.addNewToGallery();
  }
  
  Add(photos)
  {
      let id = this.firestore.createId();
      this.firestore.collection('Construction').doc().set({
      hello: this.hello,
      photos : this.photos,
  }).then(()=>{
      this.showmessage = true
      setTimeout(()=> this.showmessage = false, 2000);
      this.photo = "";
  }).catch((error)=>{
    console.log(error)
  });
}
scanPage(){
  this.router.navigateByUrl("")
}


async ngOnInit() {
  // await this.service.loadSaved();
}

}