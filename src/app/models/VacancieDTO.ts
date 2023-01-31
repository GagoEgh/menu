import { FormControl, FormGroup } from "@angular/forms";

export class VacancieDTO{
    id?:number;
    shortDescription!:string;
    description!:string;

    constructor(vacanceiForm:FormGroup){
        this.shortDescription = (vacanceiForm.get('shortDescription') as FormControl).value 
        this.description = (vacanceiForm.get('description') as FormControl).value
    }
}