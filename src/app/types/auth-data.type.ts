export interface RegisterData {
  name: string;
  email: string;
  password: string
}
export interface LoginData {
  email: string;
  password: string;
}

export interface LogoutResponse{
  success:number;
  msg:string;
}

export interface ServerAuthResponse {
  status: string;
  message: string;
  userName: string;
  profile_pic: string;
}
