import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/message.model';
import { User } from 'src/app/model/user.model';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  user: User = new User();

  message: Message = new Message();

  constructor(private service: CakeService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUser().subscribe((user: User) => {
      this.user = user;
      this.message.name = this.user.firstName + ' ' + this.user.lastName;
      this.message.email = this.user.email;
    });
  }

  onSendClicked(): void {
    this.service.postMessage(this.message).subscribe((message: Message) => {
      console.log(message);
      this.router.navigate(['/home']);
    });
  }
}
