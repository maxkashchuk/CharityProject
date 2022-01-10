import { StyleSheet, Dimensions } from "react-native";

const reg_svg_style = "M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,197.3C672,171,768,149,864,149.3C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";

const reg_styles = StyleSheet.create({
  reg_btn_title_style: {
    color: "#bbb7ff"   
  },
  reg_btn_border_style: {
    borderColor: "#6c63fe",
  },
  reg_background_style: {
    backgroundColor: 'rgba(80, 0, 202, 0.3)',
    width: "100%",
    height: Dimensions.get("window").width / 100 * 80,
    left: 0,
    right: 0
  },
  reg_form_style: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    margin: "5%",
    borderRadius: 20,
    height: Dimensions.get("window").width / 100 * 65,
    padding: 15,
    top: "5%"
  }
});

export { reg_styles, reg_svg_style }