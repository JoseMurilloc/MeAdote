export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  token: string;
  user: User;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
  updatedAvatar(user: User): void;
}