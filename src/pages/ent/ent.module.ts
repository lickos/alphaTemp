import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EntPage } from "./ent";
import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [EntPage],
  imports: [IonicPageModule.forChild(EntPage), ComponentsModule, PipesModule]
})
export class EntPageModule {}
