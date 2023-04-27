import React from "react";

function Category({ categories, filterItems }) {
  return (
    <div className="btn-container">
      <h2
       className="categorybtn-h2"
      >
        Categories
      </h2>
      {categories.map((category, index) => {
        console.log(category, index, "coming from category....");
        return (
          
            <button
            type="button"
            className="filtered-category"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>

          
        );
      })}
      {/* <button onClick={()=>filterItems('lunch')}>breakfast</button>
        <button onClick={()=>filterItems('all')}>all</button> */}
    </div>
  );
}

export default Category;
