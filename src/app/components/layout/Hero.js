import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Delivering straight
          <br />
          to your door from MiddXpress!
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Stock up on your favorite grille foods, snacks, or candy— all
          delivered in under 15 minutes by Tony Wang!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/midd_panther2.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"panther"}
        />
      </div>
    </section>
  );
}