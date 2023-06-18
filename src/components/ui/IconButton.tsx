import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconButtonProps = {
  iconName: string;
  size: number;
  color: string;
  onPress: () => any;
};

const IconButton = ({iconName, size, color, onPress}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => {
        return pressed && styles.pressed;
      }}>
      <View style={styles.buttonContainer}>
        <Icon name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
