import { createClient } from "@sanity/client";


async function getTiparire(){
    const client = createClient({
        projectId: 'nmvafbin',
        dataset: 'production',
        apiVersion: "2024-03-04",
        useCdn: true,
    });

    return client.fetch(
        `*[_type == "tiparire"]`
    )
}
  const tiparire = await getTiparire();

  

let newList = []

let week = [[],[],[],[],[]]

for (let i=0; i<tiparire.length; i++){
    for (let j=0; j<4; j++){
        newList.push(tiparire[i])
    }
};


// for (let i=0; i<gestiune.length; i++){
//         week[0].push(gestiune[i])
//     };


for (let i = 0; i<newList.length; i++){
    week[0].push(newList[i])
    newList.shift()
    week[1].push(newList[i])
    newList.shift()
    week[2].push(newList[i])
    newList.shift()
    week[3].push(newList[i])
    newList.shift()
    week[4].push(newList[i])  

}

week[0] = week[0].filter(function( element ) {
    return element !== undefined;
 });
 week[1] = week[1].filter(function( element ) {
    return element !== undefined;
 });
 week[2] = week[2].filter(function( element ) {
    return element !== undefined;
 });
 week[3] = week[3].filter(function( element ) {
    return element !== undefined;
 });
 week[4] =  week[4].filter(function( element ) {
    return element !== undefined;
 });



export const Mon = () =>{
    const mon = week[0].map((elem)=>{
        return <span key={elem._id} className="element" >{elem.nume}</span>
    })
    return  <div className="day-wrapper">{mon}</div>
    }

export const Tue = () =>{
    const tue = week[1].map((elem)=>{
        return <span key={elem._id} className="element" >{elem.nume}</span>
    })
    return  <div className="day-wrapper">{tue}</div>
    }

export const Wed = () =>{
    const wed = week[2].map((elem)=>{
        return <span key={elem._id} className="element" >{elem.nume}</span>
    })
    return  <div className="day-wrapper">{wed}</div>
    }

export const Thu = () =>{
    const thu = week[3].map((elem)=>{
        return <span key={elem._id} className="element" >{elem.nume}</span>
    })
    return  <div className="day-wrapper">{thu}</div>
    }

export const Fri = () =>{
    const fri =  week[4].map((elem)=>{
        return <span key={elem._id} className="element" >{elem.nume}</span>
    })
    return  <div className="day-wrapper">{fri}</div>
    }

