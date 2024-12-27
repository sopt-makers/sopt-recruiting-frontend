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

import { ListListData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class RecruitingQuestion<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags default
   * @name ListList
   * @summary 질문 리스트 조회 (From Admin)
   * @request GET:/recruiting-question/list
   * @response `200` `ListListData` OK
   */
  listList = (
    query?: {
      /** @example "52" */
      season?: number;
      /** @example "OB" */
      group?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ListListData, any>({
      path: `/recruiting-question/list`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
}
