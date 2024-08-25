import Choose from "@/components/mainPage/choose/Choose";
import Individual from "@/components/mainPage/individual/Individual";

export default function Home() {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Choose />
      <Individual />
    </div>
  );
}
