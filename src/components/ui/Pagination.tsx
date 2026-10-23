
import PageLink from "./PageLink";

type PaginationProps = {
  query: string,
  total_pages: number,
  page: number
}

export default function Pagination({ query, total_pages, page }:PaginationProps){
    if(page >= 4 && total_pages - page > 3) return (
      <>
        <li><PageLink query={query} numberPage={1} variant="page"/></li>
        <li><PageLink variant="etc"/></li>
        <li><PageLink query={query} numberPage={page - 1} variant="page"/></li>
        <li><PageLink query={query} numberPage={page} variant="page"/></li>
        <li><PageLink query={query} numberPage={page + 1} variant="page"/></li>
        <li><PageLink variant="etc"/></li>
        <li><PageLink query={query} numberPage={total_pages} variant="page"/></li>
      </>
    )

    else if(page >= 5 && total_pages - page <= 3) return(
      <>
        <li><PageLink query={query} numberPage={1} variant="page"/></li>
        <li><PageLink variant="etc"/></li>
        <li><PageLink query={query} numberPage={total_pages - 4} variant="page"/></li>
        <li><PageLink query={query} numberPage={total_pages - 3} variant="page"/></li>
        <li><PageLink query={query} numberPage={total_pages - 2} variant="page"/></li>
        <li><PageLink query={query} numberPage={total_pages - 1} variant="page"/></li>
        <li><PageLink query={query} key={total_pages} numberPage={total_pages} variant="page"/></li>
      </>
    )
    
    else return(
      <>
        <li><PageLink query={query} numberPage={1} variant="page"/></li>
        <li><PageLink query={query} numberPage={2} variant="page"/></li>
        <li><PageLink query={query} numberPage={3} variant="page"/></li>
        <li><PageLink query={query} numberPage={4} variant="page"/></li>
        <li><PageLink query={query} numberPage={5} variant="page"/></li>
        <li><PageLink variant="etc"/></li>
        <li><PageLink query={query} numberPage={total_pages} variant="page"/></li>
      </>
    )     
}