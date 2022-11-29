import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  name = ""
  id = ""
  image = ""
  address = ""
  phone = ""
  dateofappointment = ""
  doctorName = ""
  readValues = () => {
    let data: any = {
      "image": this.image,
      "name": this.name,
      "id": this.id,
      "address": this.address,
      "phone": this.phone,
      "dateofappointment": this.dateofappointment,
      "doctorName": this.doctorName
    }
    console.log(data)
  }
}
