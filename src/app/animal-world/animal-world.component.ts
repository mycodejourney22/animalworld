import {HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-world',
  templateUrl: './animal-world.component.html',
  styleUrls: ['./animal-world.component.css']
})
export class AnimalWorldComponent implements OnInit {

  url: string = 'https://zoo-animal-api.herokuapp.com/animals/rand/5';
  userList: any;
  // isActive = false;


  constructor(private http:HttpClient) {
    this.userList=[];

   }

  ngOnInit(){
    console.log(this.getAnimal())
  }

  getAnimal(){
    this.http.get(this.url)
      .subscribe((response:any) => {
        this.userList=response
      })
  }

  onFavoriteClick(target){
    target.className += " d-none";
    (target).nextElementSibling.classList.remove("d-none");
    const targetParent = (target).parentElement;
    const parent = targetParent.parentElement
    const newParent = (parent.parentElement).innerHTML
    const newItem = `<li class="list-inline-item">
                       ${newParent}
                      </li>`;
    const local = (localStorage.length + 1).toString()
    window.localStorage.setItem(local , newItem);

  }

}
