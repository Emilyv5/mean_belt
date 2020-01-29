import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class HttpService {
	constructor(private _http: HttpClient) {}

	getPets() {
		// our http response is an Observable, store it in a variable
		return this._http.get("/pet");
	}
	getPet(id) {
		return this._http.get("/pet/" + id);
	}
	addPet(newpet) {
		return this._http.post("/pet", newpet);
	}
	deletepet(id) {
		return this._http.delete("/pet/" + id);
	}
	update(id, editpet) {
		return this._http.put("/pet/" + id, editpet);
	}
}
