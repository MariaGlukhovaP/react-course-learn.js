import { PageContainer } from "../page-container/page-container";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurants-tabs-container";

export const RestaurantsLayout = ({ children }) => {
  return (
    <PageContainer>
      <RestaurantsTabsContainer />
      {children}
    </PageContainer>
  );
};
