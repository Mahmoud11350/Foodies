import Link from "next/link";

const MealsHeader = () => {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold capitalize pb-4">
        Delicious meals, created <span className="gradient ">by you</span>{" "}
      </h1>
      <p className="py-4 text-lg text-white ">
        Choose your favorite recipe and cook it yourself. It is easy and fun!
      </p>

      <Link
        href={"/meals/share"}
        className="bg-text text-white py-1 px-2 text-xl capitalize font-bold rounded mb-8 block w-fit"
      >
        share your favourite recipe
      </Link>
    </div>
  );
};
export default MealsHeader;
