import {GET} from '../../../config/apiConfig';

export default {
  getUsers: (username: string, rowsPerPage: number, page: number) =>
    GET(`/search/users?q=${username}&per_page=${rowsPerPage}&page=${page}`),
  getUserRepos: (username: string, rowsPerPage: number, page: number) =>
    GET(`/users/${username}/repos?q=lib&per_page=${rowsPerPage}&page=${page}`),
  getUserFollowers: (username: string, rowsPerPage: number, page: number) =>
    GET(
      `/users/${username}/followers?q=lib&per_page=${rowsPerPage}&page=${page}`,
    ),
};
