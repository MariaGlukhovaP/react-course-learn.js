export const addReview = async (restaurantId, review) => {
  const response = await fetch(
    `http://localhost:3001/api/review/${restaurantId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(review),
    }
  );

  return response;
};
