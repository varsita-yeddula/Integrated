import Navbar from "../components/Navbar";

function PolicyTypes(){
    return(
        <>
            <Navbar />
            <h1>Choose the type of Policy</h1>
            <button value="LifeInsurance">Life Insurance</button>
            <button value="VehicleInsurance">Vehicle Insurance</button>
            <button value="HealthInsurance">Health Insurance</button>
            <button value="TravelInsurance">Travel Insurance</button>
        </>
    )
}

export default PolicyTypes;