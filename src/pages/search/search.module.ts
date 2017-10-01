import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SearchPage } from "./search";
import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [SearchPage],
  imports: [IonicPageModule.forChild(SearchPage), ComponentsModule, PipesModule]
})
export class SearchPageModule {}
