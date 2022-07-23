import { Component, OnInit } from '@angular/core';
import { Cake } from '../model/cake.model';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  
  cakes: Cake[] = [];
  ingredients: string[] = [];

  params = {
    sort: "name",
    sortDirection: "asc",
    filter: {
      ingredients: "",
    }
  }

  constructor(private service: CakeService) { }

  ngOnInit(): void {
    this.getCakes();
    this.getIngredients();
  }

  getCakes() {
    this.service.getCakes(this.params).subscribe((cakes: Cake[]) => {
      this.cakes = cakes;
    })
  }

  getIngredients() {
    this.service.getIngredients().subscribe((ingredients: string[]) => {
      this.ingredients = ingredients;
    })
  }

  onIngredientChange(event: Event) {
    this.params.filter.ingredients = (event.target as HTMLInputElement).value
    this.getCakes();
  }

}
