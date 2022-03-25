import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) { // Esse PIPE troca caracteres de um objeto. Value recebe o dado do objeto. CHAR recece o caractere que iremos passar. VALUETOREPLACE recebe o valor que queremos substituir o char
        return value.replace(char,valueToReplace);
    }
}