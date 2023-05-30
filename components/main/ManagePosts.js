import { useState, useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import UserService from "../../Service/UserService";
import PostService from "../../Service/PostService";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import PostCarousel from "../postcards/PostCarousel";
import { Button } from "react-native-paper";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function ManagePosts(props) {
  const [posts, setPosts] = useState();

  const [activeSlide, setActiveSlide] = useState(0);

  let refCarousel = useRef();

  async function loadPosts() {
    return await PostService.userPostsGet(
      await UserService.GetUser().then((res) => {
        return res;
      })
    );
  }

  const _renderItem = ({ item, index }) => {
    return <PostCarousel navigation={props.navigation} post={item} />;
  };

  async function postDelete() {
    await PostService.postDelete(posts[activeSlide].id).then((res) => {
      refCarousel.snapToItem(0);
      setPosts(posts.reverse().splice(activeSlide, 1));
    });
  }

  function postModifyGo() {
    props.navigation.navigate("PostUpdate", {
      navigation: props.navigation,
      id: posts[activeSlide].id,
    });
  }

  useEffect(() => {
    loadPosts().then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "#6c63fe",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 32,
            margin: 10,
            color: "white",
          }}
        >
          Manage posts
        </Text>
      </View>
      {posts !== undefined && (
        <View>
          <View style={{ marginTop: 20 }}>
            <Carousel
              ref={(ref) => (refCarousel = ref)}
              layout={"stack"}
              layoutCardOffset={`30`}
              data={posts}
              renderItem={_renderItem}
              sliderWidth={415}
              itemWidth={250}
              onSnapToItem={(index) => {
                setActiveSlide(index);
              }}
            />
          </View>
          <View>
            <Text
              style={{ color: "#6c63fe", fontSize: 24, alignSelf: "center" }}
            >
              Active posts: {posts.length}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Button
              mode="outlined"
              onPress={() => {
                postDelete();
              }}
              style={{
                borderColor: "#6c63fe",
                margin: 10,
                padding: 5,
                borderRadius: 50,
              }}
            >
              <IconMaterial name="delete-sweep" size={80} color="#6c63fe" />
            </Button>
            <Button
              mode="outlined"
              onPress={() => {
                postModifyGo();
              }}
              style={{
                borderColor: "#6c63fe",
                margin: 10,
                padding: 5,
                borderRadius: 50,
              }}
            >
              <IconFontAwesome name="pencil" size={80} color="#6c63fe" />
            </Button>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
