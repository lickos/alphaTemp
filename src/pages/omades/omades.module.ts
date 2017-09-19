import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OmadesPage } from "./omades";
import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from "./../../pipes/pipes.module";

@NgModule({
  declarations: [OmadesPage],
  imports: [IonicPageModule.forChild(OmadesPage), PipesModule, ComponentsModule]
})
export class OmadesPageModule {}
