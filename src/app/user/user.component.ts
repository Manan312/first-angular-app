import { Component,computed,EventEmitter,Input,input, Output,output } from '@angular/core';
import {type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";

//computed,signal
//const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
//using user defined Type 
// type User={
//   id:string;
//   avatar:string;
//   name:string;
// }

//INTERFACE
// interface  User{
//   id:string;
//   avatar:string;
//   name:string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {
@Input({required:true}) selected!:boolean;
  //to configure the property is required and must be provided
  //  @Input({required:true}) avatar!/*Initializes that the value will be provided */: string;
  //  @Input({required:true}) name!: string;
  //  @Input() id!: string;
  //Object Inline
  // @Input({required:true}) user!:{
  //   id:string;
  //   avatar:string;
  //   name:string;
  // };
  @Input({required:true}) user!:User;
   @Output() select= new EventEmitter<string>();//Output Property to return value to parent component
  //select=output<string>();// newer approach for the angular


//using input function
  // avatar=input.required<string>();// used in case we need to use signals
  // name=input.required<string>();
  // selectedUser= signal(D_UUMMYSERS[randomIndex]);
  //With Signal
  //imagePath=computed(()=>'assets/users/'+this.selectedUser().avatar)
  //Without Signal

  imagePath=computed(()=>'assets/users/'+this.user.avatar);
  //  get imagePath(){
  //   return 'assets/users/'+this.avatar;
  //  }

  onSelectUser()
  {
    //Output property
    //setting the emit for the value
    this.select.emit(this.user.id);
    

    //Setting the signal
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

  // get onCheck()
  // {
  //   return  Math.floor(Math.random()*DUMMY_USERS.length);
  // }
}
