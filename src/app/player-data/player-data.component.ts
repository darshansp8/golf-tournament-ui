import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket.io.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.scss']
})
export class PlayerDataComponent implements OnInit {
  socket: any;
  url: string = 'https://mst-full-stack-dev-test.herokuapp.com/';
  playersData: any[] = [];
  displayData: any;
  visible: Boolean = false;
  constructor(private socketService: SocketIoService) {
    this.socket = io(this.url)
  }

  ngOnInit() {
    this.getPlayersData();
  }

  getPlayersData() {
    this.socket.on('data-update', (data: object) => {
      console.log(data);
      this.playersData.push(data);
      this.playersData.reverse();
    })
    // return this.playersData;
  }

  displayHoleScore(mst_id: any) {
    const found = this.playersData.find((obj) => {
      return obj.MSTID === mst_id;
    });

    if (found) {
      console.log("Match found")
      this.displayData = found;
      console.log(this.displayData)
      this.visible = !this.visible;
    }
  }
}
