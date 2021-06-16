export interface User {
  name: string;
  email: string;
  password?: string;
}
export const KEY_TOKEN = '@meadote.token'

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

  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}