import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "removequotes"
})
export class RemovequotesPipe implements PipeTransform {
  transform(value: string, ...args) {
    if (value) {
      return value.replace(/&quot;|&#039;|<br\s*\/?>/g, "'");
    }
  }
}
