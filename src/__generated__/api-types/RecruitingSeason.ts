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

import { LatestListData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class RecruitingSeason<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags default
   * @name LatestList
   * @summary 최신 기수 정보 조회 (From Admin)
   * @request GET:/recruiting-season/latest
   * @response `200` `LatestListData` OK
   */
  latestList = (params: RequestParams = {}) =>
    this.request<LatestListData, any>({
      path: `/recruiting-season/latest`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
