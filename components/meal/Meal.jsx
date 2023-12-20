import { getMeal } from "@/server/controllers/controllers";
import Image from "next/image";

const GetMeal = async ({ mealId }) => {
  const meal = await getMeal(mealId);
  let { image, title, summary, creator, instructions } = meal;
  instructions = instructions.replace(/\n/g, "<br />");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10  w-5/6 relative items-center container z-20">
        <div>
          <Image
            src={image}
            width={400}
            height={500}
            alt={title}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-[#DDD6CB] text-2xl font-bold tracking-widest">
            {title}
          </h1>
          <span className="gradient">By : {creator}</span>
          <p className="text-[#DDD6CB] py-2">{summary}</p>
        </div>
      </div>
      <div className="bg-[#6E6464] p-4 container mt-8 rounded-lg">
        <p
          className={"text-[#0f0f0f]"}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </div>
    </>
  );
};
export default GetMeal;
