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
            <GenralInfo
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
            />
            <EducationExp 
                Education={Education} 
                setEducation={setEducation} 
            />
            <PracticalExp 
                practical={practical} 
                setPractical={setPractical} 
            />
        </>
    );
}
