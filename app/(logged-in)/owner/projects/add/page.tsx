import FormAdd from "@/components/FormAdd";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="heading mb-8">
        Add a new project <span className="text-purple">into collections</span>
      </h1>
      <FormAdd />
    </div>
  );
}
