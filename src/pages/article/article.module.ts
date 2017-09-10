import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlePage } from './article';

@NgModule({
  declarations: [
    ArticlePage
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(ArticlePage),
  ],
})
export class ArticlePageModule {}
