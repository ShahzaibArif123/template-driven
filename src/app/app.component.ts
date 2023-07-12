import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDriven';
  userName="";
  onSubmit(form:NgForm){
    // console.log(form);
    alert(
      "username: " + form.value.userDetails.username + "\n" +
      "email: " + form.value.userDetails.email + "\n" +
      "address: " + form.value.address + "\n" +
      "contact: " + form.value.contact
    );
  }
}
