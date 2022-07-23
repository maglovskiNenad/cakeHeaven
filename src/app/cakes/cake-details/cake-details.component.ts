import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cake } from 'src/app/model/cake.model';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {

  cakeId: number = -1;
  cake: Cake = new Cake();

  constructor(
    private route: ActivatedRoute,
    private service: CakeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cakeId = params['id'];
      this.getCake();
    })
  }

  getCake() {
    this.service.getOne(this.cakeId).subscribe((cake: Cake) => {
      console.log(cake);
      this.cake = cake;
    })
  }

}
