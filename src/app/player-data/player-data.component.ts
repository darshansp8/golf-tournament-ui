import { Component, OnInit } from '@angular/core';
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
  reversedplayersData: any[] = [];
  displayData: any;
  visible: Boolean = false;
  constructor() {
    this.socket = io(this.url)
  }

  ngOnInit() {
    this.getPlayersData();
  }

  getPlayersData() {
    // fetches data from the web socket url
    this.socket.on('data-update', (data: object) => {
      console.log(data);
      this.playersData.push(data);
      this.playersData.reverse();
    })
  }

  displayHoleScore(mst_id: any) {
    // Matches the MSTID in the array and shows the data corresponding to that MSTID
    const found = this.playersData.find((obj) => {
      return obj.MSTID === mst_id;
    });

    if (found) {
      this.displayData = found;
      console.log(this.displayData)
      this.visible = !this.visible;
    }
  }

  showLatestData() {
    // shows the latest data first
    this.playersData.reverse();
  }

  showOldestData() {
    // shows the oldest data first
    this.playersData.reverse();
  }
  sortByFirstName() {
    // sorts the array on the basis of firstname
    this.playersData.sort((a, b) => a.First.toUpperCase().localeCompare(b.First.toUpperCase()));
  }

  sortByLastName() {
    // Sorts the array on the basis of lastname
    this.playersData.sort((a, b) => a.Last.toUpperCase().localeCompare(b.Last.toUpperCase()));
  }
}
