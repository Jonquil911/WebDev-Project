export interface Course {
  id: number;
  name: string;
}

export interface File {
  id: number;
  name: string;
}

export interface Link {
  id: number;
  name: string;
}

export interface Note {
  id: number;
  name: string;
}

export class LoginResponse {
  token: string;
}
