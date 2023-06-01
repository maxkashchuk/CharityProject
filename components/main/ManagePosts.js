import { useState, useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import UserService from "../../Service/UserService";
import PostService from "../../Service/PostService";
import Carousel from "react-native-snap-carousel/src/carousel/Carousel";
import PostCarousel from "../postcards/PostCarousel";
import { Button } from "react-native-paper";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { ActivityIndicator } from 'react-native-paper';
import IconU from "react-native-vector-icons/FontAwesome";

export default function ManagePosts(props) {
  const [posts, setPosts] = useState();

  const [activeSlide, setActiveSlide] = useState(0);

  const [showModify, setShowModify] = useState();

  const [showCircle, setShowCircle] = useState(true);

  let refCarousel = useRef();

  async function loadPosts() {
    setShowModify(undefined);
    setShowCircle(true);
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
    console.log(activeSlide);
    await PostService.postDelete(activeSlide !== 0 ? posts[activeSlide-1].id : posts[0].id).then((res) => {
      // console.log(posts);
      if(posts.length === 1)
      {
        setPosts([]);
        setShowModify(0);
        return;
      }
      if(activeSlide === 0)
      {
        setPosts(posts.reverse().splice(0, 1));
        return;
      }
      refCarousel.snapToItem(activeSlide-1);
      posts.length === 1 ? setPosts([]) :
      setPosts(posts.reverse().splice(activeSlide-1, 1));
      console.log(activeSlide);
      // console.log(activeSlide);
    });
  }

  function postModifyGo() {
    props.navigation.navigate("PostUpdate", {
      navigation: props.navigation,
      id: posts[activeSlide].id,
    });
  }

  useEffect(() => {
    // setShowCircle(true);
    loadPosts().then((res) => {
      setShowCircle(false);
      setPosts(res.data);
      setShowModify(res.data.length);
    });
    // setShowCircle(false);

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
      {showCircle == true && <View style={{marginTop: 150}}>
        <ActivityIndicator animating={true} size={120} />
        </View>}
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
                console.log(index);
                setActiveSlide(index);
              }}
            />
          </View>
          {(showModify !== 0 && showModify !== undefined) && <View>
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
          </View></View>}
          {showModify === 0 && <View>
            <Text style={{fontSize: 42, alignSelf: 'center', marginTop: 180, color: "#6c63fe"}}>Posts not found</Text>
        <IconU
        style={{alignSelf: 'center'}}
            name="times-rectangle"
            size={120}
            color="#6c63fe"
            onPress={() => setSearch(null)}
          />
            </View>}
        </View>
      )}
    </ScrollView>
  );
}
