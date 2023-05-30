import * as React from "react";
import { useState, useRef } from "react";
import { View, Dimensions, Image, Button, ScrollView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Card, Text } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { Rating } from "react-native-elements";
import { Divider } from "react-native-paper";

export default function MainPost(props) {
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

  const posts =
    props.postsData === undefined
      ? null
      : props.postsData.map((item, index) => (
          <Card
            onLongPress={() =>
              props.navigation.navigate("PostInfo", {
                navigation: props.navigation,
                post: item,
              })
            }
            key={item.id}
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
              <Text
                style={{ alignSelf: "center", color: "white", fontSize: 24 }}
              >
                {item.header}
              </Text>
            </View>
            {item.images !== null && (
              <View style={{ marginTop: 10 }}>
                <Carousel
                  data={item.images}
                  renderItem={_renderItem}
                  sliderWidth={350}
                  itemWidth={250}
                  onSnapToItem={(index) => setActiveSlide(index)}
                />
              </View>
            )}
            <Pagination
              dotsLength={item.images.length}
              activeDotIndex={activeSlide}
              containerStyle={{
                alignSelf: "center",
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 2,
                backgroundColor: "rgba(	108, 99, 254, 0.92)",
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
            <View style={{ margin: 10, flexDirection: "row" }}>
              <View>
                <Avatar size={60} rounded source={{ uri: item.user.avatar }} />
              </View>
              <View style={{ marginTop: 15, marginLeft: 20 }}>
                <Rating
                  imageSize={20}
                  readonly
                  fractions={1}
                  startingValue={item.user.rating}
                />
                <Text
                  style={{ alignSelf: "center", fontSize: 22, maxWidth: 250 }}
                >
                  {item.user.name + " " + item.user.surname}
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
                {item.description}
              </Text>
            </View>
            {item.money !== null && (
              <View>
                <View
                  style={{ width: 300, borderRadius: 15, flexDirection: "row" }}
                >
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
                    {item.money}
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
                  {item.tags.map((item, index) => (
                    <Text style={{ fontSize: 18, color: "#6c63fe" }}>
                      {"#" + item + "    "}
                    </Text>
                  ))}
                </Text>
              </View>
            </View>
          </Card>
        ));

  return <View>{posts}</View>;
}
