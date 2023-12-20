import Image from "next/image";
import notFound from "@/public/notfound.png";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <Image src={notFound} alt="not Found" className="rounded" />
      <h2 className="text-2xl gradient capitalize py-2">page Not Found</h2>
      <Link
        href={"/"}
        className="bg-text py-2 px-4 text-lg text-white font-bold"
      >
        Back Home
      </Link>
    </div>
  );
};
export default NotFound;
