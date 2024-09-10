document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Generate resume content
    const resumeContent = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Education</h2>
        <p>${education}</p>
    `;

    // Display resume
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').classList.remove('hidden');
    document.getElementById('resumeForm').reset();
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
