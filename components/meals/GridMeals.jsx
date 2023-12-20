import { getAllFoods } from "@/server/controllers/controllers";
import MealItem from "./MealItem";

const GridMeals = async () => {
  const meals = await getAllFoods();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 items-center w-full align-middle justify-center">
      {meals.map((meal) => {
        return <MealItem meal={meal} key={meal._id} />;
      })}
    </div>
  );
};
export default GridMeals;
