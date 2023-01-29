import { FormControl, FormGroup } from "@angular/forms";

export class ProjectDTO {
    title!: string;
    description!: string
    constructor(projectForm:FormGroup) {
        this.title = (projectForm.get('title') as FormControl).value 
        this.description = (projectForm.get('description') as FormControl).value
    }
}