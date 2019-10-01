import { Component, OnInit } from '@angular/core';

import Product from 'src/app/models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: Product[] = [
    new Product('Salade', 'De la verdure.', 5 , 1.99 ),
    new Product('Ordinateur', 'Pour vos besoins informatiques.', 7 , 758.89),
    new Product('???', "Vestiges des anciens proprios, je touche pas à ça moi.", 1 , 0.01)
  ]

  constructor() { }

  ngOnInit() {
  }

}
