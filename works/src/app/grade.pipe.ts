import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade',
})
export class GradePipe implements PipeTransform {
  transform(value: number, total: number, dec: number): any {
    return ((value / total) * 100).toFixed(dec);
  }
}
