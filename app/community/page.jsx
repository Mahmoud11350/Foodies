import Image from "next/image";
import community from "@/assets/icons/community.png";
import events from "@/assets/icons/events.png";
import meal from "@/assets/icons/meal.png";

const Community = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl text-[#DDD6CB] font-bold capitalize mb-4">
        One shared passion: <span className="gradient">Food</span>
      </h1>
      <p className="text-[#DDD6CB] text-lg ">
        Join our community and share your favorite recipes!
      </p>

      <div>
        <h2 className="text-[#DDD6CB] text-lg ">Community Perks</h2>
        <Image
          src={community}
          alt="community"
          width={200}
          height={300}
          className="m-auto"
        />
      </div>
      <div>
        <h2 className="text-[#DDD6CB] text-lg ">Share & discover recipes</h2>
        <Image
          src={events}
          alt="events"
          width={200}
          height={300}
          className="m-auto"
        />
      </div>
      <div>
        <h2 className="text-[#DDD6CB] text-lg ">
          Find new friends & like-minded people
        </h2>
        <Image
          src={meal}
          alt="meal"
          width={200}
          height={300}
          className="m-auto"
        />
      </div>
      <h3 className="text-[#DDD6CB] text-lg ">
        Participate in exclusive events
      </h3>
    </div>
  );
};
export default Community;
