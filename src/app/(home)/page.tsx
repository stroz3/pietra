import Choose from "@/components/mainPage/choose/Choose";
import Individual from "@/components/mainPage/individual/Individual";
import Percent from "@/components/mainPage/percent/Percent";
import Price from "@/components/mainPage/price/Price";
import Reasons from "@/components/mainPage/reasons/Reasons";

export default function Home() {
  return (
    <div>
      <Choose />
      <Individual />
      <Percent />
      <Reasons />
      <Price />
    </div>
  );
}
