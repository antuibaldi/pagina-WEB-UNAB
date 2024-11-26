// Ocultar todas las secciones de comentarios al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const commentSections = document.querySelectorAll(".comment-section");
    commentSections.forEach(section => {
        section.style.display = "none";
    });
});

// Función para mostrar/ocultar la sección de comentarios
function toggleCommentSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Función para agregar comentarios
function addComment(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    const comment = input.value.trim();

    if (comment.length > 0) {
        const newComment = document.createElement("li");
        newComment.textContent = comment;
        list.appendChild(newComment);
        input.value = ""; // Limpiar el campo
    } else {
        alert("Por favor, escribe un comentario antes de enviar.");
    }
}
