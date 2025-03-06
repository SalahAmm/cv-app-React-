export default function GenralInfo({generalInfo , setGeneralInfo}) {

	const handleChange = (e) => {
		const {name , value } = e.target ;

		setGeneralInfo(prevData => ({...prevData , [name]: value}))
	}

    return (
        <>
            {/* create a form  Section to input values , and button to submit / edit */}
            <div className="general-info">
                <input 
					type="text" 
					name="name" 
					value={generalInfo.name} 
					placeholder="UserName" 
					onChange={handleChange} />
                <input 
					type="email" 
					name="email" 
					value={generalInfo.email} 
					placeholder="user@mail" 
					onChange={handleChange}/>
                <input 
					type="tel" 
					name="phone" 
					value={generalInfo.phone} 
					onChange={handleChange}/>

            </div>
        </>
    );
}
