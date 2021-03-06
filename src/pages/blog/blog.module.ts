import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BlogPage } from "./blog";
import { ComponentsModule } from "./../../components/components.module";
import { PipesModule } from "./../../pipes/pipes.module";

@NgModule({
  declarations: [BlogPage],
  imports: [IonicPageModule.forChild(BlogPage), PipesModule, ComponentsModule]
})
export class BlogPageModule {}
