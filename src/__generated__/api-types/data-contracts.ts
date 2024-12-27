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

/** @example {"email":"35th_makers_recruiting@sopt.org","password":"makers!35"} */
export type SignUpEmailCreatePayload = object;

export type SignUpEmailCreateData = object;

export type LatestListData = object;

/** @example {"email":"limchangi@naver.com","season":44,"group":"OB","isSignup":true} */
export type VerifySendCreatePayload = object;

export type VerifySendCreateData = object;

/** @example {"email":"limchangi@naver.com","code":"WJPQIX"} */
export type VerifyEmailCreatePayload = object;

export type VerifyEmailCreateData = object;

export type VerifyEmailCreateError = object;

/** @example {"email":"limchangi@naver.com","password":"1234","passwordCheck":"1234","name":"홍길동","phone":"010-1234-1234","season":6,"group":"OB"} */
export type SignupCreatePayload = object;

export type SignupCreateData = object;

export type SignupCreateError = object;

/** @example {"email":"limchangi@naver.com","name":"홍길동","season":1,"group":"OB"} */
export type CheckUserCreatePayload = object;

export type CheckUserCreateData = object;

export type CheckUserCreateError = object;

/** @example {"email":"limchangi@naver.com","season":35,"group":"OB","password":"1234","passwordCheck":"1234"} */
export type ChangePasswordCreatePayload = object;

export type ChangePasswordCreateData = object;

export type ChangePasswordCreateError = object;

/** @example {"email":"limchangi@naver.com","season":6,"group":"OB","password":"1234"} */
export type LoginCreatePayload = object;

export type LoginCreateData = object;

export type LoginCreateError = object;

export type ListListData = object;

export type StoreListData = object;

export type StoreListError = object;

export interface StoreCreatePayload {
  /** @format binary */
  picture?: File;
  /**
   * string
   * @example "서버"
   */
  part?: string;
  /**
   * string
   * @example "home1"
   */
  address?: string;
  /**
   * string
   * @example "2001.01.23"
   */
  birthday?: number;
  /**
   * string
   * @example "대학"
   */
  college?: string;
  /**
   * string
   * @example "male"
   */
  gender?: string;
  /**
   * string
   * @example "지인 추천"
   */
  knownPath?: string;
  /**
   * bool
   * @example "false"
   */
  leaveAbsence?: boolean;
  /**
   * string
   * @example "통계"
   */
  major?: string;
  /**
   * int
   * @example "0"
   */
  mostRecentSeason?: number;
  /**
   * int
   * @example "4"
   */
  univYear?: number;
  /**
   * string
   * @example "사당역"
   */
  nearestStation?: string;
  /**
   * json
   * @example "[
   *   {
   *     "recruitingQuestionId": 1,
   *     "answer": "5그릇"
   *   },
   *   {
   *     "recruitingQuestionId": 2,
   *     "answer": "4그릇"
   *   }
   * ]"
   */
  answers?: string;
  /**
   * bool
   * @example "false"
   */
  willAppjam?: boolean;
  /** @format binary */
  file_28?: File;
  /** @format binary */
  file_29?: File;
}

export type StoreCreateData = object;

export type StoreCreateError = object;

export interface RecruitingAnswerCreatePayload {
  /** @format binary */
  picture?: File;
  /**
   * string
   * @example "서버"
   */
  part?: string;
  /**
   * string
   * @example "home1"
   */
  address?: string;
  /**
   * string
   * @example "2001.01.23"
   */
  birthday?: number;
  /**
   * string
   * @example "대학"
   */
  college?: string;
  /**
   * string
   * @example "male"
   */
  gender?: string;
  /**
   * string
   * @example "지인 추천"
   */
  knownPath?: string;
  /**
   * bool
   * @example "false"
   */
  leaveAbsence?: boolean;
  /**
   * string
   * @example "통계"
   */
  major?: string;
  /**
   * string
   * @example "0"
   */
  mostRecentSeason?: number;
  /**
   * int
   * @example "4"
   */
  univYear?: number;
  /**
   * string
   * @example "사당역"
   */
  nearestStation?: string;
  /**
   * json
   * @example "[
   *   {
   *     "recruitingQuestionId": 1,
   *     "answer": "5그릇"
   *   },
   *   {
   *     "recruitingQuestionId": 2,
   *     "answer": "4그릇"
   *   }
   * ]"
   */
  answers?: string;
  /**
   * bool
   * @example "false"
   */
  willAppjam?: boolean;
  /** @example "1" */
  season?: number;
  /** @example "OB" */
  group?: string;
  pictureUrl?: string;
}

export type RecruitingAnswerCreateData = object;

export type RecruitingAnswerCreateError = object;

/** @example {"satisfaction":5} */
export type SatisfactionCreatePayload = object;

export type SatisfactionCreateData = object;

export type SatisfactionCreateError = object;

export type GetRecruitingAuthData = object;

export type GetRecruitingAuthError = object;

export type ResultApplicationListData = object;

export type ResultApplicationListError = object;

export type ResultFinalListData = object;

export type ResultFinalListError = object;
