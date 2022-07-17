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
  isActive = false;
  isNum = 1;


  constructor(private http:HttpClient) {
    this.userList=[];
    this.isNum

   }

  ngOnInit(){
    console.log(this.getAnimal())
  }

  getAnimal(){
    this.http.get(this.url)
      .subscribe((response:any) => {
        this.userList=response
        console.log(this.userList[0])
      })
  }

  onFavoriteClick(target){
    this.isNum ++
    target.className += " d-none";
    (target as HTMLElement).nextElementSibling.classList.remove("d-none");
    const targetParent = (target as HTMLElement).parentElement;
    const parent = targetParent.parentElement;
    const newParent = (parent.parentElement.outerHTML);
    const local = this.isNum.toString()
    window.localStorage.setItem(local , newParent);

  }

}
