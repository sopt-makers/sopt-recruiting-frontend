/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { SignUpEmailCreateData, SignUpEmailCreatePayload } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags default
   * @name SignUpEmailCreate
   * @summary Admin Signup
   * @request POST:/auth/sign-up/email
   * @response `200` `SignUpEmailCreateData` OK
   */
  signUpEmailCreate = (data: SignUpEmailCreatePayload, params: RequestParams = {}) =>
    this.request<SignUpEmailCreateData, any>({
      path: `/auth/sign-up/email`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
