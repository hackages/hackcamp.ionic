import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-about',
  template: ''
})
export class AboutPage implements OnInit{

  constructor(
    public navCtrl: NavController,
    public camera: Camera
  ) {}

  ngOnInit(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(success);

    function success(data){
      console.log(data);
    }
  }

}
