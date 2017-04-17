import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Camera } from 'ionic-native';

/*
  新增产品
*/
@Component({
  selector: 'page-product-create',
  templateUrl: 'product-create.html'
})
export class ProductCreatePage {

  @ViewChild("fileInput") fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public navParams: NavParams) {

    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      code: ['', Validators.required],
      purchasePrice: [''],
      cost: [''],
      salePrice: ['']
    });


    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

  }

  getPicture() {
    if (Camera['installed']()) {
      Camera.getPicture({
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let input = this.fileInput.nativeElement;

    var reader = new FileReader();
    reader.onload = (readerEvent) => {
      input.parentNode.removeChild(input);

      var imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

}
