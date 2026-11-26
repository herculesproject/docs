// Estado inicial del buscador: Zensical 0.1.0 muestra el diálogo vacío hasta
// que se escribe algo. Se añade una ilustración (una pila de documentos con una
// lupa que amplía de verdad lo que tiene debajo) y un mensaje breve.
//
// El buscador vive en un shadow DOM abierto, al que no llega extra.css. La hoja
// se adopta (adoptedStyleSheets) y la ilustración se inserta junto a la lista de
// resultados; si el componente la retira al repintarse, se vuelve a colocar.
// Solo usa enganches estables del DOM (roles y atributos ARIA), no las clases
// internas, que cambian con cada versión. Prototipos: prototipos/buscador-lupa/.
(() => {
  "use strict";
  if (!("adoptedStyleSheets" in Document.prototype)) return;

  const VACIO = 'dialog:has(input[role="combobox"]:placeholder-shown) ol[role="listbox"]:empty + .hv';
  const CSS = `
    .hv { display: none; }
    ${VACIO} {
      display: flex; flex-direction: column; align-items: center; text-align: center;
      padding: 1.6rem 1rem 2.4rem;
    }
    .hv svg { width: 16rem; max-width: 100%; height: auto; overflow: visible; touch-action: none; }
    .hv-titulo { margin: .3rem 0 .3rem; font-size: .85rem; font-weight: 700; color: var(--md-default-fg-color); }
    .hv-texto { margin: 0; font-size: .7rem; line-height: 1.6; color: var(--md-default-fg-color--light); }
    dialog:not(:has([role="toolbar"] button)) .hv-filtros { display: none; }

    .hv svg { --ink: var(--md-default-fg-color); --paper: var(--hv-papel, var(--md-default-bg-color));
              --txt2: var(--md-default-fg-color--light); --sello: var(--md-primary-fg-color); }
    .hv-hoja { fill: var(--paper); stroke: var(--ink); stroke-width: .75; stroke-linejoin: round; }
    .hv svg text { text-rendering: geometricPrecision; }
    .hv-t  { fill: var(--ink); font-family: inherit; }
    .hv-t2 { fill: var(--txt2); font-family: inherit; }
    .hv-rl { stroke: var(--ink); stroke-width: .35; fill: none; }
    .hv-dots { stroke: var(--txt2); stroke-width: .45; stroke-dasharray: .1 1.1; stroke-linecap: round; fill: none; }
    .hv-sombra { fill: var(--md-default-fg-color); }
    .hv-sello rect { fill: none; stroke: var(--sello); stroke-width: .4; opacity: .75; }
    .hv-sello text { fill: var(--sello); opacity: .8; font-family: inherit; }
    .hv-s { fill: var(--paper); stroke: var(--ink); stroke-width: .8; stroke-linejoin: round; }
    .hv-l { fill: none; stroke: var(--ink); stroke-width: .8; stroke-linecap: round; }
  `;

  // ---------------------------------------------------------------------------
  // Ilustración: pila de hojas en isométrica (30°) y una lupa inclinada 30° hacia
  // el lector. Todo se dibuja una vez; al moverse solo cambian transformaciones.

  const C = Math.cos(Math.PI / 6), S = 0.5, OX = 150, OY = 112, DEG = Math.PI / 180;
  const W = 74, D = 100, T = 2.1, K = 2.5;   // hoja (ancho, fondo), grosor, aumento
  const P = (x, y, z) => [OX + (x - y) * C, OY + (x + y) * S - z];
  const pantalla = (p) => [(p[0] - p[1]) * C, (p[0] + p[1]) * S - p[2]];
  const enMesa = (p) => [(p[0] - p[1]) * C, (p[0] + p[1]) * S];
  const f = (n) => +n.toFixed(2);
  const pts = (a) => a.map((p) => f(p[0]) + "," + f(p[1])).join(" ");
  const ruta = (a) => "M" + a.map((p) => f(p[0]) + " " + f(p[1])).join("L") + "Z";
  const suma = (a, b) => a.map((v, i) => v + b[i]), por = (a, k) => a.map((v) => v * k);
  const punto = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cruz = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const unit = (a) => por(a, 1 / Math.hypot(...a));
  function envolvente(ps) {
    const s = ps.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const x = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lo = [], hi = [];
    for (const p of s) { while (lo.length > 1 && x(lo.at(-2), lo.at(-1), p) <= 0) lo.pop(); lo.push(p); }
    for (const p of s.reverse()) { while (hi.length > 1 && x(hi.at(-2), hi.at(-1), p) <= 0) hi.pop(); hi.push(p); }
    return lo.slice(0, -1).concat(hi.slice(0, -1));
  }

  // Símbolo de Hércules en vectorial (de docs/assets/simbolo.png): ocho horquillas.
  const COLORES = ["#de3d3d", "#f1c64a", "#c3f240", "#8cef68", "#8ef1f7", "#4b65f4", "#8c45ef", "#d24bd5"];
  function simbolo(x, y, size) {
    const brazo = "M-46 -144V-272A32 32 0 0 1 -14 -304H14A32 32 0 0 1 46 -272V-46H72";
    const brazos = COLORES.map((c, i) => `<path d="${brazo}" stroke="${c}" transform="rotate(${i * 45})"/>`).join("");
    return `<g transform="translate(${x} ${y}) scale(${size / 768})" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle r="372" stroke="#808080" stroke-width="10"/><g stroke-width="12">${brazos}</g></g>`;
  }

  function dibujar() {
    // Pila: hojas ligeramente desalineadas, de abajo arriba.
    const hojas = [
      { dx: 1.5, dy: -1, r: -2.4 }, { dx: -1.2, dy: 1.4, r: 1.6 }, { dx: 0.8, dy: 0.6, r: -0.8 },
      { dx: -0.6, dy: -1.6, r: 2.8 }, { dx: 1.1, dy: 0.9, r: -1.7 }, { dx: 0, dy: 0, r: -0.9 },
    ];
    const halo = [[-W / 2 - 2, -D / 2 - 2], [W / 2 + 2, -D / 2 - 2], [W / 2 + 4, D / 2 + 4], [-W / 2 - 2, D / 2 + 4]].map(([x, y]) => P(x + 3, y + 3, 0));
    let pila = "", portada, contorno;
    hojas.forEach((h, i) => {
      const z = i * T, c = Math.cos(h.r * DEG), s = Math.sin(h.r * DEG);
      const w = (u, v) => [h.dx + c * u - s * v, h.dy + s * u + c * v];
      const esq = [[-W / 2, -D / 2], [W / 2, -D / 2], [W / 2, D / 2], [-W / 2, D / 2]].map(([u, v]) => w(u, v));
      for (let k = 0; k < 4; k++) {   // cantos que miran al lector
        const a = esq[k], b = esq[(k + 1) % 4];
        let nx = b[1] - a[1], ny = a[0] - b[0];
        if (nx * ((a[0] + b[0]) / 2 - h.dx) + ny * ((a[1] + b[1]) / 2 - h.dy) < 0) { nx = -nx; ny = -ny; }
        if (nx + ny <= 0) continue;
        pila += `<polygon class="hv-hoja" points="${pts([P(a[0], a[1], z), P(b[0], b[1], z), P(b[0], b[1], z + T), P(a[0], a[1], z + T)])}"/>`;
      }
      pila += `<polygon class="hv-hoja" points="${pts(esq.map(([x, y]) => P(x, y, z + T)))}"/>`;
      if (i === hojas.length - 1) {
        const zt = z + T, o = P(...w(-W / 2, -D / 2), zt), pu = P(...w(-W / 2 + 1, -D / 2), zt), pv = P(...w(-W / 2, -D / 2 + 1), zt);
        portada = [pu[0] - o[0], pu[1] - o[1], pv[0] - o[0], pv[1] - o[1], o[0], o[1]];
        contorno = pts(esq.map(([x, y]) => P(x, y, zt)));
      }
    });

    // Portada: casi todo se lee solo a través de la lupa. El texto se compone a 10×
    // y se reduce con una transformación: con cuerpos de 1–2 unidades, Chrome
    // redondea el avance de cada letra y, ampliadas en la lupa, se pisan.
    const cx = W / 2;
    const txt = (cls, x, y, size, s, { anchor, weight, ls, italic } = {}) =>
      `<text class="${cls}" transform="translate(${f(x)} ${f(y)}) scale(.1)" font-size="${f(size * 10)}"` +
      (anchor ? ` text-anchor="${anchor}"` : "") + (weight ? ` font-weight="${weight}"` : "") +
      (ls ? ` letter-spacing="${f(ls * 10)}"` : "") + (italic ? ' font-style="italic"' : "") + `>${s}</text>`;
    let pag = `<g transform="matrix(${portada.map(f).join(" ")})">
      ${txt("hv-t2", 7, 9, 2.1, "HÉRCULES · SGI", { weight: 600, ls: 0.35 })}
      ${txt("hv-t2", W - 7, 9, 2.1, "Ed. 2026", { anchor: "end" })}
      <line class="hv-rl" x1="7" y1="11.2" x2="${W - 7}" y2="11.2"/>
      ${simbolo(cx, 29, 26)}
      <g transform="translate(15 28) rotate(-9)" class="hv-sello">
        <rect x="-8.2" y="-3.6" width="16.4" height="7.2" rx="1.2"/><rect x="-7.2" y="-2.6" width="14.4" height="5.2" rx=".7"/>
        ${txt("", 0, 0.85, 2.5, "VIGENTE", { anchor: "middle", weight: 700, ls: 0.3 })}
      </g>
      ${txt("hv-t2", 7, 36.2, 1.45, "Revisado en marzo")}
      ${txt("hv-t2", 7, 38.6, 1.45, "por la Oficina Técnica")}
      ${["Versión 3.2", "Aprobado", "Ámbito: SGI", "Uso interno"].map((s, k) => txt("hv-t2", W - 7, 22 + k * 2.6, 1.55, s, { anchor: "end" })).join("")}
      <line class="hv-rl" x1="${W - 18}" y1="32" x2="${W - 7}" y2="32"/>
      ${txt("hv-t2", W - 7, 34.6, 1.4, "Ref. HRC‑DOC‑001", { anchor: "end" })}
      ${txt("hv-t", cx, 52, 6, "Documentación", { anchor: "middle", weight: 700, ls: -0.1 })}
      ${txt("hv-t2", cx, 57.4, 2.35, "Sistema de Gestión de Investigación", { anchor: "middle" })}
      <line class="hv-rl" x1="20" y1="62" x2="${W - 20}" y2="62"/>
      ${txt("hv-t2", 10, 65.4, 1.5, "CONTENIDO", { weight: 600, ls: 0.3 })}`;
    [["Requisitos", "3"], ["Casos de uso", "27"], ["Diseño", "58"], ["Manual de usuario", "112"]].forEach(([n, p], k) => {
      const y = 68.5 + k * 4.3;
      pag += txt("hv-t", 10, y, 2.2, n) +
        `<path class="hv-dots" d="M${f(10 + n.length * 1.15 + 1)} ${f(y - 0.3)}H${W - 16}"/>` +
        txt("hv-t", W - 10, y, 2.2, p, { anchor: "end" });
    });
    pag += txt("hv-t2", cx, 90, 2, "Si puedes leer esto, ya estás buscando.", { anchor: "middle", italic: true }) +
      txt("hv-t2", 7, 95.5, 1.6, "IU‑CSP‑0201") +
      txt("hv-t2", W - 7, 95.5, 1.6, "1 / 9.494", { anchor: "end" }) + "</g>";

    // Lupa: aro de radio R y grosor TH en un plano inclinado hacia el lector; mango cilíndrico.
    const R = 21, RI = 18, TH = 2.6, hacia = unit([1, 1, 1]), b = 30 * DEG;
    const n = unit(suma(por([0, 0, 1], Math.cos(b)), por(unit([1, 1, 0]), Math.sin(b))));
    const e1 = unit([1, -1, 0]), e2 = unit(cruz(n, e1));
    const aro = (r, o) => Array.from({ length: 96 }, (_, i) => { const a = (i / 96) * 2 * Math.PI; return suma(por(n, o), suma(por(e1, r * Math.cos(a)), por(e2, r * Math.sin(a)))); });
    const fo = aro(R, TH / 2), bo = aro(R, -TH / 2), fi = aro(RI, TH / 2), bi = aro(RI, -TH / 2);
    const h0 = [Math.cos(12 * DEG), Math.sin(12 * DEG), 0];
    const hd = unit(suma(h0, por(n, -punto(h0, n)))), c2 = unit(cruz(hd, n));
    const disco = (at, r) => Array.from({ length: 48 }, (_, i) => { const a = (i / 48) * 2 * Math.PI; return suma(por(hd, at), suma(por(n, r * Math.cos(a)), por(c2, r * Math.sin(a)))); });
    const casq = [disco(R - 0.4, 2.9), disco(R + 4.6, 2.9)], mango = [disco(R + 4.6, 2.4), disco(R + 27, 2.4)];
    const tapa = punto(hd, hacia) > 0.08;
    const sc = (a) => a.map(pantalla);
    const arco = (r, a0, a1) => { const ps = []; for (let a = a0; a <= a1; a += 3) ps.push(pantalla(suma(por(n, TH / 2), suma(por(e1, r * Math.cos(a * DEG)), por(e2, r * Math.sin(a * DEG)))))); return "M" + ps.map((p) => f(p[0]) + " " + f(p[1])).join("L"); };
    // Altura sobre la portada: lo justo para que ninguna parte la atraviese.
    const H = 9 - Math.min(...[...bo, ...casq[1], ...mango[1]].map((p) => p[2]));
    // Sombra: la lupa aplastada sobre la portada (luz cenital), con el hueco del cristal.
    const sombra = ruta(envolvente([...fo, ...bo].map(enMesa))) + ruta(fi.map(enMesa).reverse()) + ruta(envolvente([...casq[0], ...mango[1]].map(enMesa)));

    const svg = `<svg viewBox="62 34 176 150" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hv-difusa" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
        <clipPath id="hv-cristal"><path data-hv="cristal" d="${ruta(sc(fi))}"/></clipPath>
        <clipPath id="hv-pared"><path data-hv="pared" d="${ruta(sc(fi))}"/></clipPath>
        <clipPath id="hv-portada"><polygon points="${contorno}"/></clipPath>
      </defs>
      <polygon class="hv-sombra" points="${pts(halo)}" opacity=".16" filter="url(#hv-difusa)"/>
      <g id="hv-papel">${pila}${pag}</g>
      <g clip-path="url(#hv-portada)"><path data-hv="sombra" class="hv-sombra" fill-rule="evenodd" d="${sombra}" opacity="0"/></g>
      <g data-hv="atras" opacity="0">
        <path class="hv-s" d="${ruta(envolvente([...sc(fo), ...sc(bo)]))}"/>
        <path class="hv-s" d="${ruta(sc(fo))}"/>
      </g>
      <g clip-path="url(#hv-cristal)"><use data-hv="aumento" href="#hv-papel"/></g>
      <g data-hv="delante" opacity="0">
        <g clip-path="url(#hv-pared)"><path class="hv-s" fill-rule="evenodd" d="${ruta(sc(fi)) + ruta(sc(bi))}"/></g>
        <path class="hv-l" d="${ruta(sc(fi))}"/>
        <path class="hv-l" d="${arco(RI - 4.5, 196, 232)}"/>
        <path class="hv-l" d="${arco(RI - 4.5, 242, 250)}"/>
        <path class="hv-s" d="${ruta(envolvente([...sc(casq[0]), ...sc(casq[1])]))}"/>
        ${tapa ? `<path class="hv-s" d="${ruta(sc(casq[1]))}"/>` : ""}
        <path class="hv-s" d="${ruta(envolvente([...sc(mango[0]), ...sc(mango[1])]))}"/>
        ${tapa ? `<path class="hv-s" d="${ruta(sc(mango[1]))}"/>` : ""}
      </g>
    </svg>`;
    return { svg, portada, H };
  }

  // ---------------------------------------------------------------------------
  // Movimiento. Sola, la lupa recorre la portada con calma y se detiene en cada
  // punto. Con el puntero encima, lo alcanza en ~0,1 s y desde ahí va pegada a él.

  function animar(svg, { portada, H }) {
    const $ = (k) => svg.querySelector(`[data-hv="${k}"]`);
    const atras = $("atras"), delante = $("delante"), sombra = $("sombra"), aumento = $("aumento"), cristal = $("cristal"), pared = $("pared");
    const [a, b, c, d, ox, oy] = portada, det = a * d - b * c;
    const enHoja = (u, v) => [a * u + c * v + ox, b * u + d * v + oy];
    const deHoja = (x, y) => [(d * (x - ox) - c * (y - oy)) / det, (-b * (x - ox) + a * (y - oy)) / det];
    const paradas = [[37, 29], [60, 27], [38, 50], [56, 72], [37, 89], [24, 72], [15, 28]].map(([u, v]) => enHoja(u, v));
    const quieto = matchMedia("(prefers-reduced-motion: reduce)");

    function colocar(x, y, h, aparece) {
      const tr = `translate(${f(x)} ${f(y)})`;
      atras.setAttribute("transform", tr); delante.setAttribute("transform", tr);
      cristal.setAttribute("transform", tr); pared.setAttribute("transform", tr);
      atras.setAttribute("opacity", f(aparece)); delante.setAttribute("opacity", f(aparece));
      aumento.setAttribute("transform", `translate(${f(x * (1 - K))} ${f(y * (1 - K))}) scale(${K})`);
      sombra.setAttribute("transform", `translate(${f(x)} ${f(y + h)})`);
      sombra.setAttribute("opacity", f(0.08 * aparece * (H / h)));
    }

    let modo, ptr, pos, vel, idx, destino, pausa, reanudar, amp, t0, ultimo, raf = 0, visible = false;
    function reiniciar() {   // cada vez que aparece, la lupa entra desde arriba a la derecha
      modo = "paseo"; ptr = null; idx = 0; destino = paradas[0]; pausa = 0; reanudar = 0; amp = 1;
      pos = [paradas[0][0] + 14, paradas[0][1] - 10]; vel = [0, 0]; t0 = ultimo = performance.now();
    }
    const altura = (t, e) => H + 0.6 * amp * Math.sin(t * 0.8) + (1 - e) * 5;

    function fotograma(ahora) {
      raf = 0;
      const dt = Math.min(0.05, (ahora - ultimo) / 1000); ultimo = ahora;
      const t = (ahora - t0) / 1000, e = 1 - Math.pow(1 - Math.min(1, t / 0.45), 3);
      amp += ((modo === "paseo" ? 1 : 0) - amp) * (1 - Math.exp(-dt / 0.25));
      if (modo === "enganche") {
        const k = 1 - Math.exp(-dt / 0.045);
        pos = [pos[0] + (ptr[0] - pos[0]) * k, pos[1] + (ptr[1] - pos[1]) * k];
        if (Math.hypot(ptr[0] - pos[0], ptr[1] - pos[1]) < 0.5) modo = "agarre";
      } else if (modo === "agarre") {
        pos = ptr;
      } else if (ahora > reanudar) {
        if (Math.hypot(destino[0] - pos[0], destino[1] - pos[1]) < 0.8 && Math.hypot(...vel) < 3) {
          if (!pausa) pausa = ahora + 1600;
          else if (ahora > pausa) { idx = (idx + 1) % paradas.length; destino = paradas[idx]; pausa = 0; }
        }
        const k = 8, amort = 2 * Math.sqrt(k);   // muelle crítico: llega suave y sin rebote
        for (let j = 0; j < 2; j++) { vel[j] += (k * (destino[j] - pos[j]) - amort * vel[j]) * dt; pos[j] += vel[j] * dt; }
      }
      const tx = amp * (0.18 * Math.sin(t * 1.3) + 0.08 * Math.sin(t * 2.3)), ty = amp * 0.15 * Math.cos(t * 1.1);
      colocar(pos[0] + tx, pos[1] + ty - (1 - e) * 5, altura(t, e), e);
      if (visible && !quieto.matches) raf = requestAnimationFrame(fotograma);
    }

    function mostrar(si) {
      if (si === visible) return;
      visible = si;
      if (!si) { cancelAnimationFrame(raf); raf = 0; return; }
      reiniciar();
      if (quieto.matches) colocar(paradas[0][0], paradas[0][1], H, 1);
      else raf = requestAnimationFrame(fotograma);
    }
    // Solo se anima mientras se ve: el estado inicial se oculta al escribir.
    new IntersectionObserver((es) => mostrar(es[es.length - 1].isIntersecting)).observe(svg);

    // Puntero: acotado a la portada, para que la lupa siempre tenga algo debajo.
    function mover(ev) {
      if (!visible) return;
      const m = svg.getScreenCTM();
      if (!m) return;
      const q = new DOMPoint(ev.clientX, ev.clientY).matrixTransform(m.inverse());
      const [u, v] = deHoja(q.x, q.y);
      ptr = enHoja(Math.max(10, Math.min(W - 10, u)), Math.max(12, Math.min(D - 6, v)));
      if (modo === "paseo") { modo = quieto.matches ? "agarre" : "enganche"; vel = [0, 0]; }
      if (modo === "agarre") {   // sin esperar al siguiente fotograma
        pos = ptr;
        colocar(pos[0], pos[1], quieto.matches ? H : altura((performance.now() - t0) / 1000, 1), 1);
      }
      svg.style.cursor = "none";
    }
    svg.addEventListener("pointermove", mover);
    svg.addEventListener("pointerdown", mover);
    svg.addEventListener("pointerleave", () => { modo = "paseo"; reanudar = performance.now() + 1000; pausa = 0; svg.style.cursor = ""; });
  }

  // ---------------------------------------------------------------------------
  // Integración con el diálogo de búsqueda.

  let hoja = null, dibujo = null;
  const nodos = new WeakMap();

  function crearVacio() {
    dibujo ||= dibujar();
    const nodo = document.createElement("div");
    nodo.className = "hv";
    nodo.innerHTML = dibujo.svg +
      '<p class="hv-titulo">¿Qué estás buscando?</p>' +
      '<p class="hv-texto">Escribe lo que necesites<span class="hv-filtros"> y afina el resultado con los filtros</span>.</p>';
    animar(nodo.querySelector("svg"), dibujo);
    return nodo;
  }

  function colocarVacio(raiz) {
    const lista = raiz.querySelector('ol[role="listbox"]');
    if (!lista) return;
    let nodo = nodos.get(raiz);
    if (!nodo) { nodo = crearVacio(); nodos.set(raiz, nodo); }
    if (lista.nextElementSibling !== nodo) lista.after(nodo);
  }

  // El tema crea el shadow DOM al cargar la página, pero no pinta el diálogo hasta
  // tener el índice de búsqueda: se vigila desde el principio para colocar la
  // ilustración en cuanto aparezca la lista, sin esperar a otro clic o tecla.
  const preparados = new WeakSet();
  function preparar(raiz) {
    if (preparados.has(raiz)) return;
    preparados.add(raiz);
    if (!hoja) { hoja = new CSSStyleSheet(); hoja.replaceSync(CSS); }
    raiz.adoptedStyleSheets = raiz.adoptedStyleSheets.concat(hoja);
    colocarVacio(raiz);
    new MutationObserver(() => colocarVacio(raiz)).observe(raiz, { childList: true, subtree: true });
  }

  function buscar() {
    for (const el of document.body.children) if (el.shadowRoot) preparar(el.shadowRoot);
  }

  // El dibujo se prepara en un momento libre, antes de que se abra el buscador.
  (window.requestIdleCallback || setTimeout)(() => { dibujo ||= dibujar(); });
  new MutationObserver(buscar).observe(document.body, { childList: true });
  document.addEventListener("keydown", buscar, true);
  document.addEventListener("click", buscar, true);
  buscar();
})();
