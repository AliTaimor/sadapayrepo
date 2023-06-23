import React, { useState } from "react";
import HomeScreen from "../../screens/HomeScreen";

function HomeContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const error = phoneNumber.length === 13;
  return (
    <HomeScreen
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      error={error}
    />
  );
}

export default HomeContainer;
