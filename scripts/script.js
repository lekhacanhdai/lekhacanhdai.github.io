document.addEventListener('DOMContentLoaded', function() {
    const toggleBioButton = document.getElementById('toggle-bio');
    const bioSection = document.getElementById('bio');

    toggleBioButton.addEventListener('click', function() {
        bioSection.classList.toggle('hidden');
        toggleBioButton.textContent = bioSection.classList.contains('hidden') ? 'Show Bio' : 'Hide Bio';
    });

    const repoLinks = document.querySelectorAll('.repo-link');
    repoLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const repoName = this.getAttribute('data-repo');
            alert(`You clicked on the repository: ${repoName}`);
        });
    });
});