import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scaner'
})
export class ScanerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
