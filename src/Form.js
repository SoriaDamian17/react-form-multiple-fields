import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Form = ({ handleClose, defaultValues }) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { email: "", firstname: "", lastname: "", password: "" }
  });
  const [fields, setFields] = useState([
    {
      title: "First Name",
      name: "firstname",
      value: "",
      rules: "First name required"
    },
    {
      title: "Last Name",
      name: "lastname",
      value: "",
      rules: "Last name required"
    },
    {
      title: "Email",
      name: "email",
      value: "",
      rules: "Email required"
    },
    {
      title: "Password",
      name: "password",
      value: "",
      rules: "Password required"
    }
  ]);

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("render values", fields);
    setFields(defaultValues);
    reset(defaultValues);
  }, [fields, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <>
          <span key={field.name + "_span"}>
            {field.title}:{field.value}
          </span>
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            defaultValue={field.value}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label={field.title}
                variant="filled"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: field.rules }}
          />
        </>
      ))}
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;
