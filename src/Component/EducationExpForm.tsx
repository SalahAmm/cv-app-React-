import { useState } from "react";

export default function EducationExp() {
    // create state of array of objects to be able to add extra
    //Education Experience

    const [Education, setEducation] = useState([
        { school: "", title: "", date: "", id: 1 },
    ]);

	const handleChange = (e , id: number) => {
		const {name , value } = e.target 
		setEducation(prevData => prevData.map((item) => {
			return item.id === id ? {...item , [name] : value} : item
		}))
	} 

    return (
        <>
            {Education.map((item) => {
                return (
                    <div className="education-info" key={item.id}>
                        <input
                            type="text"
                            name="school"
                            value={item.school}
                            placeholder="School Name"
                            onChange={(e) => handleChange(e, item.id)}
                        />
                        <input
                            type="text"
                            name="school"
                            value={item.school}
                            placeholder="School Name"
                            onChange={(e) => handleChange(e, item.id)}
                        />
                        <input
                            type="text"
                            name="school"
                            value={item.school}
                            placeholder="School Name"
                            onChange={(e) => handleChange(e, item.id)}
                        />
                    </div>
                );
            })}

				<button className="add-extra">Add Extra</button>
        </>
    );
}
