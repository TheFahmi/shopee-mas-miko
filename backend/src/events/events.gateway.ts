import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedClients = new Map<string, Socket>();

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    this.connectedClients.set(client.id, client);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.connectedClients.delete(client.id);
  }

  notifyNewTransaction(transaction: any) {
    if (this.server) {
      this.server.emit('newTransaction', transaction);
    }
  }

  notifyDashboardUpdate(stats: any) {
    if (this.server) {
      this.server.emit('dashboardUpdate', stats);
    }
  }

  notifyAlert(alert: { type: string; message: string; data?: any }) {
    if (this.server) {
      this.server.emit('alert', alert);
    }
  }
}
