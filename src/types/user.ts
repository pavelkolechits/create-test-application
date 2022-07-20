export interface IUser {
    user: {
      uid: string;
      userName: string;
      photo: string;
      email: string;
    } | null;
  }