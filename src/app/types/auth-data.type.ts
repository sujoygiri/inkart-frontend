export interface LoginData {
  email: string;
  password: string;
}

export interface ServerAuthResponse {
  status: string;
  message: string;
  userName: string;
}
