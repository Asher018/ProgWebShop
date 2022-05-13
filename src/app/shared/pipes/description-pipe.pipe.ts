import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionPipe'
})
export class DescriptionPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
