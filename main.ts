document.getElementById('generate-resume')?.addEventListener('click', () => {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const workDuration = (document.getElementById('work-duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Set resume preview values and make them editable
    const makeEditable = (id: string, value: string, defaultValue: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = value || defaultValue;
            element.setAttribute('contentEditable', 'true');  // Make the element editable
            element.style.border = '1px solid #ccc';          // Optional: Add border to indicate editability
            element.style.padding = '5px';                    // Optional: Add padding for better UX
        }
    };

    makeEditable('preview-name', name, 'Your Name');
    makeEditable('preview-title', title, 'Job Title');
    makeEditable('preview-email', email, 'example@example.com');
    makeEditable('preview-phone', phone, '000-000-0000');
    makeEditable('preview-degree', degree, 'Your Degree');
    makeEditable('preview-school', school, 'Your School');
    makeEditable('preview-year', year, '2020');
    makeEditable('preview-company', company, 'Your Company');
    makeEditable('preview-position', position, 'Your Position');
    makeEditable('preview-work-duration', workDuration, 'Work Duration');
    makeEditable('preview-skills', skills, 'Skill 1, Skill 2, Skill 3');

    // Display the resume preview
    document.getElementById('resume-preview')!.style.display = 'block';
});