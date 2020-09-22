import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();
  @Input() isButtonVisible:boolean;
  @Input() search:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    this.searchValue.emit(this.search);
    console.log(this.search)
  }

}
