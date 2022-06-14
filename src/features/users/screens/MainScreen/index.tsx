import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../../../../components/SearchBar';
import {getUsersThunk} from '../../thunks';
import {AppDispatch, RootState} from '../../../../store';
import UsersList from '../../components/UsersList';
import {UsersState} from '../../entities';
import {gray} from '../../../../assets/colors';
import {actions} from '../../index';
import MenuButton from '../../../../components/MenuButton';
import {rowsPerPageData} from '../../constants';
import Pagination from '../../../../components/Pagination';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [textValue, setTextValue] = useState('');
  const timeout = useRef<ReturnType<typeof setInterval>>();
  const {users, usersLoading, usersErrorMessage} = useSelector<
    RootState,
    UsersState
  >(state => state.users);

  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const clearInput = () => {
    setTextValue('');
    setCurrentPage(1);
  };

  const handleChange = (value: number) => {
    setRowsPerPage(value);
    setIsValuesVisible(false);
  };

  const goNext = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const goPrevious = () => {
    setCurrentPage(prevState => prevState - 1);
  };

  useEffect(() => {
    clearTimeout(timeout.current);
    if (!textValue.length) {
      dispatch(actions.clearUsers());
    }
    timeout.current = setTimeout(() => {
      if (textValue.length) {
        setCurrentPage(1);
        dispatch(
          getUsersThunk({username: textValue, rowsPerPage, page: currentPage}),
        );
      }

      if (usersErrorMessage) {
        dispatch(actions.clearErrorMessage());
        dispatch(actions.clearUsers());
        setTextValue('');
      }
    }, 2000);
  }, [dispatch, textValue, rowsPerPage]);

  useEffect(() => {
    if (textValue.length) {
      dispatch(
        getUsersThunk({username: textValue, rowsPerPage, page: currentPage}),
      );
    }
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={textValue}
        onChangeText={setTextValue}
        clearInput={clearInput}
      />
      <MenuButton
        data={rowsPerPageData}
        value={rowsPerPage}
        isVisible={isValuesVisible}
        setIsVisible={setIsValuesVisible}
        handleChange={handleChange}
      />
      {usersLoading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={gray}
        />
      ) : (
        <>
          {usersErrorMessage ? (
            <Text>{usersErrorMessage}</Text>
          ) : (
            <UsersList users={users} />
          )}
        </>
      )}
      <Pagination
        data={users}
        goNext={goNext}
        goPrevious={goPrevious}
        page={currentPage}
        rowsPerPage={rowsPerPage}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
