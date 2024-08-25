import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main">
      <Header progressLine={false} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
