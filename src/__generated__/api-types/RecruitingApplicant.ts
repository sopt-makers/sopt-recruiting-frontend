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
  ResultApplicationListData,
  ResultApplicationListError,
  ResultFinalListData,
  ResultFinalListError,
  SatisfactionCreateData,
  SatisfactionCreateError,
  SatisfactionCreatePayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class RecruitingApplicant<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags default
   * @name SatisfactionCreate
   * @summary 만족도 점수
   * @request POST:/recruiting-applicant/satisfaction
   * @secure
   * @response `200` `SatisfactionCreateData` OK
   * @response `401` `object` Unauthorized
   */
  satisfactionCreate = (data: SatisfactionCreatePayload, params: RequestParams = {}) =>
    this.request<SatisfactionCreateData, SatisfactionCreateError>({
      path: `/recruiting-applicant/satisfaction`,
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
   * @name ResultApplicationList
   * @summary 마이페이지 서류 합격 확인
   * @request GET:/recruiting-applicant/result/application
   * @secure
   * @response `200` `ResultApplicationListData` OK
   * @response `401` `object` Unauthorized
   */
  resultApplicationList = (params: RequestParams = {}) =>
    this.request<ResultApplicationListData, ResultApplicationListError>({
      path: `/recruiting-applicant/result/application`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name ResultFinalList
   * @summary 마이페이지 최종 합격 확인
   * @request GET:/recruiting-applicant/result/final
   * @secure
   * @response `200` `ResultFinalListData` OK
   * @response `401` `object` Unauthorized
   */
  resultFinalList = (params: RequestParams = {}) =>
    this.request<ResultFinalListData, ResultFinalListError>({
      path: `/recruiting-applicant/result/final`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
