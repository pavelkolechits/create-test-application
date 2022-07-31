export interface IUser {
    user: {
      userName: string;
      photo: string;
      email: string;
      uid: string
    } | null;
  }