
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';






@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class FavoritesComponent implements OnInit {
  arr = [];


  constructor() {
    this.arr;

   }

  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      this.arr.push(localStorage.getItem(key));
  }
  const mynew = localStorage.getItem("1")
  console.log(mynew)
  const ulList = document.querySelector(".img-list")
  ulList.insertAdjacentHTML("afterbegin", mynew)


}}
