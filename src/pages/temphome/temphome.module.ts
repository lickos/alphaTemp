import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemphomePage } from './temphome';

@NgModule({
  declarations: [
    TemphomePage,
  ],
  imports: [
    IonicPageModule.forChild(TemphomePage),
    ComponentsModule, PipesModule
  ],
})
export class TemphomePageModule {}
