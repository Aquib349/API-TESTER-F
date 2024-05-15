import "./table.css";
import PropTypes from "prop-types";

function Table({ performanceData }) {
  return (
    <>
      <div className="table-component">
        <div className="main">
          <div className="table-content bg-blue">
            <span className="">Page</span>
            <span className="col-span-2">URL</span>
            <span className="">LoadTime</span>
          </div>
          {performanceData.map((val) => (
            <div key={val.id} className="table-content text-sm">
              <span className="">
                {val.title.replace(/ - eContracts.*/, "")}
              </span>
              <span className="col-span-2">{val.url}</span>
              <span className="">
                {Math.round((val.loadTime / 1000) * 10) / 10}s
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Table.propTypes = {
  performanceData: PropTypes.array.isRequired,
};

export default Table;
