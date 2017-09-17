import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { IntPage } from "./int";
import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from "./../../pipes/pipes.module";

@NgModule({
  declarations: [IntPage],
  imports: [IonicPageModule.forChild(IntPage), PipesModule, ComponentsModule]
})
export class IntPageModule {}
