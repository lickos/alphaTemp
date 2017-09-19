import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { GreecePage } from "./greece";
import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from "./../../pipes/pipes.module";

@NgModule({
  declarations: [GreecePage],
  imports: [IonicPageModule.forChild(GreecePage), PipesModule, ComponentsModule]
})
export class GreecePageModule {}
