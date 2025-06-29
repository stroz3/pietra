import { IconFooter } from "@/components/footer/assets/IconFooter";
import Header from "@/components/header/Header";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main">
      <Header progressLine={false} />
      <main>{children}</main>
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <small className="footer__block-small desktop">
          PietraStyle 2025{" "}
          <span>
            <IconFooter />
          </span>{" "}
          Все права защищены! <br />
          <a href="" type="mail">
            Пользовательские соглашения
          </a>
        </small>
      </div>
    </div>
  );
}
