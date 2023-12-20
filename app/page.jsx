import HeaderText from "@/components/header/HeaderText";
import ImageSlider from "@/components/header/ImageSlider";

const Home = () => {
  return (
    <section className="container pt-28">
      <div className=" flex gap-4 items-center">
        <ImageSlider />
        <HeaderText />
      </div>

      <div className="text-[#DDD6CB] text-center mt-10">
        <h2 className="gradient text-2xl font-bold mb-4">How it works</h2>
        <p className="max-w-[600px] mb-4 m-auto">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It's a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p className="max-w-[600px] mb-4 m-auto">
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </div>
      <div className="text-[#DDD6CB] text-center mt-10">
        <h2 className="gradient text-2xl font-bold mb-4">
          Why NextLevel Food?
        </h2>
        <p className="max-w-[600px] mb-4 m-auto">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It's a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p className="max-w-[600px] mb-4 m-auto">
          NextLevel Food is a place to discover new dishes, and to connect with
          other food lovers.
        </p>
      </div>
    </section>
  );
};
export default Home;
