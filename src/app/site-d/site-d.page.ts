import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { CameraPreview } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { Router } from '@angular/router';
import '@capacitor-community/camera-preview';

import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import {  AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-site-d',
  templateUrl: './site-d.page.html',
  styleUrls: ['./site-d.page.scss'],
})
export class SiteDPage implements OnInit {


  image = null;
  cameraActive = false;
  img;
  saveImg;
  path: string;
  showmessage :boolean;
  constructor(public router: Router, public firestore: AngularFirestore)  { }

  ngOnInit() {
  }


  openCamera(){
    const CameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'cameraPreview',
      className: 'cameraPreview'
    };
    CameraPreview.start(CameraPreviewOptions);
    this.cameraActive = true;
  }

 async stopCamera(){
    await CameraPreview.stop();
    this.cameraActive = false;
  }
 async captureImage(){
    const CameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 90,
      
    };
    const result = await CameraPreview.capture(CameraPreviewPictureOptions);
    this.image = `data:image/jpeg;base64, ${result.value}`;
    this.stopCamera();
  }

  flipCamera(){
    CameraPreview.flip();
  }

  upload($event) {
    this.path = $event.target.files[0];
  }

  getImage(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
  
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.img = reader.result;
      };
  // ChangeDetectorRef since file is loading outside the zone
  
    }
  }

  btnBack(){
    this.router.navigateByUrl("select-s-site");
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
}
