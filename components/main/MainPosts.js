import { useState, useCallback, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, SearchBar } from "react-native-elements";
import IconS from "react-native-vector-icons/MaterialCommunityIcons";
import IconC from "react-native-vector-icons/MaterialIcons";
import IconO from "react-native-vector-icons/Ionicons";
import IconU from "react-native-vector-icons/FontAwesome";
import IconR from "react-native-vector-icons/AntDesign";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import { Banner, Chip } from "react-native-paper";
import MapView, { PROVIDER_GOOGLE, Circle } from "react-native-maps";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import PostService from "../../Service/PostService";
import MainPost from "../postcards/MainPost";
import UserService from "../../Service/UserService";
import { ActivityIndicator } from 'react-native-paper';

export default function MainPosts(props) {
  const [search, setSearch] = useState();

  const [visible, setVisible] = useState(false);

  const [select, setSelect] = useState("All");

  const [coordinate, setCoordinate] = useState(null);

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const [range, setRange] = useState(100);

  const [fromValue, setFromValue] = useState(0);

  const [toValue, setToValue] = useState(0);

  const [postsData, setPostsData] = useState();

  const [showCircle, setShowCircle] = useState(true);

  const [postNumber, setPostNumber] = useState();

  useEffect(() => {
    searchPosts();
  }, []);

  async function logOut() {
    await UserService.RemoveUser().then(() => {
      props.navigation.replace("SignIn");
    });
  }

  async function searchPosts() {
    setPostNumber(undefined);
    setShowCircle(true);
    setPostsData(undefined);
    let searchData = {
      header: "string",
      description: "string",
      latitude: 0,
      longitude: 0,
      distance: 0,
      ratingStart: 0,
      ratingEnd: 0,
      tag: null,
      name: null,
      surname: null
    };
    switch (select) {
      case "Header":
        searchData.header = search;
        await PostService.searchHeader(searchData).then((res) =>{setShowCircle(false);
          setPostNumber(res.data.length);
          setPostsData(res.data)}
        );
        break;
      case "Description":
        searchData.description = search;
        await PostService.searchDescritpion(searchData).then((res) =>{setShowCircle(false);
          setPostNumber(res.data.length);
          setPostsData(res.data)}
        );
        break;
      case "Coordinates":
        if (coordinate !== null) {
          searchData.latitude = coordinate.latitude;
          searchData.longitude = coordinate.longitude;
          searchData.distance = range;
          await PostService.searchCoordinates(searchData).then((res) =>{setShowCircle(false);
            setPostNumber(res.data.length);
            setPostsData(res.data)}
          ).catch(() => {setShowCircle(false);
          setPostNumber(0);});
        }
        break;
      case "Rating":
        searchData.ratingStart = fromValue;
        searchData.ratingEnd = toValue;
        await PostService.searchRating(searchData).then((res) =>{setShowCircle(false);
          setPostNumber(res.data.length);
          setPostsData(res.data)}
        );
        break;
      case "All":
        await PostService.searchPosts(searchData).then((res) =>{setShowCircle(false);
          setPostNumber(res.data.length);
          setPostsData(res.data)}
        );
        break;
      case "Name":
        searchData.name = search;
        await PostService.searchName(searchData).then((res) =>{setShowCircle(false);
          setPostNumber(res.data.length);
          setPostsData(res.data)}
        );
        break;
      case "Surname":
        searchData.surname = search;
        await PostService.searchSurname(searchData).then((res) => {setShowCircle(false);
          setPostNumber(res.data.length);
          setPostsData(res.data)}
        );
        break;
    }
    // console.log(postsData);
  }

  return (
    <View>
      <SearchBar
        placeholder="..."
        onChangeText={(e) => setSearch(e)}
        value={search}
        containerStyle={{
          backgroundColor: "#6c63fe",
          borderBottomColor: "#bbb7ff",
        }}
        inputStyle={{ color: "#6c63fe" }}
        inputContainerStyle={{
          width: "60%",
          marginLeft: "20%",
          backgroundColor: "white",
        }}
        searchIcon={
          <IconS name="text-box-search-outline" size={25} color="#6c63fe" />
        }
        clearIcon={
          <IconC
            name="clear-all"
            size={25}
            color="#6c63fe"
            onPress={() => setSearch(null)}
          />
        }
      />
      <View
        style={{ position: "absolute", marginTop: "3%", marginLeft: "84%" }}
      >
        <Button
          title={<IconO name="options-outline" size={25} color="#6c63fe" />}
          buttonStyle={{
            backgroundColor: "white",
            width: 45,
            borderRadius: 100,
          }}
          onPress={() => setVisible(!visible)}
        />
      </View>
      <View style={{ position: "absolute", marginTop: "3%", marginLeft: "5%" }}>
        <Button
          title={<IconR name="logout" size={25} color="#6c63fe" />}
          buttonStyle={{
            backgroundColor: "white",
            width: 45,
            borderRadius: 100,
          }}
          onPress={() => logOut()}
        />
      </View>
      <Banner
        visible={visible}
        actions={[
          {
            label: "Apply",
            color: "white",
            style: { backgroundColor: "#6c63fe", width: 80, borderRadius: 100 },
            onPress: () => {
              setVisible(false);
              searchPosts();
            },
          },
        ]}
      >
        <View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor: select === "Header" ? "#6c63fe" : "white",
                }}
                textStyle={{ color: select === "Header" ? "white" : "#6c63fe" }}
                mode="outlined"
                onPress={() => {
                  setSelect("Header");
                }}
              >
                Header
              </Chip>
            </View>
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor:
                    select === "Description" ? "#6c63fe" : "white",
                }}
                textStyle={{
                  color: select === "Description" ? "white" : "#6c63fe",
                }}
                mode="outlined"
                onPress={() => {
                  setSelect("Description");
                }}
              >
                Description
              </Chip>
            </View>
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor:
                    select === "Coordinates" ? "#6c63fe" : "white",
                }}
                textStyle={{
                  color: select === "Coordinates" ? "white" : "#6c63fe",
                }}
                mode="outlined"
                onPress={() => {
                  setSelect("Coordinates");
                }}
              >
                Cordinates
              </Chip>
            </View>
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor: select === "Rating" ? "#6c63fe" : "white",
                }}
                textStyle={{ color: select === "Rating" ? "white" : "#6c63fe" }}
                mode="outlined"
                onPress={() => {
                  setSelect("Rating");
                  setScrollEnabled(!scrollEnabled);
                }}
              >
                Rating
              </Chip>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor: select === "All" ? "#6c63fe" : "white",
                }}
                textStyle={{ color: select === "All" ? "white" : "#6c63fe" }}
                mode="outlined"
                onPress={() => {
                  setSelect("All");
                  setScrollEnabled(!scrollEnabled);
                }}
              >
                All
              </Chip>
            </View>
            {/* <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor: select === "Tag" ? "#6c63fe" : "white",
                }}
                textStyle={{ color: select === "Tag" ? "white" : "#6c63fe" }}
                mode="outlined"
                onPress={() => {
                  setSelect("Tag");
                  setScrollEnabled(!scrollEnabled);
                }}
              >
                Tag
              </Chip>
            </View> */}
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor: select === "Name" ? "#6c63fe" : "white",
                }}
                textStyle={{ color: select === "Name" ? "white" : "#6c63fe" }}
                mode="outlined"
                onPress={() => {
                  setSelect("Name");
                  setScrollEnabled(!scrollEnabled);
                }}
              >
                Name
              </Chip>
            </View>
            <View>
              <Chip
                style={{
                  borderWidth: 1,
                  margin: 5,
                  borderColor: "#6c63fe",
                  backgroundColor: select === "Surname" ? "#6c63fe" : "white",
                }}
                textStyle={{
                  color: select === "Surname" ? "white" : "#6c63fe",
                }}
                mode="outlined"
                onPress={() => {
                  setSelect("Surname");
                  setScrollEnabled(!scrollEnabled);
                }}
              >
                Surname
              </Chip>
            </View>
          </View>
        </View>
        {select === "Coordinates" && (
          <View
            style={{
              height: 200,
              width: 380,
              borderWidth: 1,
              marginTop: 10,
              borderColor: "#6c63fe",
            }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ width: "100%", height: "100%" }}
              onPress={(e) => {
                setCoordinate({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                  longitudeDelta: 0.0922,
                  latitudeDelta: 0.0421,
                });
              }}
              initialRegion={{
                latitude: 48.3717299117799,
                longitude: 31.22193804010748,
                longitudeDelta: 19.74205847829581,
                latitudeDelta: 8.577949979622588,
              }}
            >
              {coordinate !== null && (
                <Circle
                  strokeWidth={2}
                  strokeColor="#6c63fe"
                  fillColor="rgba(187, 183, 255, 0.5)"
                  center={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                  }}
                  radius={range * 1000}
                />
              )}
            </MapView>
          </View>
        )}
        {select === "Coordinates" && (
          <View
            style={{
              width: 380,
              flexDirection: "row",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                position: "absolute",
                fontSize: 22,
                marginLeft: 120,
                color: "#6c63fe",
              }}
            >
              Distance range{" "}
              <IconM name="map-marker-distance" size={22} color="#6c63fe" />
            </Text>
            <Slider
              min={0}
              max={100}
              showRangeLabels={false}
              valueLabelsBackgroundColor="#bbb7ff"
              knobBubbleTextStyle={{ color: "white" }}
              knobColor="#6c63fe"
              inRangeBarColor="white"
              outOfRangeBarColor="#bbb7ff"
              rangeLabelsTextColor="#6c63fe"
              valueOnChange={(value) => setRange(value)}
              initialValue={100}
            />
          </View>
        )}
        {select === "Rating" && (
          <View
            style={{
              width: 380,
              flexDirection: "row",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                position: "absolute",
                fontSize: 22,
                marginLeft: 150,
                color: "#6c63fe",
              }}
            >
              Rating <IconR name="staro" size={22} color="#6c63fe" />
            </Text>
            <RangeSlider
              min={0}
              max={500}
              showRangeLabels={false}
              valueLabelsBackgroundColor="#bbb7ff"
              knobBubbleTextStyle={{ color: "white" }}
              toKnobColor="#6c63fe"
              fromKnobColor="#6c63fe"
              inRangeBarColor="#bbb7ff"
              outOfRangeBarColor="white"
              rangeLabelsTextColor="#6c63fe"
              fromValueOnChange={(value) => setFromValue(value / 100)}
              toValueOnChange={(value) => setToValue(value / 100)}
              initialFromValue={0}
              initialToValue={500}
            />
          </View>
        )}
      </Banner>
      {showCircle === true && <View style={{marginTop: 150}}>
        <ActivityIndicator animating={true} size={120} />
      </View>}
      {postNumber === 0 && <View>
        <Text style={{fontSize: 42, alignSelf: 'center', marginTop: 180, color: "#6c63fe"}}>Posts not found</Text>
        <IconU
        style={{alignSelf: 'center'}}
            name="times-rectangle"
            size={120}
            color="#6c63fe"
            onPress={() => setSearch(null)}
          />
        </View>}
      <ScrollView>
        <MainPost navigation={props.navigation} postsData={postsData} />
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
}
