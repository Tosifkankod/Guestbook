import { useEffect, useState } from 'react';
import EntryItem from './EntryItem/EntryItem';
import ReactPaginate from "react-paginate";
import axios from 'axios';

const Entries = () => {
  // Stores the fetched entries
  const [entries, setEntries] = useState([]);

  // Track loading state
  const [loading, setLoading] = useState(true);

  // Track error state
  const [error, setError] = useState(null);

  // Track total entries for pagination
  const [totalEntries, setTotalEntries] = useState(0);

  // Current page for pagination
  const [currentPage, setCurrentPage] = useState(0);

  const entriesPerPage = 5;

  // Fetch entries from the API
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get("/api/v1/guest", {
          params: { page: currentPage + 1, limit: entriesPerPage },
        });
        setEntries(res.data.data);
        setTotalEntries(res.data.pagination.totalEntries);

        // setting loading false
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch entries");
        setLoading(false);
      }
    };

    fetchEntries();
  }, [currentPage]);

  // Handle page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (entries.length === 0) {
    return <div>No entries found</div>;
  }

  return (
    <div className="p-4  border-gray-300 pb-20 flex flex-col">
      <div className="flex-grow">
        {entries.map((entry) => (
          <EntryItem key={entry._id} createdAt={entry.createdAt} Name={entry.Name} Comment={entry.Comment} Email={entry.Email} />
        ))}
      </div>
      <div className="mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(totalEntries / entriesPerPage)} // Total pages based on totalEntries
          onPageChange={handlePageClick}
          containerClassName={"flex items-center justify-center gap-2"}
          pageClassName={"px-3 py-1 rounded-md border border-gray-300"}
          activeClassName={"bg-indigo-600 text-white"}
          previousClassName={"px-3 py-1 rounded-md border border-gray-300"}
          nextClassName={"px-3 py-1 rounded-md border border-gray-300"}
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </div>
    </div>
  );
};

export default Entries;
