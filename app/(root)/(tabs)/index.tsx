import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link className="font-bold my-10 text-3xl font-rubik" href="/explore">
        Welcome Home
      </Link>
      <Link href="/sign-in">signIN</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
    </View>
  );
}
