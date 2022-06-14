import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getUserFollowersThunk, getUserReposThunk} from '../../thunks';
import {AppDispatch, RootState} from '../../../../store';
import {UsersState} from '../../entities';
import {gray} from '../../../../assets/colors';
import RepoList from '../../components/RepoList';
import FollowersList from '../../components/FollowersList';
import {rowsPerPageData, shadowStyles} from '../../constants';
import MenuButton from '../../../../components/MenuButton';
import Pagination from '../../../../components/Pagination';
import styles from './styles';

type Username = {
  UserDetails: {
    username: string;
  };
};

const UserDetails = () => {
  const {
    params: {username},
  } = useRoute<RouteProp<Username, 'UserDetails'>>();
  const dispatch = useDispatch<AppDispatch>();

  const {reposLoading, followersLoading, userRepos, followers} = useSelector<
    RootState,
    UsersState
  >(state => state.users);

  const [isFollowersListOpen, setIsFollowersListOpen] = useState(false);
  const [isReposListOpen, setIsReposListOpen] = useState(false);
  const [isValuesOpen, setIsValuesOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const handleVisibilityChange = (listType: string) => () => {
    if (listType === 'repos') {
      setIsReposListOpen(prevState => !prevState);
    } else {
      setIsFollowersListOpen(prevState => !prevState);
    }
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setIsValuesOpen(false);
  };

  useEffect(() => {
    setCurrentPage(1);
    if (username) {
      dispatch(getUserReposThunk({username, rowsPerPage, page: currentPage}));
      dispatch(
        getUserFollowersThunk({username, rowsPerPage, page: currentPage}),
      );
    }
  }, [dispatch, username, rowsPerPage]);

  useEffect(() => {
    if (rowsPerPage === followers.length) {
      dispatch(
        getUserFollowersThunk({username, rowsPerPage, page: currentPage}),
      );
    }

    if (rowsPerPage === userRepos.length) {
      dispatch(getUserReposThunk({username, rowsPerPage, page: currentPage}));
    }
  }, [currentPage]);

  const data = useMemo(
    () => Math.max(userRepos.length, followers.length),
    [userRepos, followers],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View testID={'userDetails'} style={styles.container}>
          <MenuButton
            data={rowsPerPageData}
            isVisible={isValuesOpen}
            setIsVisible={setIsValuesOpen}
            value={rowsPerPage}
            handleChange={handleRowsPerPageChange}
          />
          {reposLoading ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              size={'large'}
              color={gray}
            />
          ) : (
            <View style={styles.content}>
              <View style={styles.titleWrapper}>
                <Text style={styles.reposTitle}>
                  Followers: {followers.length}
                </Text>
                <TouchableOpacity
                  style={[styles.button, shadowStyles]}
                  onPress={handleVisibilityChange('followers')}>
                  <Icon
                    name={isFollowersListOpen ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
              {isFollowersListOpen && <FollowersList followers={followers} />}
            </View>
          )}
          {followersLoading ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              size={'large'}
              color={gray}
            />
          ) : (
            <View style={styles.content}>
              <View style={styles.titleWrapper}>
                <Text style={styles.reposTitle}>
                  Repositories: {userRepos.length}
                </Text>
                <TouchableOpacity
                  style={[styles.button, shadowStyles]}
                  onPress={handleVisibilityChange('repos')}>
                  <Icon
                    name={isReposListOpen ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
              {isReposListOpen && <RepoList userRepos={userRepos} />}
            </View>
          )}
        </View>
      </ScrollView>
      <Pagination
        page={currentPage}
        data={new Array(data)}
        goNext={() => setCurrentPage(prevState => prevState + 1)}
        goPrevious={() => setCurrentPage(prevState => prevState - 1)}
        rowsPerPage={rowsPerPage}
      />
    </SafeAreaView>
  );
};

export default UserDetails;
