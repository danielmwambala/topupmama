import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponentComponent implements OnInit {
  formValue !: FormGroup;
  users !: any;
  constructor(private formBuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: [''],
      password: ['']
    })
    this.getAllUsers();
  }

  getAllUsers(){
    this.api.getUsers().subscribe(res =>{
      this.users = res.data;
    })
  }

  deleteUser(row: any){
    this.api.deteteUser(row.id).subscribe(res => {
      alert("User has been deleted");
      this.getAllUsers();
    })
  }

}
