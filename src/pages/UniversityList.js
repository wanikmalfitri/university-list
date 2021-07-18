import React, { useState, useEffect, useRef } from "react";
import { Container, CustomTable } from "../components";
import { uniList } from "../api/university";
import { union, sortBy, debounce } from "lodash";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const UniversityList = () => {
  const [searchUni, setSearchUni] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortByObj, setSortByObj] = useState("name");
  const [isSortAsc, setIsSortAsc] = useState(true);
  const [universityList, setUniversityList] = useState(uniList);

  useEffect(() => {
    const filterUniversities = (arr, keyword) => {
      let filteredList = arr.map((uni) => {
        return {
          name: uni.name ? uni.name : "name",
          country: uni.country ? uni.country : "country",
          website: uni.web_pages.length > 0 ? uni.web_pages[0] : "-",
        };
      });

      // Filter by university name
      let searchedByName = filteredList.filter((fl) =>
        fl.name
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(keyword.replace(/\s+/g, "").toLowerCase())
      );
      // Filter by country
      let searchedByCountry = filteredList.filter((fl) =>
        fl.country
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(keyword.replace(/\s+/g, "").toLowerCase())
      );
      let unionList = union(searchedByName, searchedByCountry);

      let sortedList = sortBy(unionList, [sortByObj]);

      if (!isSortAsc) {
        sortedList = sortedList.reverse();
      }

      setUniversityList(sortedList);
    };
    filterUniversities(uniList, debouncedSearch);
  }, [debouncedSearch, sortByObj, isSortAsc]);

  const debouncedSave = useRef(
    debounce((nextValue) => setDebouncedSearch(nextValue), 500)
  ).current;

  const handleSearch = (event) => {
    const { value: nextValue } = event.target;
    setSearchUni(event.target.value);
    debouncedSave(nextValue);
  };

  const columns = [
    {
      Header: "University",
      id: "name",
      accessor: (list, index) => (
        <>
          <div className="w-10 inline-block">{index + 1}</div>
          <span>{list.name}</span>
        </>
      ),
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Website",
      id: "website",
      accessor: (list) => (
        <a className="text-primary" href={list.website}>
          {list.website}
        </a>
      ),
    },
  ];

  const columnsMobile = [
    {
      Header: "University",
      id: "details",
      accessor: (list) => (
        <div className="">
          {list.name} - {list.country} <br />
          <a href={list.website} className="text-primary">
            {list.website}
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="pt-16 pb-32 bg-primary" id="Hero">
        <Container>
          <div className="text-center font-bold text-3xl text-white">
            All universities in a single website
          </div>
          <div className="text-center mt-16 space-x-4 grid grid-cols-2 md:flex justify-between">
            <div className="flex">
              <div className="hidden md:block relative">
                <input
                  type="search"
                  placeholder="Search university or country"
                  value={searchUni}
                  onChange={(e) => handleSearch(e)}
                  className="block text-xs w-auto md:w-72 bg-primary-lighter font-semibold pl-10 pr-4 py-2 rounded focus:outline-none focus:border-primary-darkest border-2"
                />
                <div className="absolute inset-y-0 top-0 left-4 pr-3 flex items-center pointer-events-none">
                  <SearchIcon className="w-4 h-4" />
                </div>
              </div>
              <input
                type="search"
                placeholder="Search"
                value={searchUni}
                onChange={(e) => handleSearch(e)}
                className="block md:hidden text-xs w-auto md:w-72 bg-primary-lighter font-semibold px-4 py-2 rounded focus:outline-none focus:border-primary-darkest border-2"
              />
            </div>

            <div className="flex items-center justify-end">
              <span className="hidden md:block text-white text-right text-xs font-semibold mr-2">
                Sort by
              </span>
              <div className="relative w-full mr-2">
                <select
                  className="text-xs h-full w-full bg-primary-lighter font-semibold pl-4 pr-4 md:pr-10 py-2 rounded focus:outline-none focus:border-primary-darkest border-2 appearance-none"
                  onChange={(e) => setSortByObj(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="country">Country</option>
                </select>
                <div className="hidden md:flex absolute inset-y-0 top-0 right-4 pl-3 items-center pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </div>

              <button
                onClick={() => setIsSortAsc(!isSortAsc)}
                className="h-full py-2 px-3 rounded bg-primary-darkest text-white"
              >
                {isSortAsc ? (
                  <ArrowSmUpIcon className="text-white w-4 h-4" />
                ) : (
                  <ArrowSmDownIcon className="text-white w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden md:block mb-16 -mt-28" id="UniListDesktop">
        <Container>
          <CustomTable columns={columns} data={universityList} />
        </Container>
      </section>

      <section className="block md:hidden mb-16 -mt-24" id="UniListDesktop">
        <Container>
          <CustomTable columns={columnsMobile} data={universityList} />
        </Container>
      </section>
    </>
  );
};

export default UniversityList;
