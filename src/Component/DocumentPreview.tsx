

export default function DocumentPreview ({generalInfo , Education , practical}) {

    return (
    <>
       {/* loop thew the state and create elemets based on the changes  */}

        <div id="genralInfo">
            <h1>{generalInfo.name}</h1>
            <h3>{generalInfo.email}</h3>
            <h3>{generalInfo.phone}</h3>
        </div>
        <hr />
        {Education.map((item) => {
            return (
        <div id="Education">
            <h2>{item.school}</h2>
            <h2>{item.title}</h2>
            <h2>{item.date}</h2>
        </div>
            ) 
        })} 
            <hr/>
        {practical.map((item) => {
            return (
        <div id="practical">
            <h2>{item.company}</h2>
            <h2>{item.position}</h2>
            <h2>{item.responsibilities}</h2>
            <h2>{item.startDate}</h2>
            <h2>{item.endDate}</h2>
        </div>
            )
        })}   </>)
}