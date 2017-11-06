import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serversService: ServersService) {}

  testVar = 'eeeeeeeeee';

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  getStuff(){
    this.serversService.getStuff()
      .subscribe(
        (response: Response) => {
          const data = response.json(); //this "unwraps" the data into a neat javascript object
          console.log(data);
        },
        (error) => {
          console.log(`it's an error: ${error}`);
        }
      );
  }

  updateStuff(){
    this.serversService.updateStuff(this.testVar)
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        (error) => {
          console.log(`it's an error: ${error}`);
        }
      );
  }

  getPokemon(){
    this.serversService.getStuff()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      )
  }
}
