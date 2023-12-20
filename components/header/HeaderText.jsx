import Link from "next/link";

const HeaderText = () => {
  return (
    <div className="w-full lg:w-1/2">
      <h1 className="bg-text bg-clip-text text-4xl text-transparent font-bold">
        NEXTLEVEL FOOD FOR <br /> NEXTLEVEL FOODIES
      </h1>
      <p className="text-white py-8">
        Taste & share food from all over the world.
      </p>
      <div className="flex items-center gap-4">
        <h4 className="bg-text bg-clip-text text-4xl text-transparent">
          Join the Community
        </h4>
        <Link
          href={"/meals"}
          className="px-3 py-1 bg-text text-2xl font-bold rounded text-white"
        >
          Explore Meals
        </Link>
      </div>
    </div>
  );
};
export default HeaderText;
