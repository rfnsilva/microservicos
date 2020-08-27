import path from 'path';
import protoLoader from '@grpc/proto-loader';
import grpc from 'grpc';

import implementacao from './grpcImplementacao';

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'contrato.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.UserService.service, implementacao);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());
server.start();