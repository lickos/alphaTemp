import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capFirst',
})
export class CapFirstPipe implements PipeTransform {
  transform(value: string, ...args) {
    if(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
