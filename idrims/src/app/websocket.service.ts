import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as socketIo from 'socket.io-client';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  public connect() {
    let socket = new SockJS(`http://108.61.174.41:7070/ws`);

    let stompClient = Stomp.over(socket);

    return stompClient;
}
}
