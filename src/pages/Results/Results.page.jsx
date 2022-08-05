import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import { BsArrowLeft, BsArrowRight, BsChevronBarLeft } from "react-icons/bs";
import { useParams } from "react-router-dom";
import api from "../../api";
import FilterCard from "../../components/Card/FilterCard.component";
import FilterBar from "../../components/Filter/FilterBar.component";
import SelectItems from "../../components/Form/SelectItems.component";
import "./Results.style.scss";
const Results = ({ queryNone }) => {
  const params = useParams();
  const [query, setQuery] = useState(queryNone);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [lastPageItemNumber, setLastPageItemNumber] = useState(0);

  useEffect(() => {
    params.query ? setQuery(params.query) : setQuery("");
  }, []);

  // useEffect(() => {
  //   api.users
  //     .getAll(query, currentPage)
  //     .then((res) => {
  //       res?.headers?.link
  //         ? setLastPage(
  //             res.headers.link
  //               .split(",")[2]
  //               .split(";")[0]
  //               .split("_page=")[1]
  //               .split("&")[0]
  //           )
  //         : setLastPage(0);
  //       setResults(res.data);
  //     })
  //     .catch((error) => console.error(error));

  //   api.users.getAll(query, lastPage).then((res) => {
  //     console.log(res);
  //     setLastPageItemNumber(res.data.length);
  //   });
  // }, [query]);

  // useEffect(() => {
  //   api.users
  //     .getAll(query, currentPage)
  //     .then((res) => {
  //       setResults(res.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, [query, currentPage]);

  const reviews = [
    { id: 1, label: "Reviews", value: "Reviews" },
    { id: 2, label: "Newest", value: "Newest" },
    { id: 3, label: "Oldest", value: "Oldest" },
    { id: 4, label: "Highest Price", value: "highest price" },
    { id: 5, label: "Lowest Price", value: "lowest price" },
  ];
  const result = {
    lastName: "haider",
    firstName: "alisar",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-10">
            <FilterBar
              query={query}
              setQuery={setQuery}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div className="row bg-gray">
          <div className="col-12 d-flex justify-content-between align-items-center p-1  py-4 px-md-5">
            <div className="col-6 col-md-3">
              <span className="text-muted">
                {lastPage === 0
                  ? lastPageItemNumber
                  : (lastPage - 1) * 8 + lastPageItemNumber}{" "}
                results found
              </span>
            </div>
            <div className="col-6 col-md-3">
              <SelectItems
                searchTitle="Sort by"
                multi={false}
                options={reviews}
              />
            </div>
          </div>
          <div className="col-12  px-5">
            <FilterCard result={result}></FilterCard>
            {results.length ? (
              results.map((result) => (
                <FilterCard key={result.id} result={result}></FilterCard>
              ))
            ) : (
              <div className="row ">
                <h3 className="text-center mt-3">could not found</h3>
              </div>
            )}
          </div>
          <div className="col-12">
            {currentPage != 1 ? (
              <Button
                className="mt-2"
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                <BsArrowLeft></BsArrowLeft>
              </Button>
            ) : null}
            <span className={`${currentPage == 1 ? "ms-5" : ""}`}>
              {" "}
              page {currentPage} of {lastPage === 0 ? 1 : lastPage}{" "}
            </span>

            {currentPage < lastPage ? (
              <Button
                className="mt-2"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                <BsArrowRight></BsArrowRight>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
