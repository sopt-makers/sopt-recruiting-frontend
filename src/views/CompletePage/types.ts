export interface postSatisfactionRequest {
  satisfaction: number;
}

export interface postSatisfactionResponse {
  err: boolean;
  userMessage: string;
}
