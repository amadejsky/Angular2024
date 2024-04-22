import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ort'
})
export class OrtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
