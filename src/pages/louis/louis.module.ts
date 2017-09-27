import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LouisPage } from "./louis";
import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from "./../../pipes/pipes.module";

@NgModule({
  declarations: [LouisPage],
  imports: [IonicPageModule.forChild(LouisPage), PipesModule, ComponentsModule]
})
export class LouisPageModule {}
