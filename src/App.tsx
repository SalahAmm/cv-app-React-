import "./styles/App.css";
import FormSection from "./Component/FormSection";
import DocumentPreview from "./Component/DocumentPreview";
import { useState } from 'react'

function App() {
    const [Education, setEducation] = useState([
        { school: "", title: "", date: "", id: 1 },
    ]);

    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [practical, setPractical] = useState([
        {
            company: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
            id: 1,
        },
    ]);

    return (
        <div className="app">
            <div className="form-container">
                <FormSection
                    generalInfo={generalInfo}
                    setGeneralInfo={setGeneralInfo}
                    Education={Education}
                    setEducation={setEducation}
                    practical={practical}
                    setPractical={setPractical}
                />
            </div>
            <div className="preview-container">
                <DocumentPreview
                    generalInfo={generalInfo}
                    Education={Education}
                    practical={practical}
                />
            </div>
        </div>
    );
}

export default App;