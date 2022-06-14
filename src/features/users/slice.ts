import {createSlice} from '@reduxjs/toolkit';
import {UsersState} from './entities';
import {
  getUserFollowersThunk,
  getUserReposThunk,
  getUsersThunk,
} from './thunks';

const initialState: UsersState = {
  users: [],
  userRepos: [],
  followers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsers: state => ({
      ...state,
      users: [],
    }),
    clearErrorMessage: state => ({
      ...state,
      usersErrorMessage: '',
    }),
    clearUserData: state => ({
      ...state,
      userRepos: [],
      followers: [],
    }),
  },
  extraReducers: builder => {
    builder.addCase(getUsersThunk.pending, state => ({
      ...state,
      usersLoading: true,
    }));
    builder.addCase(getUsersThunk.fulfilled, (state, action) => ({
      ...state,
      users: action.payload,
      usersLoading: false,
    }));
    builder.addCase(getUsersThunk.rejected, (state, action) => ({
      ...state,
      usersLoading: false,
      usersErrorMessage: action.payload?.message,
    }));
    builder.addCase(getUserReposThunk.pending, state => ({
      ...state,
      reposLoading: true,
    }));
    builder.addCase(getUserReposThunk.fulfilled, (state, action) => ({
      ...state,
      userRepos: action.payload,
      reposLoading: false,
    }));
    builder.addCase(getUserReposThunk.rejected, state => ({
      ...state,
      reposLoading: false,
    }));
    builder.addCase(getUserFollowersThunk.pending, state => ({
      ...state,
      followersLoading: true,
    }));
    builder.addCase(getUserFollowersThunk.fulfilled, (state, action) => ({
      ...state,
      followers: action.payload,
      followersLoading: false,
    }));
    builder.addCase(getUserFollowersThunk.rejected, state => ({
      ...state,
      followersLoading: false,
    }));
  },
});

export default usersSlice;
