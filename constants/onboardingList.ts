import { ImageSourcePropType } from "react-native";

type onboardingType = {
  heading: string;
  text: string;
  image: ImageSourcePropType;
};

export const onboardingList: onboardingType[] = [
  {
    heading: "Welcome to Grocery Shop",
    text: "Embark on a culinary journey with fresh ingredients brought right to your kitchen.",
    image: require("@/assets/images/strawberry.jpg"),
  },
  {
    heading: "Intoducing Shop",
    text: "Effortless and convenient shopping made simple - shop for groceries anytime, anywhere.",
    image: require("@/assets/images/garlic.jpg"),
  },
  {
    heading: "Your Daily Grocery Partner",
    text: "Explore a smarter way to shop for groceries with personalized recommendations",
    image: require("@/assets/images/fresh-fruits.jpg"),
  },
];
