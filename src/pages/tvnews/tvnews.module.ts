import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvnewsPage } from './tvnews';
import { PipesModule } from "./../../pipes/pipes.module";
import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  declarations: [
    TvnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(TvnewsPage), ComponentsModule, PipesModule
  ],
})
export class TvnewsPageModule {}
