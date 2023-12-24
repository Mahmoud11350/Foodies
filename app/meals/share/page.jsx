import FormRow from "@/components/Form/FormRow";
import ImagePicker from "@/components/meals/ImagePicker";
import { createMeal } from "@/server/controllers/controllers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { v2 as cloudinary } from "cloudinary";
import SubmitButton from "@/components/meals/SubmitButton";

cloudinary.config({
  cloud_name: "fullstack-mern-developer",
  api_key: "769474651237466",
  api_secret: "OtmUwub6_LvhIvenHkCxz4IPwmI",
});

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
    const bufferedImage = await meal.image.arrayBuffer();
    const buffer = new Uint8Array(bufferedImage);
    const uploadedImg = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "foodies",
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    meal.image = uploadedImg.url;
    await createMeal(meal);

    revalidatePath("/");
    redirect("/meals");
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

        <ImagePicker name={"image"} label={"image"} />
        <SubmitButton />
      </form>
    </section>
  );
};
export default Share;
