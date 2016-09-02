import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  private   recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad','Okayish', 'http://ohmyveggies.com/wp-content/uploads/2016/06/Summer-Green-Bean-Salad-02-600x779.jpg', [])
  ];
  constructor() { }

  getRecipes()  {
    return this.recipes;
  }

}
