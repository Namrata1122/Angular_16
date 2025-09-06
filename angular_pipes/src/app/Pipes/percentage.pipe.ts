import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(value: number,total:number, decimal:number) {
        console.log("PERCENTAGE PIPE HAS BEEN CALLED")
        return (value/total * 100).toFixed(decimal)+ '%';
    }
}