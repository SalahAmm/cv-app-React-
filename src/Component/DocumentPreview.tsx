

export default function DocumentPreview ({generalInfo , Education , practical}) {

    return (
    <>
        <div id="genralInfo">
            <h1>{generalInfo.name}</h1>
            <h3>{generalInfo.email}</h3>
            <h3>{generalInfo.phone}</h3>
        </div>
        <hr />
        <div id="Education">
            <h2>{Education.school}</h2>
            <h2>{Education.title}</h2>
            <h2>{Education.date}</h2>
        </div>
        <hr />
        <div id="practical">
            <h2>{practical.company}</h2>
            <h2>{practical.position}</h2>
            <h2>{practical.responsibilities}</h2>
            <h2>{practical.startDate}</h2>
            <h2>{practical.endDate}</h2>
        </div>
        
    </>)
}