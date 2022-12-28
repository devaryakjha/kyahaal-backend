/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface GetALlUsersRequest {
}

export interface GetALlUsersResponse {
  users: UserResponse[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user?: UserResponse | undefined;
  accessToken: string;
  status: number;
  error: string[];
}

export interface RegistrationRequest {
  email: string;
  username: string;
  password: string;
}

export interface RegistrationResponse {
  user?: UserResponse | undefined;
  accessToken: string;
  status: number;
  error: string[];
}

export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  user?: UserResponse | undefined;
}

/** User */
export interface UserResponse {
  userId: number;
  username: string;
  email: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthenticationClient {
  register(request: RegistrationRequest): Observable<RegistrationResponse>;

  login(request: LoginRequest): Observable<LoginResponse>;

  validate(request: ValidateRequest): Observable<ValidateResponse>;

  getAll(request: GetALlUsersRequest): Observable<GetALlUsersResponse>;
}

export interface AuthenticationController {
  register(
    request: RegistrationRequest,
  ): Promise<RegistrationResponse> | Observable<RegistrationResponse> | RegistrationResponse;

  login(request: LoginRequest): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  validate(request: ValidateRequest): Promise<ValidateResponse> | Observable<ValidateResponse> | ValidateResponse;

  getAll(
    request: GetALlUsersRequest,
  ): Promise<GetALlUsersResponse> | Observable<GetALlUsersResponse> | GetALlUsersResponse;
}

export function AuthenticationControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["register", "login", "validate", "getAll"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("Authentication", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("Authentication", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTHENTICATION_SERVICE_NAME = "Authentication";
