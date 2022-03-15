import { Button, Alert } from 'react-native';
const MyButton = () => {
  return (
    <Button
      style={{}}
      title="this is my test"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  );
};
export default MyButton;
