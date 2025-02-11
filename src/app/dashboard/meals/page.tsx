import { db } from "../../../server/db";

export default async function FoodsPage() {
    const foods = await db.query.food.findMany();

    return (
      <main>
        <h1 className="text-2xl font-bold">Meals</h1>
      </main>
    );
  }