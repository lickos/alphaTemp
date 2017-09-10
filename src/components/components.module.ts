import { PipesModule } from './../pipes/pipes.module';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { AlphaheaderComponent } from './alphaheader/alphaheader';
import { BottomfooterComponent } from './bottomfooter/bottomfooter';
import { AlphaheaderNoBurgerComponent } from './alphaheader-no-burger/alphaheader-no-burger';
@NgModule({
	declarations: [AlphaheaderComponent,
    BottomfooterComponent,
    AlphaheaderNoBurgerComponent],
	imports: [IonicModule, PipesModule],
	exports: [AlphaheaderComponent,
    BottomfooterComponent,
    AlphaheaderNoBurgerComponent]
})
export class ComponentsModule {}
