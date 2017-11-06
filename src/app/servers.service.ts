import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class ServersService {

  constructor(private http: Http) { }


  getStuff(){
    return this.http.get('http://pokeapi.co/api/v2/pokemon/7');
  }

  updateStuff(stuff){
    return this.http.put('http://localhost:3000/api/users', 'efefeef');
  }
}
