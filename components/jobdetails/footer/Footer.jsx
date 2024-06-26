import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../../constants";
import styles from "./footer.style";
const Footer = ({ url, onLike, isLiked }) => {


  const handleLikeButtonPress = () => {
    onLike();
    // Add any other code you want to execute when the like button is clicked
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={handleLikeButtonPress} >
        <Image
          source={isLiked ? icons.heart : icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
