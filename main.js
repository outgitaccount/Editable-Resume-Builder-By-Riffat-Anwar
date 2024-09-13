var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get form values
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var year = document.getElementById('year').value;
    var company = document.getElementById('company').value;
    var position = document.getElementById('position').value;
    var workDuration = document.getElementById('work-duration').value;
    var skills = document.getElementById('skills').value;
    // Set resume preview values and make them editable
    var makeEditable = function (id, value, defaultValue) {
        var element = document.getElementById(id);
        if (element) {
            element.innerText = value || defaultValue;
            element.setAttribute('contentEditable', 'true'); // Make the element editable
            element.style.border = '1px solid #ccc'; // Optional: Add border to indicate editability
            element.style.padding = '5px'; // Optional: Add padding for better UX
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
    document.getElementById('resume-preview').style.display = 'block';
});
