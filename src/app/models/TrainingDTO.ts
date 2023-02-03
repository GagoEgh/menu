import { FormControl, FormGroup } from "@angular/forms";

export class TrainingDTO{
    name!: string
    description!: string;
    date!: Date
    image!: any//FormData
    type!: string
    createdAt?:any//string
    id?:any//number
    mediaFiles?:any
    updatedAt?:any//string



    constructor(trainingForm:FormGroup){
        this.name = (trainingForm.get('name') as FormControl).value 
        this.description = (trainingForm.get('description') as FormControl).value
      //  this.date = (trainingForm.get('date') as FormControl).value
        this.image = (trainingForm.get('image') as FormControl).value
        this.type = (trainingForm.get('type') as FormControl).value
    }
}