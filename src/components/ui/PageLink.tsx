import { useSearchParams, Link } from "react-router-dom";

type PageLinkProps = {
  numberPage?: number,
  query?: string,
  variant:string
}

export default function PageLink({ numberPage, query, variant='page' }: PageLinkProps){
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  if(variant == 'page' && query && numberPage) return(
    <Link  
      to={`/search/?q=${query}&page=${numberPage}`}
      className={`py-3 px-4.5 text-white rounded-xl select-none cursor-pointer ${page === numberPage ? 'bg-button' : 'bg-secondary'}`}
      aria-current={numberPage === page ? 'page' : undefined}
      aria-label={`Page ${numberPage}`}
      >{numberPage}</Link>
  )
  if(variant == 'etc') return(
    <span  
        aria-hidden="true"
        className={`bg-secondary select-none py-3 px-5 text-white rounded-xl `}
      >...</span>
  )
  return null
}