/* Research Pathways B1 · Workbook interactivo
   Motor de ejercicios: rellenar huecos, opción múltiple, reescritura, tareas abiertas,
   espacios de audio, diario de aprendizaje y portafolio. Todo se guarda en el navegador. */
(function () {
  "use strict";
  const UNITS = window.UNITS || [];
  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const LS = "rpb1:";

  /* ---------- storage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = s => String(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
  const words = s => (s.trim().match(/[A-Za-zÀ-ÿ0-9'’-]+/g) || []).length;

  function norm(s) {
    s = String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/ /g, " ");
    s = s.replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "can not").replace(/\bcannot\b/g, "can not")
      .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ll\b/g, " will")
      .replace(/'ve\b/g, " have").replace(/\b(it|he|she|that|there|what|where|who)'s\b/g, "$1 is");
    s = s.replace(/analys/g, "analyz").replace(/generalis/g, "generaliz").replace(/µg/g, "micrograms");
    s = s.replace(/["]/g, "").replace(/[,;:]/g, " ").replace(/[.!?]+(\s|$)/g, " ").replace(/\s+/g, " ").trim();
    return s;
  }
  const matches = (val, answers) => { const n = norm(val); return n.length > 0 && answers.some(a => norm(a) === n); };

  /* ---------- icons (fallback illustrations) ---------- */
  const ICONS = {
    flask: '<path d="M38 10h24M44 10v26L24 78a8 8 0 0 0 7 12h38a8 8 0 0 0 7-12L56 36V10"/><path d="M32 62h36"/><circle cx="45" cy="72" r="3"/><circle cx="56" cy="78" r="2"/>',
    question: '<circle cx="50" cy="50" r="38"/><path d="M38 40a12 12 0 1 1 18 10c-4 3-6 5-6 10"/><circle cx="50" cy="72" r="2.5"/>',
    book: '<path d="M14 22h28a8 8 0 0 1 8 8v52a6 6 0 0 0-6-6H14zM86 22H58a8 8 0 0 0-8 8v52a6 6 0 0 1 6-6h30z"/>',
    ruler: '<rect x="12" y="34" width="76" height="32" rx="4"/><path d="M24 34v12M36 34v8M48 34v12M60 34v8M72 34v12"/>',
    voice: '<path d="M20 24h60a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H44L28 80V66h-8a6 6 0 0 1-6-6V30a6 6 0 0 1 6-6z"/><path d="M32 40h36M32 50h24"/>',
    shield: '<path d="M50 12l32 12v22c0 22-14 36-32 42-18-6-32-20-32-42V24z"/><path d="M36 50l10 10 18-20"/>',
    chart: '<path d="M14 84h74M14 84V16"/><path d="M22 70l16-14 14 6 14-22 16-12"/><circle cx="38" cy="56" r="3"/><circle cx="52" cy="62" r="3"/><circle cx="66" cy="40" r="3"/>',
    bulb: '<path d="M50 14a24 24 0 0 0-14 43c3 3 5 7 5 11h18c0-4 2-8 5-11a24 24 0 0 0-14-43z"/><path d="M41 76h18M44 84h12"/>',
    doc: '<path d="M26 12h34l16 16v60H26z"/><path d="M60 12v16h16M36 44h30M36 54h30M36 64h20"/>',
    stage: '<rect x="16" y="18" width="68" height="44" rx="4"/><path d="M50 62v14M34 86h32M28 50l14-12 10 8 16-16"/>',
    team: '<circle cx="36" cy="36" r="10"/><circle cx="64" cy="36" r="10"/><path d="M18 78c0-12 8-20 18-20s18 8 18 20M46 78c0-12 8-20 18-20s18 8 18 20"/>',
    globe: '<circle cx="50" cy="50" r="36"/><path d="M14 50h72M50 14c12 12 12 60 0 72M50 14c-12 12-12 60 0 72"/>',
    mic: '<rect x="40" y="14" width="20" height="40" rx="10"/><path d="M28 46a22 22 0 0 0 44 0M50 68v14M38 84h24"/>'
  };
  const icon = (k, stroke) => `<svg viewBox="0 0 100 100" fill="none" stroke="${stroke || "#fff"}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${ICONS[k] || ICONS.flask}</svg>`;
  const headphones = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/></svg>';
  const commons = f => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=1200`;
  const commonsPage = f => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f.replace(/ /g, "_"))}`;
  window.__imgFail = function (img) { const p = img.parentNode; img.remove(); const fb = p.querySelector(".fb-hidden"); if (fb) { fb.classList.remove("fb-hidden"); fb.style.display = ""; } };

  /* ---------- progress ---------- */
  function unitGraded(u) { let n = 0; u.sections.forEach(s => s.ex.forEach(e => { if (isGraded(e)) n++; })); return n; }
  function isGraded(e) { return ["gaps", "choice", "rewrite"].includes(e.type); }
  function unitPct(u) {
    const total = unitGraded(u); if (!total) return 0;
    const done = store.get("done:" + u.n, {});
    let sum = 0; Object.values(done).forEach(v => sum += v); return Math.round(100 * sum / total);
  }
  function setExScore(u, exId, frac) {
    const done = store.get("done:" + u, {}); done[exId] = Math.max(done[exId] || 0, frac); store.set("done:" + u, done);
    refreshProgress(u);
  }
  function refreshProgress(n) {
    const u = UNITS.find(x => x.n === n); if (!u) return;
    const p = unitPct(u);
    const b = document.querySelector(".progress .bar span"); if (b) b.style.width = p + "%";
    const t = document.querySelector(".progress .pv"); if (t) t.textContent = p + "%";
    const s = sidebar.querySelector(`a[data-u="${n}"] .pct`); if (s) s.textContent = p ? p + "%" : "";
  }

  /* ---------- sidebar ---------- */
  function renderSidebar() {
    let h = `<div class="group">Workbook</div>
      <a href="#/inicio" data-r="inicio"><span class="num">★</span>Inicio y cómo usarlo</a>
      <a href="#/portafolio" data-r="portafolio"><span class="num">✓</span>Mi portafolio</a>
      <a href="#/audios" data-r="audios"><span class="num">♪</span>Audios del libro</a>
      <div class="group">Semestre 1</div>`;
    UNITS.forEach(u => {
      if (u.n === 7) h += `<div class="group">Semestre 2</div>`;
      const p = unitPct(u);
      h += `<a href="#/unidad/${u.n}" data-u="${u.n}"><span class="num">${u.n}</span><span>${esc(u.title)}</span><span class="pct">${p ? p + "%" : ""}</span></a>`;
    });
    sidebar.innerHTML = h;
  }
  function markActive(key) {
    sidebar.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.dataset.u === key || a.dataset.r === key));
  }

  /* ---------- hero ---------- */
  function hero(u, kicker, title, sub) {
    const img = u && u.img;
    const fb = `<div class="hero-fallback ${img ? "fb-hidden" : ""}" ${img ? 'style="display:none"' : ""}>${icon(u ? u.icon : "flask")}</div>`;
    const im = img ? `<img src="${commons(img.file)}" alt="${esc(img.alt)}" loading="eager" onerror="__imgFail(this)">` : "";
    return `<section class="hero">${im}${fb}<div class="hero-text"><div class="kicker">${kicker}</div><h1>${esc(title)}</h1>${sub ? `<p>${sub}</p>` : ""}</div></section>` +
      (img ? `<div class="credit">Foto: <a href="${commonsPage(img.file)}" target="_blank" rel="noopener">${esc(img.credit)}</a> · Wikimedia Commons</div>` : "");
  }

  /* ---------- audio slot ---------- */
  function audioSlot(track, label) {
    const id = track.replace(".", "-");
    const conf = (window.AUDIO_TRACKS || {})[track] || "";
    const local = `audio/track-${id}.mp3`;
    let player;
    const drive = conf.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (drive) player = `<iframe src="https://drive.google.com/file/d/${drive[1]}/preview" allow="autoplay" title="Audio Track ${track}"></iframe>`;
    else player = `<audio controls preload="metadata" src="${esc(conf || local)}" data-file="${local}"></audio>`;
    return `<div class="audio-slot"><div class="ic">${headphones}</div>
      <div class="meta"><b>Student's Book · Track ${track}</b><small>${esc(label || "")}</small></div>
      ${player}
      <div class="audio-missing" hidden>Espacio para audio: sube <code>${local}</code> al repositorio o pega un enlace en <code>js/audio-config.js</code>.</div></div>`;
  }
  function wireAudio(root) {
    root.querySelectorAll(".audio-slot audio").forEach(a => {
      const miss = a.parentNode.querySelector(".audio-missing");
      a.addEventListener("error", () => { a.hidden = true; miss.hidden = false; });
      a.addEventListener("loadedmetadata", () => { miss.hidden = true; a.hidden = false; });
    });
  }

  /* ---------- exercise renderers ---------- */
  function exHeader(e, num) {
    const kinds = { gaps: "Autocorrección", choice: "Autocorrección", rewrite: "Autocorrección", open: "Producción libre" };
    return `<div class="ex-head"><div class="ex-num">${esc(num)}</div><div><div class="ex-prompt">${md(e.prompt)}</div>${e.note ? `<div class="ex-note">${md(e.note)}</div>` : ""}</div><div class="ex-kind">${kinds[e.type] || ""}</div></div>`;
  }
  function extras(e) {
    let h = "";
    if (e.track) h += audioSlot(e.track, e.trackLabel);
    if (e.box) h += `<div class="box-words">${e.box.map(w => `<span>${esc(w)}</span>`).join("")}</div>`;
    if (e.figure) h += `<figure class="inline-figure"><img src="${commons(e.figure.file)}" alt="${esc(e.figure.alt)}" loading="lazy" onerror="this.parentNode.remove()"><figcaption>${esc(e.figure.alt)} · Foto: <a href="${commonsPage(e.figure.file)}" target="_blank" rel="noopener">${esc(e.figure.credit)}</a>, Wikimedia Commons</figcaption></figure>`;
    if (e.html) h += e.html;
    if (e.passage) h += `<blockquote class="passage">${e.passage}</blockquote>`;
    return h;
  }

  function renderGaps(e, u, key) {
    let n = 0;
    const items = e.items.map((it, i) => {
      const parts = it.t.split("___");
      let line = "";
      parts.forEach((p, j) => {
        line += md(esc(p).replace(/&lt;br&gt;/g, "<br>"));
        if (j < parts.length - 1) {
          const g = it.g[j]; const gid = n++;
          if (g.o) line += `<select class="gap" data-g="${gid}"><option value="">—</option>${g.o.map(o => `<option>${esc(o)}</option>`).join("")}</select>`;
          else line += `<input class="gap" data-g="${gid}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(7, (g.w || (g.a[0] || "").length + 3))}ch">`;
        }
      });
      return `<div class="item" data-i="${i}"><div class="line">${e.numbered === false ? "" : `<span class="qn">${i + 1}</span>`}${line}</div><div class="fb"></div></div>`;
    }).join("");
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}<div class="items">${items}</div>
      <div class="actions"><button class="btn chk">Comprobar</button><button class="btn ghost rst">Borrar</button><span class="score"></span></div></div>`);
    const flat = []; e.items.forEach(it => it.g.forEach(g => flat.push(g)));
    const saved = store.get("ans:" + key, {});
    node.querySelectorAll(".gap").forEach(inp => { if (saved[inp.dataset.g]) inp.value = saved[inp.dataset.g]; inp.addEventListener("input", save); inp.addEventListener("change", save); });
    function save() { const o = {}; node.querySelectorAll(".gap").forEach(x => o[x.dataset.g] = x.value); store.set("ans:" + key, o); }
    node.querySelector(".chk").onclick = () => {
      let ok = 0, tot = 0, idx = 0;
      e.items.forEach((it, i) => {
        const itemEl = node.querySelector(`.item[data-i="${i}"]`); const fbEl = itemEl.querySelector(".fb");
        let allOk = true; let msgs = [];
        it.g.forEach((g, j) => {
          const inp = node.querySelector(`.gap[data-g="${idx++}"]`); tot++;
          const ans = Array.isArray(g.a) ? g.a : [g.a];
          const good = g.o ? ans.includes(inp.value) : matches(inp.value, ans);
          inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good);
          if (good) ok++; else { allOk = false; msgs.push({ g, empty: !inp.value.trim(), multi: it.g.length > 1, pos: j + 1 }); }
        });
        itemEl.classList.toggle("ok", allOk); itemEl.classList.toggle("bad", !allOk);
        if (allOk) fbEl.innerHTML = `<span class="yes">✓ Correcto.</span>${it.good ? " " + md(it.good) : ""}`;
        else fbEl.innerHTML = msgs.map(m => `<span class="no">✗ ${m.multi ? "Hueco " + m.pos + ": " : ""}${m.empty ? "Falta tu respuesta." : "Incorrecto."}</span> ${m.empty ? "" : `<span class="why">${md(m.g.why || "Revisa la regla de la unidad.")}</span>`}<button class="reveal" data-a="${esc((Array.isArray(m.g.a) ? m.g.a[0] : m.g.a))}">Ver respuesta</button>`).join("<br>");
      });
      node.querySelectorAll(".reveal").forEach(b => b.onclick = () => { b.outerHTML = `<span class="ans">→ ${esc(b.dataset.a)}</span>`; });
      node.querySelector(".score").innerHTML = `<b>${ok}</b> / ${tot} correctas`;
      setExScore(u.n, key, ok / tot);
    };
    node.querySelector(".rst").onclick = () => { node.querySelectorAll(".gap").forEach(x => { x.value = ""; x.classList.remove("ok", "bad"); }); node.querySelectorAll(".item").forEach(x => { x.classList.remove("ok", "bad"); x.querySelector(".fb").innerHTML = ""; }); node.querySelector(".score").innerHTML = ""; save(); };
    return node;
  }

  function renderChoice(e, u, key) {
    const L = "abcdefgh";
    const items = e.items.map((it, i) => `<div class="item mc" data-i="${i}"><div class="q"><span class="qn">${i + 1}</span>${md(it.q)}</div>
      <div class="opts">${it.o.map((o, j) => `<button class="opt" data-j="${j}"><span class="l">${L[j]}</span><span>${md(esc(o))}</span></button>`).join("")}</div><div class="fb"></div></div>`).join("");
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}<div class="items">${items}</div><div class="actions"><button class="btn ghost rst">Reiniciar</button><span class="score"></span></div></div>`);
    const state = {};
    function score() {
      const firstTry = Object.values(state).filter(v => v === "first").length; const answered = Object.keys(state).length;
      node.querySelector(".score").innerHTML = `<b>${firstTry}</b> / ${e.items.length} correctas al primer intento` + (answered < e.items.length ? ` · faltan ${e.items.length - answered}` : "");
      if (answered === e.items.length) setExScore(u.n, key, firstTry / e.items.length);
    }
    node.querySelectorAll(".item").forEach(itEl => {
      const i = +itEl.dataset.i, it = e.items[i]; let tries = 0;
      itEl.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        const j = +b.dataset.j; tries++;
        const fb = it.f ? it.f[j] : "";
        if (j === it.a) {
          b.classList.add("ok"); itEl.classList.remove("bad"); itEl.classList.add("ok");
          itEl.querySelectorAll(".opt").forEach(x => x.disabled = true);
          itEl.querySelector(".fb").innerHTML = `<span class="yes">✓ Correcto.</span> ${md(fb || "")}`;
          state[i] = tries === 1 ? "first" : "later"; score();
        } else {
          b.classList.add("bad"); b.disabled = true; itEl.classList.add("bad");
          itEl.querySelector(".fb").innerHTML = `<span class="no">✗ Incorrecto.</span> <span class="why">${md(fb || "Vuelve a leer el texto.")}</span> Intenta otra vez.`;
        }
      });
    });
    node.querySelector(".rst").onclick = () => { node.replaceWith(renderChoice(e, u, key)); };
    return node;
  }

  function renderRewrite(e, u, key) {
    const items = e.items.map((it, i) => `<div class="item" data-i="${i}"><div><span class="qn">${i + 1}</span>${md(esc(it.q))}${it.start ? ` <em style="color:var(--ink-3)">→ ${esc(it.start)}</em>` : ""}</div>
      <input class="full" data-i="${i}" autocomplete="off" spellcheck="false" placeholder="${esc(it.start ? it.start + " …" : "Escribe la oración completa")}"><div class="fb"></div></div>`).join("");
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}<div class="items">${items}</div><div class="actions"><button class="btn chk">Comprobar</button><button class="btn ghost rst">Borrar</button><span class="score"></span></div></div>`);
    const saved = store.get("ans:" + key, {});
    node.querySelectorAll("input.full").forEach(inp => { if (saved[inp.dataset.i]) inp.value = saved[inp.dataset.i]; inp.addEventListener("input", save); });
    function save() { const o = {}; node.querySelectorAll("input.full").forEach(x => o[x.dataset.i] = x.value); store.set("ans:" + key, o); }
    node.querySelector(".chk").onclick = () => {
      let ok = 0;
      e.items.forEach((it, i) => {
        const inp = node.querySelector(`input.full[data-i="${i}"]`), itEl = inp.parentNode, fb = itEl.querySelector(".fb");
        const good = matches(inp.value, it.a);
        inp.classList.toggle("ok", good); inp.classList.toggle("bad", !good); itEl.classList.toggle("ok", good); itEl.classList.toggle("bad", !good);
        if (good) { ok++; fb.innerHTML = `<span class="yes">✓ Correcto.</span>${it.good ? " " + md(it.good) : ""}`; }
        else if (!inp.value.trim()) fb.innerHTML = `<span class="no">✗ Falta tu respuesta.</span>`;
        else fb.innerHTML = `<span class="no">✗ No coincide con la respuesta esperada.</span> <span class="why">${md(it.why)}</span><button class="reveal" data-a="${esc(it.a[0])}">Ver respuesta</button>${e.flexible ? `<br><small style="color:var(--ink-3)">Puede haber otras versiones correctas: compara la tuya con la respuesta.</small>` : ""}`;
      });
      node.querySelectorAll(".reveal").forEach(b => b.onclick = () => { b.outerHTML = `<span class="ans">→ ${esc(b.dataset.a)}</span>`; });
      node.querySelector(".score").innerHTML = `<b>${ok}</b> / ${e.items.length} correctas`;
      setExScore(u.n, key, ok / e.items.length);
    };
    node.querySelector(".rst").onclick = () => { node.querySelectorAll("input.full").forEach(x => { x.value = ""; x.classList.remove("ok", "bad"); }); node.querySelectorAll(".item").forEach(x => { x.classList.remove("ok", "bad"); x.querySelector(".fb").innerHTML = ""; }); node.querySelector(".score").innerHTML = ""; save(); };
    return node;
  }

  function renderOpen(e, u, key) {
    const fields = e.fields || [{ label: "", rows: "" }];
    const saved = store.get("open:" + key, {});
    let h = fields.map((f, i) => `${f.label ? `<div class="field-label">${md(esc(f.label))}</div>` : ""}<textarea class="${f.short ? "short" : ""}" data-i="${i}" placeholder="${esc(f.ph || "Escribe aquí tu respuesta en inglés…")}">${esc(saved[i] || "")}</textarea>`).join("");
    if (e.words) h += `<div class="wc">0 palabras · objetivo: ${e.words[0]}–${e.words[1]}</div>`;
    if (e.check) h += `<ul class="checklist">${e.check.map((c, i) => `<li><input type="checkbox" id="${key}-c${i}" ${saved["c" + i] ? "checked" : ""} data-c="${i}"><label for="${key}-c${i}">${md(esc(c))}</label></li>`).join("")}</ul>`;
    const node = el(`<div class="ex">${exHeader(e, e.num)}${extras(e)}${h}<div class="actions">${e.model ? `<button class="btn ghost mdl">Ver respuesta modelo</button>` : ""}<span class="saved">Tu texto se guarda automáticamente en este navegador.</span></div><div class="model-slot"></div></div>`);
    const tas = node.querySelectorAll("textarea"), wc = node.querySelector(".wc");
    function save() {
      const o = {}; tas.forEach(t => o[t.dataset.i] = t.value); node.querySelectorAll("[data-c]").forEach(c => o["c" + c.dataset.c] = c.checked); store.set("open:" + key, o);
      if (wc) { let n = 0; tas.forEach(t => n += words(t.value)); wc.textContent = `${n} palabras · objetivo: ${e.words[0]}–${e.words[1]}`; wc.classList.toggle("okc", n >= e.words[0] && n <= e.words[1]); }
    }
    tas.forEach(t => t.addEventListener("input", save)); node.querySelectorAll("[data-c]").forEach(c => c.addEventListener("change", save)); save();
    const mb = node.querySelector(".mdl");
    if (mb) mb.onclick = () => {
      let n = 0; tas.forEach(t => n += words(t.value));
      const slot = node.querySelector(".model-slot");
      if (slot.innerHTML) { slot.innerHTML = ""; mb.textContent = "Ver respuesta modelo"; return; }
      if (n < (e.minBeforeModel != null ? e.minBeforeModel : 3)) { slot.innerHTML = `<div class="model" style="background:var(--accent-soft);border-color:#efd3a8"><p>Primero escribe tu propia versión; después compárala con el modelo. Así aprendes más.</p></div>`; return; }
      slot.innerHTML = `<div class="model"><h4>${esc(e.modelTitle || "Respuesta modelo")}</h4>${e.model}</div>`; mb.textContent = "Ocultar modelo";
    };
    return node;
  }

  function renderEx(e, u, key) {
    if (e.type === "gaps") return renderGaps(e, u, key);
    if (e.type === "choice") return renderChoice(e, u, key);
    if (e.type === "rewrite") return renderRewrite(e, u, key);
    return renderOpen(e, u, key);
  }

  /* ---------- diary ---------- */
  const DIARY = ["Three new words I will use in my thesis", "One grammar point I understand better now", "One mistake I often make, and the correct form", "Something I want to ask my teacher"];
  function diary(u) {
    const saved = store.get("diary:" + u.n, {});
    const node = el(`<div class="ex diary"><div class="ex-head"><div class="ex-num">✎</div><div><div class="ex-prompt">Learning diary · Unit ${u.n}</div><div class="ex-note">Reflexiona 10 minutos sobre lo que aprendiste.</div></div></div>
      ${DIARY.map((q, i) => `<div class="field-label">${i + 1}. ${q}</div><textarea class="short" data-i="${i}">${esc(saved[i] || "")}</textarea>`).join("")}
      <div class="actions"><span class="saved">Se guarda automáticamente.</span></div></div>`);
    node.querySelectorAll("textarea").forEach(t => t.addEventListener("input", () => { const o = {}; node.querySelectorAll("textarea").forEach(x => o[x.dataset.i] = x.value); store.set("diary:" + u.n, o); }));
    return node;
  }

  /* ---------- pages ---------- */
  function renderUnit(n) {
    const u = UNITS.find(x => x.n === n); if (!u) return renderHome();
    markActive(String(n));
    app.innerHTML = hero(u, `Unit ${u.n} · Semestre ${u.n <= 6 ? 1 : 2}`, u.title, u.sub) +
      `<div class="progress"><span>Progreso de la unidad</span><div class="bar"><span></span></div><span class="pv">0%</span></div>
       <div class="chips">${u.sections.map((s, i) => `<a href="#/unidad/${u.n}/s${i}">${esc(s.h)}</a>`).join("")}<a href="#/unidad/${u.n}/diario">Learning diary</a></div>`;
    u.sections.forEach((s, si) => {
      app.appendChild(el(`<div class="section-title" id="u${u.n}-s${si}"><span class="tag">${esc(s.tag || s.h.split(":")[0])}</span><h2>${md(esc(s.h))}</h2></div>`));
      s.ex.forEach((e, ei) => app.appendChild(renderEx(e, u, `${u.n}-${si}-${ei}`)));
    });
    app.appendChild(el(`<div class="section-title" id="u${u.n}-diario"><span class="tag">Reflect</span><h2>Learning diary</h2></div>`));
    app.appendChild(diary(u));
    const prev = UNITS.find(x => x.n === n - 1), next = UNITS.find(x => x.n === n + 1);
    app.appendChild(el(`<div class="pager">${prev ? `<a href="#/unidad/${prev.n}"><small>← Unidad anterior</small>Unit ${prev.n} · ${esc(prev.title)}</a>` : `<a href="#/inicio"><small>←</small>Inicio</a>`}${next ? `<a class="next" href="#/unidad/${next.n}"><small>Unidad siguiente →</small>Unit ${next.n} · ${esc(next.title)}</a>` : `<a class="next" href="#/portafolio"><small>→</small>Mi portafolio</a>`}</div>`));
    app.appendChild(el(footer()));
    wireAudio(app); refreshProgress(n);
  }

  function renderHome() {
    markActive("inicio");
    const homeImg = { img: { file: "Scientist looking thorugh microscope.jpg", credit: "National Cancer Institute (NIH), dominio público", alt: "Científica observando por un microscopio" }, icon: "flask" };
    app.innerHTML = hero(homeImg, "Posgrados UAZ · Inglés B1 para investigación", "Research Pathways B1 — Workbook", "Actividades de práctica independiente del Student's Book, organizadas por unidades y con retroalimentación inmediata.") +
      `<div class="callout"><strong>¿Cómo funciona?</strong><ul>
        <li>Haz cada unidad <strong>después</strong> de terminar la misma unidad en clase (unas 4 horas por unidad).</li>
        <li>En los ejercicios de autocorrección pulsa <strong>Comprobar</strong>. Si una respuesta es incorrecta verás <strong>por qué</strong>; después puedes corregirla o pulsar <em>Ver respuesta</em>.</li>
        <li>En opción múltiple la explicación aparece al elegir. Puedes volver a intentar.</li>
        <li>En escritura y <em>My research</em> escribe primero tu versión; luego puedes abrir la <strong>respuesta modelo</strong> para comparar.</li>
        <li>Los ejercicios <em>Listen again</em> tienen un reproductor con la pista del Student's Book.</li>
        <li>Todo lo que escribes se guarda en este navegador (no se envía a ningún servidor). Para entregar tu avance, ve a <a href="#/portafolio">Mi portafolio</a> y descarga tus resultados para enviarlos a tu docente.</li></ul></div>
      <h2>Unidades</h2><div class="grid">${UNITS.map(u => `<a class="ucard" href="#/unidad/${u.n}"><div class="thumb"><div class="fallback">${icon(u.icon)}</div><img src="${commons(u.img.file).replace("width=1200", "width=500")}" alt="" loading="lazy" onerror="this.remove()"></div><div class="body"><small>Unit ${u.n}</small><strong>${esc(u.title)}</strong><div class="mini"><span style="width:${unitPct(u)}%"></span></div></div></a>`).join("")}</div>
      <h2>Por qué funciona este workbook</h2>
      <p>El workbook sigue principios claros de la investigación sobre el aprendizaje de lenguas y el diseño curricular.</p>
      <table class="t"><tr><th>Principio</th><th>Fuente</th><th>Cómo lo ves aquí</th></tr>
      <tr><td>Autonomía: tú diriges tu propio aprendizaje</td><td>Holec (1981)</td><td>Retroalimentación inmediata, respuestas modelo, diario de aprendizaje y portafolio</td></tr>
      <tr><td>Anticipar, actuar, reflexionar</td><td>OECD Learning Compass 2030 (OECD, 2019)</td><td>Planeas tu tiempo de estudio, haces los ejercicios y escribes tu diario</td></tr>
      <tr><td>Reciclaje en espiral</td><td>Taba (1962); Nation y Macalister (2010)</td><td>Cada unidad reutiliza lenguaje de unidades anteriores en contextos nuevos</td></tr>
      <tr><td>La escritura como proceso</td><td>Swales y Feak (2012)</td><td>Tu texto de clase se convierte aquí en un segundo borrador</td></tr>
      <tr><td>Transferencia a tareas reales</td><td>Enfoque orientado a la acción del MCER (Council of Europe, 2020)</td><td><em>My research</em> aplica cada unidad a tu propio proyecto</td></tr>
      <tr><td>Escucha cuidadosa</td><td>H. D. Brown (2007)</td><td><em>Listen again</em> propone tareas nuevas con el mismo audio</td></tr></table>
      <h2>Qué hay en cada unidad</h2>
      <table class="t"><tr><th>Sección</th><th>Tiempo</th><th>Qué haces</th></tr>
      <tr><td>Vocabulary</td><td>30 min</td><td>Practicas el vocabulario de investigación en contextos nuevos</td></tr>
      <tr><td>Grammar</td><td>45 min</td><td>Práctica controlada y corrección de errores</td></tr>
      <tr><td>Reading</td><td>45 min</td><td>Un texto breve de otra disciplina</td></tr>
      <tr><td>Listen again</td><td>20 min</td><td>Tareas nuevas con las pistas del Student's Book</td></tr>
      <tr><td>Writing</td><td>60 min</td><td>Segunda versión de la tarea escrita de la unidad</td></tr>
      <tr><td>My research</td><td>30 min</td><td>Aplicas la unidad a tu propio proyecto</td></tr>
      <tr><td>Learning diary</td><td>10 min</td><td>Reflexionas sobre lo que aprendiste</td></tr></table>
      <h2>Consejos de estudio</h2><ul>
      <li><strong>Hazlo en inglés.</strong> Usa primero un diccionario inglés–inglés (Cambridge u Oxford learner's). Usa la traducción solo para comprobar.</li>
      <li><strong>Lleva un cuaderno de vocabulario:</strong> familia de palabras, una colocación y un ejemplo de tu campo.</li>
      <li><strong>Lee un artículo por semana</strong> de tu área en este orden: abstract, discusión, figuras, introducción, métodos.</li>
      <li><strong>Grábate</strong> con el teléfono y escucha el acento de las palabras y los tiempos verbales.</li>
      <li><strong>Escribe dos borradores:</strong> el primero en clase y el segundo aquí, después de la retroalimentación.</li></ul>
      <p class="ex-note">Los estudios, personajes y textos marcados como <em>written for this workbook</em> son ficticios y sirven para practicar.</p>` + footer();
  }

  const BOOK_TRACKS = [{"id": "1.1", "title": "The welcome seminar", "who": "Fiona MacLeod (female, Scottish English), Daniela (female, Mexican English), Luis (male, Mexican English)"}, {"id": "1.2", "title": "Research Voices: Dr Ji-woo Park", "who": "Ji-woo Park (female, Korean English)"}, {"id": "2.1", "title": "Refining a question", "who": "Amara Okafor (female, Nigerian English), Daniela (female, Mexican English)"}, {"id": "2.2", "title": "Research Voices: Rajesh Iyer", "who": "Rajesh Iyer (male, Indian English)"}, {"id": "3.1", "title": "At the university library", "who": "Librarian Teresa Ruiz (female, Mexican English), Mariana (female, Mexican English), Iván (male, Mexican English)"}, {"id": "3.2", "title": "Research Voices: Camila Souza", "who": "Camila Souza (female, Brazilian English)"}, {"id": "4.1", "title": "Experiments and surveys", "who": "Dr Héctor Salas (male, Mexican English), lecture style with pauses"}, {"id": "4.2", "title": "Research Voices: Sarah Whitfield", "who": "Sarah Whitfield (female, US English)"}, {"id": "5.1", "title": "An interview with a returned migrant", "who": "Sofía (female, Mexican English), Don Pedro (male, 60s, Mexican English learned in the US)"}, {"id": "5.2", "title": "Research Voices: Aroha Ngata", "who": "Aroha Ngata (female, New Zealand English)"}, {"id": "6.1", "title": "The ethics committee", "who": "Chair, Dr Lucía Ferrer (female, Mexican English), Dr Amara Okafor (female, Nigerian English), Iván (male, Mexican English)"}, {"id": "6.2", "title": "Research Voices: Lena Fischer", "who": "Lena Fischer (female, German English)"}, {"id": "7.1", "title": "Daniela presents her results", "who": "Daniela (female, Mexican English), with a short question from Fiona MacLeod (Scottish English)"}, {"id": "7.2", "title": "Research Voices: Priya Nair", "who": "Priya Nair (female, British English with an Indian background)"}, {"id": "8.1", "title": "An unexpected result", "who": "Ji-woo Park (female, Korean English), Luis (male, Mexican English)"}, {"id": "8.2", "title": "Research Voices: Kofi Asante", "who": "Kofi Asante (male, Ghanaian English)"}, {"id": "9.1", "title": "An editor's advice", "who": "Dr Helen Brooks (female, Australian English)"}, {"id": "9.2", "title": "Research Voices: Yuki Tanaka", "who": "Yuki Tanaka (female, Japanese English)"}, {"id": "10.1", "title": "Luis's conference talk", "who": "Luis (male, Mexican English), presentation style"}, {"id": "10.2", "title": "Research Voices: Mariam Haddad", "who": "Mariam Haddad (female, Lebanese English)"}, {"id": "11.1", "title": "Planning the stay", "who": "Rachel Moore (female, US English), Daniela (female, Mexican English)"}, {"id": "11.2", "title": "Research Voices: Nasrin Akter", "who": "Nasrin Akter (female, Bangladeshi English)"}, {"id": "12.1", "title": "Science on the radio", "who": "Radio host (male, Mexican English), Daniela (female, Mexican English)"}, {"id": "12.2", "title": "Research Voices: Fiona MacLeod", "who": "Fiona MacLeod (female, Scottish English)"}];
  const PORTFOLIO = ["Academic bio", "Problem statement", "Summary with citation", "Comparison paragraph", "Reflective field notes", "Information sheet and consent form", "Graph description", "Discussion paragraph", "Abstract", "Poster text", "Formal email", "Lay summary"];
  function renderPortfolio() {
    markActive("portafolio");
    const s = store.get("portfolio", {});
    app.innerHTML = hero({ img: { file: "Microscope (inverted).jpg", credit: "National Cancer Institute (NIH), dominio público", alt: "Científica observando cultivos celulares con un microscopio invertido" }, icon: "doc" }, "Research portfolio", "Mi portafolio de investigación", "Marca cada documento cuando tengas lista la versión final.") +
      `<div class="ex"><ul class="checklist" style="font-size:1rem">${PORTFOLIO.map((p, i) => `<li><input type="checkbox" id="pf${i}" data-i="${i}" ${s[i] ? "checked" : ""}><label for="pf${i}"><a href="#/unidad/${i + 1}">Unit ${i + 1}</a> · ${p}</label></li>`).join("")}</ul></div>
      <div class="callout">Al final del curso compara tu <em>bio</em> de la Unidad 1 con tu <em>lay summary</em> de la Unidad 12 (Unit 12, ejercicio 8).</div>
      <h2>Progreso por unidad</h2><table class="t"><tr><th>Unidad</th><th>Autocorrección</th></tr>${UNITS.map(u => `<tr><td><a href="#/unidad/${u.n}">Unit ${u.n} · ${esc(u.title)}</a></td><td>${unitPct(u)}%</td></tr>`).join("")}</table>
      <h2 id="enviar">Enviar mis resultados a mi docente</h2>
      <div class="ex"><p style="margin-top:0">Descarga un archivo de Excel (CSV) con tus puntajes de autocorrección por ejercicio y por unidad, tus textos de escritura y <em>My research</em>, tu diario de aprendizaje y tu portafolio. Después envíalo a tu docente por correo o por la plataforma del curso.</p>
        <div class="field-label">Nombre completo</div><input class="full" id="stName" autocomplete="name" value="${esc(store.get("student", {}).name || "")}">
        <div class="field-label">Matrícula o correo institucional</div><input class="full" id="stId" value="${esc(store.get("student", {}).id || "")}">
        <div class="field-label">Grupo (opcional)</div><input class="full" id="stGroup" value="${esc(store.get("student", {}).group || "")}">
        <div class="actions"><button class="btn" id="dlRes">Descargar mis resultados (Excel)</button><span class="saved" id="dlMsg">El archivo se crea en tu computadora; nada se envía automáticamente.</span></div></div>
      <div class="actions"><button class="btn ghost" id="wipe">Borrar todas mis respuestas guardadas</button></div>` + footer();
    app.querySelectorAll("[data-i]").forEach(c => c.onchange = () => { const o = store.get("portfolio", {}); o[c.dataset.i] = c.checked; store.set("portfolio", o); });
    ["stName", "stId", "stGroup"].forEach(id => document.getElementById(id).addEventListener("input", () => store.set("student", { name: document.getElementById("stName").value, id: document.getElementById("stId").value, group: document.getElementById("stGroup").value })));
    document.getElementById("dlRes").onclick = downloadResults;
    document.getElementById("wipe").onclick = () => { if (confirmWipe()) { Object.keys(localStorage).filter(k => k.startsWith(LS)).forEach(k => localStorage.removeItem(k)); renderSidebar(); renderPortfolio(); } };
  }
  function renderAudios() {
    markActive("audios");
    app.innerHTML = hero({ img: { file: "GD09 Poster Session.jpg", credit: "David Eppstein", alt: "Sesión académica" }, icon: "mic" }, "Student's Book · 24 pistas", "Audios del libro", "Todas las pistas del Student's Book, unidad por unidad: un diálogo o conferencia (X.1) y una voz de <em>Research Voices</em> (X.2).") +
      `<div class="callout">Escucha cada pista cuando el libro lo indique. Las voces se generaron con inteligencia artificial (Kokoro TTS, software libre) a partir de los guiones de la guía del docente, eligiendo voces cercanas a cada acento. Algunos acentos son aproximados.</div>`;
    let u = 0;
    BOOK_TRACKS.forEach(tr => {
      const n = +tr.id.split(".")[0];
      if (n !== u) { u = n; const un = UNITS.find(x => x.n === n); app.appendChild(el(`<div class="section-title"><span class="tag">Unit ${n}</span><h2>${esc(un ? un.title : "")}</h2></div>`)); }
      app.appendChild(el(`<div class="ex"><div class="ex-head"><div class="ex-num">${esc(tr.id)}</div><div><div class="ex-prompt">${esc(tr.title)}</div><div class="ex-note">${esc(tr.who)}</div></div></div>${audioSlot(tr.id, "")}</div>`));
    });
    app.appendChild(el(footer()));
    wireAudio(app);
  }
  function downloadResults() {
    const st = store.get("student", {}), msg = document.getElementById("dlMsg");
    if (!(st.name || "").trim()) { msg.textContent = "Escribe tu nombre antes de descargar."; msg.style.color = "var(--bad)"; document.getElementById("stName").focus(); return; }
    const now = new Date(), fecha = now.toISOString().slice(0, 10);
    const rows = [["Nombre", "Matrícula/correo", "Grupo", "Fecha", "Unidad", "Sección", "Ejercicio", "Tipo", "Puntaje (%)", "Respuesta del estudiante"]];
    const add = (u, sec, ex, tipo, score, resp) => rows.push([st.name, st.id || "", st.group || "", fecha, u, sec, ex, tipo, score, resp]);
    const kinds = { gaps: "Autocorrección", choice: "Autocorrección", rewrite: "Autocorrección", open: "Producción libre" };
    UNITS.forEach(u => {
      const done = store.get("done:" + u.n, {});
      add(`Unit ${u.n} · ${u.title}`, "RESUMEN", "", "Promedio de autocorrección", unitPct(u), "");
      u.sections.forEach((sct, si) => sct.ex.forEach((e, ei) => {
        const key = `${u.n}-${si}-${ei}`;
        if (isGraded(e)) add(`Unit ${u.n}`, sct.h, e.num, kinds[e.type], key in done ? Math.round(done[key] * 100) : "sin hacer", "");
        else {
          const o = store.get("open:" + key, {}), fields = e.fields || [{ label: "" }];
          const txt = fields.map((f, i) => (o[i] || "").trim() ? (f.label ? f.label + ": " : "") + o[i].trim() : "").filter(Boolean).join(" | ");
          add(`Unit ${u.n}`, sct.h, e.num, kinds.open, "", txt || "sin hacer");
        }
      }));
      const d = store.get("diary:" + u.n, {});
      DIARY.forEach((q, i) => add(`Unit ${u.n}`, "Learning diary", String(i + 1), q, "", (d[i] || "").trim() || "sin hacer"));
    });
    const pf = store.get("portfolio", {});
    PORTFOLIO.forEach((p, i) => add(`Unit ${i + 1}`, "Portafolio", p, "Versión final lista", "", pf[i] ? "Sí" : "No"));
    const csv = "\ufeff" + rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""').replace(/\r?\n/g, " ")}"`).join(",")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = `resultados-RPB1-${st.name.trim().replace(/\s+/g, "_").replace(/[^\w\-áéíóúñÁÉÍÓÚÑ]/g, "")}-${fecha}.csv`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    msg.style.color = ""; msg.textContent = "Listo: revisa tu carpeta de Descargas y envía el archivo a tu docente.";
  }
  function confirmWipe() { const b = document.getElementById("wipe"); if (b.dataset.armed) return true; b.dataset.armed = "1"; b.textContent = "Pulsa otra vez para confirmar"; return false; }
  const footer = () => `<footer class="site">Research Pathways B1 · Workbook · Posgrados UAZ. Las fotografías provienen de Wikimedia Commons (dominio público o licencias libres; ver créditos en cada unidad).</footer>`;

  /* ---------- router ---------- */
  function route() {
    const h = location.hash || "#/inicio";
    const m = h.match(/^#\/unidad\/(\d+)(?:\/(s\d+|diario))?/);
    sidebar.classList.remove("open");
    if (m) {
      const n = +m[1];
      if (app.dataset.page !== "u" + n) { renderUnit(n); app.dataset.page = "u" + n; window.scrollTo(0, 0); }
      if (m[2]) { const t = document.getElementById(`u${n}-${m[2]}`); if (t) t.scrollIntoView({ behavior: "smooth" }); }
    } else if (h.startsWith("#/audios")) { renderAudios(); app.dataset.page = "a"; window.scrollTo(0, 0);
    } else if (h.startsWith("#/portafolio")) { renderPortfolio(); app.dataset.page = "p"; window.scrollTo(0, 0); }
    else { renderHome(); app.dataset.page = "h"; window.scrollTo(0, 0); }
  }
  document.getElementById("menuBtn").onclick = () => sidebar.classList.toggle("open");
  renderSidebar();
  window.addEventListener("hashchange", route);
  route();
})();
