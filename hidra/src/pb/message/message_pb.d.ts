// package: 
// file: src/pb/message/message.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;

    getEmail(): string;
    setEmail(value: string): User;

    getUsername(): string;
    setUsername(value: string): User;

    getPassword(): string;
    setPassword(value: string): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        email: string,
        username: string,
        password: string,
    }
}

export class GetUserByIdRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetUserByIdRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserByIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserByIdRequest): GetUserByIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserByIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserByIdRequest;
    static deserializeBinaryFromReader(message: GetUserByIdRequest, reader: jspb.BinaryReader): GetUserByIdRequest;
}

export namespace GetUserByIdRequest {
    export type AsObject = {
        id: string,
    }
}

export class RegisterUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): RegisterUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
    static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class RegisterUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): RegisterUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
    static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class LoginUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): LoginUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
    static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class LoginResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LoginResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        token: string,
    }
}

export class UserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserResponse;

    getError(): string;
    setError(value: string): UserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        user?: User.AsObject,
        error: string,
    }
}

export class AuthenticationRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AuthenticationRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticationRequest): AuthenticationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticationRequest;
    static deserializeBinaryFromReader(message: AuthenticationRequest, reader: jspb.BinaryReader): AuthenticationRequest;
}

export namespace AuthenticationRequest {
    export type AsObject = {
        token: string,
    }
}
