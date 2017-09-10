import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SportsPage } from "./sports";

@NgModule({
  declarations: [SportsPage],
  imports: [IonicPageModule.forChild(SportsPage), ComponentsModule, PipesModule]
})
export class SportsPageModule {}
