import GridMeals from "@/components/meals/GridMeals";
import MealsHeader from "@/components/meals/MealsHeader";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
};

const Meals = async () => {
  return (
    <section className="mt-[80px] container">
      <MealsHeader />
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Loading Meals ...
          </div>
        }
      >
        <GridMeals />
      </Suspense>
    </section>
  );
};
export default Meals;
