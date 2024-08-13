import React, { useContext } from "react";
import { MyContext } from "../App";

const Price = ({ setPopUpShow }) => {
  const { price, setPopUpHeading } = useContext(MyContext);
  return (
    <>
      <div className="  md:px-20 w-full mx-auto py-16" ref={price}>
        <div className="text-center mb-3">
          <p className="md:text-4xl text-2xl font-bold text-black">
            Flat Price
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 ">
            We offer Furnished Flat Within Quotated Price
          </p>
        </div>

        <table className="table-auto md:w-full w-full mx-auto text-center border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 md:text-base text-[11px]">Type</th>
              <th className="px-4 py-2 md:text-base text-[11px]">
                Carpet Area
              </th>
              <th className="px-4 py-2 md:text-base text-[11px]">Price</th>
              <th className="px-4 py-2 md:text-base text-[11px]">
                Price Breakup
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              3 BHK
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              1334 Sq.Ft and 1690 Sq.Ft	
               
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              On Request
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                <button
                  onClick={() => {
                    setPopUpShow(true);
                    setPopUpHeading("Request For Price Breakup");
                  }}
                  className="bg-logoBg  text-white font-bold py-2 px-4 rounded"
                >
                  Price 
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              4 BHK	
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              1618 Sq.Ft	
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                {" "}
                On Request
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                <button
                  onClick={() => {
                    setPopUpShow(true);
                    setPopUpHeading("Request For Price Breakup");
                  }}
                  className="bg-logoBg  text-white font-bold py-2 px-4 rounded"
                >
                  Price 
                </button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              4.5 BHK	
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              2356 Sq.ft	
             
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
              On Request
              </td>
              <td className="border px-4 py-2 md:text-base text-[11px]">
                <button
                  onClick={() => {
                    setPopUpShow(true);
                    setPopUpHeading("Request For Price Breakup");
                  }}
                  className="bg-logoBg  text-white font-bold py-2 px-4 rounded"
                >
                  Price 
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Price;
