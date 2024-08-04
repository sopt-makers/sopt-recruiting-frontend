export interface PostSatisfactionRequest {
  satisfaction: number;
}

export interface PostSatisfactionResponse {
  err: boolean;
  userMessage: string;
}
