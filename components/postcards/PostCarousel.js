import { useState } from "react";
import { View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Avatar } from "react-native-elements";
import { Rating } from "react-native-elements";
import { Divider } from "react-native-paper";

export default function PostCarousel(props) {
  const [activeSlide, setActiveSlide] = useState();

  const _renderItem = ({ item, index }) => {
    return (
      <Image
        style={{
          width: "100%",
          height: 200,
          borderRadius: 20,
        }}
        source={{ uri: item }}
      />
    );
  };

  return (
    <Card
      onLongPress={() =>
        props.navigation.navigate("PostInfo", {
          navigation: props.navigation,
          post: props.post,
          pageGo: "profile",
        })
      }
      style={{ width: 350, margin: 10, alignSelf: "center" }}
    >
      <View
        style={{
          backgroundColor: "rgba(108, 99, 254, 0.7)",
          marginTop: 5,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ alignSelf: "center", color: "white", fontSize: 24 }}>
          {props.post.header}
        </Text>
      </View>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <View>
          <Avatar size={60} rounded source={{ uri: props.post.user.avatar }} />
        </View>
        <View style={{ marginTop: 15, marginLeft: 20 }}>
          <Rating
            imageSize={20}
            readonly
            fractions={1}
            startingValue={props.post.user.rating}
          />
          <Text style={{ alignSelf: "center", fontSize: 22, maxWidth: 250 }}>
            {props.post.user.name + " " + props.post.user.surname}
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            fontSize: 18,
          }}
        >
          {props.post.description}
        </Text>
      </View>
      {props.post.money !== null && (
        <View>
          <View style={{ width: 300, borderRadius: 15, flexDirection: "row" }}>
            <Text
              style={{
                alignSelf: "center",
                color: "#6c63fe",
                fontSize: 24,
                marginBottom: 5,
                marginLeft: 20,
              }}
            >
              Money needed:{" "}
            </Text>
            <Text
              style={{
                color: "#6c63fe",
                fontSize: 24,
                marginBottom: 5,
                maxWidth: 150,
              }}
            >
              {props.post.money}
            </Text>
          </View>
        </View>
      )}
      <Divider style={{ height: 1.5 }} />
      <View style={{ margin: 10, flexDirection: "row" }}>
        <View
          style={{
            width: 100,
            height: 40,
            backgroundColor: "rgba(108, 99, 254, 0.7)",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "white",
              fontSize: 24,
              marginBottom: 5,
            }}
          >
            Tags
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ maxWidth: 220, marginTop: 5, marginLeft: 10 }}>
            {props.post.tags.map((item, index) => (
              <Text style={{ fontSize: 18, color: "#6c63fe" }}>
                {"#" + item + "    "}
              </Text>
            ))}
          </Text>
        </View>
      </View>
    </Card>
  );
}
