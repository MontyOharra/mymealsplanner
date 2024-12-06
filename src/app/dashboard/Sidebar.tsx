// app/dashboard/Sidebar.tsx
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-700 p-4">
      <nav>
        <div className="flex items-center justify-between pb-8">
          <Link className="text-2xl font-bold" href="/dashboard">
            MyMealsPlanner
          </Link>
        </div>
        <ul className="space-y-4">
          <li>
            <a href="/dashboard" className="block hover:text-gray-300">
              Meals
            </a>
          </li>
          <li>
            <a href="/dashboard/settings" className="block hover:text-gray-300">
              Foods
            </a>
          </li>
          <li>
            <a
              href="/dashboard/analytics"
              className="block hover:text-gray-300"
            >
              Grocery List
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
