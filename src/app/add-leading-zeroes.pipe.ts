import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'addLeadingZeroes' })
export class AddLeadingZeroes implements PipeTransform {
  transform(num: number, count?: number): string {
    return String(num < 10 ? `0${num}` : num);
  }
}
