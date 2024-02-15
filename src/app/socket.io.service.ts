import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  socket: any;
  url: string = 'https://mst-full-stack-dev-test.herokuapp.com/';
  playersData: any;
  constructor() {
    this.socket = io(this.url);
  }

  getPlayersData() {
    this.socket.on('data-update', (data: object) => {
      console.log(data);
      this.playersData = data
    })
    // return this.playersData;
  }

}
