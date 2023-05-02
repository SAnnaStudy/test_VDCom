import React from "react";

export const Paginator = ({pages, currentPage, onPrevClick, onNextClick, currentPageNumber}) => {
    return(
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" onClick={()=>onPrevClick()}>Previous</a></li>
            {
                pages.map((p) => {
                    return (
                        <li class={(currentPageNumber== p) ? "page-item active": "page-item"} key={p.index}><a class="page-link" href="#" onClick={()=>currentPage(p)} style={{}}>{p}</a></li>
                    )
                })
            }
            <li class="page-item"><a class="page-link" href="#" onClick={()=>onNextClick()}>Next</a></li>
          </ul>
        </nav>
    )
}