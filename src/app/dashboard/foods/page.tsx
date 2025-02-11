import { db } from "../../../server/db";
import FoodsTable from "./components/FoodsTable";

export default async function FoodsPage() {
    const foods = await db.query.food.findMany();

    return (
      <main className="justify-center items-center">
        <h1 className="text-2xl font-bold">Foods</h1>
        <FoodsTable />
      </main>
    );
  }