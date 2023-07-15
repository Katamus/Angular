import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({providedIn: 'root'})
export class GifsService {

    constructor(private http:HttpClient){

    }

    private apikey:string = "IhY0KXdw7ZeHCvZIc6AmuJuKViHmYwbq";
    private serviceUrl:string = "https://api.giphy.com/v1/gifs";
    private _tagHistory:string[] = [];
    public gifList : Gif[] = [];

    get tagsHistory(){
        return [...this._tagHistory];
    }

    searchTag(tag:string):void {
        if(tag.length === 0) return;

        this.organizeHistory(tag);

        /*
        const resp = await fetch("https://api.giphy.com/v1/gifs/search?api_key=IhY0KXdw7ZeHCvZIc6AmuJuKViHmYwbq&q=valorant&limit=10");
        const data = await resp.json();
        console.log(data);
       */ 
      
        const params = new HttpParams()
            .set('api_key',this.apikey)
            .set('limit',10)
            .set('q',tag);
        
      this.http
        .get<SearchResponse>(`${this.serviceUrl}/search`,{params})
        .subscribe(resp=>{
            this.gifList = resp.data;
            console.log(this.gifList);
            
        })
    }

    private organizeHistory (tag:string){
        tag = tag.toLowerCase();
        if(this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter((oldTag)=> oldTag != tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0,10);
    }

}