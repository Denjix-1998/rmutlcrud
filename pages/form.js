import React, { useReducer } from "react";
import AdduserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import Userdetail from "./userdetail";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId); // Fix here

  return (
    <div className="container mx-auto py-5">
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AdduserForm({ formData, setFormData })}
    </div>
  );
}
