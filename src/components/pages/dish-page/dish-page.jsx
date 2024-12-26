"use client";

import { PageContainer } from "../../page-container/page-container";
import { Dish } from "../../dish/dish";

export const DishPage = ({ dish }) => {
  return (
    <PageContainer>
      <Dish dish={dish} />
    </PageContainer>
  );
};
