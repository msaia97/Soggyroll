import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search animes</span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search animes"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

// const SearchBox = (props) => {
//     return (
//       <form action="/" method="get">
//         <label htmlFor="header-search">
//           <span className="visually-hidden">Search anime</span>
//         </label>
//         <input
//           type="text"
//           className="header-search"
//           placeHolder="Search anime"
//           name="s"
//         />
//         <button type="submit">Search</button>
//       </form>
//     );
// }

export default SearchBox;