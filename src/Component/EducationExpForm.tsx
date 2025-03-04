export default function EducationExp({Education , setEducation}) {
    // create state of array of objects to be able to add extra
    //Education Experience



	const handleChange = (e , id: number) => {
		const {name , value } = e.target 
		setEducation(prevData => prevData.map((item) => {
			return item.id === id ? {...item , [name] : value} : item
		}))
	} 

    const addExtra = () => {
       setEducation(prev => [...prev , {school: "", title: "", date: "", id: Date.now() },]) 
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
                            name="title"
                            value={item.title}
                            placeholder="School Name"
                            onChange={(e) => handleChange(e, item.id)}
                        />
                        <input
                            type="text"
                            name="date"
                            value={item.date}
                            placeholder="School Name"
                            onChange={(e) => handleChange(e, item.id)}
                        />
                    </div>
                );
            })}

				<button className="add-extra" onClick={() => addExtra()}>Add Extra</button>
        </>
    );
}
