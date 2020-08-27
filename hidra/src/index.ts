import grpc from 'grpc';

import { UserServiceService, IUserServiceServer } from './pb/message/message_grpc_pb';
import { implementacao } from './implementacao';

const server = new grpc.Server();

server.addService<IUserServiceServer>(UserServiceService, implementacao);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();