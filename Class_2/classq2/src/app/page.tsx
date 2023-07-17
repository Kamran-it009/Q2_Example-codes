import Image from "next/image";
import Image1 from "../../public/Johnson.jpg";
import Image2 from "../../public/David.jpg";
import Image3 from "../../public/Katherine.jpg";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Header name="David" img={Image1} />
      <Header name="John" img={Image2} />
      <Header name="Katherine" img={Image3} />
    </div>
  );
}
