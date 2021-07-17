import React from "react";
import { Layout, Container } from "../components";
import { uniList } from "../api/university";
const Home = () => {
  return (
    <Layout>
      <section className="pt-16 pb-8" id="Hero">
        <Container>
          <div className="text-center font-bold text-3xl text-primary-darkest">
            All university informations in one place
          </div>
          <div className="text-center mt-4">
            <select
              className="text-xs bg-primary-lighter font-semibold px-4 py-2 rounded-full focus:outline-none"
              value="default"
            >
              <option value="default">All country</option>
            </select>
          </div>
        </Container>
      </section>
      <section className="mb-8" id="UniList">
        <Container>
          <table className="w-full border border-primary-lighter">
            <thead className="bg-primary-lighter font-semibold text-xs uppercase text-left">
              <tr>
                <th scope="col" className="py-2 px-4">
                  Name
                </th>
                <th scope="col" className="py-2 px-4">
                  Country
                </th>
                <th scope="col" className="py-2 px-4">
                  Website
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary-lighter border-r border-l border-b border-primary-lighter text-sm">
              {uniList.map((uni, index) => (
                <tr>
                  <td className="py-2 px-4">{uni.name}</td>
                  <td className="py-2 px-4">{uni.country}</td>
                  <td className="py-2 px-4">
                    <a
                      className="text-primary cursor-pointer"
                      href={uni.web_pages[0]}
                    >
                      {uni.web_pages[0]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
      <section className="mb-8">
        <Container>
          <div className="rounded bg-primary-lightest p-8">
            <div className="font-bold text-2xl text-center">
              Subscribe to our newsletter
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
