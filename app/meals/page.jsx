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
      <Suspense fallback={<div>Looooding</div>}>
        <GridMeals />
      </Suspense>
    </section>
  );
};
export default Meals;
