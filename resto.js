function myFunction() { 
    var element = document.body; 
    element.classList.toggle("dark-mode"); 
}

document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    // bloque l'envoi du formulaire
    event.preventDefault();

    // Récupérer les valeurs des champs
    const formName = document.getElementById('formName').value;
    const formNumber = document.getElementById('formNumber').value;
    let valid = true;

    // Vérifier le champ nom
    if (formName.length < 3) {
        alert('Le nom doit contenir au moins 3 caractères.');
        valid = false;
    }

    // Vérifier le nombre de personnes
    if (!Number.isInteger(Number(formNumber)) || Number(formNumber) < 1) {
        alert('Le nombre de personnes doit être un entier.');
        valid = false;
    }

    // Si tout est valide, soumettre le formulaire
    if (valid) {
        this.submit();
    }
});
