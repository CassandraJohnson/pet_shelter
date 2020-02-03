import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet: { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" };
  message: any;
  error = [];

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }


  ngOnInit() {
    this.newPet = { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" }
  }

  onSubmit() {
    console.log('hit onSubmit');
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      if (data['error'] != null) {
        this.message = data['error']['message'];
      }
      else {
        this._router.navigate(['']);
      }
      this.newPet = { name: "", pettype: "", description: "", skill1: "", skill2: "", skill3: "" }

    })
  }

}