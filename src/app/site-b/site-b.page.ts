import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { CameraPreview } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { Router } from '@angular/router';
import '@capacitor-community/camera-preview';

import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceService } from '../service.service';


export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Component({
  selector: 'app-site-b',
  templateUrl: './site-b.page.html',
  styleUrls: ['./site-b.page.scss'],
})
export class SiteBPage implements OnInit {
  public photos: UserPhoto[] = [];
  photoPreviw: boolean = true;
  image = null;
  showmessage: boolean;

  
  constructor(public service: ServiceService, public router: Router, public firestore: AngularFirestore) {}
  addPhotoToGallery() {
    this.service.addNewToGallery();
  }

  Add(image) {
    const currentTime = new Date();
    console.log(currentTime);

    console.log(this.image);
    let id = this.firestore.createId();
    this.firestore.collection('SiteD').doc().set({
      image : this.image,
      currentTime: currentTime

  }).then(()=>{
    this.showmessage = true
    setTimeout(()=> this.showmessage = false, 2000);
    this.image = "";
  }).catch((error)=>{
    console.log(error)
  })
}

  ngOnInit(): void {
      
  }
}
