import React, {useRef} from "react";

const Home =(props)=> {
    const nameProject = useRef();
    const contentProject = useRef();
    const nameU = props.nameUser;
    const SaveTheDate = () => {
        const nameProj = nameProject.current.value;
        const contentProj = contentProject.current.value;
        if (nameProj !== '' && contentProj !== '' && nameU !== undefined) {
            props.setContinut(contentProj);
            props.setTitlu(nameProj);
            alert('Salved porject');
            nameProject.current.value = null;
            contentProject.current.value = null;
        } else {
            alert('Please fill in the fields and login');
            nameProject.current.value = null;
            contentProject.current.value = null;
        }
    }; 
    
    return (
    <div>
        <h2 style={{color:'black'}}>New project</h2>
        <label style={{color:'rgb(72,72,72)'}}>Title</label>
        <br/>
        <input type="text" ref={nameProject}></input>
        <br></br>
        <label style={{color:'rgb(72,72,72)'}}>Content:</label>
        <br/>
        <textarea rows="40" cols="50" type="text" ref={contentProject}></textarea>
        <br/>
        <button onClick={SaveTheDate}>Save project</button>
    </div>
    );
}
export default Home;