import GenralInfo from "./GenralInfoForm";
import EducationExp from "./EducationExpForm";
import PracticalExp from "./PracticalExpForm";

export default function FormSection(props) {
    const {
        generalInfo,
        setGeneralInfo,
        Education,
        setEducation,
        practical,
        setPractical,
    } = props;

    return (
        <>
            <h2>Personal Information</h2>

            <GenralInfo
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
            />
            <h2>Education</h2>

            <EducationExp Education={Education} setEducation={setEducation} />
            <h2>Work Experience</h2>

            <PracticalExp practical={practical} setPractical={setPractical} />
        </>
    );
}
