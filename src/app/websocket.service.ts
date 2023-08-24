import { Injectable, NgModule } from '@angular/core';
import { Socket } from 'ngx-socket-io';  



@Injectable({
	providedIn: 'root'
})

export class SocketService {
  
	constructor(private socket: Socket) { }

	// emit event
	sendMessage() {
		this.socket.emit('fetchMovies');
	} 

	// listen event
	onRecieveMessage() {
		return this.socket.fromEvent('fetchMovies');
	}
}