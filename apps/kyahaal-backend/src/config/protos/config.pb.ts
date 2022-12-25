/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "config";

export enum FormValidatorType {
  NONE = "NONE",
  REGEX = "REGEX",
}

export interface Request {
}

export interface Response {
  form: AuthenticationForm | undefined;
}

export interface AuthenticationForm {
  login: AuthenticationFormData | undefined;
  signup: AuthenticationFormData | undefined;
}

export interface AuthenticationFormData {
  title: string;
  subtitle?: string | undefined;
  subtitleCTAText?: string | undefined;
  subtitleCTATLink?: string | undefined;
  primaryCTAText?: string | undefined;
  secondaryCTAText?: string | undefined;
  fields: AuthenticationField[];
  formSubmissionMeta: FormSubmissionMeta | undefined;
}

export interface AuthenticationField {
  inputType: string;
  label?: string | undefined;
  autofocus?: boolean | undefined;
  bottomGutter?: boolean | undefined;
  validator: FormValidator | undefined;
  identifier: string;
}

export interface FormValidator {
  validatorType: FormValidatorType;
  regExp: RegexValidator[];
}

export interface RegexValidator {
  regExp: string;
  error: string;
}

export interface FormSubmissionMeta {
  url: string;
  method: FormSubmissionMeta_Method;
  key?: string | undefined;
}

export enum FormSubmissionMeta_Method {
  POST = "POST",
  PATCH = "PATCH",
}

export const CONFIG_PACKAGE_NAME = "config";

export interface ConfigClient {
  getMobileAppConfig(request: Request): Observable<Response>;
}

export interface ConfigController {
  getMobileAppConfig(request: Request): Promise<Response> | Observable<Response> | Response;
}

export function ConfigControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getMobileAppConfig"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("Config", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("Config", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CONFIG_SERVICE_NAME = "Config";
