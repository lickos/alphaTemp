import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HealthPage } from "./health";
import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [HealthPage],
  imports: [IonicPageModule.forChild(HealthPage), ComponentsModule, PipesModule]
})
export class HealthPageModule {}
