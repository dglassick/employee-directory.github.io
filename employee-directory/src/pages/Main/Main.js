import React, {useState, useEffect} from "react";
import CardHolder from "../../components/CardHolder/CardHolder";
import Choices from "../../components/Choices/Choices";
import Search from "../../components/Search/Search";
import Wrapper from "../../components/Wrapper/Wrapper";
import API from "../../utils/API";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import SearchBar from "../../components/Search/Search";



const Main = () => {

    const [allEmployees, setAllEmployees] = useState([])
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = setState("");
    const [stateFilter, setStateFilter] = useState('none');
    const [view, setView] = useState(false);
    const [fireEmployee, setFireEmployee] = useState(false);
    const [employee, setEmployee] = useState({
        name: "Example",
        image: "",
        location: "California",
        email: "example@example.com",
        phone: "555-555-5555",
        department: "Example Department"
    });

    
    const handleInputChange= (event) =>{

        var employeeSearch = event.target.value;

        

    }
    return(
        <div>
            <div>
                <br>
                </br>
                <Wrapper>
                    <h1>Employee Directory</h1>
                    <SearchBar
                    value={search}
                    handleInputChange={handleInputChange}
                    icon={'users'}
                    />
                </Wrapper>
            </div>
        </div>
    )
}


export default Main;