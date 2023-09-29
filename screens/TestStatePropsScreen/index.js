import React from 'react';
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {UserProfile, UserList} from '../../components';
import styles from '../../styles';

const TestStatePropsScreen = props => {
  const [userList, setUserList] = useState([]);
  const [firstName, setFirstName] = useState(props.route.params?.firstName);
  const [lastName, setLastName] = useState(props.route.params?.lastName);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TextInput
          value={firstName}
          onChangeText={changedText => {
            setFirstName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <TextInput
          value={lastName}
          onChangeText={changedText => {
            setLastName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <TextInput
          value={cityName}
          onChangeText={changedText => {
            setCityName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <TextInput
          value={countryName}
          onChangeText={changedText => {
            setCountrtyName(changedText);
          }}
          style={{backgroundColor: 'grey', margin: 10, height: 40}}
        />
        <UserProfile
          firstName={firstName}
          lastName={lastName}
          cityName={cityName}
          countryName={countryName}
          childrenStyle={styles.userProfileStyle}
          onSubmitPressed={fetchedData => {
            setUserList([...userList, fetchedData]);
          }}
          onDeletePressed={() => {
            setUserList([]);
          }}>
          <Text>First Child Node</Text>
          <Text> Second Child Node</Text>
          <Text> Third Child Node</Text>

          <Image
            style={styles.imageStyle}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </UserProfile>

        {userList && userList.length > 0 && <UserList userData={userList} />}

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.push('testStateProps');
          }}>
          <Text>Navigate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.navigate('testFlex');
          }}>
          <Text>Navigate to Test flex</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Text>Navigate Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.navigate({
              name: 'testFlex',
              params: {a: 'b', c: 'd', e: 'f'},
              merge: true,
            });
          }}>
          <Text>send data back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TestStatePropsScreen;
