import Header from "components/header/Header";
import Banner from "./modules/banner/Banner";
import About from "./modules/about/About";
import { allData } from "utils/portfolioData";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import Technologies from "./modules/technologies/Technologies";
import Resources from "./modules/resources/Resources";
import Footer from "components/footer/Footer";

const Portfolio = ({ match }) => {
  const [data, setData] = useState([]);

  const params = match.params.id;

  useEffect(() => {
    setData(allData);
  }, []);

  let filteredData = data.filter((item) => {
    return item.id === params;
  });

  let newData = filteredData[0];

  console.log(filteredData[0]);

  return (
    <>
      <Header />
      {newData && (
        <>
          <Banner
            header={newData.name}
            liveLink={newData.links.live}
            images={newData.images}
          />
          <About data={newData.about} />
          <Technologies data={newData.technologies} />
          <Resources
            liveLink={newData.links.live}
            githubLink={newData.links.github}
          />
        </>
      )}
      <Footer />
    </>
  );
};

export default Portfolio;
