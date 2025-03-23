"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { createProject } from "@/app/actions/createProject";

export default function Page() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [pending, state, action] = useActionState(createProject, undefined)

  return (
    <div>
      <Link href="/projects" className="inline pr-2 text-gray-500/80">
        {"<"} return
      </Link>
      <h1 className="text-2xl font-bold pb-6 inline">Create Project</h1>

      <form className="flex flex-col">
        <label className="pr-2" htmlFor="name">
          Name:
        </label>
        <input name="name" className="py-2 px-3 mb-2 shadow border rounded" />

        <label className="pr-2" htmlFor="description">
          Description:
        </label>
        <textarea name="description" className="py-2 px-3 mb-2 shadow border rounded"></textarea>
        {/* Radio Inputs */}
        <div className="flex items-center">
          <label className="pr-2">Active:</label>
          <input
            type="radio"
            name="status"
            className={`mr-2}`}
          />
        </div>
        <div className="flex items-center">
          <label className="pr-2">Desactive:</label>
          <input
            type="radio"
            name="status"
            className={`mr-2}`}
          />
        </div>
        <button type="submit" className="hover:cursor-pointer py-1 px-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-600/50 border">
          Register
        </button>
      </form>
    </div>
  );
}
