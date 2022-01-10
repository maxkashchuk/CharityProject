import { useState } from "react";
import { Calendar } from "react-native-calendars";

export default function SignUpSecond(props) {
  const [date, setDate] = useState("");

  return (
    <Calendar
        style={{
          top: "12%",
          backgroundColor: "transparent",
          height: "94%",
          left: "10%",
          width: "80%",
          borderRadius: 40,
          borderColor: "#6c63fe",
          borderWidth: 1
        }}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        onDayPress={
          day => {
            setDate(day);
        }
      }
        markedDates={{[`${date.dateString}`]: {selected: true, marked: true}}}
        theme={{
          calendarBackground: "transparent",
          todayTextColor: "white",
          todayBackgroundColor: "#bbb7ff",
          selectedDayTextColor: "white",
          selectedDotColor: "#6c63fe",
          monthTextColor: "#6c63fe",
          textSectionTitleColor: "#6c63fe",
          selectedDayBackgroundColor: "#6c63fe",
          dotStyle: {
            height: "30%",
            width: "20%"
          },
          arrowColor: "#bbb7ff",
          arrowStyle: {
            borderColor: "#bbb7ff",
            borderWidth: 1,
            borderRadius: 100,
            bottom: 3.5,
            height: 45
          },
          "stylesheet.day.basic": {
            disabledText: {
              color: '#bbb7ff',
            },
            base: {
              width: "60%",
              height: 17,
            },
            text: {
              color: '#6c63fe',
              fontSize: 13,
              alignSelf: "center"
            },
            container: {
              height: '66.5%',
              width: '44.8%',
            },
          },
          
          "stylesheet.calendar.header": {
            week: {
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "#bbb7ff",
              borderRadius: 10,
              borderWidth: 1,
            },
          },
        }}
      />
  );
}