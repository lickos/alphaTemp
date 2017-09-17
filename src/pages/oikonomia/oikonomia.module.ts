import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from "./../../pipes/pipes.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OikonomiaPage } from "./oikonomia";

@NgModule({
  declarations: [OikonomiaPage],
  imports: [
    IonicPageModule.forChild(OikonomiaPage),
    PipesModule,
    ComponentsModule
  ]
})
export class OikonomiaPageModule {}
