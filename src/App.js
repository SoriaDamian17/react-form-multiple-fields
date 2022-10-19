import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const { handleSubmit, control } = useForm();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    new Promise((resolver) => {
      setTimeout(
        () =>
          resolver([
            {
              title: "First Name",
              name: "firstname",
              value: "Demian",
              rules: "First name required"
            },
            {
              title: "Last Name",
              name: "lastname",
              value: "Soria",
              rules: "Last name required"
            },
            {
              title: "Email",
              name: "email",
              value: "demina@test.com",
              rules: "Email required"
            },
            {
              title: "Password",
              name: "password",
              value: "12312313",
              rules: "Password required"
            }
          ]),
        3000
      );
    }).then((resp) => {
      console.log("resp", resp);
      setFields(resp);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre
        style={{
          background: "#eaeaea",
          padding: "2rem",
          overflowWrap: "break-word"
        }}
      >
        {JSON.stringify(fields)}
      </pre>
      {fields.length && (
        <Form
          defaultValues={fields}
          control={control}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
