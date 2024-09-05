import Beauty from "@/components/mainPage/beauty/Beauty";
import Choose from "@/components/mainPage/choose/Choose";
import FirstMain from "@/components/mainPage/firstMain/FirstMain";
import Individual from "@/components/mainPage/individual/Individual";
import Percent from "@/components/mainPage/percent/Percent";
import Price from "@/components/mainPage/price/Price";
import Projects from "@/components/mainPage/projects/Projects";
import Reasons from "@/components/mainPage/reasons/Reasons";

export default function Home() {
  return (
    <div>
      <FirstMain />
      <Choose />
      <Projects />
      <Individual />
      <Beauty />
      <Percent />
      <Reasons />
      <Price />
    </div>
  );
}
