import React, { setState, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
// import Search from '../../components/SearchBar/Search.component';
import CustomFilter from "../../components/CustomFilter/CustomFilter.component";
import SelectItems from "../Form/SelectItems.component";
// import { BsSearch } from 'react-icons/bs';
import "./FilterBar.style.scss";
const FilterBar = ({ query, setQuery, setCurrentPage }) => {
  const filterCategories = [
    {
      name: "Business",
      items: ["carrer Advice"],
    },
    {
      name: "Sales & marketing",
      items: ["wael"],
    },
    {
      name: "Funding",
      items: ["hello"],
    },
  ];
  const country = [
    { id: 1, cat: "country", label: "Afghanistan	", value: "Afghanistan	" },
    { id: 2, cat: "country", label: "Albania", value: "Albania" },
    { id: 3, cat: "country", label: "Algeria", value: "Algeria" },
  ];
  const city = [
    { id: 1, cat: "city", label: "Amman", value: "1" },
    { id: 2, cat: "city", label: "Irbid", value: "2" },
    { id: 3, cat: "city", label: "Zarqa", value: "3" },
  ];
  const Industry = [
    { id: 1, cat: "Industry", label: "Multimedia", value: "Multimedia" },
    {
      id: 2,
      cat: "Industry",
      label: "Productivity apps",
      value: "Productivity apps",
    },
    {
      id: 3,
      cat: "Industry",
      label: "Enterprise Software",
      value: "Enterprise Software",
    },
  ];
  const GeoFocus = [
    { id: 1, cat: "days", label: "Monday", value: "Monday" },
    { id: 2, cat: "days", label: "Tuesday", value: "Tuesday" },
    { id: 3, cat: "days", label: "Wednesday", value: "Wednesday" },
    { id: 4, cat: "days", label: "Thursday", value: "Thursday" },
    { id: 5, cat: "days", label: "Friday", value: "Friday" },
    { id: 6, cat: "days", label: "Saturday", value: "Saturday" },
    { id: 7, cat: "days", label: "Sunday", value: "Sunday" },
  ];
  const FundingStage = [
    { id: 1, label: "Idea exploration", value: "Idea exploration" },
    { id: 2, label: "Idea development", value: "Idea development" },
    { id: 2, label: "Prototype testing", value: "Prototype testing" },
    { id: 2, label: "Launch", value: "Launch" },
    { id: 2, label: "Seed", value: "Seed" },
    { id: 2, label: "Growth", value: "Growth" },
    { id: 2, label: "Maturity", value: "Maturity" },
    { id: 2, label: "Acquired", value: "Acquired" },
  ];
  const FundType = [
    { id: 1, label: "Male", value: "male" },
    { id: 2, label: "Female", value: "female" },
    { id: 3, label: "Both", value: "both" },
  ];

  const [filters, setFilters] = useState([]);
  const handleChange = (values) => {
    let idx = filters.findIndex((filter) => {
      return filter.label === values[0].label;
    });

    if (idx >= 0) {
      filters[idx] = values[0];
      setFilters([...filters]);
    } else {
      setFilters([...filters, values[0]]);
    }
  };
  return (
    <>
      <div className="py-5 filter-bar">
        <div className="row mx-0">
          <div className="col-12">
            <div className="row bubble-bar">
              <BsSearch size={25} className="filter-search-icon"></BsSearch>
              {filters.map((filter) => (
                <div className="filter-bubble rounded">
                  <span>{filter.label}</span>
                  <BsX
                    className="dismiss-btn"
                    onClick={() => {
                      setFilters([
                        ...filters.filter((fill) => filter.cat !== fill.cat),
                      ]);
                    }}
                  ></BsX>
                </div>
              ))}
              {filters[0] && (
                <div
                  className="filter-bubble rounded clear-all"
                  onClick={() => {
                    setFilters([]);
                  }}
                >
                  <span>clear All</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 mt-5 filter-btns">
            <CustomFilter
              filters={filters}
              setFilters={setFilters}
              categories={filterCategories}
              filterName={"Categories"}
            ></CustomFilter>
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={country}
              searchTitle="Country"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={city}
              searchTitle="City"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={Industry}
              searchTitle="Industry"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={GeoFocus}
              searchTitle="Geo focus "
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={FundingStage}
              searchTitle="Funding Stage"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={FundType}
              searchTitle="Fund type"
              multi={false}
              classes="px-3 my-md-2"
            />

          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
