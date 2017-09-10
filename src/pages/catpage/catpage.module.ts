import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatpagePage } from './catpage';


@NgModule({
  declarations: [
    CatpagePage,
  ],
  imports: [
    IonicPageModule.forChild(CatpagePage),
    ComponentsModule,
    PipesModule
  ],
})
export class CatpagePageModule {}
