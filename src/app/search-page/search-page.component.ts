import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Doc } from '../models/Doc';
import { DocSearchRequest } from '../models/DocSearchRequest';
import { SearchService } from '../services/search.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchValue1:string = "";
  SizeIconStatus: string = "arrow_upward";
  DateIconStatus: string = "arrow_upward";
  public extension:string="";
  sortByDate: string = "asc";
  sortbySize: string = "asc";
  docs : Doc[] ;
  size:number;
  docSearchRequest: DocSearchRequest = {q:"",extension: "",sortByDate:"asc",sortbySize:"asc"};

  
  
  
  constructor(private searcheService: SearchService) { }


  

  ngOnInit(): void {
    if(typeof history.state.searchValue != 'undefined')
    this.searchValue1 = history.state.searchValue;
    // console.log(this.searchValue);
    this.docSearchRequest.q = this.searchValue1;
    console.log(this.docs)

    this.searcheService.getAllDocsMatchCriteria(this.docSearchRequest,{page: 0, size:10}).subscribe({
      next: (data:any) => {this.docs = data;
        console.log(data);

        this.size = data.length}
    });

    
      

    // console.log(this.docSearchRequest)
  }

  public onValChange(val: string) {
    if(val === "All"){
      this.extension = ""
    }else{
      this.extension = val;
    }
    if(val ==='DOC'){
      this.extension = "docx";
    }
    console.log(val)
    this.docSearchRequest = {
      q: this.searchValue1,
      extension: this.extension,
      sortByDate: this.sortByDate,
      sortbySize: this.sortbySize
    }
    this.searcheService.getAllDocsMatchCriteria(this.docSearchRequest,{page: 0, size:10}).subscribe({
      next: (data:any) => {this.docs = data, this.size = data.length , this.ngOnInit();
      }
    });
  }

  onSearchEvent(request){
    console.log(this.docs);
    console.log(request);
    let data = {
      q: request,
      extension: this.extension,
      sortByDate: this.sortByDate,
      sortbySize: this.sortbySize
    }
    this.searcheService.getAllDocsMatchCriteria(data,{page: 0, size:10}).subscribe({
      next: (data:any) => {this.docs = data, this.size = data.length}
    });

  }

  onDownload(fileId,fileName,ext){
    this.downloadFileSystem(fileId,fileName,ext);

  }


  downloadFileSystem(fileId,fileName,ext) {
    this.searcheService.downloadFileSystem(fileId,ext)
      .subscribe(response => {
        

        const filename = fileName;
        console.log(filename);
        this.saveFile(response.body, filename);
      });
  }
  saveFile(data: any, filename?: string) {
    const blob = new Blob([data], {type: 'application/pdf'});
    fileSaver.saveAs(blob, filename);
  }

  onSortSize(SizeIconStatus){
    if (this.SizeIconStatus == "arrow_upward"){
      this.SizeIconStatus = "arrow_downward";
    }
    else if (this.SizeIconStatus == "arrow_downward"){
      this.SizeIconStatus = "arrow_upward"
    }
  }

  onSortDate(DateIconStatus){
    if (this.DateIconStatus == "arrow_upward"){
      this.DateIconStatus = "arrow_downward";
    }
    else if (this.SizeIconStatus == "arrow_downward"){
      this.DateIconStatus = "arrow_upward"
    }
  }

}
