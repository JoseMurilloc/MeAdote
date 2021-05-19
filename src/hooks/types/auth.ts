export interface User {
  name: string;
  email: string;
  password?: string;
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
  isAuthenticated: boolean;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
  updatedAvatar(user: User): void;
}