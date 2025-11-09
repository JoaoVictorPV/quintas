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

    const circulos = document.querySelectorAll('.circulo');
    const displayInfo = document.getElementById('display-info');
    let imagemAtualIndex = 0;
    let imagensAtuais = [];
    let angulosAtuais = { 'circulo-principal': 0, 'circulo-relativo': 0, 'circulo-auxiliar': 0 };

    function posicionarNotas(circuloElement) {
        const notasAtuais = circuloElement.querySelectorAll('.nota');
        notasAtuais.forEach(nota => nota.remove());

        const raio = circuloElement.offsetWidth / 2 - 30;
        const isRelativo = circuloElement.id === 'circulo-relativo';
        const dataAtual = isRelativo ? dataMenores : dataMaiores;
        const notasNomes = Object.keys(dataAtual);

        notasNomes.forEach((nota, index) => {
            const angulo = (index / 12) * 2 * Math.PI - (Math.PI / 2);
            const centro = circuloElement.offsetWidth / 2;
            const x = centro + raio * Math.cos(angulo) - 22.5;
            const y = centro + raio * Math.sin(angulo) - 22.5;

            const notaElement = document.createElement('div');
            notaElement.classList.add('nota');
            notaElement.dataset.tonica = nota;
            notaElement.textContent = nota;
            notaElement.style.left = `${x}px`;
            notaElement.style.top = `${y}px`;
            notaElement.addEventListener('click', () => exibirInfoNota(nota));
            circuloElement.appendChild(notaElement);
        });
    }

    circulos.forEach(posicionarNotas);

    function exibirInfoNota(tonica) {
        const dados = dataMaiores[tonica] || dataMenores[tonica];
        if (!dados) return;

        const initialMessage = displayInfo.querySelector('.initial-message');
        if (initialMessage) initialMessage.remove();

        displayInfo.innerHTML = '';
        displayInfo.style.display = 'flex';

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
        
        container.appendChild(navContainer);
        container.appendChild(img);
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

    // Lógica de rotação robusta
    let activeTouches = {};
    let initialAngle = -1;

    circulos.forEach(circulo => {
        // Rotação com Mouse (Shift + Drag)
        circulo.addEventListener('mousedown', (e) => {
            if (!e.shiftKey) return;
            iniciarRotacaoMouse(e, circulo);
        });

        // Rotação com Toque (2 dedos)
        circulo.addEventListener('touchstart', (e) => {
            e.preventDefault();
            for (let i = 0; i < e.changedTouches.length; i++) {
                activeTouches[e.changedTouches[i].identifier] = { touch: e.changedTouches[i], circulo: circulo };
            }
            if (Object.keys(activeTouches).length >= 2) {
                const touches = Object.values(activeTouches).map(t => t.touch);
                initialAngle = Math.atan2(touches[1].clientY - touches[0].clientY, touches[1].clientX - touches[0].clientX) * 180 / Math.PI;
            }
        }, { passive: false });
    });

    function iniciarRotacaoMouse(e, circulo) {
        const rect = circulo.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
        const anguloMouseInicial = Math.atan2(e.clientY - centroY, e.clientX - centroX);
        const anguloInicialElemento = angulosAtuais[circulo.id];

        function rotacionarMouse(moveEvent) {
            const anguloMouseAtual = Math.atan2(moveEvent.clientY - centroY, moveEvent.clientX - centroX);
            const deltaAngulo = (anguloMouseAtual - anguloMouseInicial) * (180 / Math.PI);
            let novoAngulo = anguloInicialElemento + deltaAngulo;
            aplicarRotacao(circulo, novoAngulo);
        }

        function pararRotacaoMouse() {
            const transformMatrix = new WebKitCSSMatrix(window.getComputedStyle(circulo).transform);
            angulosAtuais[circulo.id] = Math.round(Math.atan2(transformMatrix.m21, transformMatrix.m11) * (180 / Math.PI));
            document.removeEventListener('mousemove', rotacionarMouse);
            document.removeEventListener('mouseup', pararRotacaoMouse);
        }

        document.addEventListener('mousemove', rotacionarMouse);
        document.addEventListener('mouseup', pararRotacaoMouse);
    }

    document.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touches = e.touches;
        if (touches.length < 2) return;

        let circuloEmFoco = null;
        for (const id in activeTouches) {
            if (activeTouches[id].touch.identifier === touches[0].identifier || activeTouches[id].touch.identifier === touches[1].identifier) {
                circuloEmFoco = activeTouches[id].circulo;
                break;
            }
        }
        if (!circuloEmFoco) return;

        const currentAngle = Math.atan2(touches[1].clientY - touches[0].clientY, touches[1].clientX - touches[0].clientX) * 180 / Math.PI;
        const deltaAngle = currentAngle - initialAngle;
        let novoAngulo = angulosAtuais[circuloEmFoco.id] + deltaAngle;
        aplicarRotacao(circuloEmFoco, novoAngulo);
    }, { passive: false });

    document.addEventListener('touchend', (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touchId = e.changedTouches[i].identifier;
            if (activeTouches[touchId]) {
                const circulo = activeTouches[touchId].circulo;
                const transformMatrix = new WebKitCSSMatrix(window.getComputedStyle(circulo).transform);
                angulosAtuais[circulo.id] = Math.round(Math.atan2(transformMatrix.m21, transformMatrix.m11) * (180 / Math.PI));
                delete activeTouches[touchId];
            }
        }
        if (Object.keys(activeTouches).length < 2) {
            initialAngle = -1;
        }
    });

    function aplicarRotacao(elemento, angulo) {
        elemento.style.transform = `rotate(${angulo}deg)`;
        const notasDoCirculo = elemento.querySelectorAll('.nota');
        notasDoCirculo.forEach(nota => {
            nota.style.transform = `rotate(${-angulo}deg)`;
        });
    }
});
