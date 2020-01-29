import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-new",
	templateUrl: "./new.component.html",
	styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
	newPet: any;
	error: any;

	constructor(private _httpService: HttpService, private _router: Router) {}
	ngOnInit() {
		this.newPet = {
			name: "",
			type: "",
			description: "",
			skills: []
		};

		console.log(typeof this.newPet.skills);
	}

	onSubmit() {
		let observable = this._httpService.addPet(this.newPet);
		observable.subscribe(
			res => {
				this._router.navigate(["/pets"]);
				console.log("res", res);
				if (res["errors"]) {
					this.error = res["message"];
				}
			},
			error => {
				console.log(error);

				// this._router.navigate(["/new"]);
			}
		);
	}
}
