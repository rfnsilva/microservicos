// package: 
// file: src/pb/message/message.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_pb_message_message_pb from "../../../src/pb/message/message_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IgetUser;
    saveUser: IUserServiceService_IsaveUser;
    login: IUserServiceService_Ilogin;
    auth: IUserServiceService_Iauth;
}

interface IUserServiceService_IgetUser extends grpc.MethodDefinition<src_pb_message_message_pb.GetUserByIdRequest, src_pb_message_message_pb.UserResponse> {
    path: string; // "/.UserService/getUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_pb_message_message_pb.GetUserByIdRequest>;
    requestDeserialize: grpc.deserialize<src_pb_message_message_pb.GetUserByIdRequest>;
    responseSerialize: grpc.serialize<src_pb_message_message_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<src_pb_message_message_pb.UserResponse>;
}
interface IUserServiceService_IsaveUser extends grpc.MethodDefinition<src_pb_message_message_pb.RegisterUserRequest, src_pb_message_message_pb.UserResponse> {
    path: string; // "/.UserService/saveUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_pb_message_message_pb.RegisterUserRequest>;
    requestDeserialize: grpc.deserialize<src_pb_message_message_pb.RegisterUserRequest>;
    responseSerialize: grpc.serialize<src_pb_message_message_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<src_pb_message_message_pb.UserResponse>;
}
interface IUserServiceService_Ilogin extends grpc.MethodDefinition<src_pb_message_message_pb.LoginUserRequest, src_pb_message_message_pb.LoginResponse> {
    path: string; // "/.UserService/login"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_pb_message_message_pb.LoginUserRequest>;
    requestDeserialize: grpc.deserialize<src_pb_message_message_pb.LoginUserRequest>;
    responseSerialize: grpc.serialize<src_pb_message_message_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<src_pb_message_message_pb.LoginResponse>;
}
interface IUserServiceService_Iauth extends grpc.MethodDefinition<src_pb_message_message_pb.AuthenticationRequest, src_pb_message_message_pb.UserResponse> {
    path: string; // "/.UserService/auth"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_pb_message_message_pb.AuthenticationRequest>;
    requestDeserialize: grpc.deserialize<src_pb_message_message_pb.AuthenticationRequest>;
    responseSerialize: grpc.serialize<src_pb_message_message_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<src_pb_message_message_pb.UserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUser: grpc.handleUnaryCall<src_pb_message_message_pb.GetUserByIdRequest, src_pb_message_message_pb.UserResponse>;
    saveUser: grpc.handleUnaryCall<src_pb_message_message_pb.RegisterUserRequest, src_pb_message_message_pb.UserResponse>;
    login: grpc.handleUnaryCall<src_pb_message_message_pb.LoginUserRequest, src_pb_message_message_pb.LoginResponse>;
    auth: grpc.handleUnaryCall<src_pb_message_message_pb.AuthenticationRequest, src_pb_message_message_pb.UserResponse>;
}

export interface IUserServiceClient {
    getUser(request: src_pb_message_message_pb.GetUserByIdRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: src_pb_message_message_pb.GetUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: src_pb_message_message_pb.GetUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    saveUser(request: src_pb_message_message_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    saveUser(request: src_pb_message_message_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    saveUser(request: src_pb_message_message_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    login(request: src_pb_message_message_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: src_pb_message_message_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: src_pb_message_message_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    auth(request: src_pb_message_message_pb.AuthenticationRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    auth(request: src_pb_message_message_pb.AuthenticationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    auth(request: src_pb_message_message_pb.AuthenticationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: src_pb_message_message_pb.GetUserByIdRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: src_pb_message_message_pb.GetUserByIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: src_pb_message_message_pb.GetUserByIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public saveUser(request: src_pb_message_message_pb.RegisterUserRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public saveUser(request: src_pb_message_message_pb.RegisterUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public saveUser(request: src_pb_message_message_pb.RegisterUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public login(request: src_pb_message_message_pb.LoginUserRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: src_pb_message_message_pb.LoginUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: src_pb_message_message_pb.LoginUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public auth(request: src_pb_message_message_pb.AuthenticationRequest, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public auth(request: src_pb_message_message_pb.AuthenticationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public auth(request: src_pb_message_message_pb.AuthenticationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_pb_message_message_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
