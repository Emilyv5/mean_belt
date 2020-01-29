import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
	selector: "app-display",
	templateUrl: "./display.component.html",
	styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
	edit_pet: any;
	edit_id: any;
	like: number = 0;

	onButtonClickDelete(id) {
		console.log("Deleting");
		let observable = this._httpService.deletepet(id);
		observable.subscribe(
			res => {
				console.log("delete", res);
				this._router.navigate(["/pets"]);
			},
			err => console.log("delete error", err)
		);
	}

	onButtonClicklike(id) {
		console.log("liking");
		this.edit_pet["likes"] = this.edit_pet["likes"] + 1;
		console.log("like modified", this.edit_pet);
		let observable = this._httpService.update(id, this.edit_pet);
		observable.subscribe(
			res => {
				console.log("add like", res);
				this._router.navigate(["/pets/" + this.edit_id]);
			},
			err => console.log("like error", err)
		);
		this.like = 1;
	}

	constructor(
		private _httpService: HttpService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	ngOnInit() {
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
			this.edit_pet = res;
		});
	}
}
