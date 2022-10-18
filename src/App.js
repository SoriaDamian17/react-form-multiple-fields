import Form from "./Form";
import "./styles.css";

export default function App() {
  const defaultValues = [
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
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Form defaultValues={defaultValues} />
    </div>
  );
}
