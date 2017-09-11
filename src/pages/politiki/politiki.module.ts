import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PolitikiPage } from "./politiki";
import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [PolitikiPage],
  imports: [IonicPageModule.forChild(PolitikiPage), ComponentsModule, PipesModule]
})
export class PolitikiPageModule {}
