import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mynumber'
})
export class MynumberPipe implements PipeTransform {

  result = "";
  transform(value: number): string {
    var ret = value.toString();

    if (ret.length % 3 == 0) {
      for (let i = 0; i < ret.length; i++) {
        if (i % 3 == 0 && i != 0) {
          this.result += ".";
        }
        this.result += ret.charAt(i);
      }
    }

    if (ret.length % 3 == 1) {
      for (let i = 0; i < ret.length; i++) {
        if (i % 3 == 1) {
          this.result += ".";
        }
        this.result += ret.charAt(i);
      }
    }

    if (ret.length % 3 == 2) {
      for (let i = 0; i < ret.length; i++) {
        if (i % 3 == 2) {
          this.result += ".";
        }
        this.result += ret.charAt(i);
      }
    }

    return this.result += " Ft";

  }


}
