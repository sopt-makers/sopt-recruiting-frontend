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

import {
  ChangePasswordCreateData,
  ChangePasswordCreateError,
  ChangePasswordCreatePayload,
  CheckUserCreateData,
  CheckUserCreateError,
  CheckUserCreatePayload,
  GetRecruitingAuthData,
  GetRecruitingAuthError,
  LoginCreateData,
  LoginCreateError,
  LoginCreatePayload,
  SignupCreateData,
  SignupCreateError,
  SignupCreatePayload,
  VerifyEmailCreateData,
  VerifyEmailCreateError,
  VerifyEmailCreatePayload,
  VerifySendCreateData,
  VerifySendCreatePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class RecruitingAuth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags default
   * @name VerifySendCreate
   * @summary 이메일 인증 코드 전송
   * @request POST:/recruiting-auth/verify/send
   * @response `200` `VerifySendCreateData` OK
   */
  verifySendCreate = (data: VerifySendCreatePayload, params: RequestParams = {}) =>
    this.request<VerifySendCreateData, any>({
      path: `/recruiting-auth/verify/send`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name VerifyEmailCreate
   * @summary 이메일 인증 코드 확인
   * @request POST:/recruiting-auth/verify/email
   * @response `200` `VerifyEmailCreateData` OK
   * @response `400` `object` Bad Request
   */
  verifyEmailCreate = (data: VerifyEmailCreatePayload, params: RequestParams = {}) =>
    this.request<VerifyEmailCreateData, VerifyEmailCreateError>({
      path: `/recruiting-auth/verify/email`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name SignupCreate
   * @summary 지원자 회원가입
   * @request POST:/recruiting-auth/signup
   * @secure
   * @response `200` `SignupCreateData` OK
   * @response `400` `object` Bad Request
   * @response `403` `object` Forbidden
   */
  signupCreate = (data: SignupCreatePayload, params: RequestParams = {}) =>
    this.request<SignupCreateData, SignupCreateError>({
      path: `/recruiting-auth/signup`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name CheckUserCreate
   * @summary 유저 확인 (비밀번호 변경)
   * @request POST:/recruiting-auth/check/user
   * @secure
   * @response `200` `CheckUserCreateData` OK
   * @response `400` `object` Bad Request
   */
  checkUserCreate = (data: CheckUserCreatePayload, params: RequestParams = {}) =>
    this.request<CheckUserCreateData, CheckUserCreateError>({
      path: `/recruiting-auth/check/user`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name ChangePasswordCreate
   * @summary 비밀번호 변경
   * @request POST:/recruiting-auth/change/password
   * @secure
   * @response `200` `ChangePasswordCreateData` OK
   * @response `403` `object` Forbidden
   */
  changePasswordCreate = (data: ChangePasswordCreatePayload, params: RequestParams = {}) =>
    this.request<ChangePasswordCreateData, ChangePasswordCreateError>({
      path: `/recruiting-auth/change/password`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name LoginCreate
   * @summary 로그인
   * @request POST:/recruiting-auth/login
   * @secure
   * @response `200` `LoginCreateData` OK
   * @response `403` `object` Forbidden
   */
  loginCreate = (data: LoginCreatePayload, params: RequestParams = {}) =>
    this.request<LoginCreateData, LoginCreateError>({
      path: `/recruiting-auth/login`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name GetRecruitingAuth
   * @summary 마이페이지
   * @request GET:/recruiting-auth/my
   * @secure
   * @response `200` `GetRecruitingAuthData` OK
   * @response `401` `object` Unauthorized
   */
  getRecruitingAuth = (params: RequestParams = {}) =>
    this.request<GetRecruitingAuthData, GetRecruitingAuthError>({
      path: `/recruiting-auth/my`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
