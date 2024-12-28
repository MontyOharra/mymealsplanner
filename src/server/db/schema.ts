// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  decimal,
  boolean,
  pgTableCreator,
  timestamp,
  varchar,
  pgEnum
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `mymealsplanner_${name}`);


export const food = createTable("food", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description"),
  store : varchar("store", { length: 255 }),
  url: varchar("url", { length: 1024}),
  isProcessed : boolean("is_processed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  rating: integer("rating").notNull().default(0),
});


export const servingSizeTypes = pgEnum("serving_size_type", ["WEIGHT", "VOLUME"]); 
export const foodProcessed = createTable("food_processed", {
  id: integer("id").primaryKey(), 
  foodId: integer("food_id").notNull().references(() => food.id),
  brandName: varchar("brand_name", { length: 255 }),
  pricePerContainer : decimal("price_per_container", { precision: 10, scale: 2 }),
  servingSizeType : servingSizeTypes("serving_size_type"),
  servingSize : decimal("serving_size", { precision: 10, scale: 2 }),
  servingsPerContainer : integer("servings_per_container"),
  fatPerServing : decimal("fat_per_serving", { precision: 10, scale: 2 }),
  carbsPerServing : decimal("carbs_per_serving", { precision: 10, scale: 2 }),
  proteinPerServing : decimal("protein_per_serving", { precision: 10, scale: 2 }),
  caloriesPerServing : decimal("calories_per_serving", { precision: 10, scale: 2 }),
});

export const foodProduce  = createTable("food_produce", {
  id: integer("id").primaryKey(),
  foodId: integer("food_id").notNull().references(() => food.id),
  servingSizeType : servingSizeTypes("serving_size_type"),  
  servingSize : decimal("serving_size", { precision: 10, scale: 2 }),
  pricePerServing : decimal("price_per_serving", { precision: 10, scale: 2 }),
  fatPerServing : decimal("fat_per_serving", { precision: 10, scale: 2 }),
  carbsPerServing : decimal("carbs_per_serving", { precision: 10, scale: 2 }),
  proteinPerServing : decimal("protein_per_serving", { precision: 10, scale: 2 }),
  caloriesPerServing : decimal("calories_per_serving", { precision: 10, scale: 2 }),
});