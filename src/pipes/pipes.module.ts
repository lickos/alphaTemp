import { NgModule } from '@angular/core';
import { RemovequotesPipe } from './removequotes/removequotes';
import { CapFirstPipe } from './cap-first/cap-first';
import { FixampPipe } from './fixamp/fixamp';
@NgModule({
	declarations: [RemovequotesPipe,
    CapFirstPipe,
    FixampPipe],
	imports: [],
	exports: [RemovequotesPipe,
    CapFirstPipe,
    FixampPipe]
})
export class PipesModule {}
