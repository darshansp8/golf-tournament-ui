import { Component, OnChanges, OnInit } from '@angular/core';
import { SocketIoService } from './socket.io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'golf-tournament-ui';

  constructor(private socketService: SocketIoService) { }

  ngOnInit() {
    // this.socketService.getPlayersData();
    // console.log(playersData)
  }

  ngOnChanges() {
    // this.socketService.getPlayersData();
    // console.log(this.socketService.playersData)
  }
}
