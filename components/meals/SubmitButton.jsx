"use client";
import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`bg-text py-2 px-4 rounded text-white text-xl text-center capitalize m-auto w-fit block mt-6 `}
      type="submit"
    >
      {pending ? "uploading" : "share meal"}
    </button>
  );
};
export default SubmitButton;
