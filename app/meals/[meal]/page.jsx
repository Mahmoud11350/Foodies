import GetMeal from "@/components/meal/Meal";
import { getMeal } from "@/server/controllers/controllers";

export const generateMetadata = async ({ params }) => {
  const meal = await getMeal(params.meal);
  if (!meal) return notFound();

  return {
    title: meal.title,
  };
};

const Meal = ({ params }) => {
  const { meal } = params;

  return <GetMeal mealId={meal} />;
};
export default Meal;
