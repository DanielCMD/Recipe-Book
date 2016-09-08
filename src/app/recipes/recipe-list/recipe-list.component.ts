import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from "../recipe.service";

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent, ROUTER_DIRECTIVES]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  /*@Output() recipeSelected = new EventEmitter<Recipe>(); */
/*  recipe = new Recipe('Dummy', 'Dummy','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5i-qZnL9evPv4hG9QICjkmhB8s9YXpJM-GwBPHrY-fH943lzb1wX-Q'); */
  constructor(private recipesService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
}
