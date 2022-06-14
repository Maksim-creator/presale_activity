export interface GetDataPayload {
  username: string;
  rowsPerPage: number;
  page: number;
}

export interface KnownError {
  message: string;
}

export interface User {
  login: string;
  id: number;
  avatarUrl: string;
  url: string;
  followersUrl: string;
}

export interface Repo {
  createdAt: string;
  name: string;
  language: string;
  stargazersCount: string;
  url: string;
}

export interface Follower {
  login: string;
}

export interface UsersState {
  users: User[];
  userRepos: Repo[];
  followers: Follower[];
  usersLoading?: boolean;
  reposLoading?: boolean;
  followersLoading?: boolean;
  usersErrorMessage?: string;
}
