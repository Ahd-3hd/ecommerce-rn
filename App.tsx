import { StatusBar } from "expo-status-bar";
import React from "react";
import TabNavigator from "./Navigators/RootTabNavigator";

export default function App() {
  return (
    <>
      <StatusBar />
      <TabNavigator />
    </>
  );
}
