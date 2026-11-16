import React from "react";
import { useState, useEffect, useRef } from "react";

function Difference() {
  const [sales, setSales] = useState(0); 

  const customerCount = useRef(0); 

  useEffect(() => {
    console.log("Shop Opened"); 
  }, []);

  return (
    <>
      <h1>Sales: {sales}</h1>
      <h2>Customers: {customerCount.current}</h2>

      <button onClick={() => setSales(sales + 100)}>
        Sale
      </button>

      <button onClick={() => customerCount.current++}>
        Customer Entered
      </button>
    </>
  );
}
export default Difference







// Need UI to update when data changes? → useState
// Need to fetch data, set timers, or interact with external systems? → useEffect
// Need a DOM reference or persistent value without re-rendering? → useRef