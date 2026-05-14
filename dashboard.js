const SK = 'notasapp_v3';
const TAGS = ['General', 'Exactas', 'Ciencias', 'Tecnología', 'Humanidades', 'Arte'];
const TAG_COLORS = { Exactas: '', Ciencias: 'green', Tecnología: 'blue', Humanidades: 'purple', Arte: 'red', General: '' };

const COLORS = {
  default: { bg: '#ffffff', bdr: '#e8d5aa', dot: '#e8c97a', label: 'Predeterminado' },
  gray:    { bg: '#f9f9f8', bdr: '#d4d4d2', dot: '#b0b0ae', label: 'Gris'           },
  brown:   { bg: '#fdf4ec', bdr: '#e8c4a0', dot: '#c27a48', label: 'Marrón'         },
  orange:  { bg: '#fff8f0', bdr: '#fad4a0', dot: '#f5a623', label: 'Naranja'        },
  yellow:  { bg: '#fffdee', bdr: '#f5e68a', dot: '#e8c800', label: 'Amarillo'       },
  green:   { bg: '#f4fdf7', bdr: '#a8e6c0', dot: '#22c55e', label: 'Verde'          },
  teal:    { bg: '#f0fdfa', bdr: '#99e6da', dot: '#14b8a6', label: 'Turquesa'       },
  blue:    { bg: '#f0f7ff', bdr: '#a8d4f5', dot: '#3b82f6', label: 'Azul'           },
  purple:  { bg: '#faf5ff', bdr: '#d4b8f0', dot: '#a855f7', label: 'Morado'        },
  pink:    { bg: '#fff5f8', bdr: '#f5b8d0', dot: '#ec4899', label: 'Rosa'           },
};

const EMOJIS = [
  '📝','📖','📚','📐','📏','📌','📍','🗒️','🗓️','📅','✏️','🖊️','✒️',
  '🔬','⚗️','🧪','🧬','🔭','💻','🖥️','⌨️','📱','🌍','🌎','🗺️','🏛️',
  '⚔️','🎵','🎶','🎸','🎹','🎨','🎭','💡','🔑','⭐','🌟','💎','🏆',
  '🎯','🚀','🌱','🍀','🌸','💭','🧠','❓','✅','☐','📊','📈','📉',
  '💰','🔐','🌙','☀️','⚡','🔥','💧','🌊','🎓','🏫','🔎','📎','🗝️',
];

const TEMPLATES = [
  { emoji: '📖', name: 'Resumen de clase',       desc: 'Estructura para apuntes de clase',           tag: 'General',    content: 'Materia: \nProfesor/a: \nFecha: \n\n━━━━━━━━━━━━━━━━━━━━━━\nTEMA PRINCIPAL\n━━━━━━━━━━━━━━━━━━━━━━\n\n📌 Conceptos clave:\n• \n• \n• \n\n📝 Desarrollo:\n\n\n💡 Conclusiones:\n\n\n❓ Dudas:\n• ' },
  { emoji: '✅', name: 'Lista de tareas',         desc: 'Seguimiento de tareas y pendientes',          tag: 'General',    content: 'Proyecto: \nFecha límite: \n\n━━━━━━━━━━━━━━━━━━━━━━\nPENDIENTES\n━━━━━━━━━━━━━━━━━━━━━━\n\n☐ \n☐ \n☐ \n☐ \n\n━━━━━━━━━━━━━━━━━━━━━━\nCOMPLETADAS\n━━━━━━━━━━━━━━━━━━━━━━\n\n☑ ' },
  { emoji: '🔬', name: 'Informe científico',      desc: 'Estructura para reportes de laboratorio',     tag: 'Ciencias',   content: 'INFORME DE LABORATORIO\n\nTítulo: \nFecha: \nIntegrantes: \n\n━━━━━━━━━━━━━━━━━━━━━━\nOBJETIVO\n━━━━━━━━━━━━━━━━━━━━━━\n\n\n━━━━━━━━━━━━━━━━━━━━━━\nRESULTADOS\n━━━━━━━━━━━━━━━━━━━━━━\n\n\n━━━━━━━━━━━━━━━━━━━━━━\nCONCLUSIONES\n━━━━━━━━━━━━━━━━━━━━━━\n\n' },
  { emoji: '📐', name: 'Fórmulas y definiciones', desc: 'Referencia para materias exactas',            tag: 'Exactas',    content: 'FÓRMULAS Y DEFINICIONES\n\nMateria: \nUnidad: \n\n━━━━━━━━━━━━━━━━━━━━━━\nDEFINICIONES\n━━━━━━━━━━━━━━━━━━━━━━\n\n▸ Término: \n  Def: \n\n▸ Término: \n  Def: \n\n━━━━━━━━━━━━━━━━━━━━━━\nFÓRMULAS\n━━━━━━━━━━━━━━━━━━━━━━\n\n▸ Nombre: \n  Fórmula: \n  Donde: \n' },
  { emoji: '📅', name: 'Plan de estudio',          desc: 'Organiza tu tiempo de estudio semanal',       tag: 'General',    content: 'PLAN DE ESTUDIO\n\nExamen: \nFecha: \n\n━━━━━━━━━━━━━━━━━━━━━━\nTEMAS A REPASAR\n━━━━━━━━━━━━━━━━━━━━━━\n\n☐ Tema 1: \n☐ Tema 2: \n☐ Tema 3: \n☐ Tema 4: \n\n━━━━━━━━━━━━━━━━━━━━━━\nCRONOGRAMA\n━━━━━━━━━━━━━━━━━━━━━━\n\nLunes:    \nMartes:   \nMiércoles: \nJueves:   \nViernes:  \nSábado:   \n' },
  { emoji: '💭', name: 'Reflexión libre',          desc: 'Espacio abierto para ideas y pensamientos',   tag: 'General',    content: 'REFLEXIÓN\n\nFecha: \n\n━━━━━━━━━━━━━━━━━━━━━━\n\n' },
];

const SAMPLE = [
  { id: 's1',  emoji: '📐', title: 'Matemáticas — Cálculo',    content: 'Límites y continuidad\n\nUn límite describe el comportamiento de una función cuando la variable se acerca a un punto dado.\n\nRegla de la cadena:\nd/dx[f(g(x))] = f\'(g(x)) · g\'(x)\n\nIntegrales definidas:\n∫[a,b] f(x)dx = F(b) - F(a)',           tag: 'Exactas',     starred: true,  deleted: false, parentId: null, color: 'orange', createdAt: new Date(Date.now() - 7  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 1800000).toISOString() },
  { id: 's1a', emoji: '📝', title: 'Ejercicios — Integrales',  content: 'Ejercicios resueltos de integrales definidas e indefinidas.\n\n1. ∫x² dx = x³/3 + C\n2. ∫sen(x) dx = -cos(x) + C\n3. ∫e^x dx = e^x + C',                                                          tag: 'Exactas',     starred: false, deleted: false, parentId: 's1', color: 'yellow', createdAt: new Date(Date.now() - 6  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 1600000).toISOString() },
  { id: 's1b', emoji: '🎯', title: 'Examen parcial — Notas',   content: 'Temas que entran en el parcial:\n• Límites laterales\n• Regla de L\'Hôpital\n• Derivadas implícitas\n• Integrales por partes',                                                                    tag: 'Exactas',     starred: false, deleted: false, parentId: 's1', color: 'default', createdAt: new Date(Date.now() - 5 * 86400000).toISOString(), updatedAt: new Date(Date.now() - 5  * 86400000).toISOString() },
  { id: 's2',  emoji: '⚗️', title: 'Química Orgánica II',      content: 'Reacciones de sustitución nucleofílica\n\nSN1: reacción unimolecular. Formación de carbocatión intermediario.\n\nSN2: reacción bimolecular. Inversión de Walden.',                               tag: 'Ciencias',    starred: false, deleted: false, parentId: null, color: 'green',  createdAt: new Date(Date.now() - 6  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 86400000).toISOString() },
  { id: 's2a', emoji: '🧪', title: 'Práctica de laboratorio',  content: 'Síntesis de aspirina\n\nMateriales: ácido salicílico, anhídrido acético, ácido fosfórico.\n\nProcedimiento: mezclar a temperatura controlada...',                                                 tag: 'Ciencias',    starred: false, deleted: false, parentId: 's2', color: 'teal',   createdAt: new Date(Date.now() - 4  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 3  * 86400000).toISOString() },
  { id: 's3',  emoji: '💻', title: 'Programación Web',         content: 'HTML semántico, CSS Flexbox y Grid.\n\nJavaScript DOM:\ndocument.querySelector()\naddEventListener()\nclassList.add/remove/toggle',                                                               tag: 'Tecnología',  starred: false, deleted: false, parentId: null, color: 'blue',   createdAt: new Date(Date.now() - 5  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 3  * 86400000).toISOString() },
  { id: 's4',  emoji: '🌍', title: 'Historia Universal',       content: 'Primera Guerra Mundial (1914-1918)\n\nCausas: sistema de alianzas, imperialismo, nacionalismo.\n\nConsecuencias: Tratado de Versalles, caída de imperios.',                                        tag: 'Humanidades', starred: false, deleted: false, parentId: null, color: 'default', createdAt: new Date(Date.now() - 4  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 3  * 86400000).toISOString() },
  { id: 's5',  emoji: '📚', title: 'Literatura — Resúmenes',   content: 'Cien años de soledad — García Márquez\n\nRealismo mágico: fusión de cotidiano y sobrenatural.\n\nBorges — Ficciones: laberintos, espejos.',                                                       tag: 'Humanidades', starred: true,  deleted: false, parentId: null, color: 'purple', createdAt: new Date(Date.now() - 10 * 86400000).toISOString(), updatedAt: new Date(Date.now() - 7  * 86400000).toISOString() },
  { id: 's6',  emoji: '🔬', title: 'Biología Celular',         content: 'Ciclo celular: G1 → S → G2 → M\n\nMitosis: Profase, Metafase, Anafase, Telofase\n→ 2 células hijas idénticas',                                                                                   tag: 'Ciencias',    starred: false, deleted: false, parentId: null, color: 'default', createdAt: new Date(Date.now() - 9  * 86400000).toISOString(), updatedAt: new Date(Date.now() - 7  * 86400000).toISOString() },
  { id: 's7',  emoji: '🎵', title: 'Teoría Musical',           content: 'Escala mayor: T T S T T T S\nDo mayor: Do Re Mi Fa Sol La Si Do\n\nAcordes: tríada = fundamental + tercera + quinta.',                                                                              tag: 'Arte',        starred: false, deleted: false, parentId: null, color: 'pink',   createdAt: new Date(Date.now() - 14 * 86400000).toISOString(), updatedAt: new Date(Date.now() - 14 * 86400000).toISOString() },
];

function load()       { try { return JSON.parse(localStorage.getItem(SK)) || null; } catch { return null; } }
function save(d)      { localStorage.setItem(SK, JSON.stringify(d)); }
function initData()   { if (!load()) save(SAMPLE); }
function getNotes()   { return load() || []; }
function getActive()  { return getNotes().filter(n => !n.deleted); }
function getDeleted() { return getNotes().filter(n =>  n.deleted); }
function getById(id)  { return getNotes().find(n => n.id === id); }
function getChildren(pid) { return getActive().filter(n => n.parentId === pid); }
function getRoots()   { return getActive().filter(n => !n.parentId); }

function getAncestors(id) {
  const chain = [];
  let n = getById(id);
  while (n && n.parentId) {
    n = getById(n.parentId);
    if (n) chain.unshift(n);
  }
  return chain;
}

function createNote(data = {}) {
  const now = new Date().toISOString();
  const n = { id: 'n' + Date.now(), emoji: '📝', title: 'Sin título', content: '', tag: 'General', starred: false, deleted: false, parentId: null, color: 'default', createdAt: now, updatedAt: now, ...data };
  const arr = getNotes();
  arr.unshift(n);
  save(arr);
  return n;
}

function updateNote(id, ch) {
  const arr = getNotes();
  const i = arr.findIndex(n => n.id === id);
  if (i < 0) return;
  arr[i] = { ...arr[i], ...ch, updatedAt: new Date().toISOString() };
  save(arr);
  return arr[i];
}

function softDelete(id) {
  updateNote(id, { deleted: true });
  getChildren(id).forEach(c => softDelete(c.id));
}
function restoreNote(id) { updateNote(id, { deleted: false }); }
function permDelete(id)  { save(getNotes().filter(n => n.id !== id)); }
function toggleStar(id)  { const n = getById(id); if (n) updateNote(id, { starred: !n.starred }); }

let S = { view: 'home', noteId: null, searchQ: '', sortBy: 'updatedAt', sortDir: 'desc', filterTag: null, expanded: new Set() };
let sidebarOpen = false;

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('open', sidebarOpen);
  document.getElementById('sidebar-overlay').classList.toggle('visible', sidebarOpen);
}

function closeSidebar() {
  sidebarOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}

function nav(view, params = {}) {
  S = { ...S, view, ...params };
  closeSidebar();
  renderAll();
}

function toggleExpand(id) {
  S.expanded.has(id) ? S.expanded.delete(id) : S.expanded.add(id);
  renderSidebar();
}

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function relDate(iso) {
  const d = new Date(iso), diff = Date.now() - d;
  const m = Math.floor(diff / 60000);
  if (m < 1)  return 'ahora';
  if (m < 60) return m + 'min';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h';
  const dy = Math.floor(h / 24);
  if (dy === 1) return 'ayer';
  if (dy < 7)  return dy + ' días';
  if (dy < 30) return Math.floor(dy / 7) + ' sem';
  return d.toLocaleDateString('es', { day: 'numeric', month: 'short' });
}

function todayStr() {
  return new Date().toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? '¡Buenos días' : h < 20 ? '¡Buenas tardes' : '¡Buenas noches';
}

function tagPill(tag) { return `<span class="tag-pill ${TAG_COLORS[tag] || ''}">${esc(tag)}</span>`; }

function wordCount(t) {
  const w = t.trim().split(/\s+/).filter(Boolean).length;
  return `${w} palabras · ${t.length} chars`;
}

function sortNotes(arr) {
  return [...arr].sort((a, b) => {
    const va = S.sortBy === 'title' ? a.title.toLowerCase() : S.sortBy === 'tag' ? a.tag : a.updatedAt;
    const vb = S.sortBy === 'title' ? b.title.toLowerCase() : S.sortBy === 'tag' ? b.tag : b.updatedAt;
    if (va < vb) return S.sortDir === 'asc' ? -1 : 1;
    if (va > vb) return S.sortDir === 'asc' ?  1 : -1;
    return 0;
  });
}

function currentUser() { return localStorage.getItem('notasapp_user') || 'admin'; }

function renderAll() {
  renderSidebar();
  renderTopbar();
  const views = { home: renderHome, note: renderNoteEditor, search: renderSearch, trash: renderTrash, templates: renderTemplates, updates: renderUpdates };
  (views[S.view] || renderHome)();
  document.querySelectorAll('.nav-item[data-view]').forEach(el => el.classList.toggle('active', el.dataset.view === S.view));
}

function renderSidebar() {
  document.getElementById('sidebar-pages').innerHTML = renderTreeLevel(getRoots(), 0);
}

function renderTreeLevel(notes, depth) {
  return notes.map(n => {
    const kids  = getChildren(n.id);
    const isExp = S.expanded.has(n.id);
    const isAct = S.noteId === n.id;
    return `<div>
      <div class="tree-row" style="padding-left:${depth * 14}px">
        ${kids.length
          ? `<button class="tree-toggle" onclick="event.stopPropagation();toggleExpand('${n.id}')">${isExp ? '▾' : '▸'}</button>`
          : `<span class="tree-spacer"></span>`}
        <div class="page-item ${isAct ? 'active' : ''}" onclick="nav('note',{noteId:'${n.id}'})">
          <span class="page-emoji">${n.emoji}</span>
          <span class="page-ttl">${esc(n.title)}</span>
          <span class="page-dt">${relDate(n.updatedAt)}</span>
        </div>
      </div>
      ${isExp && kids.length ? `<div class="tree-children">${renderTreeLevel(kids, depth + 1)}</div>` : ''}
    </div>`;
  }).join('');
}

function renderTopbar() {
  const labels = { home: 'Inicio', note: 'Página', search: 'Buscar', trash: 'Papelera', templates: 'Plantillas', updates: 'Actualizaciones' };
  let crumbs = `<span class="bc-item" onclick="nav('home')">NotasApp</span><span class="bc-sep">›</span>`;

  if (S.view === 'note' && S.noteId) {
    getAncestors(S.noteId).forEach(a => {
      crumbs += `<span class="bc-item" onclick="nav('note',{noteId:'${a.id}'})">${esc(a.title || '…')}</span><span class="bc-sep">›</span>`;
    });
    const cur = getById(S.noteId);
    crumbs += `<span class="bc-cur">${cur ? esc(cur.title || 'Sin título') : ''}</span>`;
  } else {
    crumbs += `<span class="bc-cur">${labels[S.view] || 'Inicio'}</span>`;
  }

  document.getElementById('topbar').innerHTML = `
    <button class="hamburger-btn" onclick="toggleSidebar()" title="Menú">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
    <div class="breadcrumb">${crumbs}</div>
    <button class="mobile-search-btn" onclick="nav('search')" title="Buscar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </button>
    <div class="search-wrap">
      <span class="search-icon">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </span>
      <input id="top-search" type="text" placeholder="Buscar..." value="${esc(S.searchQ)}"
        oninput="doSearch(this.value)" onfocus="if(S.view!=='search')nav('search')" />
    </div>
    <div class="topbar-right">
      <button class="icon-btn" title="Nueva nota" onclick="newNote()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <div class="user-chip" onclick="toggleDD('user-dd')" style="position:relative">
        <div class="avatar">${currentUser().charAt(0).toUpperCase()}</div>
        <span>${esc(currentUser())}</span>
        <div class="dropdown" id="user-dd" style="display:none;top:calc(100% + 6px);right:0" onclick="event.stopPropagation()">
          <div class="dropdown-item" style="pointer-events:none;opacity:.6;font-size:12px">${esc(currentUser())}@notasapp.com</div>
          <hr class="dropdown-sep">
        </div>
      </div>
      <button class="logout-btn" onclick="location.href='login.html'" title="Cerrar sesión">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        <span class="logout-label">Cerrar sesión</span>
      </button>
    </div>`;
}

function renderHome() {
  const allActive = getActive();
  const roots     = allActive.filter(n => !n.parentId);
  const recent    = sortNotes(allActive).slice(0, 4);
  const starred   = allActive.filter(n => n.starred).length;
  const thisWeek  = allActive.filter(n => Date.now() - new Date(n.updatedAt) < 7 * 86400000).length;
  const filtered  = sortNotes(S.filterTag ? allActive.filter(n => n.tag === S.filterTag) : roots);

  document.getElementById('view-root').innerHTML = `
    <div class="hero">
      <div class="hero-date">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        ${todayStr()}
      </div>
      <h2>${greeting()}, <span>${esc(currentUser())}</span>! ✏️</h2>
      <p>${allActive.length} notas en total · ${thisWeek} actualizadas esta semana · ${starred} destacadas</p>
    </div>

    <div class="quick-actions">
      <button class="q-btn primary" onclick="newNote()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Nueva página
      </button>
      <button class="q-btn" onclick="nav('templates')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        Plantillas
      </button>
    </div>

    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-ico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
        <div><div class="stat-val">${allActive.length}</div><div class="stat-lbl">Notas totales</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-ico"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <div><div class="stat-val">${thisWeek}</div><div class="stat-lbl">Esta semana</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-ico" style="background:rgba(255,215,0,.15);color:#b8860b"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <div><div class="stat-val">${starred}</div><div class="stat-lbl">Destacadas</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-ico" style="background:rgba(224,92,58,.1);color:#c0502e"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg></div>
        <div><div class="stat-val">${getDeleted().length}</div><div class="stat-lbl">Papelera</div></div>
      </div>
    </div>

    <div class="sec-hdr">
      <span class="sec-ttl">Recientes</span>
      <button class="sec-lnk" onclick="S.filterTag=null;renderAll()">Ver todo →</button>
    </div>
    <div class="notes-grid">
      ${recent.map(n => `
        <div class="note-card" style="border-color:${COLORS[n.color || 'default'].bdr};background:${COLORS[n.color || 'default'].bg}" onclick="nav('note',{noteId:'${n.id}'})">
          <div class="card-holes"><div class="card-hole"></div><div class="card-hole"></div><div class="card-hole"></div></div>
          <span class="note-emoji-big">${n.emoji}</span>
          <div class="note-title">${n.starred ? '⭐ ' : ''}${esc(n.title)}</div>
          <div class="note-excerpt">${esc(n.content.slice(0, 80))}</div>
          <div class="note-footer">
            <span class="note-date-sm">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${relDate(n.updatedAt)}
            </span>
            ${tagPill(n.tag)}
          </div>
        </div>`).join('')}
      <div class="note-card new-card" onclick="newNote()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--t4)"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>Nueva página</span>
      </div>
    </div>

    <div class="divider"><hr/><span>todas las páginas</span><hr/></div>

    <div class="sec-hdr">
      <span class="sec-ttl">
        Páginas raíz
        ${TAGS.map(t => `
          <button onclick="S.filterTag=S.filterTag==='${t}'?null:'${t}';renderAll()"
            style="margin-left:5px;font-size:10px;font-weight:600;padding:2px 7px;border-radius:20px;cursor:pointer;
              border:1.5px solid var(--bdr);background:${S.filterTag === t ? 'var(--acc)' : 'transparent'};
              color:${S.filterTag === t ? '#fff' : 'var(--t3)'};transition:all .15s">${esc(t)}</button>`).join('')}
      </span>
      <button class="sec-lnk" onclick="toggleDD('sort-dd')" style="position:relative">
        Ordenar ↕
        <div class="dropdown" id="sort-dd" style="display:none;top:calc(100% + 4px);right:0;min-width:185px" onclick="event.stopPropagation()">
          <div class="sort-item ${S.sortBy === 'updatedAt' ? 'active' : ''}" onclick="setSort('updatedAt')">Última modificación ${S.sortBy === 'updatedAt' ? '✓' : ''}</div>
          <div class="sort-item ${S.sortBy === 'title'     ? 'active' : ''}" onclick="setSort('title')">Título A-Z ${S.sortBy === 'title' ? '✓' : ''}</div>
          <div class="sort-item ${S.sortBy === 'tag'       ? 'active' : ''}" onclick="setSort('tag')">Categoría ${S.sortBy === 'tag' ? '✓' : ''}</div>
          <hr class="dropdown-sep">
          <div class="sort-item" onclick="S.sortDir=S.sortDir==='asc'?'desc':'asc';closeDD();renderAll()">Dirección: ${S.sortDir === 'asc' ? '↑ Asc' : '↓ Desc'}</div>
        </div>
      </button>
    </div>

    <div class="notes-list">
      ${filtered.length ? filtered.map(n => {
        const kids = getChildren(n.id);
        return `
          <div class="list-item" onclick="nav('note',{noteId:'${n.id}'})">
            <span class="list-emoji">${n.emoji}</span>
            <div class="list-info">
              <div class="list-title">
                ${n.starred ? '⭐ ' : ''}${esc(n.title)}
                ${kids.length ? `<span style="font-size:10.5px;color:var(--t4);font-weight:400">(${kids.length} sub-pág.)</span>` : ''}
              </div>
              <div class="list-sub">${esc(n.content.slice(0, 55))}</div>
            </div>
            <div class="list-meta">${tagPill(n.tag)}<span class="list-date">${relDate(n.updatedAt)}</span></div>
          </div>`;
      }).join('') : '<div style="padding:20px 12px;font-size:13px;color:var(--t4)">Sin páginas en esta categoría.</div>'}
    </div>`;
}

let _saveT = null;

function renderNoteEditor() {
  const n = getById(S.noteId);
  if (!n) { nav('home'); return; }
  const c    = COLORS[n.color || 'default'];
  const kids = getChildren(n.id);

  document.getElementById('view-root').innerHTML = `
    <div class="editor-outer">
      <div class="editor-toolbar">
        <button class="back-btn" onclick="nav(${n.parentId ? `'note',{noteId:'${n.parentId}'}` : "'home'"})">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          ${n.parentId ? esc(getById(n.parentId)?.title || 'Atrás') : 'Inicio'}
        </button>
        <div class="ed-tb-right">
          <div class="save-ind saved" id="save-ind">✓ Guardado</div>
          <select class="tag-sel" id="note-tag" onchange="autoSave()">
            ${TAGS.map(t => `<option value="${t}" ${n.tag === t ? 'selected' : ''}>${t}</option>`).join('')}
          </select>
          <button class="color-btn" onclick="toggleDD('color-panel')" title="Color de página" style="position:relative">
            <span class="color-dot" style="background:${c.dot}"></span>
            Color
            <div class="color-panel" id="color-panel" style="display:none" onclick="event.stopPropagation()">
              <div class="cp-title">Color de página</div>
              <div class="cp-swatches">
                ${Object.entries(COLORS).map(([k, v]) => `
                  <button class="cp-swatch ${(n.color || 'default') === k ? 'selected' : ''}" title="${v.label}"
                    style="background:${v.bg};border-color:${v.bdr}" onclick="setPageColor('${k}')">
                    <span style="width:12px;height:12px;border-radius:50%;display:inline-block;background:${v.dot}"></span>
                  </button>`).join('')}
              </div>
            </div>
          </button>
          <button class="star-btn" onclick="starNote()" id="star-btn">${n.starred ? '⭐' : '☆'}</button>
          <button class="del-btn" onclick="confirmDelete('${n.id}')">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
            Eliminar
          </button>
        </div>
      </div>

      <div class="editor-page" id="editor-page" style="background:${c.bg};border-color:${c.bdr}">
        <button class="editor-emoji-btn" id="editor-emoji" onclick="showEmojiPicker()">${n.emoji}</button>
        <input class="editor-title" id="editor-title" placeholder="Sin título" value="${esc(n.title)}" oninput="autoSave()" />
        <hr class="editor-sep">
        <textarea class="editor-content" id="editor-content" placeholder="Empieza a escribir..." oninput="autoSave();autoResize(this)">${esc(n.content)}</textarea>
        <div class="editor-foot"><span class="word-count" id="wc">${wordCount(n.content)}</span></div>

        <div class="subpages-section">
          <div class="subpages-hdr">
            <span class="subpages-title">Sub-páginas${kids.length ? ` (${kids.length})` : ''}</span>
            <button class="add-subpage-btn" onclick="newSubpage('${n.id}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Añadir sub-página
            </button>
          </div>
          ${kids.map(k => `
            <div class="subpage-item" onclick="nav('note',{noteId:'${k.id}'})">
              <span class="subpage-emoji">${k.emoji}</span>
              <span class="subpage-title">${esc(k.title)}</span>
              <span class="subpage-date">${relDate(k.updatedAt)}</span>
              <svg class="subpage-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>`).join('')}
          <div class="new-subpage-card" onclick="newSubpage('${n.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--t4)"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Nueva sub-página dentro de "${esc(n.title)}"</span>
          </div>
        </div>
      </div>
    </div>`;

  setTimeout(() => { const ta = document.getElementById('editor-content'); if (ta) autoResize(ta); }, 0);
}

function autoResize(el) { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; }

function autoSave() {
  const ind = document.getElementById('save-ind');
  if (ind) { ind.className = 'save-ind'; ind.textContent = '⏳ Guardando...'; }
  clearTimeout(_saveT);
  _saveT = setTimeout(() => {
    const title   = document.getElementById('editor-title')?.value || '';
    const content = document.getElementById('editor-content')?.value || '';
    const tag     = document.getElementById('note-tag')?.value || 'General';
    updateNote(S.noteId, { title, content, tag });
    renderSidebar();
    const ind2 = document.getElementById('save-ind');
    if (ind2) { ind2.className = 'save-ind saved'; ind2.textContent = '✓ Guardado'; }
    const wc = document.getElementById('wc');
    if (wc) wc.textContent = wordCount(content);
  }, 500);
}

function starNote() {
  toggleStar(S.noteId);
  const n = getById(S.noteId);
  const btn = document.getElementById('star-btn');
  if (btn) btn.textContent = n.starred ? '⭐' : '☆';
}

function setPageColor(color) {
  updateNote(S.noteId, { color });
  closeDD();
  renderNoteEditor();
}

function newSubpage(parentId) {
  const n = createNote({ parentId });
  S.expanded.add(parentId);
  nav('note', { noteId: n.id });
}

function confirmDelete(id) {
  const kids = getChildren(id);
  showModal({
    title: '¿Mover a la papelera?',
    desc: kids.length
      ? `Esta página tiene ${kids.length} sub-página(s) que también se moverán a la papelera.`
      : 'La nota se moverá a la papelera. Puedes restaurarla.',
    confirmText: 'Mover a papelera',
    onConfirm: () => {
      const n = getById(id);
      softDelete(id);
      closeModal();
      nav(n?.parentId ? 'note' : 'home', n?.parentId ? { noteId: n.parentId } : {});
    },
  });
}

function renderSearch() {
  const q = S.searchQ.toLowerCase();
  const results = q
    ? getActive().filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q) || n.tag.toLowerCase().includes(q))
    : [];

  document.getElementById('view-root').innerHTML = `
    <div class="search-view">
      <div class="big-srch">
        <span class="si">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input id="search-input" type="text" placeholder="Buscar en tus apuntes..." value="${esc(S.searchQ)}" oninput="doSearch(this.value)" autofocus />
      </div>
      ${q
        ? `<div style="font-size:12.5px;color:var(--t3);margin-bottom:14px">${results.length} resultado${results.length !== 1 ? 's' : ''} para "<strong>${esc(S.searchQ)}</strong>"</div>`
        : '<div style="font-size:13px;color:var(--t4);margin-bottom:14px">Escribe para buscar en tus notas...</div>'}
      ${q && results.length
        ? `<div class="notes-list">${results.map(n => `
            <div class="list-item" onclick="nav('note',{noteId:'${n.id}'})">
              <span class="list-emoji">${n.emoji}</span>
              <div class="list-info"><div class="list-title">${hi(n.title, q)}</div><div class="list-sub">${hi(snip(n.content, q), q)}</div></div>
              <div class="list-meta">${tagPill(n.tag)}<span class="list-date">${relDate(n.updatedAt)}</span></div>
            </div>`).join('')}</div>`
        : q ? `<div class="no-results"><div class="nr-emoji">🔍</div><p>Sin resultados para "<strong>${esc(S.searchQ)}</strong>"</p></div>` : ''}
    </div>`;
}

function doSearch(q) {
  S.searchQ = q;
  if (S.view !== 'search') { S.view = 'search'; renderTopbar(); }
  renderSearch();
  const ts = document.getElementById('top-search');
  if (ts && ts !== document.activeElement) ts.value = q;
}

function hi(text, q) {
  if (!q) return esc(text);
  return esc(text).replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), m => `<mark style="background:rgba(245,166,35,.3);border-radius:2px">${m}</mark>`);
}

function snip(c, q) {
  const i = c.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return c.slice(0, 80);
  const s = Math.max(0, i - 30);
  return (s > 0 ? '...' : '') + c.slice(s, i + 60) + (i + 60 < c.length ? '...' : '');
}


function renderTrash() {
  const deleted = getDeleted();
  document.getElementById('view-root').innerHTML = `
    <h3 style="font-size:18px;font-weight:800;color:var(--t1);margin-bottom:14px">Papelera</h3>
    ${deleted.length ? `
      <div class="trash-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        ${deleted.length} nota${deleted.length !== 1 ? 's' : ''} en la papelera
      </div>
      <div class="notes-list">
        ${deleted.map(n => `
          <div class="list-item" style="opacity:.7">
            <span class="list-emoji">${n.emoji}</span>
            <div class="list-info">
              <div class="list-title" style="text-decoration:line-through">${esc(n.title)}</div>
              <div class="list-sub">Eliminada ${relDate(n.updatedAt)}</div>
            </div>
            <div class="list-meta">
              <button class="restore-btn" onclick="restoreNote('${n.id}');renderAll()">Restaurar</button>
              <button class="perm-btn" onclick="confirmPermDelete('${n.id}')">Borrar</button>
            </div>
          </div>`).join('')}
      </div>
      <div style="margin-top:18px">
        <button class="perm-btn" style="padding:8px 16px;font-size:13px" onclick="confirmEmptyTrash()">Vaciar papelera</button>
      </div>`
    : `<div class="empty-state"><div class="es-emoji">🗑️</div><p>La papelera está vacía</p><small>Las notas eliminadas aparecerán aquí</small></div>`}`;
}

function confirmPermDelete(id) {
  showModal({ title: '¿Eliminar permanentemente?', desc: 'Esta acción no se puede deshacer.', confirmText: 'Eliminar para siempre', onConfirm: () => { permDelete(id); closeModal(); renderAll(); } });
}
function confirmEmptyTrash() {
  showModal({ title: '¿Vaciar la papelera?', desc: 'Todas las notas serán eliminadas permanentemente.', confirmText: 'Vaciar papelera', onConfirm: () => { getDeleted().forEach(n => permDelete(n.id)); closeModal(); renderAll(); } });
}

function renderTemplates() {
  document.getElementById('view-root').innerHTML = `
    <h3 style="font-size:18px;font-weight:800;color:var(--t1);margin-bottom:5px">Plantillas</h3>
    <p style="font-size:13.5px;color:var(--t3);margin-bottom:22px">Crea páginas con estructura predefinida</p>
    <div class="templates-grid">
      ${TEMPLATES.map((t, i) => `
        <div class="tpl-card">
          <div class="tpl-emoji">${t.emoji}</div>
          <div class="tpl-name">${esc(t.name)}</div>
          <div class="tpl-desc">${esc(t.desc)}</div>
          <button class="tpl-use-btn" onclick="useTemplate(${i})">Usar plantilla →</button>
        </div>`).join('')}
    </div>`;
}

function useTemplate(i) {
  const t = TEMPLATES[i];
  const n = createNote({ emoji: t.emoji, title: t.name, content: t.content, tag: t.tag });
  nav('note', { noteId: n.id });
}

function renderUpdates() {
  const recent = [...getActive()].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 8);
  document.getElementById('view-root').innerHTML = `
    <h3 style="font-size:18px;font-weight:800;color:var(--t1);margin-bottom:18px">Actualizaciones</h3>
    <div style="max-width:600px">
      ${recent.map((n, i) => `
        <div class="upd-item">
          <div class="upd-dot ${i === 0 ? '' : i % 3 === 1 ? 'green' : 'blue'}"></div>
          <div class="upd-text">${n.emoji} <strong>${esc(n.title)}</strong> fue modificada</div>
          <div class="upd-time">${relDate(n.updatedAt)}</div>
        </div>`).join('')}
    </div>`;
}

function newNote(tag) {
  const n = createNote(tag ? { tag } : {});
  nav('note', { noteId: n.id });
}

function showModal({ title, desc, confirmText, onConfirm }) {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-box" onclick="event.stopPropagation()">
        <div class="modal-title">${esc(title)}</div>
        <div class="modal-desc">${esc(desc)}</div>
        <div class="modal-actions">
          <button class="modal-cancel" onclick="closeModal()">Cancelar</button>
          <button class="modal-confirm" id="mcb">${esc(confirmText)}</button>
        </div>
      </div>
    </div>`;
  document.getElementById('mcb').addEventListener('click', onConfirm);
}

function closeModal() { document.getElementById('modal-root').innerHTML = ''; }

function showEmojiPicker() {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="emoji-picker" onclick="event.stopPropagation()">
        <div style="font-size:12.5px;font-weight:700;color:var(--t2);margin-bottom:10px">Elige un emoji</div>
        <div class="emoji-grid">
          ${EMOJIS.map(e => `<button class="emoji-opt" onclick="setEmoji('${e}')">${e}</button>`).join('')}
        </div>
      </div>
    </div>`;
}

function setEmoji(e) {
  closeModal();
  updateNote(S.noteId, { emoji: e });
  const btn = document.getElementById('editor-emoji');
  if (btn) btn.textContent = e;
  renderSidebar();
}

function toggleDD(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const wasOpen = el.style.display !== 'none';
  closeDD();
  if (!wasOpen) el.style.display = 'block';
}

function closeDD() { document.querySelectorAll('.dropdown, .color-panel').forEach(d => d.style.display = 'none'); }

function setSort(by) { S.sortBy = by; closeDD(); renderAll(); }

document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    nav('search');
    setTimeout(() => document.getElementById('search-input')?.focus(), 50);
  }
  if (e.key === 'Escape') {
    if (document.getElementById('modal-root').innerHTML) { closeModal(); return; }
    closeDD();
    if (S.view === 'note') {
      const n = getById(S.noteId);
      nav(n?.parentId ? 'note' : 'home', n?.parentId ? { noteId: n.parentId } : {});
    } else if (S.view === 'search') {
      nav('home');
    }
  }
  if ((e.metaKey || e.ctrlKey) && e.key === 's' && S.view === 'note') { e.preventDefault(); autoSave(); }
  if ((e.metaKey || e.ctrlKey) && e.key === 'n') { e.preventDefault(); newNote(); }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.dropdown') && !e.target.closest('.color-panel') &&
      !e.target.closest('.color-btn') && !e.target.closest('[onclick*="toggleDD"]') &&
      !e.target.closest('.ws-btn')) {
    closeDD();
  }
});

function checkAuth() {
  if (!localStorage.getItem('notasapp_user')) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

if (checkAuth()) {
  initData();
  renderAll();
}
