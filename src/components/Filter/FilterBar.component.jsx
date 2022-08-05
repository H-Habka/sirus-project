import React, { setState, useEffect, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import api from "../../api";
// import Search from '../../components/SearchBar/Search.component';
// import CustomFilter from "../../components/CustomFilter/test/CustomFilter.component";
import CustomFilter from "../CustomFilter/CustomFilter.component";
import { labelCategroiesSelector } from "../../redux/categories/categories.selector";
import SelectItems from "../Form/SelectItems.component";
// import { BsSearch } from 'react-icons/bs';
import "./FilterBar.style.scss";
const FilterBar = ({ query, setQuery, setCurrentPage ,categories}) => {
  const [industry, setIndustry] = useState([])
  const [topics, setTopics] = useState([])
  const [languages, setLanguages] = useState([])
  const [kinds, setKinds] = useState([])


    const getIndustries = () => {
      api.sirius.industry.getTypes().then(res => {
        setIndustry(res.data.map(item => ({id: item.id, label:item.name, value:item.id, type:"industry"})))
      }).catch(err => {
        console.log(err)
      })
    }
    const getTopics = () => {
      api.sirius.topics.getAll().then(res => {
        setTopics(res.data.map(item => ({id: item.id, label:item.name, value:item.id, type:"topic"})))
      }).catch(err => {
        console.log(err)
      })
    }
    const getLanguages = () => {
      api.languages.getAll().then(res => {
        setLanguages(res.data.map(item => ({id: item.id, label:item.name, value:item.id, type:"language"})))
      }).catch(err => {
        console.log(err)
      })
    }
    const getKinds = () => {
      api.sirius.kinds.getAll().then(res => {
        setKinds(res.data.map(item => ({id: item.id, label:item.name, value:item.id, type:"Kind"})))
      }).catch(err => {
        console.log(err)
      })
    }
   
    
  useEffect(() => {
    getIndustries()
    getTopics()
    getLanguages()
    getKinds()
  },[])

  let filterCategories = categories.map(category => {
      return {items :category.subMenu, name :category.title}
  })


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
  console.log(filters);

  useEffect(() => {
    api.sirius.search(filters)
  },[filters])


  return (
    <>
      <div className="py-5 filter-bar">
        <div className="row mx-0">
          <div className="col-12">
            <div className="row bubble-bar">
              <BsSearch size={25} className="filter-search-icon"></BsSearch>
              {filters.map((filter) => (
                <div className="filter-bubble rounded">
                  <span>{filter.label || filter.text}</span>
                  <BsX
                    className="dismiss-btn"
                    onClick={() => {
                      setFilters([
                        ...filters.filter((fill) => filter.value !== fill.value),
                      ]);
                    }}
                  ></BsX>
                </div>
              ))}
              {filters[0] && (
                <div
                  role= "button"
                  className="filter-bubble rounded clear-all "
                  onClick={() => {
                    setFilters([]);
                  }}
                >
                  <span>clear All</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 mt-5 filter-btns search-bar">
            <CustomFilter
              filters={filters}
              setFilters={setFilters}
              categories={filterCategories}
              filterName={"Categories"}
            ></CustomFilter>
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={industry}
              searchTitle="Industry"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={topics}
              searchTitle="topics"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={languages}
              searchTitle="languages"
              multi={false}
              classes="px-3 my-md-2"
            />
            <SelectItems
              onChange={(values) => handleChange(values)}
              options={kinds}
              searchTitle="kinds"
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


const mapStateToProps = createStructuredSelector({
  categories : labelCategroiesSelector
})

export default connect(mapStateToProps)(FilterBar);
