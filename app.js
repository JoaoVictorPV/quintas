document.addEventListener('DOMContentLoaded', () => {
    const dataMaiores = {
        'C': { relativa: 'Am', info: ['Dó - Ré - Mi - Fá - Sol - Lá - Si'], imagens: ['assets/maj/cmaj1.png', 'assets/maj/cmaj2.png'] },
        'G': { relativa: 'Em', info: ['Sol - Lá - Si - Dó - Ré - Mi - Fá#'], imagens: ['assets/maj/gmaj1.png', 'assets/maj/gmaj2.png'] },
        'D': { relativa: 'Bm', info: ['Ré - Mi - Fá# - Sol - Lá - Si - Dó#'], imagens: ['assets/maj/dmaj1.png', 'assets/maj/dmaj2.png'] },
        'A': { relativa: 'F#m', info: ['Lá - Si - Dó# - Ré - Mi - Fá# - Sol#'], imagens: ['assets/maj/amaj1.png', 'assets/maj/amaj2.png'] },
        'E': { relativa: 'C#m', info: ['Mi - Fá# - Sol# - Lá - Si - Dó# - Ré#'], imagens: ['assets/maj/emaj1.png', 'assets/maj/emaj2.png'] },
        'B': { relativa: 'G#m', info: ['Si - Dó# - Ré# - Mi - Fá# - Sol# - Lá#'], imagens: ['assets/maj/bmaj1.png', 'assets/maj/bmaj2.png'] },
        'F#': { relativa: 'D#m', info: ['Fá# - Sol# - Lá# - Si - Dó# - Ré# - Mi#'], imagens: ['assets/maj/fsmaj1.png', 'assets/maj/fsmaj2.png'] },
        'Db': { relativa: 'Bbm', info: ['Réb - Mib - Fá - Solb - Láb - Sib - Dó'], imagens: ['assets/maj/dfmaj1.png', 'assets/maj/dfmaj2.png'] },
        'Ab': { relativa: 'Fm', info: ['Láb - Sib - Dó - Réb - Mib - Fá - Sol'], imagens: ['assets/maj/afmaj1.png', 'assets/maj/afmaj2.png'] },
        'Eb': { relativa: 'Cm', info: ['Mib - Fá - Sol - Láb - Sib - Dó - Ré'], imagens: ['assets/maj/efmaj1.png', 'assets/maj/efmaj2.png'] },
        'Bb': { relativa: 'Gm', info: ['Sib - Dó - Ré - Mib - Fá - Sol - Lá'], imagens: ['assets/maj/bfmaj1.png', 'assets/maj/bfmaj2.png'] },
        'F': { relativa: 'Dm', info: ['Fá - Sol - Lá - Sib - Dó - Ré - Mi'], imagens: ['assets/maj/fmaj1.png', 'assets/maj/fmaj2.png'] }
    };

    const dataMenores = {
        'Am': { relativa: 'C', info: ['Lá - Si - Dó - Ré - Mi - Fá - Sol'], imagens: ['assets/min/amin1.png', 'assets/min/amin2.png', 'assets/min/amin3.png'] },
        'Em': { relativa: 'G', info: ['Mi - Fá# - Sol - Lá - Si - Dó - Ré'], imagens: ['assets/min/emin1.png', 'assets/min/emin2.png', 'assets/min/emin3.png'] },
        'Bm': { relativa: 'D', info: ['Si - Dó# - Ré - Mi - Fá# - Sol - Lá'], imagens: ['assets/min/bmin1.png', 'assets/min/bmin2.png', 'assets/min/bmin3.png'] },
        'F#m': { relativa: 'A', info: ['Fá# - Sol# - Lá - Si - Dó# - Ré - Mi'], imagens: ['assets/min/fsmin1.png', 'assets/min/fsmin2.png', 'assets/min/fsmin3.png'] },
        'C#m': { relativa: 'E', info: ['Dó# - Ré# - Mi - Fá# - Sol# - Lá - Si'], imagens: ['assets/min/csmin1.png', 'assets/min/csmin2.png', 'assets/min/csmin3.png'] },
        'G#m': { relativa: 'B', info: ['Sol# - Lá# - Si - Dó# - Ré# - Mi - Fá#'], imagens: ['assets/min/gsmin1.png', 'assets/min/gsmin2.png', 'assets/min/gsmin3.png'] },
        'D#m': { relativa: 'F#', info: ['Ré# - Mi# - Fá# - Sol# - Lá# - Si - Dó#'], imagens: ['assets/min/dsmin1.png', 'assets/min/dsmin2.png', 'assets/min/dsmin3.png'] },
        'Bbm': { relativa: 'Db', info: ['Sib - Dó - Réb - Mib - Fá - Solb - Láb'], imagens: ['assets/min/bfmin1.png', 'assets/min/bfmin2.png', 'assets/min/bfmin3.png'] },
        'Fm': { relativa: 'Ab', info: ['Fá - Sol - Láb - Sib - Dó - Réb - Mib'], imagens: ['assets/min/fmin1.png', 'assets/min/fmin2.png', 'assets/min/fmin3.png'] },
        'Cm': { relativa: 'Eb', info: ['Dó - Ré - Mib - Fá - Sol - Láb - Sib'], imagens: ['assets/min/cmin1.png', 'assets/min/cmin2.png', 'assets/min/cmin3.png'] },
        'Gm': { relativa: 'Bb', info: ['Sol - Lá - Sib - Dó - Ré - Mib - Fá'], imagens: ['assets/min/gmin1.png', 'assets/min/gmin2.png', 'assets/min/gmin3.png'] },
        'Dm': { relativa: 'F', info: ['Ré - Mi - Fá - Sol - Lá - Sib - Dó'], imagens: ['assets/min/dmin1.png', 'assets/min/dmin2.png', 'assets/min/dmin3.png'] }
    };

    const circulosContainer = document.getElementById('circulos-container');
    const displayInfo = document.getElementById('display-info');
    let imagemAtualIndex = 0;
    let imagensAtuais = [];
    let angulosAtuais = { 'circulo-principal': 0, 'circulo-relativo': 0, 'circulo-auxiliar': 0 };

    function setupCirculos() {
        document.querySelectorAll('.circulo').forEach(circulo => {
            posicionarNotas(circulo);
            posicionarHandles(circulo);
            setupRotacaoHandle(circulo);
        });
    }

    function posicionarNotas(circulo) {
        const notasAtuais = circulo.querySelectorAll('.nota');
        notasAtuais.forEach(nota => nota.remove());

        const raio = circulo.offsetWidth / 2 - 30;
        const data = circulo.id === 'circulo-relativo' ? dataMenores : dataMaiores;
        const notasNomes = Object.keys(data);
        const centro = circulo.offsetWidth / 2;

        notasNomes.forEach((nome, index) => {
            const angulo = (index / 12) * 2 * Math.PI - (Math.PI / 2);
            const x = centro + raio * Math.cos(angulo) - 22.5;
            const y = centro + raio * Math.sin(angulo) - 22.5;

            const notaEl = document.createElement('div');
            notaEl.className = 'nota';
            notaEl.dataset.tonica = nome;
            notaEl.textContent = nome;
            notaEl.style.left = `${x}px`;
            notaEl.style.top = `${y}px`;
            
            // Eventos para clique robusto em touch e desktop
            notaEl.addEventListener('touchend', exibirInfoNota);
            notaEl.addEventListener('mouseup', exibirInfoNota);

            circulo.appendChild(notaEl);
        });
    }

    function posicionarHandles(circulo) {
        const handles = circulo.querySelectorAll('.handle');
        const raio = circulo.offsetWidth / 2;
        const centro = circulo.offsetWidth / 2;

        handles.forEach((handle, index) => {
            const angulo = (index / handles.length) * 2 * Math.PI;
            const x = centro + raio * Math.cos(angulo) - 10;
            const y = centro + raio * Math.sin(angulo) - 10;
            handle.style.left = `${x}px`;
            handle.style.top = `${y}px`;
        });
    }

    function setupRotacaoHandle(circulo) {
        const handles = circulo.querySelectorAll('.handle');
        handles.forEach(handle => {
            handle.addEventListener('mousedown', e => iniciarRotacao(e, circulo));
            handle.addEventListener('touchstart', e => iniciarRotacao(e, circulo));
        });
    }

    function iniciarRotacao(e, circulo) {
        e.preventDefault();
        e.stopPropagation();

        const rect = circulo.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
        const anguloInicialElemento = angulosAtuais[circulo.id];

        const moveEvent = e.type === 'touchstart' ? 'touchmove' : 'mousemove';
        const endEvent = e.type === 'touchend' || e.type === 'mouseup' ? e.type : (e.type === 'touchstart' ? 'touchend' : 'mouseup');

        const pontoInicial = getPonto(e);
        const anguloMouseInicial = Math.atan2(pontoInicial.y - centroY, pontoInicial.x - centroX);

        function rotacionar(eMove) {
            const pontoAtual = getPonto(eMove);
            const anguloMouseAtual = Math.atan2(pontoAtual.y - centroY, pontoAtual.x - centroX);
            const deltaAngulo = (anguloMouseAtual - anguloMouseInicial) * (180 / Math.PI);
            const novoAngulo = anguloInicialElemento + deltaAngulo;
            aplicarRotacao(circulo, novoAngulo);
        }

        function pararRotacao() {
            const transformMatrix = new WebKitCSSMatrix(window.getComputedStyle(circulo).transform);
            angulosAtuais[circulo.id] = Math.round(Math.atan2(transformMatrix.m21, transformMatrix.m11) * (180 / Math.PI));
            document.removeEventListener(moveEvent, rotacionar);
            document.removeEventListener(endEvent, pararRotacao);
        }

        document.addEventListener(moveEvent, rotacionar);
        document.addEventListener(endEvent, pararRotacao);
    }
    
    function getPonto(e) {
        return e.touches ? e.touches[0] : e;
    }

    function aplicarRotacao(elemento, angulo) {
        elemento.style.transform = `rotate(${angulo}deg)`;
        elemento.querySelectorAll('.nota, .handle').forEach(el => {
            el.style.transform = `rotate(${-angulo}deg)`;
        });
    }

    function exibirInfoNota(e) {
        e.preventDefault();
        e.stopPropagation();
        const tonica = e.currentTarget.dataset.tonica;
        const dados = dataMaiores[tonica] || dataMenores[tonica];
        if (!dados) return;

        // Limpa a mensagem inicial se existir
        const initialMessage = displayInfo.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }
        
        // Limpa conteúdo anterior
        displayInfo.innerHTML = '';

        const infoHeader = document.createElement('div');
        infoHeader.id = 'info-header';
        const titulo = document.createElement('h3');
        titulo.textContent = tonica;
        infoHeader.appendChild(titulo);
        dados.info.forEach(texto => {
            const p = document.createElement('p');
            p.textContent = texto;
            infoHeader.appendChild(p);
        });

        const infoContent = document.createElement('div');
        infoContent.id = 'info-content';

        if (dados.imagens && dados.imagens.length > 0) {
            imagensAtuais = dados.imagens;
            imagemAtualIndex = 0;
            criarVisualizadorDeImagem(infoContent);
        }

        displayInfo.appendChild(infoHeader);
        displayInfo.appendChild(infoContent);
    }

    function criarVisualizadorDeImagem(containerPai) {
        const container = document.createElement('div');
        container.id = 'imagem-container';
        
        const img = document.createElement('img');
        img.id = 'partitura-img';
        img.src = imagensAtuais[imagemAtualIndex];
        
        const navContainer = document.createElement('div');
        navContainer.id = 'imagem-nav';

        for (let i = 0; i < imagensAtuais.length; i++) {
            const btn = document.createElement('button');
            btn.textContent = i + 1;
            btn.onclick = () => irParaImagem(i);
            navContainer.appendChild(btn);
        }
        
        container.appendChild(img);
        container.appendChild(navContainer);
        containerPai.appendChild(container);
        atualizarBotoesAtivos();
    }

    function irParaImagem(index) {
        imagemAtualIndex = index;
        document.getElementById('partitura-img').src = imagensAtuais[imagemAtualIndex];
        atualizarBotoesAtivos();
    }

    function atualizarBotoesAtivos() {
        const botoes = document.querySelectorAll('#imagem-nav button');
        botoes.forEach((btn, index) => {
            btn.classList.toggle('active', index === imagemAtualIndex);
        });
    }

    // Inicia a aplicação
    setupCirculos();
});
