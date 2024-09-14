
// Getting Refrences to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement

//Handle form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

    //Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fname = (document.getElementById('f/name') as HTMLInputElement).value;
    const caste = (document.getElementById('caste') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    //Generate the resume details dynamically
    const resumeHTML=`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b>${name}</p>
    <p><b>F/Name: </b>${fname}</p>
    <p><b>Caste: </b>${caste}</p>
    <p><b>Email: </b>${email}</p>
    <p><b>Contact No: </b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Display the generated resume
    if(resumeDisplayelement){
        resumeDisplayelement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.')
    }
});