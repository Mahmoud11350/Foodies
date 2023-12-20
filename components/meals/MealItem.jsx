import Image from "next/image";
import Link from "next/link";
const MealItem = ({ meal }) => {
  const { image, summary, _id, title, creator } = meal;

  return (
    <div className="overflow-hidden relative w-fit m-auto" key={_id}>
      <div className="">
        <Image
          src={image}
          alt={summary}
          width={800}
          height={800}
          className="rounded "
        />
      </div>

      <div className="absolute bottom-0 z-10 p-3 bg-black/40 w-full block">
        <h2 className={"text-[#DDD6CB] text-lg font-bold capitalize"}>
          {title}
        </h2>
        <span className="gradient">by : {creator}</span>
        <p className="text-[#DDD6CB] py-2">{summary}</p>
        <Link
          href={`/meals/${_id}`}
          className="bg-text text-white font-bold text-lg py-3 px-2 rounded flex items-center w-fit ml-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
export default MealItem;
