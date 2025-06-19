import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const form = useForm();

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label"></label>Name
        <input
          {...form.register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...form.register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
