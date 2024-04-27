import { useForm } from "react-hook-form";

const ExpensForm = ({ handelonSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className=" flex flex-col  items-center w-screen">
      <form
        onSubmit={handleSubmit(handelonSubmit)}
        className="bg-gray-200 flex flex-col m-3 h-72 w-9/12 p-2 gap-2"
      >
        <div className="w-full">
          <div>
            <label htmlFor="desc">Description</label>
          </div>
          <input
            {...register("desc", { required: true })}
            aria-invalid={errors.desc ? "true" : "false"}
            className="border-2 w-full"
          />
          {errors.desc?.type === "required" && (
            <p role="alert" style={{ color: "red" }}>
              Description is required
            </p>
          )}
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="amount">Amount</label>
          </div>
          <input
            {...register("amount", { required: true })}
            aria-invalid={errors.amount ? "true" : "false"}
            className="border-2 w-full"
          />
          {errors.amount?.type === "required" && (
            <p style={{ color: "red" }}>Amount is required</p>
          )}
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="amount">Categories</label>
          </div>
          <select
            className="border-2 w-full"
            {...register("categories", { required: true })}
          >
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertaiment">Entertaiment</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-1 rounded w-24"
        >
          {" "}
          submit
        </button>
      </form>
    </div>
  );
};

export default ExpensForm;
