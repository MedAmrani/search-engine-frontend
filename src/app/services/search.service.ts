import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DocSearchRequest} from '../models/DocSearchRequest';
import {Doc} from '../models/Doc';
import { environment as env } from '../../environments/environment';
import { FileUploader } from 'ng2-file-upload';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http :HttpClient) { }


  getAllDocsMatchCriteria(request: DocSearchRequest, pageable: {page: number, size: number}): Observable<Array<Doc>>  {
    let params = new HttpParams();
    params = params.append('page', pageable.page + '');
    params = params.append('size', pageable.size + '');
    for(const key in request) {
        if(request[key] !== '') {
            params = params.append(key, request[key]);
        }
    }
    return this.http.get<Array<Doc>>(env.apiUrl + '/docs/_search', { params });
  }

  downloadFileSystem(fileId: string,ext: string): Observable<any> {
    let fileType ='Application/'+ext+'; charset=utf-8'
    let headers = new HttpHeaders();
    headers = headers.append('Accept', fileType);
    console.log(fileId);
 
    return this.http.get(env.apiUrl+'/docs/' + fileId, {
      headers: headers,
      observe: 'response',
      responseType: 'arraybuffer'} 
     );
  }


  postFiles(filesToUpload: File[]) : Observable<any> {
    console.log("in post")
    let mys = "hello"
    let params = new HttpParams();
    params = params.append('file', mys);

    // const data: FormData = new FormData();
    // data.append('file', filesToUpload[0]);
    return this.http.post('http://localhost:8081/upload', { params })


    // let url = env.apiUrl + "/upload" ;  
    // console.log(url);
  
    // const formdata: FormData = new FormData();  
    
    // formdata.append('files', filesToUpload[0]);  
   
    // return this.http.post(url , formdata); 

    // console.log(filesToUpload);
    // var formData = new FormData();
    // filesToUpload.forEach(file => {
    //   formData.append("file",file);
      
    // });
        // formData.append('file', filesToUpload);
    // filesToUpload.forEach(file=>{
    // //   const formdata: FormData = new FormData();
 
    // // formdata.append('files', file);
    // let params = new HttpParams();
    // params = params.append('files', file);
 
    // const req = new HttpRequest('POST',env.apiUrl + '/upload', {params});
    // return this.http.request(req);


    // });
    // const formdata: FormData = new FormData();
 
    // formdata.append('files', filesToUpload);
 
    // const req = new HttpRequest('POST', '/post', formdata, {
    //   reportProgress: true,
    //   responseType: 'text'
    // });
 
    // return this.http.request(req);
    
   
      // return this.http.post(env.apiUrl+'/upload', formData);
      
      
}

pushFileToStorage(files: File[]): Observable<HttpEvent<{}>> {
  console.log(files.length)


  var x = 1 ; 
  var x = 2 ; 

  // for (let i = 0; i < files.length-1; i++) {
  //   const data: FormData = new FormData();
  // data.append('file', files[i]);
  // const newRequest = new HttpRequest('POST', 'http://localhost:8081/savefile', data, {
  //   reportProgress: true,
  //   responseType: 'text'
  //   });
  //  this.http.request(newRequest);
    
  // }
  // const data: FormData = new FormData();
  // data.append('file', files[files.length-1]);
  // const newRequest = new HttpRequest('POST', 'http://localhost:8081/savefile', data, {
  //   reportProgress: true,
  //   responseType: 'text'
  //   });
  //  return this.http.request(newRequest);
  // let uploadedFiles = files.map(item => data.append('file', item, item.name));
  const data: FormData = new FormData();
  // for (var file in files) {
  //   data.append("files", file);
  // }
  files.forEach(file => {data.append("files", file)})
  console.log(data.get("files"));

  // data.append('file', files[files.length-1]);
  const newRequest = new HttpRequest('POST', 'http://localhost:8081/savefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
   return this.http.request(newRequest);



  
}
}
