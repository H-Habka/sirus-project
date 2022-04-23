import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Background from '../../assets/img/flex_slides/slide_3_thumb.jpg'
import './Categories.style.scss';
import { BsArrowLeft, BsArrowRight, BsChevronBarLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import api from '../../api';
import FilterCard from '../../components/Card/FilterCard.component';
import SelectItems from '../../components/Form/SelectItems.component'


const Categories = ({ queryNone }) => {
  
  const params = useParams()
  const [query, setQuery] = useState(queryNone)
  const [results, setResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)
  const [lastPageItemNumber, setLastPageItemNumber] = useState(0)

  useEffect(() => {
      params.query ? setQuery(params.query) : setQuery("")

  }, [])


  useEffect(() => {
      api.users.getAll(query, currentPage).then(res => {
          res?.headers?.link ?
              setLastPage(res.headers.link.split(",")[2].split(";")[0].split("_page=")[1].split("&")[0]) :
              setLastPage(0)
          setResults(res.data)
      }).catch(error => console.error(error))

      api.users.getAll(query, lastPage).then(res => {
          console.log(res)
          setLastPageItemNumber(res.data.length)
      })
  }, [query])


  useEffect(() => {
      api.users.getAll(query, currentPage).then(res => {
          setResults(res.data)
      }).catch(error => console.error(error))

  }, [query, currentPage])


  const reviews = [
      { id: 1, label: "Reviews", value: "Reviews" },
      { id: 2, label: "Newest", value: "Newest" },
      { id: 3, label: "Oldest", value: "Oldest" },
      { id: 4, label: "Highest Price", value: "highest price" },
      { id: 5, label: "Lowest Price", value: "lowest price" },
  ]
  return (
    <>
      <div className="container categories">
        <div className="row my-3">
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
            <div className="col-md-3 col-6 item-link">
              <img src={Background} className="rounded" width="100" height="100" />
              <div className="title">
                  Business
              </div>
            </div>
        </div>
      </div>

      <Container fluid className='bg-gray py-4 px-1 px-md-5'>
                    <div className="row justify-content-between">
                        <div className="col-3">

                        </div>
                        <div className="col-3">
                            <SelectItems searchTitle="Sort by" multi={false} options={reviews} />

                        </div>
                    </div>
                    {
                        results.length ?
                            results.map(result => (
                                <FilterCard key={result.id} result={result}></FilterCard>
                            ))
                            :
                            <div><h3 className='text-center mt-3'>could not found</h3></div>

                    }
                    {
                        currentPage != 1 ?
                            <Button className="mt-2" onClick={() => {
                                setCurrentPage(currentPage - 1)
                            }}><BsArrowLeft></BsArrowLeft></Button> : null
                    }

                    <span className={`${currentPage == 1 ? "ms-5" : ""}`} > page {currentPage} of {lastPage === 0 ? 1 : lastPage} </span>

                    {
                        currentPage < lastPage ?
                            <Button className="mt-2" onClick={() => {
                                setCurrentPage(currentPage + 1)
                            }}><BsArrowRight></BsArrowRight></Button> : null
                    }
                </Container>
    </>
  )
}

export default Categories