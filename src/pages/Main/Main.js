import React, {useState, useEffect} from "react";
import CardHolder from "../../components/CardHolder/CardHolder";
import Choices from "../../components/Choices/Choices";
import Search from "../../components/Search/Search";
import Wrapper from "../../components/Wrapper/Wrapper";
import API from "../../utils/API";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import SearchBar from "../../components/Search/Search";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



const Main = () => {

    const [allEmployees, setAllEmployees] = useState([])
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
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

    const handleClose = () => {
        setFireEmployee(false);
        setView(false)
    }
    const handleOpen = () => setView (true)

    const handleFireEmployee = (email) =>{
        const fired = allEmployees.filter(employee=> employee.email !== email);
        setFiltered(fired);
        setFireEmployee(true);
        setTimeout(() => {
            handleClose()
        }, 2000);
    }

    useEffect(() => {
        API.randomEmployees()
        .then(response => {
            console.log(response.data)
            const employeeData = response.data.results.map(
                user => {
                    return( {
                        id: user.length,
                        name: `${user.name.first} ${user.name.last}`,
                        image: user.picture.large,
                        email: user.email,
                        location: user.location.state,
                        thumbnail: user.picture.thumbnail,
                        phone: user.cell
                    })
                })
                setFiltered(employeeData);
                setAllEmployees(employeeData)
        })
        .catch( err => console.log(err))
    }, [])

    const handleFilter = (event) => {
        const employeeState = event.target.value
        
        if(employeeState !== "none"){
            const number = allEmployees.filter(user => user.location === employeeState)
            setFiltered(number)
        }else{
            setFiltered(allEmployees)
        }
        setStateFilter(employeeState)
    }

    const handleInputChange= (event) =>{

        var employeeSearch = event.target.value;

        setFiltered(allEmployees.filter(user => user.name.toLowerCase().includes(employeeSearch.toLowerCase())))
        setSearch(employeeSearch);
        employeeSearch = "";


    }
    return(
        <div className="container">
            <div className="banner">
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
            <div>
                <div className="row">
                    <h2>Filter Employees by State</h2>
                    <Choices
                    value={stateFilter}
                    onChange = {handleFilter}
                    />
                </div>
                {/* divider here */}
                <br></br>
            </div>
            <CardHolder>
            {filtered.map(employee => (
                <EmployeeCard
                key = {employee.email}
                name = {employee.name}
                phone = {employee.phone}
                image = {employee.image}
                thumbnail= {employee.thumbnail}
                location = {employee.location}
                email = {employee.email}
                handleOpen = {handleOpen}
                setEmployee = {setEmployee}
                />
            ))}

                <Modal aria-labelledby="contained-modal-title-vcenter"
                    centered show={view} onHide={handleClose}>
                    <Modal.Header closeButton>
                       <Modal.Title className="ui">{employee.name}</Modal.Title> 
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <span><img src={employee.image} alt={employee.name}/></span>
                                </Col>
                                <Col md={8}>
                                    <h6>Location: {employee.location}</h6>
                                    <h6>Cell Phone: {employee.phone}</h6>
                                    <h6>Email: {employee.email}</h6>
                                    <h6>Department: {employee.department}</h6>
                                    <h6>Salary: {employee.finance}</h6>
                                    <h6>Job Title: {employee.title}</h6>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Container>
                            <div className="alert alert-danger" role="alert" style ={{opacity: fireEmployee ? 1 : 0}}>
                                You're fired!
                            </div>
                        </Container>
                        <Button className="ui inverted green button" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="ui inverted red button" onClick={() => {
                            handleFireEmployee(employee.email)
                        }}>
                            Fire Employee
                        </Button>
                    </Modal.Footer>

                </Modal>

          </CardHolder>
        </div>
    )
}


export default Main;