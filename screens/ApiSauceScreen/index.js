import {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {create} from 'apisauce';

const ApiSauceScreen = () => {
  const [data, setData] = useState([]);

  const apiSauceClient = create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  apiSauceClient.get('/todos').then(response => {
    if (!response.ok) {
      console.log(response.problem);
    } else {
      setData(response.data);
    }
  });

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 10, backgroundColor: '#E871BE'}}>
              <Text style={{color: 'white'}}>{item.title}</Text>
              <Text style={{color: 'white'}}>{item.id}</Text>
              <Text style={{color: 'white'}}>{item.userId}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ApiSauceScreen;
