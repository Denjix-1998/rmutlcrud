import React from "react";
import { BiUserPlus, BiX, BiCheck } from "react-icons/bi";
import Table from "./table";
import Form from "./form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction, deleteAction } from "@/redux/reducer";
import { deleteUser, getUsers } from "@/lib/helper";
import { useQueryClient } from "react-query";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handle = () => {
    dispatch(toggleChangeAction());
  };
  const cancelhandler = async () => {
    console.log("cancel");
    await dispatch(deleteAction(null));
  };
  const deletehandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId); // Pass the deleteId parameter
      await queryClient.prefetchQuery("users", getUsers);
      await dispatch(deleteAction(null));
    }
  };
  return (
    <section>
      <main className="py-5">
        <h1 className="text-xl md:text-3xl text-center py-12  font-bold">
          ระบบติดตามย้อนหลัง
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handle}
              className="flex bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gray-50 hover:border-indigo-700 hover:text-gray-800 "
            >
              เพิ่มข้อมูลสัตว์เลี้ยง
              <BiUserPlus size={23} className="ml-2"></BiUserPlus>
            </button>
          </div>
          {deleteId ? DeleteComponent({ deletehandler, cancelhandler }) : <></>}
        </div>

        {visible ? <Form></Form> : <></>}

        {/* table*/}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}

function DeleteComponent({ deletehandler, cancelhandler }) {
  return (
    <div className="flex gap-5">
      <button>Are you sure?</button>
      <button
        onClick={deletehandler}
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50"
      >
        Yes
        <span className="px-1">
          <BiX color="rgb(255,255,255)" size={25} />
        </span>
      </button>
      <button
        onClick={cancelhandler}
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-500 hover:border-green-500 hover:text-gray-50"
      >
        No
        <span className="px-1">
          <BiCheck color="rgb(255,255,255)" size={25} />
        </span>
      </button>
    </div>
  );
}
