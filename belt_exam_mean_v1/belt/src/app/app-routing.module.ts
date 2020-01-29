import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { PetsComponent } from "./pets/pets.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import { DisplayComponent } from "./display/display.component";

const routes: Routes = [
	{
		path: "pets",
		component: PetsComponent
	},

	{ path: "pets/new", component: NewComponent },
	{ path: "pets/:id", component: DisplayComponent },
	{ path: "pets/:id/edit", component: EditComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
