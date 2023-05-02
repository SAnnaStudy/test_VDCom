import './../App.css';
import React from 'react';
import { Table } from '../components/Table';
import { Paginator } from '../components/Paginator';
import { ErrorPage } from './ErrorPage';
import { Searcher } from '../components/Searcher';
import { Add } from '../components/Add';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Sidebar from './../components/Sidebar';

function Main (){
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)
  const [directionSort, setDirectionSort] = React.useState(false)
  const [totalCountPage, setTotalCountPage] = React.useState(0)
  const [totalCountRows, setTotalCountRows] = React.useState(0)
  const [currentPageNumber, setCurrentPageNumber] = React.useState(1)
  const [searchValue, setSearchValue] = React.useState('')
  const [openPop, setOpenPop] = React.useState(false);
  const [rowToEdit, setRowToEdit] = React.useState(null);
  const limitCountOnPage = 10
  let pages = []

  React.useEffect(() => {
    fetch(`https://644b811517e2663b9df0ecd8.mockapi.io/things`)
    .then((res) => res.json())
    .then((arr) => {
        setItems(arr)
        setIsLoading(false)
        setIsError(false)
        setTotalCountPage(arr.length)
        setTotalCountRows(totalCountPage/limitCountOnPage)
    })
    .catch((err) => {
        console.error(err)
        setIsLoading(false)
        setIsError(true)
    })
  }, [isLoading, isError])


  const lastIndex = currentPageNumber * limitCountOnPage
  const firstIndex = lastIndex - limitCountOnPage
  const currentThingDueToIndex = items.slice(firstIndex, lastIndex)
  console.log(currentThingDueToIndex)
  const currentPage = (page) => {
    setCurrentPageNumber(page)
  }
  for(let i=1; i<=totalCountRows; i++){
    pages.push(i)
  }
  const sortField = (field) => {
    const copyArr = items.concat()
    let sortArr = []
    if(directionSort){
      sortArr = copyArr.sort(
        (a,b)=>{return a[field] > b [field] ? 1 : -1}
      )
    }
    else{
      sortArr = copyArr.reverse(
        (a,b)=>{return a[field] < b [field] ? 1 : -1}
      )
    }
    setItems(sortArr)
    setDirectionSort(!directionSort)
  }
  const editTR = (id) => {
    setRowToEdit(id)
    setOpenPop(true);
  }
  const deleteTR = (id) => {
    setItems(items.filter((_, idx) => idx !== id))
  }
  const onPrevClick = () => {
    if(currentPageNumber != 1){
      console.log(currentPageNumber)
      setCurrentPageNumber(currentPageNumber - 1)
    }
  }
  const onNextClick = () => {
    if(currentPageNumber != totalCountRows){
      setCurrentPageNumber(currentPageNumber + 1)
    }
  }
  const handleAddSubmit = (newRow) => {
    console.log(newRow)
    rowToEdit != null ?
    setItems([...items, newRow])
    : setItems(
      items.map((r, i)=>{
        if(i !== rowToEdit) return r
        return newRow
      })
    )
    setRowToEdit(null)
  }
  
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="main_part">
      <Searcher setSearchValue={setSearchValue}/>
        <div className="first_line">
          <h3>Total contacts</h3>
          <button type='button' onClick={()=>setOpenPop(true)}>Add</button>
        </div>
        {
          isError ?
            <ErrorPage/>
          :
            <div>
              <Table items={currentThingDueToIndex} isLoading={isLoading} sortField={sortField} directionSort={directionSort} editTR={editTR} deleteTR={deleteTR} searchValue={searchValue}/>
              <div className='paginator-div'><Paginator currentPageNumber={currentPageNumber} pages={pages} currentPage={currentPage} onPrevClick={onPrevClick} onNextClick={onNextClick}/></div>
            </div>
        }
        {
          openPop && (
            <Add setOpenPop={setOpenPop} onSubmit={handleAddSubmit} setRowToEdit={setRowToEdit} defaultValue={rowToEdit !== null && items[rowToEdit]}/>
        )
        }
      </div>
    </div>
  );
}
export default Main;