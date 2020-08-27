import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './entity/User';
import { UserServiceService, IUserServiceServer } from './pb/message/message_grpc_pb';
import grpc from 'grpc';
import { RegisterUserRequest, RegisterUserResponse } from './pb/message/message_pb';

export class implementacao implements IUserServiceServer {

  public saveUser(
    call: grpc.ServerUnaryCall<RegisterUserRequest>,
    callback: grpc.sendUnaryData<RegisterUserResponse>
  ): void {
      console.log(call.request);

      /*try {
        const passwordHash = await bcrypt.hash(password, 8);
        
        const user = await getRepository(User).save({
          username,
          email,
          password: passwordHash
        });
        
        const token_register = jwt.sign({ username }, process.env.SECRET, {
          expiresIn: '1d'
        });

        const data = {
          id: user.id,
          username: user.username,
          email: user.email,
          token: token_register
        }
        
        return res.status(201).json(data);

      } catch (error) {
        return res.status(402).json({ message: "erro user controller" })
      }*/
  }

  public login(
    call: grpc.ServerUnaryCall<RegisterUserRequest>,
    callback: grpc.sendUnaryData<RegisterUserResponse>
  ): void {}
    
  public getUser(
    call: grpc.ServerUnaryCall<RegisterUserRequest>,
    callback: grpc.sendUnaryData<RegisterUserResponse>
  ): void { }
  
  public auth(
    call: grpc.ServerUnaryCall<RegisterUserRequest>,
    callback: grpc.sendUnaryData<RegisterUserResponse>
  ): void {}
}
