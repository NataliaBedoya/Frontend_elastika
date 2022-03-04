function Paginator({ totalPages, setPage, page }) {
  return (
    <nav style={{ margin: '-25px 10px 0 0px' }} aria-label="Page navigation example">
      <ul className="pagination pagination-sm justify-content-end">
        <li className={`page-item ${page === 0 || totalPages.length === 0 ? 'disabled' : ''}`}>
          <button
            onClick={() => { setPage(prevPage => prevPage - 1) }}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true" >&laquo;</span>
          </button>
        </li>
        {
          totalPages.map((el, i) =>
            <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
              <button onClick={() => {setPage(i)}} className="page-link">{i + 1}</button>
            </li>)
        }
        <li className={`page-item ${page === totalPages.length - 1 || totalPages.length === 0 ? 'disabled' : ''}`}>
          <button
            onClick={() => { setPage(prevPage => prevPage + 1) }}
            className="page-link"
            aria-label="Next"
          >
            <span aria-hidden="true" >&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Paginator