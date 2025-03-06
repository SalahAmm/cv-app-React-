export default function DocumentPreview({ generalInfo, Education, practical }) {
    return (
        <>
        <div className="document-preview">
            <div id="genralInfo" className="preview-section">
                <h1>Personal Information</h1>
                <h4>{generalInfo.name}</h4>
                <h4>{generalInfo.email}</h4>
                <h4>{generalInfo.phone}</h4>
            </div>
            <hr />
            {Education.map((item) => (
                <div key={item.id} className="preview-section">
                    <h2>{item.school}</h2>
                    <h2>{item.title}</h2>
                    <h2>{item.date}</h2>
                </div>
            ))}
            <hr />
            {practical.map((item) => (
                <div key={item.id} className="preview-section">
                    <h2>{item.company}</h2>
                    <h2>{item.position}</h2>
                    <h2>{item.responsibilities}</h2>
                    <h2>{item.startDate}</h2>
                    <h2>{item.endDate}</h2>
                </div>
            ))}
        </div>
        </>
    );
}
