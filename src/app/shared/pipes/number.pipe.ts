import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mynumber'
})

export class myNumberPipe implements PipeTransform {
    transform(value: number) {
        value*2
    }
    
}