import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private baseUrl:string = environment.baseUrl;
    private user?:User;

    constructor(private http:HttpClient){}

    get currentUser():User|undefined{
        if (!this.user) return undefined;
        return structuredClone(this.user);
    }

    login(email:string,password:string):Observable<User>{

        return this.http.get<User>(`${this.baseUrl}/users/id`)
            .pipe(
                tap((user)=>this.user = user),
                tap((user)=>localStorage.setItem('token',user.id.toString()))  
            );

    }
   
}