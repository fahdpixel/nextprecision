import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image
          src="/homebanner.png"
          width={1800}
          height={500}
          alt="Picture of Banner"
          priority
          style={{ position: "absolute" }}
        />
        <div className="relative z-10 mr-auto ml-auto w-11/12 ">
          <p className="absolute text-white inset-x-0 top-[130px] sm:top-[300px] lg:top-[500px] text-center text-lg font-bold lg:text-5xl font-['Playfair_Display']">
            Making Every Event a Celebration!
          </p>
        </div>
      </div>
    </main>
  );
}
