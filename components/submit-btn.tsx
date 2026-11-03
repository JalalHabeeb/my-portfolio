import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-gray-900 font-medium text-white transition hover:bg-gray-800 disabled:opacity-60 dark:bg-white dark:text-gray-900 dark:hover:bg-white/90"
      disabled={pending}
    >
      {pending ? (
        <>
          <span
            className="h-5 w-5 animate-spin rounded-full border-b-2 border-current motion-reduce:animate-none"
            aria-hidden="true"
          />
          <span className="sr-only">Sending</span>
        </>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
