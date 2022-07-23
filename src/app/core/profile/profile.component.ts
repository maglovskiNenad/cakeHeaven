import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  newUser: User = new User();

  editMode = false;

  constructor(private service: CakeService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe((user: User) => {
      this.user = user;
      this.newUser = new User(this.user);
    })
  }

  onEditClicked() {
    this.editMode = true;
  }

  onEditOk() {
    console.log(this.newUser)
    this.service.updateUser(this.newUser).subscribe((user: User) => {
      console.log(user)
      this.user = user;
      this.newUser = new User(this.user);
      this.editMode = false;
    })
  }

  
  onEditCancel() {
    this.editMode = false;
    this.newUser = new User(this.user);
  }

}
