
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.coluna-direita section');
        
    // Oculta todas as seções inicialmente
    sections.forEach(section => section.style.display = 'none');

    // Exibe a seção inicial
    document.querySelector('#inicio').style.display = 'block';

    // Adiciona evento de clique aos links do menu
    const links = document.querySelectorAll('.coluna-esquerda a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
                
            // Oculta todas as seções
            sections.forEach(section => section.style.display = 'none');
                
            // Mostra a seção correspondente ao link clicado
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.style.display = 'block';
        });
    });
});

