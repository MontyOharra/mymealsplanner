import Link from "next/link";

import { db } from "../server/db";

export default async function HomePage() {
  const foods = await db.query.food.findMany();
  console.log(foods)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
      {
        foods.map((food) => (
          <div key={food.id} className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">{food.name}</h1>
              <h1 className="text-2xl font-bold">{food.store}</h1>
          </div>
        ))
      }
    </main>
  );
}
