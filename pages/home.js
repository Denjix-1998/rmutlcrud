import React from "react";
import { BiEdit, BiTrashAlt, BiSolidUserAccount } from "react-icons/bi";
import data from "../database/data.json";
import Image from "next/image";
import { getUsers } from "@/lib/helper";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { UserDetailPage } from "./UserDetailPage";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/reducer";
import UserDetails from "./userdetail";

export default function Home() {
  const { isLoading, isError, data, error } = useQuery("users", getUsers); 
  
  if (isLoading) return <div>Employee is Loading..</div>;
  if (isError) return <div>Got Error</div>;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800 ">
          <th className="px-16 py-2">
            <span className="text-gray-200">ชื่อสัตว์</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">วันที่เกิด</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">สถานะการมีชีวิต</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200 ">
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}
function Tr({ _id, name, avatar, email, salary, date, status }) {
  const router = useRouter();

  // ... (your existing code)

  const onViewDetails = () => {
    // Navigate to the user detail page when the user clicks on the user account icon
    router.push(`/users/${_id}`);
  };

  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (!visible) {
      dispatch(updateAction(_id));
    }
  };
  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };

  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center ">
        <img
          src={avatar}
          alt="Description of the image"
          className="h-8 w-8 rounded-full  object-cover"
        />
        <span className="text-center ml-2 font-semibold">{name}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? " bg-green-500" : "bg-rose-500"
            } text-white px-5 py-1  rounded-md`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-6 flex justify-around gap-5">
        <button className="" onClick={onUpdate}>
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button className="" onClick={onDelete}>
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
        <button className="" onClick={onViewDetails}>
          <BiSolidUserAccount
            size={25}
            color={"rgb(244,63,94)"}
          ></BiSolidUserAccount>
        </button>
      </td>
    </tr>
  );
}
