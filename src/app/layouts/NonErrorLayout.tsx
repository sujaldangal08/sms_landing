import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function NonErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
