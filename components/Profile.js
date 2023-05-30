import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Button } from "react-native-paper";
import { Avatar, Divider } from "react-native-elements";
import { Rating } from "react-native-elements";
import PostService from "../Service/PostService";
import MainPost from "./postcards/MainPost";
import Carousel, { Pagination } from "react-native-snap-carousel";
import PostCarousel from "./postcards/PostCarousel";
import UserService from "../Service/UserService";

export default function Profile(props) {
  const [user, setUser] = useState(props.route.params.user);

  const [posts, setPosts] = useState();

  const [showRating, setShowRating] = useState(true);

  async function loadPosts() {
    return await PostService.userPostsGet(user.id);
  }

  async function setUserRating(e) {
    const currentID = await UserService.GetUser().then((res) => {
      return res;
    });
    if (user.id !== currentID) {
      await UserService.setRating(user.id, currentID, e).then((res) =>
        console.log(res)
      );
    }
  }

  async function checkSimilar() {
    setShowRating(
      user.id ===
        (await UserService.GetUser().then((res) => {
          return res;
        }))
        ? true
        : false
    );
  }

  const _renderItem = ({ item, index }) => {
    return (
      <PostCarousel navigation={props.route.params.navigation} post={item} />
    );
  };

  useEffect(() => {
    loadPosts().then((res) => {
      setPosts(res.data);
      checkSimilar();
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          backgroundColor: "rgba(108, 99, 254, 0.7)",
          borderBottomStartRadius: 50,
          borderBottomEndRadius: 50,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: 36,
            marginBottom: 10,
          }}
        >
          {user.name + " " + user.surname}
        </Text>
      </View>
      <View>
        <Button
          onPress={() => props.route.params.navigation.goBack()}
          mode="outlined"
          style={{
            width: 200,
            marginTop: 15,
            borderColor: "#6c63fe",
            alignSelf: "center",
          }}
        >
          <IconEntypo
            name="back"
            size={20}
            color="#6c63fe"
            style={{ margin: 5 }}
          />{" "}
          go back
        </Button>
      </View>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <View>
          <Avatar size={150} rounded source={{ uri: user.avatar }} />
        </View>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Rating
            onFinishRating={(e) => {
              setUserRating(e);
            }}
            readonly={showRating}
            imageSize={40}
            fractions={1}
            startingValue={user.rating}
          />
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              fontSize: 22,
              color: "#6c63fe",
            }}
          >
            Age: {new Date().getFullYear() - new Date(user.date).getFullYear()}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              fontSize: 22,
              color: "#6c63fe",
            }}
          >
            Gender: {user.gender === true ? "Male" : "Female"}
          </Text>
          {posts !== undefined && (
            <Text
              style={{
                alignSelf: "center",
                marginTop: 10,
                fontSize: 22,
                color: "#6c63fe",
              }}
            >
              Active posts: {posts.length}
            </Text>
          )}
        </View>
      </View>
      <Divider />
      {posts !== undefined && (
        <View style={{ marginTop: 20 }}>
          <Carousel
            layout={"stack"}
            layoutCardOffset={`30`}
            data={posts}
            renderItem={_renderItem}
            sliderWidth={415}
            itemWidth={250}
          />
        </View>
      )}
    </ScrollView>
  );
}
