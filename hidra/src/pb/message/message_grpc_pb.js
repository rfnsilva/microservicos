// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_pb_message_message_pb = require('../../../src/pb/message/message_pb.js');

function serialize_AuthenticationRequest(arg) {
  if (!(arg instanceof src_pb_message_message_pb.AuthenticationRequest)) {
    throw new Error('Expected argument of type AuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AuthenticationRequest(buffer_arg) {
  return src_pb_message_message_pb.AuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUserByIdRequest(arg) {
  if (!(arg instanceof src_pb_message_message_pb.GetUserByIdRequest)) {
    throw new Error('Expected argument of type GetUserByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUserByIdRequest(buffer_arg) {
  return src_pb_message_message_pb.GetUserByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginResponse(arg) {
  if (!(arg instanceof src_pb_message_message_pb.LoginResponse)) {
    throw new Error('Expected argument of type LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginResponse(buffer_arg) {
  return src_pb_message_message_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginUserRequest(arg) {
  if (!(arg instanceof src_pb_message_message_pb.LoginUserRequest)) {
    throw new Error('Expected argument of type LoginUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginUserRequest(buffer_arg) {
  return src_pb_message_message_pb.LoginUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RegisterUserRequest(arg) {
  if (!(arg instanceof src_pb_message_message_pb.RegisterUserRequest)) {
    throw new Error('Expected argument of type RegisterUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RegisterUserRequest(buffer_arg) {
  return src_pb_message_message_pb.RegisterUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserResponse(arg) {
  if (!(arg instanceof src_pb_message_message_pb.UserResponse)) {
    throw new Error('Expected argument of type UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserResponse(buffer_arg) {
  return src_pb_message_message_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/UserService/getUser',
    requestStream: false,
    responseStream: false,
    requestType: src_pb_message_message_pb.GetUserByIdRequest,
    responseType: src_pb_message_message_pb.UserResponse,
    requestSerialize: serialize_GetUserByIdRequest,
    requestDeserialize: deserialize_GetUserByIdRequest,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
  saveUser: {
    path: '/UserService/saveUser',
    requestStream: false,
    responseStream: false,
    requestType: src_pb_message_message_pb.RegisterUserRequest,
    responseType: src_pb_message_message_pb.UserResponse,
    requestSerialize: serialize_RegisterUserRequest,
    requestDeserialize: deserialize_RegisterUserRequest,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
  login: {
    path: '/UserService/login',
    requestStream: false,
    responseStream: false,
    requestType: src_pb_message_message_pb.LoginUserRequest,
    responseType: src_pb_message_message_pb.LoginResponse,
    requestSerialize: serialize_LoginUserRequest,
    requestDeserialize: deserialize_LoginUserRequest,
    responseSerialize: serialize_LoginResponse,
    responseDeserialize: deserialize_LoginResponse,
  },
  auth: {
    path: '/UserService/auth',
    requestStream: false,
    responseStream: false,
    requestType: src_pb_message_message_pb.AuthenticationRequest,
    responseType: src_pb_message_message_pb.UserResponse,
    requestSerialize: serialize_AuthenticationRequest,
    requestDeserialize: deserialize_AuthenticationRequest,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
