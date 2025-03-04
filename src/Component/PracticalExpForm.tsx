import { useState } from 'react'


export default function PracticalExp () {

    const [practical , setPractical] = useState ([
        { company : '' , position: '' , responsibilities: '' , startDate: '' , endDate: '' ,id: 1 },
    ])

    // map over the objects and if the id of object ,  match the id of were changes are  , then change the object value 

    const handleChange = (e, id : number) => {
        const {name , value } = e.target ;
        setPractical(prevData => prevData.map((item) => {
          return  ( item.id === id ?  {...item , [name]: value} : item) 
        }))
    }
    return (
        <>
        {/* map over the practical objects and create a form based on it  */}
        {practical.map((item) => {
            return <div className ="practical-info" key={item.id}>
                <input 
                    type="text"
                    name="company"
                    value={item.company}
                    placeholder="Company Name"
                    onChange={(e) => handleChange(e , item.id)}
                    />
                <input 
                    type="text"
                    name="position"
                    value={item.position}
                    placeholder="Enter Position"
                    onChange={(e) => handleChange(e , item.id)}
                    />
                <input 
                    type="text"
                    name="responsibilities"
                    value={item.responsibilities}
                    placeholder="Enter responsibilities"
                    onChange={(e) => handleChange(e , item.id)}
                    />
                <input 
                    type="date"
                    name="startDate"
                    value={item.startDate}
                    onChange={(e) => handleChange(e , item.id)}
                    />
                <input 
                    type="date"
                    name="endDate"
                    value={item.endDate}
                    onChange={(e) => handleChange(e , item.id)}
                    />

            </div>
        })}
        {/* Add Extra PracticalExp  Section */}
            <button className="add-extra">Add Extra</button>

        </>
    )
}