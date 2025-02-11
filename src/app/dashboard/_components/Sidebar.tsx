// app/dashboard/Sidebar.tsx
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-700 p-4">
      <nav>
        <div className="flex items-center justify-between pb-8">
          <Link href="/dashboard" className="text-2xl font-bold" >
            MyMealsPlanner
          </Link>
        </div>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard/meals" className="block hover:text-gray-300">
              Meals
            </Link>
          </li>
          <li>
            <Link href="/dashboard/foods" className="block hover:text-gray-300">
              Foods
            </Link>
          </li>
          <li>
            <Link
              href="../grocery-list"
              className="block hover:text-gray-300"
            >
              Grocery List
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
