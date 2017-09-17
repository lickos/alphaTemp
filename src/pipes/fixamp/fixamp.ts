import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fixamp"
})
export class FixampPipe implements PipeTransform {
  transform(value: string, ...args) {
    if (value) {
      return value.replace(/&amp;/g, "&");
    }
  }
}
