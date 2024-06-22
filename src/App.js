
import { useState } from 'react';
import './App.css';
import NewsList from "./Components/NewsList";


function App(url) {
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

 
  
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark" >
        <div className="container-fluid">
          <a href={url} className="navbar-brand" ><span className="badge bg-light text-dark fs-4">NewsApp</span></a>
          <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbar" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <div className="nav-link active text-white fw-bold" onClick={()=>handleCategoryClick("technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link text-white fw-bold"  onClick={()=>handleCategoryClick("business")}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link text-white fw-bold" onClick={()=>handleCategoryClick("health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link text-white fw-bold" onClick={()=>handleCategoryClick("sports")}>Sports</div>
              </li>
               <li className="nav-item">
                <div className="nav-link text-white fw-bold" onClick={()=>handleCategoryClick("entertaiment")}>Entertaiment</div>
              </li> 
            </ul>

            <form className="d-flex" onSubmit={handleSearch} role="search">
              <input className="form-control me-2" type="text" placeholder="Search" name="Search"/>
              <button className=" btn btn-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     

      <div className="section h-auto ">
        {/* <Navbar setCategory={setCategory}/> */}
      <NewsList category={category} searchTerm={searchTerm} />
      </div>
      
    
    </div>
  );
}

export default App;
