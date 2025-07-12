import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(currentValue: string, appendText: string): string {
    if(currentValue == null) return currentValue; 
    return currentValue + appendText;
  }
}
