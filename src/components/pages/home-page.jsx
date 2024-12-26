import { Description } from "../description/description";
import { PageContainer } from "../page-container/page-container";
import { TabLink } from "../tab-link/tab-link";
import { TabLinks } from "../tab-links/tab-links";

export const HomePage = () => {
  return (
    <PageContainer>
      <Description />
      <TabLinks>
        <TabLink href="/restaurants" title="Restaurants" />
      </TabLinks>
    </PageContainer>
  );
};
