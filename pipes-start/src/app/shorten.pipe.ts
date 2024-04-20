import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, param: number){
        if(value.length > param){
           return value.substring(0, param) + '...'; 
        }
        return value;
    }
}