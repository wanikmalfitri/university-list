import React, { useMemo } from "react";
import { Container, CustomTable } from "../components";
import { uniList } from "../api/university";
import { data } from "browserslist";

const Home = () => {
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Website",
      id: "web_pages[0]",
      accessor: (list) => (
        <a className="text-primary" href={list.web_pages[0]}>
          {list.web_pages[0]}
        </a>
      ),
    },
  ]);

  const columnsMobile = useMemo(() => [
    {
      Header: "University",
      id: "details",
      accessor: <React.Fragment>{}</React.Fragment>,
    },
  ]);

  return (
    <React.Fragment>
      <section className="pt-16 pb-32 bg-primary" id="Hero">
        <Container>
          <div className="text-center font-bold text-3xl text-white">
            All university informations in one place
          </div>
          <div className="text-center mt-8">
            <select
              className="text-xs bg-primary-lighter font-semibold px-4 py-2 rounded-full focus:outline-none"
              value="default"
            >
              <option value="default">All country</option>
            </select>
          </div>
        </Container>
      </section>
      <section className="mb-16 -mt-24" id="UniList">
        <Container>
          <CustomTable columns={columns} data={uniList} />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
