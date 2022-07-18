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
    const ulList = document.querySelector(".img-list")
    if (localStorage.length >= 1) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        this.arr.push(localStorage.getItem(key));
      }
      this.arr.forEach((list)=> {
        ulList.insertAdjacentHTML("afterbegin",list)
      })
    }
    else {
      const noList = '<h2>Your favorite list is empty</h2>'
      ulList.insertAdjacentHTML("afterbegin",noList)
    }

}}
