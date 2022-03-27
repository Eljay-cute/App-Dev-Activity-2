import { Component} from '@angular/core';






@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contactlist  = [
    {id: 1, name: 'Sebastian', email: 'Sebastian@gmail.com'  ,number: '09556456475'},
    {id: 2, name: 'Marvin', email: 'Marvin@gmail.com'  ,number: '09556456475'},
    {id: 3, name: 'Fahargi', email: 'fahargi@gmail.com'  ,number: '09556456475'},
   
  ]




  constructor( ) {
  }
  

}




