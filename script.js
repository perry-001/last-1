document.addEventListener("DOMContentLoaded", function() {
    const hatha = document.getElementById("hatha");
    const vinyasa = document.getElementById("vinyasa");
    const ashtanga = document.getElementById("ashtanga");
    const benefits = document.getElementById("benefits");

    hatha.addEventListener("click", function() {
        benefits.textContent = "Hatha Yoga focuses on physical postures and breathing exercises.";
    });

    vinyasa.addEventListener("click", function() {
        benefits.textContent = "Vinyasa Yoga synchronizes movement with breath, creating a flowing sequence of poses.";
    });

    ashtanga.addEventListener("click", function() {
        benefits.textContent = "Ashtanga Yoga is a dynamic, physically demanding practice that follows a specific sequence of postures.";
    });
});
