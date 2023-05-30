import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, Dimensions, View, Text, Button } from "react-native";
import IconCAL from "react-native-vector-icons/AntDesign";

export default function SignUpSecond({ setDate }) {
  const [val, setVal] = useState(new Date());
  const [startShowDate, setStartShowDate] = useState(false);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setStartShowDate(true);
    currentDate !== undefined && setVal(currentDate);
    currentDate !== undefined && setDate(currentDate);
  };

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        flex: 1,
        width: "100%",
        top: "42.5%",
        height: Dimensions.get("window").height,
      }}
    >
      <View>
        <View style={[{ width: "50%", marginLeft: "25%", marginTop: "5%" }]}>
          <Button
            color="#bbb7ff"
            width="100px"
            onPress={() => setShow(true)}
            title="Pick birth date"
          />
        </View>
      </View>
      <View style={{ top: "10%" }}>
        <Text style={{ fontSize: 24, color: "#bbb7ff", alignSelf: "center" }}>
          {startShowDate && (
            <IconCAL name="calendar" size={21} color="#6c63fe" />
          )}
          {startShowDate &&
            val.getFullYear() + ":" + val.getMonth() + ":" + val.getDay()}
        </Text>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={val}
          shouldCloseOnSelect={true}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}
