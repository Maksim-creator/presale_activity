import React from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {languageColors, shadowStyles} from '../../constants';
import {gray} from '../../../../assets/colors';
import styles from './styles';

interface Props {
  name: string;
  url: string;
  language?: string;
  stargazersCount: string;
  createdAt: string;
}

const RepoCard: React.FC<Props> = ({
  name,
  url,
  language,
  stargazersCount,
  createdAt,
}) => {
  const handleReposOpen = () => Linking.openURL(url);

  return (
    <TouchableOpacity
      accessibilityLabel={'repoCard' + name}
      testID={'repoCardButton'}
      onPress={handleReposOpen}
      style={styles.container}>
      <View style={styles.repoHeader}>
        <Text style={styles.repoName}>{name}</Text>
        <View style={styles.stars}>
          <Icon name={'star'} size={20} color={'black'} />
          <Text>{stargazersCount}</Text>
        </View>
      </View>
      <View style={styles.repoContent}>
        <Text>{new Date(createdAt).toLocaleDateString()}</Text>
        <View style={styles.language}>
          <View
            testID={'languageIndicator'}
            style={[
              styles.indicator,
              shadowStyles,
              {
                backgroundColor: language
                  ? languageColors[language.toLowerCase()]
                  : gray,
                shadowColor: language
                  ? languageColors[language.toLowerCase()]
                  : gray,
              },
            ]}
          />
          <Text>{language}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RepoCard;
