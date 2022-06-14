import {createAsyncThunk} from '@reduxjs/toolkit';
import apiUsers from '../../api/users/api.users';
import {Follower, GetDataPayload, KnownError, Repo, User} from './entities';

export const getUsersThunk = createAsyncThunk<
  User[],
  GetDataPayload,
  {rejectValue: KnownError}
>(
  'users/getUsers',
  async ({username, rowsPerPage, page}, {rejectWithValue}) => {
    try {
      const {
        data: {items},
      } = await apiUsers.getUsers(username, rowsPerPage, page);

      return items;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e as KnownError);
    }
  },
);

export const getUserReposThunk = createAsyncThunk<
  Repo[],
  GetDataPayload,
  {rejectValue: KnownError}
>(
  'users/getUserRepos',
  async ({username, rowsPerPage, page}, {rejectWithValue}) => {
    try {
      const {data} = await apiUsers.getUserRepos(username, rowsPerPage, page);

      return data;
    } catch (e) {
      return rejectWithValue(e as KnownError);
    }
  },
);

export const getUserFollowersThunk = createAsyncThunk<
  Follower[],
  GetDataPayload,
  {rejectValue: KnownError}
>(
  'users/getUserFollowers',
  async ({username, rowsPerPage, page}, {rejectWithValue}) => {
    try {
      const {data} = await apiUsers.getUserFollowers(
        username,
        rowsPerPage,
        page,
      );
      return data;
    } catch (e) {
      return rejectWithValue(e as KnownError);
    }
  },
);
