export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}


export interface AuthContextType {
    isAuthentificated: boolean;
    login: () => void;
    logout: () => void;
    clear: () => void;
  }
  