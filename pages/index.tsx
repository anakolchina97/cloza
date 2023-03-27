import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import FeaturedSellers from "../components/FeaturedSellers";
import NewGoods from "../components/NewGoods";
import PopularBrands from "../components/PopularBrands";
import PopularCategories from "../components/PopularCategories";
import Slider from "../components/Slider";
import { ITab, Tabs } from "../components/Tabs";

const Home: NextPage = () => {
  const tabs: ITab[] = [
    {
      id: "1",
      label: "Мужское",
    },
    {
      id: "2",
      label: "Женское",
    },
    {
      id: "3",
      label: "Унисекс",
    },
  ];
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const handleTabClick = (id: string | number) => {
    setActiveTabId(id);
  };
  return (
    <Container>
      <Slider />
      <Tabs tabs={tabs} selectedId={activeTabId} onClick={handleTabClick} />
      <TabsContent>
        <div>
          {activeTabId === tabs[0].id && (
            <>
              <NewGoods />
              <PopularCategories />
              <PopularBrands />
              <FeaturedSellers />
            </>
          )}
        </div>
        <div>{activeTabId === tabs[1].id && <>2</>}</div>
        <div>{activeTabId === tabs[2].id && <>3</>}</div>
      </TabsContent>
    </Container>
  );
};

const TabsContent = styled.div``;

export default Home;
