import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const valueSplited = value.split('')
    const phone = `(${valueSplited[0]}${valueSplited[1]}) ${valueSplited[2]}${valueSplited[3]}${valueSplited[4]}${valueSplited[5]}${valueSplited[6]} - ${valueSplited[7]}${valueSplited[8]}${valueSplited[9]}${valueSplited[10]}`
    return phone;
  }

}
