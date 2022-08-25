import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  takePicture() {
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Base64
      });
    
      const imageBase64 = image.base64String;

      return "data:image/jpeg;base64, " + imageBase64;
    };
    return takePicture();
  }
}
