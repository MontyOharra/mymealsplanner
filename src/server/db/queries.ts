import { db } from "./index";

import { eq } from "drizzle-orm";

export const getAllFoods = async () => {
  const foods = await db.query.food.findMany();
  return foods;
};

export async function getUserFoods(userId : number) {
    const userFoods  = await db.query.food.findMany({
        where : eq(food.userId, userId)
    })
}