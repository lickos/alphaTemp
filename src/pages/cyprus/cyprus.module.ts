import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CyprusPage } from "./cyprus";

@NgModule({
  declarations: [CyprusPage],
  imports: [IonicPageModule.forChild(CyprusPage), ComponentsModule, PipesModule]
})
export class CyprusPageModule {}
