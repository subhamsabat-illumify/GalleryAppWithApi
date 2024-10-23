// import { FiSearch } from "react-icons/fi";


// export default function SearchBar({btn,setBtn}) {

//   return (
//     <div className='SearchBox'>
//         <div className="search">
//             <input type="search" value={btn} onChange={(e)=>{setBtn(e.target.value)}}/> 
//             <FiSearch className="Searchbutton" />
//         </div>
        
        
//         <div className="button">
//             <button onClick={()=>{setBtn('mountain');console.log('clicked mountain')}}>Mountain</button>
//             <button onClick={()=>{setBtn('beach');console.log('clicked beach')}}>Beaches</button>
//             <button onClick={()=>{setBtn('bird');console.log('clicked birds')}}>Birds</button>
//             <button onClick={()=>{setBtn('food');console.log('clicked food')}}> Food</button>
//         </div>
//     </div>
//   )
// }



// import { FiSearch } from "react-icons/fi";
// import { useState } from 'react';

// export default function SearchBar({ btn, setBtn }) {

//   // Handle the input change and set a default value if the input is empty
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     if (value.trim().length === 0) {
//       // setBtn('mountain'); // Set a default value when input is empty
//       setBtn('home')
//     } else {
//       setBtn(value); // Update with the current input value
//     }
//   };

//   const handleSearchClick = () => {
//     console.log('Search icon clicked, current input:', btn);
//     setBtn(btn); // This will update the value based on the current input
//   };

//   return (
//     <div className="SearchBox">
//       <div className="search">
//         <input 
//           type="search" 
//           value={btn} 
//           onChange={handleInputChange}  // Track the length and set default if needed
//         />
//         <button onClick={handleSearchClick} className="Searchbutton">
//           <FiSearch />
//         </button>
//       </div>

//       <div className="button">
//         <button onClick={() => { setBtn('mountain'); console.log('clicked mountain'); }}>Mountain</button>
//         <button onClick={() => { setBtn('beach'); console.log('clicked beach'); }}>Beaches</button>
//         <button onClick={() => { setBtn('bird'); console.log('clicked birds'); }}>Birds</button>
//         <button onClick={() => { setBtn('food'); console.log('clicked food'); }}>Food</button>
//       </div>
//     </div>
//   );
// }


import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

export default function SearchBar({ btn, setBtn }) {

  // Handle the input change and set a default value if the input is empty
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.trim().length === 0) {
      setBtn(' '); // Set a default value when input is empty
    } else {
      setBtn(value); // Update with the current input value
    }
  };

  const handleSearchClick = () => {
    console.log('Search icon clicked, current input:', btn);
    setBtn(btn); // This will update the value based on the current input
  };

  return (
    <div className="SearchBox">
      <div className="search">
        <input 
          type="search" 
          value={btn} 
          onChange={handleInputChange}  // Track the length and set default if needed
        />
        <button onClick={handleSearchClick} className="Searchbutton">
          <FiSearch id='search'/>
        </button>
      </div>

      <div className="button">
        <button onClick={() => { setBtn('mountain'); console.log('clicked mountain'); }}>Mountain</button>
        <button onClick={() => { setBtn('beach'); console.log('clicked beach'); }}>Beaches</button>
        <button onClick={() => { setBtn('bird'); console.log('clicked birds'); }}>Birds</button>
        <button onClick={() => { setBtn('food'); console.log('clicked food'); }}>Food</button>
      </div>
    </div>
  );
}


