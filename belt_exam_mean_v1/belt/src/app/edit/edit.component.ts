import { Component, OnInit } from "@angular/core";

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
	selector: "app-edit",
	templateUrl: "./edit.component.html",
	styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
	editPet: any;
	edit_id: any;
	error: any;

	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	ngOnInit() {
		this.editPet = {
			name: "",
			type: "",
			description: "",
			skills: []
		};
		this._route.params.subscribe((params: Params) => {
			console.log("params", params);
			this.getEdit(params["id"]);
			this.edit_id = params["id"];
		});
	}

	getEdit(id) {
		console.log("edit", id);
		let observable = this._httpService.getPet(id);
		observable.subscribe(res => {
			console.log("edit res", res);
			this.editPet = res;
		});
	}

	onSubmit() {
		let observable = this._httpService.update(this.edit_id, this.editPet);
		observable.subscribe(
			res => {
				console.log("res", res);
				this._router.navigate(["/pets"]);
				if (res["errors"]) {
					this.error = res["message"];
					this._router.navigate(["/pets/" + this.edit_id + "/edit"]);
				}
			},
			error => {
				console.log(error);

				// this._router.navigate(["/new"]);
			}
		);
	}
}
