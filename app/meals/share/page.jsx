import FormRow from "@/components/Form/FormRow";
import { createMeal } from "@/server/controllers/controllers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const Share = () => {
  const formSubmittion = async (formData) => {
    "use server";
    const meal = {
      creator: formData.get("name"),
      creator_email: formData.get("email"),
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
    };
    // const bufferedImage = await meal.image.arrayBuffer();
    //
    // console.log(meal.image);
    await createMeal(meal);
    // revalidatePath("/");
    // redirect("/meals");
  };
  return (
    <section className="container">
      <div className="mt-4">
        <h2 className="text-4xl text-[#DDD6CB] font-bold capitalize">
          Share your <span className="gradient">favorite meal</span>
        </h2>
        <p className="text-[#DDD6CB] font-bold text-lg my-4">
          Or any other meal you feel needs sharing!
        </p>
      </div>
      <form action={formSubmittion} className="w-4/6">
        <div className="grid grid-cols-2 gap-4">
          <FormRow name="name" id={"name"} type={"text"} />
          <FormRow name="email" id={"email"} type={"email"} />
        </div>
        <FormRow name="title" id={"title"} type={"text"} />
        <FormRow name="summary" id={"summary"} type={"text"} />
        <div>
          <label
            htmlFor="instructions"
            className="capitalize text-[#A29E97] text-lg font-bold mb-2 block"
          >
            instructions
          </label>
          <textarea
            name="instructions"
            id={"instructions"}
            className="w-full bg-[#1C2027] py-2 px-4 text-lg rounded-lg outline-none"
            rows={8}
          />
        </div>
        <div>
          <label htmlFor="image">Pick an Image</label>
          <input type="file" accept="image" name="image" />
        </div>
        <button className="bg-text py-2 px-4 rounded text-white text-xl text-center capitalize m-auto w-fit block mt-6">
          share meal
        </button>
      </form>
    </section>
  );
};
export default Share;
