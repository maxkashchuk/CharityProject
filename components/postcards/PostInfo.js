import { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { Rating } from "react-native-elements";
import Carousel, { Pagination } from "react-native-snap-carousel";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Button } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

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

export default function PostInfo(props) {
  const [post, setPost] = useState(props.route.params.post);

  const [activeSlide, setActiveSlide] = useState();

  const mapRef = useRef();

  function goToLocation() {
    mapRef.current.animateToRegion(
      {
        latitude: post.lattitude,
        longitude: post.longtitude,
        longitudeDelta: 0.005,
        latitudeDelta: 0.005,
      },
      2000
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <View
        style={{
          backgroundColor: "rgba(108, 99, 254, 0.7)",
          borderBottomStartRadius: 50,
          borderBottomEndRadius: 50,
        }}
      >
        <Text style={{ alignSelf: "center", color: "white", fontSize: 36 }}>
          {post.header}
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
      <TouchableOpacity
        onPress={() =>
          props.route.params.navigation.navigate("Profile", {
            navigation: props.navigation,
            user: post.user,
          })
        }
        style={{
          margin: 10,
          marginTop: 25,
          flexDirection: "row",
          alignSelf: "center",
          borderColor: "#6c63fe",
          borderWidth: 0.5,
          padding: 5,
          borderRadius: 20,
        }}
      >
        <View>
          <Avatar size={60} rounded source={{ uri: post.user.avatar }} />
        </View>
        <View style={{ marginTop: 15, marginLeft: 20 }}>
          <Rating
            imageSize={20}
            readonly
            fractions={1}
            startingValue={post.user.rating}
          />
          <Text style={{ alignSelf: "center", fontSize: 22, maxWidth: 250 }}>
            {post.user.name + " " + post.user.surname}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 18 }}>{post.description}</Text>
      </View>
      {post.money !== null && (
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
              {post.money}
            </Text>
          </View>
        </View>
      )}
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
          <Text style={{ maxWidth: 220, marginLeft: 10 }}>
            {post.tags.map((item, index) => (
              <Text key={index} style={{ fontSize: 18, color: "#6c63fe" }}>
                {"#" + item + "    "}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Carousel
          data={post.images}
          renderItem={_renderItem}
          sliderWidth={415}
          itemWidth={250}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={post.images.length}
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
      </View>
      {post.lattitude !== null && (
        <View
          style={{
            height: 250,
            width: 380,
            borderWidth: 1,
            marginBottom: 20,
            marginLeft: 15,
            borderColor: "#6c63fe",
          }}
        >
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            style={{ width: "100%", height: "100%" }}
            initialRegion={{
              latitude: post.lattitude,
              longitude: post.longtitude,
              longitudeDelta: 0.005,
              latitudeDelta: 0.005,
            }}
          >
            <Marker
              title={post.header}
              description={post.description}
              coordinate={{
                latitude: post.lattitude,
                longitude: post.longtitude,
                longitudeDelta: 0.0922,
                latitudeDelta: 0.0421,
              }}
            >
              <IconMaterial
                name="record-circle-outline"
                size={30}
                color="red"
              />
            </Marker>
          </MapView>
        </View>
      )}
      {post.lattitude !== null && (
        <View style={{ marginBottom: 10 }}>
          <Button
            mode="outlined"
            onPress={() => {
              goToLocation();
            }}
            style={{
              width: 300,
              alignSelf: "center",
              borderColor: "#6c63fe",
              borderWidth: 1,
            }}
          >
            <IconEntypo
              name="location"
              size={20}
              color="#6c63fe"
              style={{ margin: 5 }}
            />{" "}
            Go to location
          </Button>
        </View>
      )}
    </ScrollView>
  );
}
