import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { PetsComponent } from "./pets/pets.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import { DisplayComponent } from "./display/display.component";

@NgModule({
	declarations: [
		AppComponent,
		PetsComponent,
		NewComponent,
		EditComponent,
		DisplayComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
