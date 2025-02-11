"use client";

import { useState } from "react";

import { Food } from "../../../../types/food";

export default function FoodsTable() {
    const [ordering, setOrdering] = useState<string>("");
    const [orderingDirection, setOrderingDirection] = useState<string>("");

    const dummyData = [{
      "name": "Apple",
      "calories": 100,
      "protein": 10,
      "fat": 10,
      "carbs": 10,
      "fiber": 10,
      "sugar": 10,
      "sodium": 10,
      "id": 1
    },

    {
      "name": "Banana",
      "calories": 100,
      "protein": 10,
      "fat": 10,
      "carbs": 10,
      "fiber": 10,
      "sugar": 10,
      "sodium": 10,
      "id": 2
    },

    {
      "name": "Orange",
      "calories": 100,
      "protein": 10,
      "fat": 10,
      "carbs": 10,
      "fiber": 10,
      "sugar": 10,
      "sodium": 10,
      "id": 3
    },

    {
      "name": "Strawberry",
      "calories": 100,
      "protein": 10,
      "fat": 10,
      "carbs": 10,
      "fiber": 10,
      "sugar": 10,
      "sodium": 10,
      "id": 4
    }]

    return (
      <div>

        <table className="rounded-lg">
            <tr>
                <th
                  onClick={() => {
                    console.log("clicked")
                    setOrdering("name")
                    if (ordering === "name") {
                      if (orderingDirection === "asc") {
                        setOrderingDirection("desc")
                      } else {
                        setOrderingDirection("asc")
                      }
                    }
                  }    
                }
                >Name</th>
                <th>Calories</th>
            </tr>
            {dummyData.map((food) => {
                return (
                    <tr>
                        <td>{food.name}</td>
                        <td>{food.calories}</td>
                    </tr>
                )
            })}
        </table>

      </div>
    )
}