"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);

  // const [file, setFile] = useState<File>();

  if (status === "loading") {
    return <p className="flex justify-center m-14">Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };
  const changeOption = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setOption((prev) => {
      if (type === "number") {
        return { ...prev, [name]: parseFloat(value) };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };
 
  // const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement;
  //   const item = (target.files as FileList)[0];
  //   setFile(item);
  // };

  // const upload = async () => {
  //   const data = new FormData();
  //   data.append("file", file!);
  //   data.append("upload_preset", "restaurant");

  //   const res = await fetch("https://api.cloudinary.com", {
  //     method: "POST",
  //     headers: { "Content-Type": "multipart/form-data" },
  //     body: data,
  //   });

  //   const resData = await res.json();
  //   return resData.url;
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const url = await upload();
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          // img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();

      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 w-full lg:px-20 xl:px-40 mx-auto mb-10 flex items-center justify-center max-w-5xl">
      <form onSubmit={handleSubmit} className="w-full flex justify-center flex-wrap gap-6 md:p-6 bg-white bg-opacity-50" autoComplete="off">
        <h1 className="text-4xl text-gray-300 font-bold">
          Add New Product
        </h1>
        <div className="w-full flex flex-col gap-2 ">
          <label
            className="text-sm cursor-pointer flex gap-4 items-center"
            htmlFor="file"
          >
            <span>Upload Image(可選)</span>
          </label>
          <input
            className="ring-1 p-4 rounded-sm placeholder:text-gray-300 outline-none"
            type="file"
            // onChange={handleChangeImg}
            id="file"
          />
        </div>

        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Title</label>
          <input
            className="ring-1 p-4 rounded-sm placeholder:text-gray-300 outline-none"
            type="text"
            placeholder="Food Name"
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Description</label>
          <textarea
            rows={3}
            className="ring-1 p-4 rounded-sm placeholder:text-gray-300 outline-none"
            placeholder="dec"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Price</label>
          <input
            className="ring-1 p-4 rounded-sm placeholder:text-gray-300 outline-none"
            type="number"
            placeholder="99"
            name="price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label className="text-sm">Category</label>
          <select
            className="ring-1 p-4 rounded-sm placeholder:text-gray-300 outline-none"
            name="catSlug"
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>Select a category</option>
            <option value="burgers">burgers</option>
            <option value="donuts">donuts</option>
          </select>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Options</label>
          <div className="flex flex-col gap-3">
            <select
              className="ring-1 p-4 rounded-sm outline-none"
              name="title"
              onChange={changeOption}
              required
            >
              <option value="" disabled selected>單點 or 套餐</option>
              <option value="單點">單點</option>
              <option value="套餐">套餐</option>
            </select>
            <input
              className="ring-1 p-4 rounded-sm placeholder:text-gray-300 outline-none"
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
              onChange={changeOption}
              required
            />
            <Button
              type="button"
              className="p-7"
              onClick={() => setOptions((prev) => [...prev, option])}
            >
              Add Option
            </Button>
          </div>
          {/* option output */}
          <div className="flex flex-wrap gap-4 mt-2">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="p-2  rounded-md cursor-pointer bg-gray-200 text-gray-400"
                onClick={() =>
                  setOptions((prev) =>
                    prev.filter((item) => item.title !== opt.title)
                  )
                }
              >
                <span>{opt.title}</span>
                <span className="text-xs"> (+ ${opt.additionalPrice})</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          variant="destructive"
          className="w-full flex items-center justify-center"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddPage;