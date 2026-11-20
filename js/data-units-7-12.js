/* Research Pathways B1 — Workbook · Units 7–12 */
window.UNITS = window.UNITS || [];
(function () {
  /* Figure W7 — invented data for practice */
  const W7 = [["2016", 18], ["2017", 22], ["2018", 25], ["2019", 31], ["2020", 29], ["2021", 40], ["2022", 52], ["2023", 50], ["2024", 61], ["2025", 70]];
  const x = i => 70 + i * 68, y = v => 300 - v / 80 * 220;
  let grid = "", pts = "", lab = "";
  [20, 40, 60, 80].forEach(g => grid += `<line x1="55" x2="705" y1="${y(g)}" y2="${y(g)}" stroke="#e6e0d4"/><text x="48" y="${y(g) + 4}" text-anchor="end" font-size="11" fill="#7a8597">${g}</text>`);
  const path = W7.map((r, i) => `${i ? "L" : "M"}${x(i)} ${y(r[1])}`).join("");
  W7.forEach((r, i) => { pts += `<circle cx="${x(i)}" cy="${y(r[1])}" r="4.5" fill="#13808a"><title>${r[0]}: ${r[1]} articles</title></circle><text x="${x(i)}" y="${y(r[1]) - 11}" text-anchor="middle" font-size="12" font-weight="600" fill="#1c2430">${r[1]}</text>`; lab += `<text x="${x(i)}" y="322" text-anchor="middle" font-size="11.5" fill="#4a5566">${r[0]}</text>`; });
  const FIG_W7 = `<figure class="inline-figure" style="background:#fff;border:1px solid #e3ded3;border-radius:12px;padding:.6rem"><svg viewBox="0 0 740 340" role="img" aria-label="Figure W7: articles in English grew almost four times in ten years" style="width:100%;height:auto;font-family:Inter,sans-serif">
    <text x="30" y="26" font-size="15" font-weight="700" fill="#1c2430">Figure W7. Articles in English grew almost four times in ten years</text>
    <text x="30" y="46" font-size="11.5" fill="#7a8597">Articles published in English by a fictional faculty, 2016–2025 (invented data for practice)</text>
    ${grid}<line x1="55" x2="705" y1="${y(0)}" y2="${y(0)}" stroke="#9aa3b0"/><path d="${path}" fill="none" stroke="#13808a" stroke-width="2.5"/>${pts}${lab}</svg></figure>`;

  window.UNITS.push(

/* =============================== UNIT 7 =============================== */
{
  n: 7, title: "Seeing the numbers", icon: "chart",
  sub: "Describir tendencias · gráficas y figuras · descripción de una gráfica",
  img: { file: "Scientist Working in a Laboratory(GN09043).jpg", credit: "State Government Photographer, History Trust of South Australia (CC0)", alt: "Científico trabajando en un laboratorio, c. 1945" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the table: adjective ↔ adverb.",
        items: [
          { t: "sharp → ___", g: [{ a: ["sharply"], why: "Adjetivo + **-ly** = adverbio: *sharply* (bruscamente)." }] },
          { t: "___ ← gradually", g: [{ a: ["gradual"], why: "Quita **-ly** para obtener el adjetivo: *gradual*." }] },
          { t: "steady → ___", g: [{ a: ["steadily"], why: "Si el adjetivo termina en consonante + **-y**, cambia la *y* por *i*: *steadily*." }] },
          { t: "___ ← slightly", g: [{ a: ["slight"], why: "Quita **-ly**: *slight* (leve)." }] },
          { t: "dramatic → ___", g: [{ a: ["dramatically"], why: "Los adjetivos en **-ic** forman el adverbio con **-ally**: *dramatically*." }] },
          { t: "significant → ___", g: [{ a: ["significantly"], why: "*Significant* + **-ly** = *significantly*." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Write the noun form with a / an.",
        items: [
          { t: "rise → ___", g: [{ a: ["a rise"], why: "El sustantivo es igual al verbo: **a rise**. Usa *a* porque empieza con sonido consonante." }] },
          { t: "increase → ___", g: [{ a: ["an increase"], why: "*Increase* empieza con sonido vocal → **an** increase." }] },
          { t: "fall → ___", g: [{ a: ["a fall"], why: "Mismo sustantivo que el verbo: **a fall**." }] },
          { t: "decline → ___", g: [{ a: ["a decline"], why: "Mismo sustantivo que el verbo: **a decline**." }] },
          { t: "fluctuate → ___", g: [{ a: ["a fluctuation"], why: "*Fluctuate* cambia de forma: **a fluctuation** (-ation)." }] },
          { t: "peak → ___", g: [{ a: ["a peak"], why: "Mismo sustantivo que el verbo: **a peak** (punto máximo)." }] }
        ] }
    ] },
    { h: "Grammar: describing trends", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Look at Figure W7 and complete the description with prepositions.", numbered: false, html: FIG_W7,
        items: [{ t: "Between 2016 and 2019, the number of articles rose steadily (1) ___ 18 (2) ___ 31. In 2020, it fell slightly (3) ___ two articles. In 2021, there was a sharp increase (4) ___ 11 articles, and the number reached 52 (5) ___ 2022. After a small fall in 2023, it peaked (6) ___ 70 in 2025.",
          g: [
            { a: ["from"], why: "Punto de **partida** de un cambio: *from 18 to 31*." },
            { a: ["to"], why: "Punto de **llegada**: *from 18 **to** 31*." },
            { a: ["by"], why: "Después de un **verbo** de cambio, la cantidad de la diferencia va con **by**: *fell by two*." },
            { a: ["of"], why: "Después de un **sustantivo** de cambio (*an increase*), la cantidad va con **of**: *an increase of 11*." },
            { a: ["in"], why: "Con años se usa **in**: *in 2022*." },
            { a: ["at"], why: "*Peak* + **at** + la cifra máxima: *peaked at 70*." }
          ] }] },
      { num: "4", type: "rewrite", prompt: "Rewrite the sentences with the other pattern (verb + adverb ↔ adjective + noun).", flexible: true,
        items: [
          { q: "The number rose dramatically in 2021.", a: ["There was a dramatic rise in 2021.", "There was a dramatic increase in 2021.", "There was a dramatic rise in the number in 2021.", "There was a dramatic increase in the number in 2021."], why: "Verbo + adverbio → *There was* + **a** + adjetivo + sustantivo: *a dramatic rise*." },
          { q: "There was a slight decrease in 2023.", a: ["The number decreased slightly in 2023.", "The number fell slightly in 2023.", "It decreased slightly in 2023.", "It fell slightly in 2023."], why: "Adjetivo + sustantivo → sujeto + verbo + **adverbio**: *decreased slightly*." },
          { q: "Publications grew steadily.", a: ["There was steady growth in publications.", "There was a steady growth in publications.", "There was a steady increase in publications.", "There was a steady rise in publications."], why: "*Grew steadily* → *There was **steady growth** in publications* (adjetivo + sustantivo)." },
          { q: "There was a gradual decline in costs.", a: ["Costs declined gradually.", "Costs decreased gradually.", "Costs fell gradually."], why: "Sustantivo → verbo: *Costs **declined gradually***." }
        ] }
    ] },
    { h: "Reading: check the description", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "A student wrote this description of Figure W7. Is each sentence correct? Find the four factual mistakes.", note: "Mira la Figura W7 (arriba, en el ejercicio 3).",
        passage: `<p>In 2016, the faculty published 22 articles in English. The number rose steadily until 2019. In 2020, it fell sharply. Between 2021 and 2022 it remained stable. It reached a peak of 61 articles in 2024, and then it decreased slightly in 2025.</p>`,
        items: [
          { q: "\"In 2016, the faculty published 22 articles in English.\"", o: ["Correct", "Mistake"], a: 1, f: ["Mira el primer punto de la gráfica: en 2016 son 18, no 22 (22 corresponde a 2017).", "Correcto: en 2016 publicó **18** artículos, no 22."] },
          { q: "\"The number rose steadily until 2019.\"", o: ["Correct", "Mistake"], a: 0, f: ["Correcto: 18 → 22 → 25 → 31, un aumento constante.", "Esta oración sí coincide con la gráfica: 18 → 22 → 25 → 31."] },
          { q: "\"In 2020, it fell sharply.\"", o: ["Correct", "Mistake"], a: 1, f: ["Pasó de 31 a 29: solo dos artículos. Eso es *slightly*, no *sharply*.", "Correcto: cayó **ligeramente** (de 31 a 29), no bruscamente."] },
          { q: "\"Between 2021 and 2022 it remained stable.\"", o: ["Correct", "Mistake"], a: 1, f: ["Pasó de 40 a 52: subió mucho.", "Correcto: **subió bruscamente** de 40 a 52; no se mantuvo estable."] },
          { q: "\"It reached a peak of 61 articles in 2024, and then it decreased slightly in 2025.\"", o: ["Correct", "Mistake"], a: 1, f: ["El valor más alto es 70, en 2025, y no hubo descenso.", "Correcto: el pico fue de **70 en 2025**, no 61 en 2024; en 2025 no disminuyó."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 7.2)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "7.2", trackLabel: "Priya Nair: good charts", prompt: "Listen to Priya Nair again and write her five pieces of advice. Then look at one chart in an article from your field. Does it follow her advice?",
        fields: [{ label: "Priya's five pieces of advice" }, { label: "A chart from my field: does it follow the advice?", short: true }],
        model: `<p>1 Give every chart one main message and write the finding in the title.</p><p>2 Use colour with a purpose: mostly grey and one strong colour.</p><p>3 Avoid 3D pie charts.</p><p>4 Put labels directly on the lines or bars.</p><p>5 Always include the units.</p>`, modelTitle: "Los cinco consejos" }
    ] },
    { h: "Writing: describe a graph", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Write a description of Figure W7 (120–150 words) with an introduction, an overview and details. Add one possible explanation with careful language.",
        words: [120, 150], check: ["Introduction: what the figure shows", "Overview: the main trend in one sentence", "Details with numbers and prepositions (*from… to, by, of, at*)", "One explanation with careful language (*probably, may be due to*)"],
        model: `<p>Figure W7 shows the number of articles in English published by a faculty each year from 2016 to 2025. Overall, the number grew almost four times during the period. Between 2016 and 2019, it rose steadily from 18 to 31. In 2020, there was a slight fall of two articles, probably because of the pandemic. After that, the number increased sharply, by 11 articles in 2021 and by 12 in 2022, when it reached 52. There was another small decrease in 2023, to 50, but publications then grew again and reached a peak of 70 in 2025. This growth may be due to more English training and international collaboration, but more data would be needed to confirm this.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Choose a chart from your own data or from an article in your field. Write a new title that states the finding, and three sentences that describe the main trend.",
        fields: [{ label: "New title (states the finding)", short: true }, { label: "Three sentences about the main trend" }] }
    ] }
  ]
},

/* =============================== UNIT 8 =============================== */
{
  n: 8, title: "What does it mean?", icon: "bulb",
  sub: "Hedging y primer condicional · interpretar resultados · el párrafo de discusión",
  img: { file: "Microscope (1).jpg", credit: "National Cancer Institute (NIH), dominio público", alt: "Dos científicas con un microscopio de doble cabezal" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Match the phrases (1–5) with their functions (a–e).",
        box: ["a suggest future work", "b state the main finding carefully", "c compare with other studies", "d explain a result", "e admit a weakness"],
        items: [
          { t: "This finding is consistent with… → ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "c", why: "*Consistent with* (coincide con) relaciona tu resultado con **otros estudios** (c)." }] },
          { t: "One possible explanation is… → ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "d", why: "*Explanation* → **explicar** un resultado (d)." }] },
          { t: "A limitation of this study is… → ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "e", why: "Una *limitation* es una **debilidad** del estudio (e)." }] },
          { t: "Further research should… → ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "a", why: "*Further research* = investigación **futura** (a)." }] },
          { t: "These results suggest that… → ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "b", why: "*Suggest* presenta el **hallazgo principal** con cautela (b)." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Write the noun.",
        items: [
          { t: "limit → ___", g: [{ a: ["limitation"], why: "En la discusión se usa **limitation** (*a limit* es un límite numérico)." }] },
          { t: "imply → ___", g: [{ a: ["implication"], why: "*Imply* → **implication** (la *y* cambia a *ic* + *-ation*)." }] },
          { t: "generalise → ___", g: [{ a: ["generalisation", "generalization"], why: "*Generalise* → **generalisation** (o *generalization* en inglés americano)." }] },
          { t: "contradict → ___", g: [{ a: ["contradiction"], why: "*Contradict* + **-ion** = *contradiction*." }] },
          { t: "confirm → ___", g: [{ a: ["confirmation"], why: "*Confirm* + **-ation** = *confirmation*." }] }
        ] }
    ] },
    { h: "Grammar: hedging and the first conditional", tag: "Grammar", ex: [
      { num: "3", type: "rewrite", prompt: "Make the claims more careful. Use the word in brackets.", flexible: true,
        items: [
          { q: "Coffee improves memory. (may)", a: ["Coffee may improve memory."], why: "Después de *may* el verbo va en **forma base**, sin -s: *may improve*." },
          { q: "This proves that the method is effective. (suggest)", a: ["This suggests that the method is effective.", "This suggests the method is effective."], why: "*Suggest* sustituye a *prove*. Con *this* lleva -s: **suggests**." },
          { q: "The fall in 2020 was caused by the pandemic. (probably)", a: ["The fall in 2020 was probably caused by the pandemic."], why: "*Probably* va **entre** el auxiliar y el participio: *was probably caused*." },
          { q: "Women migrants send more money home than men. (tend to)", a: ["Women migrants tend to send more money home than men."], why: "*Tend to* + verbo base: *tend to send*." },
          { q: "The new seed is better in all conditions. (appear)", a: ["The new seed appears to be better in most conditions.", "The new seed appears to be better in all conditions."], why: "*Appear* + **to be**: *appears to be better*. Además, *most* es más prudente que *all*." }
        ] },
      { num: "4", type: "gaps", prompt: "Match the beginnings (1–4) with the endings (a–d).",
        box: ["a they can stop at any time.", "b we will start in March.", "c the hospital may change its protocol.", "d we won't be able to bring the samples."],
        items: [
          { t: "If the committee approves the project, ___", g: [{ o: ["a", "b", "c", "d"], a: "b", why: "Aprobación → **empezar** el proyecto (b). Primer condicional: *if* + presente, *will* + verbo." }] },
          { t: "If we don't get the permit, ___", g: [{ o: ["a", "b", "c", "d"], a: "d", why: "Sin permiso → **no podremos** traer las muestras (d)." }] },
          { t: "If future studies confirm the results, ___", g: [{ o: ["a", "b", "c", "d"], a: "c", why: "Resultados confirmados → el hospital **puede cambiar** su protocolo (c)." }] },
          { t: "If participants feel uncomfortable, ___", g: [{ o: ["a", "b", "c", "d"], a: "a", why: "Incomodidad → los participantes **pueden retirarse** (a)." }] }
        ] }
    ] },
    { h: "Reading: a discussion paragraph", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the paragraph and answer the questions.",
        passage: `<p>The results suggest that the school breakfast programme may improve children's attention in class. Teachers rated the attention of children who received breakfast 15% higher than the attention of children in schools without the programme. This finding appears to be consistent with studies in Peru and Chile. One possible explanation is that hungry children find it difficult to concentrate in the first hours of the morning. However, the study has some limitations. The teachers who rated attention knew which children received breakfast, and this may have influenced their ratings. In addition, the study lasted only one semester. If future studies use objective tests of attention, they will provide stronger evidence.</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "Which sentence makes the **comparison** with other studies?", o: ["The results suggest that the school breakfast programme may improve children's attention in class.", "This finding appears to be consistent with studies in Peru and Chile.", "One possible explanation is that hungry children find it difficult to concentrate…", "If future studies use objective tests of attention, they will provide stronger evidence."], a: 1,
            f: ["Esa es la oración del **hallazgo principal**.", "Correcto: *consistent with studies in Peru and Chile*.", "Esa oración da la **explicación**.", "Esa oración habla de la **investigación futura**."] },
          { q: "Which move does *However, the study has some limitations…* introduce?", o: ["Main finding", "Explanation", "Limitations", "Future research"], a: 2,
            f: ["El hallazgo está al principio.", "La explicación va antes.", "Correcto: *However* marca el cambio hacia las debilidades.", "La investigación futura está en la última oración."] },
          { q: "Which of these words is **not** a hedge in the paragraph?", o: ["suggest", "may", "appears", "higher"], a: 3,
            f: ["*Suggest* es un *hedge*: evita decir *prove*.", "*May* es un *hedge*.", "*Appears* es un *hedge*.", "Correcto: *higher* es un comparativo, no expresa cautela. Los *hedges* del texto son *suggest, may improve, appears, possible, may have influenced*."] },
          { q: "Which limitation could make the results look **better** than they really are?", o: ["The study lasted only one semester", "The teachers knew which children received breakfast, so they may have expected better attention and rated it higher", "The studies in Peru and Chile were different", "Hungry children cannot concentrate"], a: 1,
            f: ["Un periodo corto limita las conclusiones, pero no infla los resultados.", "Correcto: es un **sesgo del evaluador**; sus expectativas pueden aumentar las calificaciones.", "No se dice que fueran diferentes.", "Eso es una explicación, no una limitación."] },
          { q: "What could future studies do differently?", o: ["Use fewer children", "Use objective tests of attention, raters who don't know which children received breakfast, and a longer period", "Stop the breakfast programme", "Only study schools in Peru"], a: 1,
            f: ["Menos participantes debilitaría el estudio.", "Correcto: cada propuesta corrige una de las limitaciones.", "El texto no sugiere eso.", "No resolvería las limitaciones."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 8.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "8.1", trackLabel: "Luis and Ji-woo discuss the results", prompt: "Listen to Luis and Ji-woo again. Write all the hedges that they use (for example, *might*).",
        fields: [{ label: "Hedges I heard", short: true }],
        model: `<p><em>might</em> (be a problem with the sensor), <em>possibly</em>, <em>could</em> (be shade), <em>may</em> (produce some shade), <em>that seems likely</em>, <em>another possibility is…</em></p>` }
    ] },
    { h: "Writing: a discussion paragraph", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Write a discussion paragraph (130–150 words) about Luis's experiment. Use this information: cleaned panels produced about 8% more energy; Panel 4 had an unexpected result in April, perhaps because of shade from a new antenna; weekly cleaning uses water, and water is scarce in Zacatecas; the experiment lasted only three months.",
        words: [130, 150], check: ["Main finding with a hedge", "Comparison or explanation", "Unexpected result (Panel 4)", "Limitations (water, three months)", "Future research with a first conditional"],
        model: `<p>The results suggest that weekly cleaning may increase the energy output of solar panels in dusty regions: cleaned panels produced about 8% more energy than panels that were not cleaned. This finding appears to be consistent with studies in other dry areas. One possible explanation is that dust blocks part of the sunlight that reaches the cells. However, Panel 4 produced less energy than expected in April, probably because a new antenna created shade in the afternoon. The study also has limitations: it lasted only three months, and cleaning uses water, which is scarce in Zacatecas. If future studies test cleaning methods that use less water over a full year, they will help solar farms in the region to decide how often to clean.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write three possible limitations of your study and how you could reduce each one.",
        fields: [{ label: "Limitation 1 → how I could reduce it", short: true }, { label: "Limitation 2 → how I could reduce it", short: true }, { label: "Limitation 3 → how I could reduce it", short: true }] }
    ] }
  ]
},

/* =============================== UNIT 9 =============================== */
{
  n: 9, title: "Small but mighty", icon: "doc",
  sub: "La voz pasiva · el abstract y sus cinco movimientos · palabras clave",
  img: { file: "Making and curing adobe bricks - NARA - 286037.jpg", credit: "U.S. National Archives (NARA), dominio público", alt: "Fabricación y secado de ladrillos de adobe" },
  sections: [
    { h: "Reading and vocabulary: a scrambled abstract", tag: "Reading", ex: [
      { num: "1a", type: "gaps", prompt: "The sentences of this abstract are in the wrong order. First, label each one with its move.",
        passage: `<p><strong>Title:</strong> <em>Nopal mucilage in adobe bricks: strength and water resistance</em> <span class="src">(text written for this workbook)</span></p>`,
        items: [
          { t: "a Adobe bricks were made with 0%, 5% and 10% nopal mucilage and tested after 28 days. ___", g: [{ o: ["background", "purpose", "method", "results", "conclusion"], a: "method", why: "Explica **cómo** se hizo el estudio (pasiva: *were made… tested*) → **method**." }] },
          { t: "b This study aimed to evaluate whether mucilage from the nopal cactus improves the strength of adobe bricks. ___", g: [{ o: ["background", "purpose", "method", "results", "conclusion"], a: "purpose", why: "*This study aimed to…* expresa el **objetivo** → **purpose**." }] },
          { t: "c The results suggest that nopal mucilage could be a low-cost, traditional option to improve adobe houses. ___", g: [{ o: ["background", "purpose", "method", "results", "conclusion"], a: "conclusion", why: "*The results suggest… could be* interpreta el significado → **conclusion**." }] },
          { t: "d Adobe is a traditional building material in Zacatecas, but it is weak against water. ___", g: [{ o: ["background", "purpose", "method", "results", "conclusion"], a: "background", why: "Presenta el **contexto** y el problema general → **background**." }] },
          { t: "e Bricks with 10% mucilage were 25% stronger and absorbed 40% less water than bricks without it. ___", g: [{ o: ["background", "purpose", "method", "results", "conclusion"], a: "results", why: "Da **datos numéricos** de lo que se encontró → **results**." }] }
        ] },
      { num: "1b", type: "gaps", prompt: "Now put the sentences in order (1–5).",
        items: [
          { t: "1st: ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "d", why: "Un abstract empieza por el **background** (d)." }] },
          { t: "2nd: ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "b", why: "Después del contexto va el **purpose** (b)." }] },
          { t: "3rd: ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "a", why: "Luego el **method** (a)." }] },
          { t: "4th: ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "e", why: "Después los **results** (e)." }] },
          { t: "5th: ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "c", why: "Termina con la **conclusion** (c)." }] }
        ] },
      { num: "2", type: "choice", prompt: "Choose the four best keywords for this abstract. Is each word a good keyword?",
        items: [
          { q: "bricks", o: ["Good keyword", "Not a good keyword"], a: 1, f: ["*Bricks* ya está en el título; las palabras clave deben **añadir** términos de búsqueda.", "Correcto: ya aparece en el título."] },
          { q: "compressive strength", o: ["Good keyword", "Not a good keyword"], a: 0, f: ["Correcto: término técnico preciso que no está en el título.", "Es un término técnico preciso que los investigadores buscarían."] },
          { q: "earth construction", o: ["Good keyword", "Not a good keyword"], a: 0, f: ["Correcto: describe el campo y no está en el título.", "Describe el campo de forma precisa y añade información."] },
          { q: "natural additives", o: ["Good keyword", "Not a good keyword"], a: 0, f: ["Correcto: término útil para quien busca aditivos naturales.", "Es un término útil y preciso."] },
          { q: "nopal", o: ["Good keyword", "Not a good keyword"], a: 1, f: ["*Nopal* ya está en el título.", "Correcto: repite una palabra del título."] },
          { q: "study", o: ["Good keyword", "Not a good keyword"], a: 1, f: ["*Study* es demasiado general: no da información.", "Correcto: demasiado general."] },
          { q: "traditional building", o: ["Good keyword", "Not a good keyword"], a: 0, f: ["Correcto: añade un concepto que no está en el título.", "Añade un concepto relevante que no está en el título."] },
          { q: "very good", o: ["Good keyword", "Not a good keyword"], a: 1, f: ["*Very good* es una opinión, no un término de búsqueda.", "Correcto: no da información."] }
        ] },
      { num: "3", type: "choice", prompt: "Answer the questions about the abstract.",
        items: [
          { q: "How many different amounts of mucilage did the researchers test?", o: ["Two", "Three (0%, 5% and 10%)", "Ten", "Twenty-eight"], a: 1, f: ["Cuenta otra vez: 0%, 5% y 10%.", "Correcto: 0% también cuenta como una cantidad (el grupo control).", "10 es un porcentaje, no el número de cantidades.", "28 son los días."] },
          { q: "How much stronger were the bricks with 10% mucilage?", o: ["10% stronger", "25% stronger", "40% stronger", "Twice as strong"], a: 1, f: ["10% es la cantidad de mucílago.", "Correcto.", "40% es la reducción en la absorción de agua.", "No lo dice el texto."] },
          { q: "Why could this result be important for families in rural Zacatecas?", o: ["Because nopal is expensive", "Because many rural houses are made of adobe, and nopal is cheap and traditional, so houses could be stronger and resist water better at a low cost", "Because adobe is a new material", "Because families can sell the mucilage"], a: 1, f: ["Es al contrario: es barato (*low-cost*).", "Correcto.", "El adobe es tradicional, no nuevo.", "El texto no habla de venderlo."] }
        ] }
    ] },
    { h: "Grammar: the passive", tag: "Grammar", ex: [
      { num: "4", type: "rewrite", prompt: "Rewrite the methods sentences in the passive. Do not use *by* unless it is important.",
        items: [
          { q: "We tested the bricks after 28 days.", a: ["The bricks were tested after 28 days."], why: "Pasado → **were** + participio: *The bricks were tested*. No hace falta *by us*." },
          { q: "We mixed the mucilage with soil and water.", a: ["The mucilage was mixed with soil and water."], why: "*Mucilage* es singular → **was** mixed." },
          { q: "A technician measures the strength with a hydraulic press.", a: ["The strength is measured with a hydraulic press.", "The strength is measured with a hydraulic press by a technician.", "The strength is measured by a technician with a hydraulic press."], why: "Presente → **is** + participio: *is measured*." },
          { q: "We interviewed ten local builders.", a: ["Ten local builders were interviewed."], why: "Plural en pasado → **were** interviewed." },
          { q: "People still use adobe in many rural areas.", a: ["Adobe is still used in many rural areas."], why: "Presente → *is used*; *still* va entre *is* y el participio. *By people* no aporta nada." }
        ] },
      { num: "5", type: "gaps", prompt: "Active or passive? Choose the correct form.",
        items: [
          { t: "The samples ___ in May.", g: [{ o: ["collected", "were collected"], a: "were collected", why: "Las muestras no recolectan nada: **reciben** la acción → pasiva." }] },
          { t: "The team ___ the data.", g: [{ o: ["analysed", "was analysed"], a: "analysed", why: "*The team* **hace** la acción y hay objeto (*the data*) → activa." }] },
          { t: "Adobe ___ for centuries.", g: [{ o: ["has used", "has been used"], a: "has been used", why: "El adobe **es usado** → pasiva en presente perfecto: *has been used*." }] },
          { t: "Three themes ___ in the interviews.", g: [{ o: ["identified", "were identified"], a: "were identified", why: "Los temas no identifican: **son identificados** → pasiva." }] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 9.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "9.1", trackLabel: "Helen Brooks: abstract tips", prompt: "Listen to Helen Brooks again. Write her five tips as a checklist. Then check your own abstract against the list.",
        fields: [{ label: "Helen's five tips" }],
        model: `<ul><li>Respect the word limit.</li><li>Give real results with numbers (never "will be discussed").</li><li>No references or unusual abbreviations.</li><li>Keywords that are not in the title.</li><li>Write the abstract last.</li></ul>`, modelTitle: "Los cinco consejos" }
    ] },
    { h: "Writing: an abstract from notes", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Write an abstract (130–160 words) from these notes. Use the five moves and the passive in the method.",
        passage: `<p><em>Topic: online maths tutoring for rural secondary students, Zacatecas · Gap: little research outside cities · Aim: evaluate the effect on maths results · Method: 6 schools, 240 students, one semester; tests before and after; interviews with 12 students · Results: scores +12% (tutoring) vs +4% (control); students liked the flexibility; poor internet was a problem · Conclusion: may help; better connectivity needed</em></p>`,
        words: [130, 160], check: ["Background + gap", "Purpose (*This study aimed to…*)", "Method in the passive", "Results with numbers", "Conclusion with a hedge"],
        model: `<p>Online tutoring has been proposed as a way to support students in rural areas, but little research has evaluated it outside large cities. This study aimed to evaluate the effect of an online maths tutoring programme on rural secondary students in Zacatecas, Mexico. A mixed-methods design was used. A total of 240 students from six schools took part for one semester; maths tests were applied before and after the programme, and 12 students were interviewed. Maths scores increased by 12% in the tutoring group, compared with 4% in the control group. Students valued the flexibility of the sessions, but poor internet connections were a frequent problem. The results suggest that online tutoring may help rural students to improve their maths results, but better connectivity is needed.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write the final version of your abstract and choose five keywords. Read it aloud: if you need to breathe in the middle of a sentence, divide it.",
        fields: [{ label: "My abstract" }, { label: "Five keywords", short: true }] }
    ] }
  ]
},

/* =============================== UNIT 10 =============================== */
{
  n: 10, title: "Centre stage", icon: "stage",
  sub: "Formas de futuro · congresos · presentar con *signposts* · diapositivas",
  img: { file: "GD09 Poster Session.jpg", credit: "David Eppstein", alt: "Sesión de pósteres en un congreso académico" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the sentences with the words in the box.", box: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"],
        items: [
          { t: "The conference ___ is the Palacio de Convenciones in Zacatecas.", g: [{ o: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"], a: "venue", why: "El **lugar** donde se celebra un evento es el *venue* (sede)." }] },
          { t: "The ___ for students is 800 pesos.", g: [{ o: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"], a: "registration fee", why: "Una cantidad de dinero para inscribirse = *registration fee* (cuota de inscripción)." }] },
          { t: "Check the ___ to see the time of your talk.", g: [{ o: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"], a: "programme", why: "Los horarios de las ponencias están en el *programme*." }] },
          { t: "Four experts discussed migration in a ___.", g: [{ o: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"], a: "panel", why: "Varios expertos que discuten un tema = un *panel* (mesa redonda)." }] },
          { t: "Selected papers will be published in the conference ___.", g: [{ o: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"], a: "proceedings", why: "La publicación de los trabajos de un congreso son las *proceedings* (memorias)." }] },
          { t: "The ___ for abstracts is 30 June.", g: [{ o: ["deadline", "panel", "proceedings", "programme", "registration fee", "venue"], a: "deadline", why: "La **fecha límite** = *deadline*." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete the signposts.",
        items: [
          { t: "Let me ___ with a short story.", g: [{ a: ["start", "begin"], why: "Para **abrir** una presentación: *Let me start with…*" }] },
          { t: "This ___ me to my second point.", g: [{ a: ["brings", "leads", "takes"], why: "*This brings me to…* = esto me lleva a… Con *this* el verbo lleva -s." }] },
          { t: "As you can ___ in this map, …", g: [{ a: ["see"], why: "Para señalar algo visual: *As you can **see**…*" }] },
          { t: "Let's ___ on to the results.", g: [{ a: ["move", "go"], why: "Cambiar de sección: *Let's **move** on to…*" }] },
          { t: "To ___ up, …", g: [{ a: ["sum"], why: "Para resumir al final: *To **sum** up*." }] },
          { t: "Are there any ___?", g: [{ a: ["questions"], why: "Para cerrar e invitar preguntas: *Are there any **questions**?* (plural después de *any*)." }] }
        ] }
    ] },
    { h: "Grammar: future forms", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete the conversation at a conference with going to, the present continuous or will.", numbered: false,
        items: [{ t: "**A:** What (1) ___ (you / do) after the conference?<br>**B:** I (2) ___ (visit) the Eden mine on Saturday. I booked a tour last week.<br>**A:** Sounds great. Oh no, it's raining!<br>**B:** Don't worry, I (3) ___ (lend) you my umbrella.<br>**A:** Thanks! So, your talk is at four, right?<br>**B:** Yes. I (4) ___ (talk) about mine accidents in the 18th century.<br>**A:** Look at the queue for coffee! We (5) ___ (be) late for the next session.<br>**B:** OK, I (6) ___ (get) the coffees, and you save our seats.",
          g: [
            { a: ["are you doing"], why: "Pregunta por **planes ya organizados** → presente continuo: *What are you doing…?*" },
            { a: ["am visiting", "'m visiting"], why: "Ya reservó el tour (*I booked a tour*) → **arreglo fijo** → presente continuo: *I'm visiting*." },
            { a: ["will lend", "'ll lend"], why: "Decisión **espontánea** en el momento (empieza a llover) → *will*: *I'll lend*." },
            { a: ["am going to talk", "'m going to talk"], why: "**Intención/plan** sobre el contenido de su ponencia → *going to*: *I'm going to talk*." },
            { a: ["are going to be", "'re going to be"], why: "**Predicción con evidencia** visible (la fila del café) → *going to*." },
            { a: ["will get", "'ll get"], why: "Ofrecimiento/decisión **en el momento** → *will*: *I'll get the coffees*." }
          ] }] },
      { num: "4", type: "rewrite", prompt: "Correct the mistake in each sentence.",
        items: [
          { q: "Tomorrow I present my poster at 10. It's in the programme.", a: ["Tomorrow I'm presenting my poster at 10.", "Tomorrow I am presenting my poster at 10.", "Tomorrow I'm presenting my poster at 10. It's in the programme.", "Tomorrow I am presenting my poster at 10. It's in the programme."], why: "Un **arreglo fijo** personal (está en el programa) se expresa con presente continuo: *I'm presenting*." },
          { q: "Wait, I'm going to help you with the projector!", a: ["Wait, I'll help you with the projector!", "Wait, I will help you with the projector!"], why: "Es un ofrecimiento **espontáneo** → *will*: *I'll help you*." },
          { q: "Look at those dark clouds. It will rain.", a: ["Look at those dark clouds. It's going to rain.", "It's going to rain.", "It is going to rain.", "Look at those dark clouds. It is going to rain."], why: "Predicción con **evidencia presente** (las nubes) → *going to*." },
          { q: "We will meet the editor at 3 p.m. It's in our calendars.", a: ["We're meeting the editor at 3 p.m.", "We are meeting the editor at 3 p.m.", "We're meeting the editor at 3 p.m. It's in our calendars.", "We are meeting the editor at 3 p.m. It's in our calendars."], why: "Cita **agendada** → presente continuo: *We're meeting*." }
        ] }
    ] },
    { h: "Reading: a call for papers", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the call for papers and answer the questions.",
        passage: `<p><strong>III Meeting of Graduate Researchers · Zacatecas, 8–10 April 2027</strong> <span class="src">(fictional event for practice)</span></p><p>Graduate students from all fields are invited to submit abstracts for 15-minute talks or posters. Abstracts must be 200–250 words, in Spanish or English, and must include the aim, method, results (or expected results) and conclusion. Do not include references. The deadline is 15 December 2026. Each author can submit only one abstract as first author. Results will be announced on 31 January. The registration fee is 500 pesos for students and includes coffee breaks and the conference proceedings. A prize will be given for the best poster.</p>`,
        items: [
          { q: "Who can submit?", o: ["Only engineering students", "Graduate students from all fields", "Only professors", "Undergraduate students"], a: 1, f: ["*From all fields* = de todas las áreas.", "Correcto.", "La convocatoria es para estudiantes de posgrado.", "*Graduate* = de posgrado, no licenciatura."] },
          { q: "What are the two formats?", o: ["15-minute talks and posters", "Workshops and panels", "Articles and books", "Videos and podcasts"], a: 0, f: ["Correcto.", "No se mencionan.", "No se mencionan.", "No se mencionan."] },
          { q: "How long must an abstract be?", o: ["150–200 words", "200–250 words", "15 minutes", "One page"], a: 1, f: ["Relee la segunda oración.", "Correcto.", "15 minutos es la duración de la ponencia.", "No habla de páginas."] },
          { q: "What must an abstract include, and what must it not include?", o: ["Aim, method, results and conclusion; no references", "References and keywords; no results", "A title and a photo; no method", "Only the results"], a: 0, f: ["Correcto: *Do not include references*.", "Es al revés: las referencias están prohibidas.", "No se mencionan fotos.", "Hay que incluir los cuatro elementos."] },
          { q: "When is the deadline? When will authors know the results?", o: ["15 December 2026; 31 January", "31 January; 15 December", "8 April; 10 April", "15 December; 8 April"], a: 0, f: ["Correcto.", "Las fechas están invertidas.", "Esas son las fechas del congreso.", "Los resultados se anuncian el 31 de enero."] },
          { q: "What does the registration fee include?", o: ["Hotel and meals", "Coffee breaks and the conference proceedings", "A prize", "Transport"], a: 1, f: ["No se mencionan.", "Correcto.", "El premio es solo para el mejor póster.", "No se menciona."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 10.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "10.1", trackLabel: "Luis's conference talk (first 30 seconds)", prompt: "Listen to the first 30 seconds of Luis's talk two or three times. Then say it at the same time as Luis (*shadowing*). Pay attention to his pauses and to the stressed words.",
        fields: [{ label: "Notes: stressed words and pauses I noticed", short: true }],
        check: ["I listened two or three times", "I shadowed the talk", "I marked the pauses", "I marked the stressed words"] }
    ] },
    { h: "Writing: from paragraph to slide", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Turn this paragraph into one slide: a title that states the finding and no more than three short bullet points. Describe the visual you would use.",
        passage: `<p>In the four communities, arsenic levels in drinking-water wells ranged from 8 to 41 micrograms per litre. Three of the four communities had levels above the WHO guideline of 10 micrograms per litre. The deepest well, at 210 metres, had the highest level, about four times the guideline, while the shallowest well, at 40 metres, was below the guideline.</p>`,
        fields: [{ label: "Slide title", short: true }, { label: "Three bullet points", short: true }, { label: "Visual", short: true }],
        model: `<p><strong>Title:</strong> <em>Three of four communities had arsenic above the WHO guideline.</em></p><p><strong>Bullets:</strong> Levels from 8 to 41 µg/L · Deepest well (210 m): about four times the guideline · Shallowest well (40 m): below the guideline</p><p><strong>Visual:</strong> a bar chart of arsenic by community, ordered by well depth, with a horizontal line at 10 µg/L.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write the script for the first 60 seconds of your conference talk: greeting, introduction, topic and outline. Use at least four signposts. Record it and check the time.",
        check: ["Greeting", "Introduction (name, institution)", "Topic", "Outline", "At least four signposts", "Recorded and timed (≈ 60 seconds)"] }
    ] }
  ]
},

/* =============================== UNIT 11 =============================== */
{
  n: 11, title: "Working together", icon: "team",
  sub: "Peticiones corteses y preguntas indirectas · correos formales · estancias de investigación",
  img: { file: "Solvay conference 1927.jpg", credit: "Benjamin Couprie, dominio público", alt: "Científicos en la Conferencia Solvay de 1927" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Formal or informal? Choose the correct column for each phrase.",
        items: [
          { t: "Can you…? ___", g: [{ o: ["Formal", "Informal"], a: "Informal", why: "*Can you…?* es directo; en un correo formal se usa *Could you…?* o *I would be grateful if…*" }] },
          { t: "Cheers ___", g: [{ o: ["Formal", "Informal"], a: "Informal", why: "*Cheers* como despedida es muy coloquial (británico)." }] },
          { t: "Dear Professor Moore, ___", g: [{ o: ["Formal", "Informal"], a: "Formal", why: "*Dear* + título + apellido es el saludo formal estándar." }] },
          { t: "Here's the file. ___", g: [{ o: ["Formal", "Informal"], a: "Informal", why: "La contracción y el tono directo son informales; lo formal es *Please find attached…*" }] },
          { t: "Hey Rachel! ___", g: [{ o: ["Formal", "Informal"], a: "Informal", why: "*Hey* + nombre de pila + exclamación = muy informal." }] },
          { t: "I look forward to hearing from you. ___", g: [{ o: ["Formal", "Informal"], a: "Formal", why: "Es el cierre formal clásico de un correo." }] },
          { t: "I would be grateful if you could… ___", g: [{ o: ["Formal", "Informal"], a: "Formal", why: "Petición indirecta y muy cortés → formal." }] },
          { t: "Kind regards ___", g: [{ o: ["Formal", "Informal"], a: "Formal", why: "*Kind regards* es una despedida formal/neutra." }] },
          { t: "Please find attached… ___", g: [{ o: ["Formal", "Informal"], a: "Formal", why: "Fórmula formal para adjuntar documentos." }] },
          { t: "Talk soon! ___", g: [{ o: ["Formal", "Informal"], a: "Informal", why: "Despedida coloquial entre amigos o colegas cercanos." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete with the correct preposition.",
        items: [
          { t: "I would like to apply ___ a mobility scholarship.", g: [{ a: ["for"], why: "*Apply **for*** algo que quieres obtener (beca, puesto). *Apply to* es la institución." }] },
          { t: "We collaborate ___ a research group in Nigeria.", g: [{ a: ["with"], why: "*Collaborate **with*** alguien." }] },
          { t: "The deadline ___ applications is 15 November.", g: [{ a: ["for"], why: "*The deadline **for*** algo." }] },
          { t: "I am very interested ___ your work on groundwater.", g: [{ a: ["in"], why: "*Interested **in*** (no *on* ni *for*)." }] },
          { t: "I would like to do a research stay ___ your laboratory.", g: [{ a: ["at", "in"], why: "Un lugar de trabajo: *at your laboratory* (también *in*)." }] },
          { t: "I look forward ___ hearing from you.", g: [{ a: ["to"], why: "*Look forward **to*** + verbo en **-ing**: *to hearing*." }] }
        ] }
    ] },
    { h: "Grammar: polite requests and indirect questions", tag: "Grammar", ex: [
      { num: "3", type: "rewrite", prompt: "Make the questions and requests more polite. Begin with the words given.",
        items: [
          { q: "Where is the guest house?", start: "Could you tell me…", a: ["Could you tell me where the guest house is?"], why: "Pregunta indirecta → orden **sujeto + verbo**: *where the guest house **is***." },
          { q: "Is there a fee for the safety course?", start: "Do you know if…", a: ["Do you know if there is a fee for the safety course?", "Do you know whether there is a fee for the safety course?"], why: "Tras *if* el orden es afirmativo: *if **there is** a fee*." },
          { q: "Can you send me the form?", start: "I would be grateful if…", a: ["I would be grateful if you could send me the form."], why: "*I would be grateful if you **could** + verbo base*." },
          { q: "Can I use the laboratory at weekends?", start: "I was wondering if…", a: ["I was wondering if I could use the laboratory at weekends."], why: "*I was wondering if I **could** use…* (orden afirmativo y *could* en lugar de *can*)." },
          { q: "Check my work plan.", start: "Would you mind…", a: ["Would you mind checking my work plan?"], why: "*Would you mind* + verbo en **-ing**: *checking*." }
        ] },
      { num: "4", type: "rewrite", prompt: "Correct the mistake in each sentence.",
        items: [
          { q: "Could you tell me what time does the seminar start?", a: ["Could you tell me what time the seminar starts?"], why: "En pregunta indirecta no hay *does*: *what time the seminar **starts***." },
          { q: "I was wondering if is it possible to extend my stay.", a: ["I was wondering if it is possible to extend my stay.", "I was wondering if it was possible to extend my stay."], why: "Después de *if*: sujeto + verbo → *if **it is** possible*." },
          { q: "Do you know where can I buy a bus card?", a: ["Do you know where I can buy a bus card?"], why: "Orden afirmativo en pregunta indirecta: *where **I can** buy*." },
          { q: "Would you mind to sign this form?", a: ["Would you mind signing this form?"], why: "*Mind* va seguido de **-ing**, no de *to* + infinitivo." }
        ] }
    ] },
    { h: "Reading: an email from the mobility office", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the email and answer the questions.",
        passage: `<p><strong>Subject:</strong> Mobility scholarship – documents required</p><p>Dear Daniela,</p><p>Thank you for your application to the Graduate Mobility Programme. To complete your file, please send the following documents by 15 November: an invitation letter from the host institution, signed and on official letterhead; a letter of support from your supervisor; a work plan with a monthly schedule; and proof of health insurance that is valid abroad. Please note that the scholarship covers travel and a monthly allowance, but not tuition fees. Incomplete applications will not be considered. If you have any questions, please do not hesitate to contact us.</p><p>Kind regards,<br>Mobility Office</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "How many documents does Daniela need to send?", o: ["Two", "Three", "Four", "Five"], a: 2, f: ["Cuenta los elementos separados por punto y coma.", "Cuenta otra vez: carta de invitación, carta de apoyo, plan de trabajo, seguro.", "Correcto: invitación, apoyo del supervisor, plan de trabajo y seguro médico.", "Son cuatro."] },
          { q: "What two things must the invitation letter have?", o: ["A signature and official letterhead", "A photo and a stamp", "A monthly schedule and a budget", "Two signatures"], a: 0, f: ["Correcto: *signed and on official letterhead*.", "No se mencionan.", "El calendario mensual es del plan de trabajo.", "Solo dice *signed*."] },
          { q: "What does the scholarship cover?", o: ["Travel, a monthly allowance and tuition fees", "Travel and a monthly allowance, but not tuition fees", "Only tuition fees", "Health insurance"], a: 1, f: ["*But not tuition fees*: la colegiatura no está cubierta.", "Correcto.", "Es al revés.", "El seguro lo debe comprobar Daniela; no lo cubre la beca."] },
          { q: "What happens to incomplete applications?", o: ["They get extra time", "They will not be considered", "They are sent back", "They receive half the scholarship"], a: 1, f: ["No se ofrece más tiempo.", "Correcto.", "No dice que se devuelvan.", "No se menciona."] },
          { q: "Which two documents did Rachel Moore also ask for in the Student's Book?", o: ["The letter of support from her supervisor and the work plan", "The invitation letter and the insurance", "A CV and a passport", "Her thesis and an article"], a: 0, f: ["Correcto.", "Esos los pide solo la oficina de movilidad.", "No se mencionan.", "No se mencionan."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 11.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "11.1", trackLabel: "Daniela and Rachel Moore", prompt: "Listen to Daniela and Rachel again. Write four polite questions or requests that they use.",
        fields: [{ label: "Four polite questions or requests" }],
        model: `<p><em>Would the third of March work for you?</em></p><p><em>I was wondering if you'd like a room in the university guest house.</em></p><p><em>Could you tell me how much it costs?</em></p><p><em>Would it be possible to bring some water samples from Zacatecas?</em></p>` }
    ] },
    { h: "Writing: a reply email", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Write Daniela's reply to Rachel Moore (100–130 words). Thank her, send the two documents she asked for, accept the invitation to the seminar, and ask one polite question about the guest house.",
        words: [100, 130], check: ["Subject line", "Formal greeting", "Thanks", "*Please find attached…* (two documents)", "Accepts the seminar invitation", "One polite indirect question", "Formal closing"],
        model: `<p><em>Subject: Documents for my research stay</em></p><p>Dear Rachel,</p><p>Thank you very much for your kind reply and for agreeing to host me. Please find attached the letter of support from Dr Herrera and a one-page work plan with my activities for each month. I would be very happy to present my results at your group seminar. I was also wondering if you could tell me whether the guest house rooms have a kitchen.</p><p>I look forward to hearing from you.</p><p>Kind regards,<br>Daniela</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Find a real research group abroad that works on your topic and a mobility programme you could apply to. Complete the table, then draft (but do not send) a first email.",
        fields: [{ label: "Host researcher and institution", short: true }, { label: "Why this group?", short: true }, { label: "Programme and deadline", short: true }, { label: "Documents required", short: true }, { label: "Draft email" }] }
    ] }
  ]
},

/* =============================== UNIT 12 =============================== */
{
  n: 12, title: "Beyond the lab", icon: "globe",
  sub: "Segundo condicional · divulgación y medios · el resumen para público general",
  img: { file: "Senegal village well.jpg", credit: "TSgt Justin D. Pyle, U.S. Air Force, dominio público", alt: "Pozo de agua de una comunidad rural" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Match the technical words (1–6) with plain explanations for the public (a–f).",
        html: `<table class="t"><tr><td><b>a</b> money that migrants send to their families</td><td><b>d</b> a small group of people that we study</td></tr><tr><td><b>b</b> the study of how diseases spread</td><td><b>e</b> a small device that measures radiation</td></tr><tr><td><b>c</b> water stored under the ground, in rocks and sand</td><td><b>f</b> moving pollen so that plants can make seeds</td></tr></table>`,
        items: [
          { t: "aquifer → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "c", why: "Un acuífero es **agua subterránea** almacenada en rocas y arena (c)." }] },
          { t: "dosimeter → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "e", why: "Un dosímetro **mide radiación** (e), como los de Iván en la Unidad 5." }] },
          { t: "pollination → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "f", why: "Polinización = **mover el polen** para que las plantas produzcan semillas (f)." }] },
          { t: "remittances → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "a", why: "Remesas = **dinero** que los migrantes envían a sus familias (a)." }] },
          { t: "epidemiology → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "b", why: "Epidemiología = estudio de **cómo se propagan** las enfermedades (b)." }] },
          { t: "sample → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "d", why: "Muestra = **grupo pequeño** que estudiamos (d)." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete the sentences with the words in the box.", box: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"],
        items: [
          { t: "The project's ___ plan includes a podcast and a public talk.", g: [{ o: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"], a: "dissemination", why: "Un plan para **difundir** resultados (podcast, charla) = *dissemination plan*." }] },
          { t: "We organised an ___ day at a primary school.", g: [{ o: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"], a: "outreach", why: "Actividades para acercar la ciencia a la comunidad = *outreach*. Fíjate en *an* (empieza con vocal)." }] },
          { t: "The state government used our data to change its water ___.", g: [{ o: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"], a: "policy", why: "Un gobierno cambia su **política** = *policy*." }] },
          { t: "We invited all the ___: farmers, technicians and local authorities.", g: [{ o: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"], a: "stakeholders", why: "Todos los **actores interesados** en un proyecto = *stakeholders*." }] },
          { t: "It is difficult to measure the ___ of historical research.", g: [{ o: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"], a: "impact", why: "Medir el **efecto** de la investigación en la sociedad = *impact*." }] },
          { t: "We prepared a two-page summary for ___.", g: [{ o: ["decision-makers", "dissemination", "impact", "outreach", "policy", "stakeholders"], a: "decision-makers", why: "Un resumen breve para **quienes toman decisiones** = *decision-makers*." }] }
        ] }
    ] },
    { h: "Grammar: second conditional and course review", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete with the correct form of the verbs.", note: "Segundo condicional: if + pasado, would + verbo base.",
        items: [
          { t: "If I ___ (have) a year of free time, I ___ (write) a popular science book.", g: [{ a: ["had"], why: "Situación **imaginaria**: *if* + **pasado** (*had*)." }, { a: ["would write", "'d write"], why: "Resultado imaginario: **would** + verbo base." }] },
          { t: "If our university ___ (offer) more scholarships, more students ___ (do) research stays.", g: [{ a: ["offered"], why: "*If* + pasado: *offered*." }, { a: ["would do", "'d do"], why: "*Would* + verbo base: *would do*." }] },
          { t: "What ___ you ___ (study) if you ___ (not / be) a researcher?", g: [{ a: ["would"], why: "En la pregunta, *would* va **antes** del sujeto." }, { a: ["study"], why: "Después de *would* el verbo va en forma base: *study*." }, { a: ["weren't", "were not"], why: "En el segundo condicional se prefiere *were* para todas las personas: *if you **weren't***." }] },
          { t: "If I ___ (be) the Secretary of Health, I ___ (test) every well in the state.", g: [{ a: ["were", "was"], why: "*If I **were***: es la forma recomendada en inglés académico (*was* es coloquial)." }, { a: ["would test", "'d test"], why: "*Would* + verbo base: *would test*." }] },
          { t: "The museum ___ (attract) more visitors if it ___ (open) on Sundays.", g: [{ a: ["would attract", "'d attract"], why: "El resultado va con **would** aunque aparezca primero." }, { a: ["opened"], why: "La condición (*if*) va en **pasado**: *opened*." }] },
          { t: "If we ___ (not / share) our results, nothing ___ (change).", g: [{ a: ["didn't share", "did not share"], why: "Condición en pasado negativo: *didn't share*." }, { a: ["would change", "'d change"], why: "*Would* + verbo base: *nothing would change* (no doble negación)." }] }
        ] },
      { num: "4", type: "gaps", prompt: "Course review. Choose the correct option.",
        items: [
          { t: "At the moment I ___ my discussion.", g: [{ o: ["write", "am writing"], a: "am writing", why: "*At the moment* → presente continuo (Unidad 1)." }] },
          { t: "This study investigates ___.", g: [{ o: ["how farmers decide", "how do farmers decide"], a: "how farmers decide", why: "Pregunta **indirecta** dentro de una oración → orden afirmativo, sin *do* (Unidad 2)." }] },
          { t: "Several studies ___ this effect since 2010.", g: [{ o: ["showed", "have shown"], a: "have shown", why: "*Since 2010* → presente perfecto (Unidad 3)." }] },
          { t: "Participants ___ answer all the questions.", g: [{ o: ["mustn't", "don't have to"], a: "don't have to", why: "No es obligatorio contestar todo → *don't have to* (Unidad 6). *Mustn't* lo prohibiría." }] },
          { t: "The number rose ___ 20%.", g: [{ o: ["by", "of"], a: "by", why: "Verbo de cambio + cantidad → **by** (Unidad 7). *Of* va con el sustantivo: *a rise of 20%*." }] },
          { t: "The data ___ in 2025.", g: [{ o: ["were collected", "collected"], a: "were collected", why: "Los datos **reciben** la acción → pasiva (Unidad 9)." }] },
          { t: "Could you tell me where ___?", g: [{ o: ["the lab is", "is the lab"], a: "the lab is", why: "Pregunta indirecta → sujeto + verbo (Unidad 11)." }] },
          { t: "If I ___ more time, I would read more.", g: [{ o: ["had", "would have"], a: "had", why: "Segundo condicional: *if* + **pasado**; *would* no va en la parte de *if*." }] }
        ] }
    ] },
    { h: "Reading: when the media exaggerates", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read this news item about Daniela's research. Compare it with what you know from the Student's Book (Units 7 and 12). Is each claim accurate, or is it an exaggeration or error?",
        passage: `<p><strong>UAZ STUDY: DEEP WELLS ARE POISONING ZACATECAS!</strong></p><p>A new study from the Autonomous University of Zacatecas proves that all deep wells in the state are dangerous. Researcher Daniela Ortiz found high levels of arsenic in every well she tested. "People must stop drinking well water immediately," the study says. Experts say the problem will affect millions of people.</p><p class="src">(Fictional news item for practice.)</p>`,
        items: [
          { q: "The study **proves** the problem.", o: ["Accurate", "Exaggeration / error"], a: 1, f: ["Un solo estudio no *prueba*; los resultados solo **sugieren** una relación.", "Correcto: los resultados solo **sugieren** una relación."] },
          { q: "**All deep wells in the state** are dangerous.", o: ["Accurate", "Exaggeration / error"], a: 1, f: ["Daniela estudió **cuatro comunidades**, no todo el estado.", "Correcto: estudió solo cuatro comunidades."] },
          { q: "She found high levels of arsenic **in every well** she tested.", o: ["Accurate", "Exaggeration / error"], a: 1, f: ["Una comunidad tenía niveles **normales** (el pozo menos profundo estaba por debajo de la norma).", "Correcto: una comunidad tenía niveles normales."] },
          { q: "\"People must stop drinking well water immediately,\" the study says.", o: ["Accurate", "Exaggeration / error"], a: 1, f: ["Daniela **no dijo** eso: recomendó comprobar si el agua se ha analizado y, si los niveles son altos, usar otra fuente para beber y cocinar.", "Correcto: es una cita inventada; ella recomendó **analizar** el agua y, si hay niveles altos, usar otra fuente."] },
          { q: "The problem will affect **millions of people**.", o: ["Accurate", "Exaggeration / error"], a: 1, f: ["Esa cifra **no aparece** en el estudio.", "Correcto: el estudio no habla de millones."] },
          { q: "Which is a better headline?", o: ["UAZ STUDY: DEEP WELLS ARE POISONING ZACATECAS!", "UAZ study finds high arsenic levels in some rural wells", "Arsenic: the silent killer in every home", "Scientists prove water is dangerous"], a: 1, f: ["Es el titular original: exagerado y alarmista.", "Correcto: preciso (*some rural wells*) y sin exagerar. También vale: *Is your well water safe? UAZ researcher recommends testing.*", "Exagera (*every home*) y es sensacionalista.", "*Prove* y la generalización son errores."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 12.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "12.1", trackLabel: "Daniela on the radio", prompt: "Listen to Daniela on the radio again. Write the simple definition she gives for *arsenic*. Then write a simple definition, in the same style, for one technical word from your field.",
        fields: [{ label: "Daniela's definition of arsenic", short: true }, { label: "A technical word from my field + simple definition", short: true }],
        model: `<p><em>Arsenic is a natural element that is found in some rocks.</em> (When water passes through these rocks, a little arsenic can go into the water; you can't see, smell or taste it.)</p>` }
    ] },
    { h: "Writing: a lay summary", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Write a lay summary (100–120 words) of the nopal and adobe study from Unit 9 of this workbook. Give it a headline that a non-expert would want to read.",
        words: [100, 120], check: ["Headline for non-experts", "No technical words without explanation (*mucilage* → the sticky liquid of the nopal)", "Why it matters for real people", "Results in simple terms (*about a quarter stronger*)"],
        model: `<p><strong>Can a cactus make houses stronger?</strong></p><p>Many families in rural Zacatecas live in adobe houses made of earth bricks. Adobe is cheap and keeps houses cool, but it becomes weak when it gets wet. Researchers tested an old idea: adding the sticky liquid from the nopal cactus, called mucilage, to the bricks. They made bricks with different amounts of mucilage and tested them after four weeks. The bricks with the most mucilage were about a quarter stronger and absorbed much less water. This suggests that a plant that grows all over Mexico could help families to build stronger, longer-lasting homes at a very low cost.</p>` }
    ] },
    { h: "My research: the end of the course", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Check your research portfolio log. Then compare your Unit 1 bio with your Unit 12 lay summary and write three things you can do in English now that you could not do at the start of the course.",
        fields: [{ label: "1", short: true }, { label: "2", short: true }, { label: "3", short: true }],
        note: "Después, repasa las Unidades 7–12 para el examen final." }
    ] }
  ]
}
  );
})();
