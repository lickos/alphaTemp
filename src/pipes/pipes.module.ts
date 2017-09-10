import { NgModule } from '@angular/core';
import { RemovequotesPipe } from './removequotes/removequotes';
import { CapFirstPipe } from './cap-first/cap-first';
@NgModule({
	declarations: [RemovequotesPipe,
    CapFirstPipe],
	imports: [],
	exports: [RemovequotesPipe,
    CapFirstPipe]
})
export class PipesModule {}
