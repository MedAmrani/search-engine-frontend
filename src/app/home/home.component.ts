import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue:string;
  
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  onSearchEvent(event){

    console.log("Home", event);
    this.searchValue = event;
    
    this.router.navigate(['/search'], {state: {searchValue: this.searchValue}});


  }

}
