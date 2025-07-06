import { useState } from "react";
import UserForm from "./components/UserForm";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-gray-100">
      <UserForm name={name} setName={setName} />
      {name && (
        <p className="text-xl font-semibold text-purple-600">
          Hello, {name}!
        </p>
      )}
    </div>
  );
}
