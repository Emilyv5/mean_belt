import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-pets",
	templateUrl: "./pets.component.html",
	styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
	pets: any;
	constructor(private _httpService: HttpService, private _router: Router) {}

	ngOnInit() {
		this.getPetsFromService();
	}

	getPetsFromService() {
		// subscribe to the Observable and provide the code we would like to do with our data from the response

		let observable = this._httpService.getPets();
		observable.subscribe(res => {
			console.log("Got our tasks!", res);
			console.log("Got it", typeof res);
			this.pets = res;
		});
	}
}
