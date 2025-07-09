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
  RecruitingAnswerCreateData,
  RecruitingAnswerCreateError,
  RecruitingAnswerCreatePayload,
  StoreCreateData,
  StoreCreateError,
  StoreCreatePayload,
  StoreListData,
  StoreListError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class RecruitingAnswer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags default
   * @name StoreList
   * @summary 임시저장 지원서 조회
   * @request GET:/recruiting-answer/store
   * @secure
   * @response `200` `StoreListData` OK
   * @response `401` `object` Unauthorized
   */
  storeList = (params: RequestParams = {}) =>
    this.request<StoreListData, StoreListError>({
      path: `/recruiting-answer/store`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags default
   * @name StoreCreate
   * @summary 지원서 임시저장
   * @request POST:/recruiting-answer/store
   * @secure
   * @response `200` `StoreCreateData` OK
   * @response `401` `object` Unauthorized
   */
  storeCreate = (data: StoreCreatePayload, params: RequestParams = {}) =>
    this.request<StoreCreateData, StoreCreateError>({
      path: `/recruiting-answer/store`,
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
   * @name RecruitingAnswerCreate
   * @summary 지원서 제출
   * @request POST:/recruiting-answer
   * @secure
   * @response `200` `RecruitingAnswerCreateData` OK
   * @response `400` `object` Bad Request
   */
  recruitingAnswerCreate = (data: RecruitingAnswerCreatePayload, params: RequestParams = {}) =>
    this.request<RecruitingAnswerCreateData, RecruitingAnswerCreateError>({
      path: `/recruiting-answer`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
