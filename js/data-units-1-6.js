/* Research Pathways B1 — Workbook · Units 1–6
   Textos marcados "written for this workbook" son ficticios, para práctica. */
window.UNITS = window.UNITS || [];
window.UNITS.push(

/* =============================== UNIT 1 =============================== */
{
  n: 1, title: "Research lives", icon: "flask",
  sub: "Presente simple y continuo · el perfil del investigador · tu biografía académica",
  img: { file: "Researchers in laboratory.jpg", credit: "Rhoda Baer / National Cancer Institute, dominio público", alt: "Investigadoras trabajando en un laboratorio" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the word families.", note: "Escribe el sustantivo de cada verbo.",
        items: [
          { t: "publish → ___", g: [{ a: ["publication"], why: "El sustantivo de *publish* se forma con **-ation**: *publication* (una publicación). *Publishing* es la actividad editorial, no un artículo publicado." }] },
          { t: "supervise → ___ (activity) / ___ (person)", g: [
            { a: ["supervision"], why: "La **actividad** termina en **-ion**: *supervision*." },
            { a: ["supervisor"], why: "La **persona** termina en **-or**: *supervisor* (tu director/a de tesis)." }] },
          { t: "analyse → ___", g: [{ a: ["analysis"], why: "No es *analyzation* ni *analyse*: el sustantivo es **analysis** (plural *analyses*)." }] },
          { t: "collect → ___", g: [{ a: ["collection"], why: "*Collect* + **-ion** = *collection* (data collection = recolección de datos)." }] },
          { t: "present → ___", g: [{ a: ["presentation"], why: "*Present* + **-ation** = *presentation*. Ojo: *present* como sustantivo significa *regalo* o *el presente*." }] }
        ] },
      { num: "2", type: "choice", prompt: "Choose the odd one out in each group.", note: "La explicación aparece al elegir.",
        items: [
          { q: "lab · archive · field · grant", o: ["lab", "archive", "field", "grant"], a: 3,
            f: ["*Lab* es un lugar donde se investiga, igual que *archive* y *field*.", "*Archive* es un lugar de investigación (archivo), como *lab* y *field*.", "*Field* (campo) también es un lugar de investigación.", "*Grant* es dinero (una beca o financiamiento), **no un lugar**. Los otros tres son lugares donde se investiga."] },
          { q: "thesis · dissertation · article · colleague", o: ["thesis", "dissertation", "article", "colleague"], a: 3,
            f: ["*Thesis* es un documento escrito, como los demás excepto uno.", "*Dissertation* es un documento (tesis doctoral).", "*Article* es un documento publicado.", "*Colleague* es una **persona** (colega); los otros tres son documentos."] },
          { q: "publish · present · collect · supervisor", o: ["publish", "present", "collect", "supervisor"], a: 3,
            f: ["*Publish* es un verbo, como *present* y *collect*.", "*Present* aquí funciona como verbo.", "*Collect* es un verbo.", "*Supervisor* es un **sustantivo** (persona); los otros tres son verbos."] },
          { q: "conference · seminar · workshop · data", o: ["conference", "seminar", "workshop", "data"], a: 3,
            f: ["*Conference* es un evento académico.", "*Seminar* es un evento académico.", "*Workshop* (taller) es un evento.", "*Data* es información, **no un evento**; los otros tres son eventos académicos."] }
        ] }
    ] },
    { h: "Grammar: present simple and present continuous", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete the text with the correct form of the verbs.", numbered: false,
        items: [{ t: "Mariana usually (1) ___ (work) in the archive from 9 to 2. This month she (2) ___ (read) documents about mine accidents. She (3) ___ (not / like) working at home because it's noisy. Right now she (4) ___ (write) an email to an archive in Seville. She (5) ___ (need) a letter from her supervisor. The archive (6) ___ (open) at 8 a.m., Spanish time.",
          g: [
            { a: ["works"], why: "*Usually* indica una **rutina** → presente simple. Con *she* se añade **-s**: *works*." },
            { a: ["is reading", "'s reading"], why: "*This month* indica una actividad **temporal, en progreso** → presente continuo: *is reading*." },
            { a: ["doesn't like", "does not like"], why: "*Like* es un verbo de estado: no se usa en continuo. Negativo con *she*: **doesn't like** (no *don't*)." },
            { a: ["is writing", "'s writing"], why: "*Right now* = en este momento → presente continuo: *is writing*." },
            { a: ["needs"], why: "*Need* es un verbo de estado (no va en continuo). Con *she*: **needs**." },
            { a: ["opens"], why: "Es un horario fijo → presente simple. *The archive* = *it* → **opens**." }
          ] }] },
      { num: "4", type: "rewrite", prompt: "Correct the mistake in each sentence.", note: "Escribe la oración completa corregida.",
        items: [
          { q: "I am study a master's in Biosciences.", a: ["I am studying a master's in Biosciences.", "I study a master's in Biosciences.", "I'm studying a master's in Biosciences.", "I am doing a master's in Biosciences."], why: "Después de *am* necesitas el verbo en **-ing** (*am studying*) o bien quita *am* (*I study*). *Am study* mezcla dos tiempos." },
          { q: "Iván is knowing a lot about detectors.", a: ["Iván knows a lot about detectors.", "Ivan knows a lot about detectors."], why: "*Know* es un **verbo de estado**: no se usa en presente continuo. Usa presente simple: *Iván knows*." },
          { q: "What do you work on at the moment?", a: ["What are you working on at the moment?"], why: "*At the moment* indica una acción en progreso → presente continuo: *What **are** you **working** on…?*" },
          { q: "She don't use a lab for her research.", a: ["She doesn't use a lab for her research.", "She does not use a lab for her research."], why: "Con *he/she/it* el auxiliar negativo es **doesn't**, no *don't*." },
          { q: "We are usually meeting on Mondays.", a: ["We usually meet on Mondays."], why: "*Usually* expresa una **rutina** → presente simple (*we usually meet*). El adverbio de frecuencia va antes del verbo principal." }
        ] }
    ] },
    { h: "Reading: a researcher profile", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the profile and answer the questions.",
        passage: `<p><strong>Dr Lucía Ferrer</strong> is an epidemiologist at the Faculty of Medicine of UAZ. She studies how diseases spread in rural communities, especially dengue, which is transmitted by mosquitoes. She has worked at UAZ for twelve years, and she chairs the university's research ethics committee. Her week is very busy: on Mondays and Wednesdays she teaches statistics to medical students, and on Thursdays the ethics committee meets. This year she is leading a project with three municipalities to map places where mosquitoes breed, using a mobile app. Families take photos of containers with water, and the app sends the location to the health team. "Citizens are not only participants; they are part of the research team," she says. In her free time, she runs in the mountains around Zacatecas.</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "What is her field?", o: ["Epidemiology", "Statistics", "Biology of mosquitoes", "Computer science"], a: 0,
            f: ["El texto dice *She is an epidemiologist*: su campo es la epidemiología.", "Ella **enseña** estadística, pero su campo de investigación es otro. Lee la primera oración.", "Estudia una enfermedad transmitida por mosquitos, pero no es bióloga de mosquitos. Lee la primera oración.", "Usa una app, pero no es informática. La primera oración dice cuál es su profesión."] },
          { q: "Which disease does she study?", o: ["Malaria", "Dengue", "COVID-19", "Influenza"], a: 1,
            f: ["El texto no menciona la malaria.", "Correcto: *especially dengue, which is transmitted by mosquitoes*.", "No se menciona la COVID-19.", "No se menciona la influenza."] },
          { q: "When does the ethics committee meet?", o: ["On Mondays", "On Wednesdays", "On Thursdays", "Every day"], a: 2,
            f: ["Los lunes da clases de estadística.", "Los miércoles también da clases.", "Correcto: *on Thursdays the ethics committee meets*.", "El texto da un día concreto, no todos los días."] },
          { q: "What is her project this year?", o: ["Teaching statistics online", "Mapping places where mosquitoes breed with a mobile app", "Writing a book about dengue", "Running in the mountains"], a: 1,
            f: ["Da clases de estadística, pero eso es su rutina, no el proyecto de este año.", "Correcto: *This year she is leading a project… to map places where mosquitoes breed, using a mobile app*.", "El texto no habla de un libro.", "Correr es su pasatiempo (*free time*), no un proyecto."] },
          { q: "What role do families have in the project?", o: ["They are only participants who answer surveys", "They take photos of water containers and are part of the research team", "They pay for the app", "They teach statistics"], a: 1,
            f: ["La cita dice lo contrario: *not only participants*.", "Correcto: toman fotos de recipientes con agua y, según la doctora, *they are part of the research team*.", "El texto no menciona pagos.", "Quien enseña estadística es la doctora."] },
          { q: "Which sentence is in the present continuous?", o: ["She studies how diseases spread.", "This year she is leading a project…", "On Thursdays the ethics committee meets.", "She runs in the mountains."], a: 1,
            f: ["*Studies* es presente simple.", "Correcto: *is leading* = *be* + verbo-*ing*, una actividad temporal (*this year*).", "*Meets* es presente simple (rutina).", "*Runs* es presente simple (hábito)."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 1.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "1.1", trackLabel: "The welcome seminar", prompt: "Listen to the welcome seminar again. Write the four questions that Fiona asks. Then use them to interview a classmate or a friend.",
        fields: [{ label: "Fiona's four questions", short: true }, { label: "Notes from your interview", short: true }],
        model: `<p><em>Daniela, would you like to start?</em></p><p><em>Who's your supervisor?</em></p><p><em>So what are you doing at the moment?</em></p><p><em>Do you usually work alone or in a team?</em></p>`, modelTitle: "Las preguntas de Fiona" }
    ] },
    { h: "Writing: improve a bio", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Luis wrote this bio for a conference website. It has problems with person, tense, word order and vocabulary. Rewrite it as an academic bio in the third person (60–80 words).",
        passage: `<p>Hi! I'm Luis and I study a PhD. I like very much the solar energy. Now I test panels in the roof. Before I studied Electrical Engineering in UAZ. I am in a group of six persons.</p>`,
        words: [60, 80], check: ["Third person (*Luis Navarro is…*), no *I*", "Present continuous for current work (*is currently testing*)", "Correct word order (no *like very much the…*)", "Formal vocabulary: *his research focuses on*, *holds a degree in*, *a member of*"],
        model: `<p>Luis Navarro is a PhD student in Electrical Engineering at the Universidad Autónoma de Zacatecas (UAZ), Mexico. His research focuses on solar energy, in particular the effect of dust on solar panels. He is currently testing cleaning methods on twelve panels on the roof of his faculty building. He holds a bachelor's degree in Electrical Engineering from UAZ and is a member of a six-person research group.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write the script of your 60-second research pitch. Record it twice on your phone. The second time, correct one thing (a tense, a word stress, a pause). Write what you changed.",
        fields: [{ label: "My 60-second pitch" }, { label: "What I changed in the second recording", short: true }] }
    ] }
  ]
},

/* =============================== UNIT 2 =============================== */
{
  n: 2, title: "Asking the right questions", icon: "question",
  sub: "Preguntas directas e indirectas · el problema de investigación · criterios FINER",
  img: { file: "Researcher looking through microscope.jpg", credit: "National Cancer Institute (NIH), dominio público", alt: "Investigador mirando por un microscopio" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the objectives with the verbs in the box.", box: ["compare", "evaluate", "explore", "identify", "measure"],
        items: [
          { t: "to ___ the arsenic levels in 30 wells", g: [{ o: ["compare", "evaluate", "explore", "identify", "measure"], a: "measure", why: "Los *niveles* de arsénico son una cantidad: se **miden** (*measure*)." }] },
          { t: "to ___ two methods of teaching mathematics", g: [{ o: ["compare", "evaluate", "explore", "identify", "measure"], a: "compare", why: "Cuando hay **dos** métodos, el objetivo natural es **compararlos** (*compare*)." }] },
          { t: "to ___ how teachers experience online classes", g: [{ o: ["compare", "evaluate", "explore", "identify", "measure"], a: "explore", why: "Las experiencias son cualitativas y abiertas: se **exploran** (*explore how…*)." }] },
          { t: "to ___ the main causes of student dropout", g: [{ o: ["compare", "evaluate", "explore", "identify", "measure"], a: "identify", why: "Las *causas principales* se **identifican** (encontrar cuáles son)." }] },
          { t: "to ___ the effectiveness of a new vocabulary app", g: [{ o: ["compare", "evaluate", "explore", "identify", "measure"], a: "evaluate", why: "*Effectiveness* (eficacia) se **evalúa**: es un juicio sobre si algo funciona." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Label each sentence about one study: topic, problem, gap, research question or hypothesis.",
        items: [
          { t: "Many first-year students at the university leave their programmes. ___", g: [{ o: ["topic", "problem", "gap", "research question", "hypothesis"], a: "problem", why: "Describe una **situación negativa real** que preocupa: es el *problem*." }] },
          { t: "Student dropout in higher education. ___", g: [{ o: ["topic", "problem", "gap", "research question", "hypothesis"], a: "topic", why: "Es solo una frase nominal general, sin verbo: es el **tema** (*topic*)." }] },
          { t: "No study has examined dropout in our engineering programmes since 2015. ___", g: [{ o: ["topic", "problem", "gap", "research question", "hypothesis"], a: "gap", why: "Dice lo que **no se ha estudiado**: es el **vacío** en el conocimiento (*gap*)." }] },
          { t: "Why do first-year engineering students leave their programmes? ___", g: [{ o: ["topic", "problem", "gap", "research question", "hypothesis"], a: "research question", why: "Es una **pregunta** concreta que el estudio va a contestar." }] },
          { t: "Students who work more than 20 hours a week are more likely to leave. ___", g: [{ o: ["topic", "problem", "gap", "research question", "hypothesis"], a: "hypothesis", why: "Es una **predicción** que se puede comprobar: una hipótesis." }] }
        ] }
    ] },
    { h: "Grammar: direct and indirect questions", tag: "Grammar", ex: [
      { num: "3", type: "rewrite", prompt: "Write the question for each answer.", note: "Cuidado con las *subject questions*: no llevan do / does / did.",
        items: [
          { q: "______? – Daniela studies arsenic.", a: ["What does Daniela study?"], why: "Preguntas por el **objeto** (*arsenic*) → necesitas el auxiliar *does* y el verbo en forma base: *What **does** Daniela **study**?*" },
          { q: "______? – Twelve panels are on the roof.", a: ["How many panels are on the roof?", "How many panels are there on the roof?"], why: "Preguntas por una **cantidad** contable → *How many panels…?* Con *be* no hace falta *do*." },
          { q: "______? – Dr Herrera supervises Daniela.", a: ["Who supervises Daniela?"], why: "Preguntas por el **sujeto** (Dr Herrera) → *subject question*: **sin** *does* y el verbo conserva la -s: *Who supervises Daniela?*" },
          { q: "______? – The study started in 2024.", a: ["When did the study start?"], why: "Pasado + pregunta por el objeto/tiempo → *did* + verbo base: *When **did** the study **start**?* (no *started*)." },
          { q: "______? – Rajesh's question came from his mother's kitchen.", a: ["Where did Rajesh's question come from?"], why: "Pasado → *did* + forma base (*come*, no *came*). La preposición *from* va al final: *Where did… come from?*" }
        ] },
      { num: "4", type: "rewrite", prompt: "Rewrite as indirect questions.", note: "En las preguntas indirectas el orden es sujeto + verbo y no se usa do/does/did.",
        items: [
          { q: "How long does the survey take?", start: "I'd like to know…", a: ["I'd like to know how long the survey takes.", "I would like to know how long the survey takes."], why: "En pregunta indirecta desaparece *does* y el verbo recupera la -s: *…how long the survey **takes***." },
          { q: "Are the results significant?", start: "I'd like to know…", a: ["I'd like to know if the results are significant.", "I'd like to know whether the results are significant.", "I would like to know if the results are significant.", "I would like to know whether the results are significant."], why: "Las preguntas de sí/no se introducen con **if** o **whether**, y el orden es sujeto + verbo: *…whether the results **are** significant*." },
          { q: "Where did the miners live?", start: "The aim is to find out…", a: ["The aim is to find out where the miners lived."], why: "Se quita *did* y el verbo pasa a pasado: *…where the miners **lived***." },
          { q: "What do farmers think about drip irrigation?", start: "The aim is to find out…", a: ["The aim is to find out what farmers think about drip irrigation."], why: "Se quita *do*: *…what farmers **think** about drip irrigation*." }
        ] }
    ] },
    { h: "Reading: feedback from a supervisor", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the email and answer the questions.",
        passage: `<p>Dear Andrés,</p><p>Thank you for sending your research question: "Does social media cause anxiety in young people?" It is an important topic, but I see three problems. First, "young people" is too wide: do you mean secondary school students, university students, or both? Second, the word "cause" is a problem: with a survey you can find a relationship, but not a cause. Third, you have only one year, so a national study is not feasible. I suggest something like: "What is the relationship between daily hours on social media and anxiety levels among first-year UAZ students?" Let's discuss it on Thursday.</p><p>Best wishes,<br>Prof. Salas</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "What was Andrés's first question?", o: ["Does social media cause anxiety in young people?", "What is the relationship between daily hours on social media and anxiety levels among first-year UAZ students?", "How many hours do students use social media?", "Is anxiety a problem in Mexico?"], a: 0,
            f: ["Correcto: es la pregunta que Andrés envió.", "Esa es la **sugerencia** de la profesora, no la pregunta original de Andrés.", "Esa pregunta no aparece en el correo.", "Esa pregunta no aparece en el correo."] },
          { q: "What are the three problems?", o: ["The topic is not important; the survey is too long; the deadline is Thursday", "\"Young people\" is too wide; a survey cannot show a cause; a national study is not feasible in one year", "He has no supervisor; he has no data; he has no money", "The question is in Spanish; it is too short; it has no hypothesis"], a: 1,
            f: ["La profesora dice que el tema **sí** es importante.", "Correcto: población demasiado amplia, *cause* imposible de demostrar con una encuesta, y un estudio nacional no es factible en un año.", "El correo no menciona nada de esto.", "El correo no menciona nada de esto."] },
          { q: "Which FINER criterion does the third problem refer to?", o: ["Interesting", "Novel", "Ethical", "Feasible"], a: 3,
            f: ["El problema no es si interesa, sino el tiempo disponible.", "No habla de si es nuevo.", "No hay ningún problema ético mencionado.", "Correcto: *a national study is not **feasible*** en un año → criterio *Feasible*."] },
          { q: "Which research design is Andrés going to use?", o: ["An experiment", "A survey", "A case study", "Interviews"], a: 1,
            f: ["No hay un experimento; por eso no puede demostrar causas.", "Correcto: *with a survey you can find a relationship*.", "No se menciona un estudio de caso.", "No se mencionan entrevistas."] },
          { q: "When will they meet?", o: ["On Monday", "On Tuesday", "On Thursday", "Next year"], a: 2,
            f: ["Relee la última oración del correo.", "Relee la última oración del correo.", "Correcto: *Let's discuss it on Thursday*.", "*One year* es la duración del proyecto, no la fecha de la reunión."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 2.2)", tag: "Listening", ex: [
      { num: "6", type: "choice", track: "2.2", trackLabel: "Rajesh's research question", prompt: "Listen to Rajesh again. Which three qualities did his final question have?",
        items: [
          { q: "His final question was…", o: ["specific, measurable, and possible to finish in three years", "interesting, cheap, and popular", "national, causal, and quick", "broad, theoretical, and qualitative"], a: 0,
            f: ["Correcto: era específica, medible y se podía terminar en tres años.", "Rajesh no habla de que fuera barata o popular. Escucha otra vez el final.", "Al contrario: una pregunta nacional y causal sería demasiado amplia.", "Rajesh **redujo** su pregunta; no la hizo más amplia."] }
        ] }
    ] },
    { h: "Writing: order a problem statement", tag: "Writing", ex: [
      { num: "7", type: "gaps", prompt: "Put the sentences in the correct order (1–5).",
        html: `<table class="t"><tr><td><b>a</b> However, few studies have examined the role of women in this trade.</td></tr><tr><td><b>b</b> The silver trade made Zacatecas one of the richest cities of New Spain.</td></tr><tr><td><b>c</b> This study therefore asks: How did women participate in the silver economy of Zacatecas between 1700 and 1750?</td></tr><tr><td><b>d</b> Historians have described the economic and political importance of the mines in detail.</td></tr><tr><td><b>e</b> Its objectives are to identify the jobs that women did and to describe their legal situation.</td></tr></table>`,
        items: [
          { t: "First sentence (context): ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "b", why: "Un planteamiento empieza por el **contexto general**: la importancia de la plata en Zacatecas (b)." }] },
          { t: "Second (what we know): ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "d", why: "Después viene **lo que ya se sabe**: los historiadores ya describieron la importancia de las minas (d)." }] },
          { t: "Third (the gap): ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "a", why: "*However, few studies…* introduce el **vacío** (gap); siempre va después de lo que se sabe (a)." }] },
          { t: "Fourth (research question): ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "c", why: "*Therefore* conecta el vacío con la **pregunta de investigación** (c)." }] },
          { t: "Fifth (objectives): ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "e", why: "*Its objectives* se refiere a *this study*: los **objetivos** cierran el planteamiento (e)." }] }
        ] }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write the second draft of your problem statement. Check it with the FINER criteria. Mark your gap sentence and your research question.",
        check: ["**F**easible: time, money, access", "**I**nteresting to my field", "**N**ovel: there is a gap", "**E**thical", "**R**elevant", "Gap sentence marked", "Research question marked"] }
    ] }
  ]
},

/* =============================== UNIT 3 =============================== */
{
  n: 3, title: "Standing on the shoulders of giants", icon: "book",
  sub: "Pasado simple y presente perfecto · verbos para citar · leer y resumir literatura",
  img: { file: "LOC Main Reading Room Highsmith.jpg", credit: "Carol M. Highsmith / Library of Congress, dominio público", alt: "Sala de lectura principal de la Biblioteca del Congreso" },
  sections: [
    { h: "Vocabulary: reporting verbs and references", tag: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Match the reporting verbs (1–6) with their meanings (a–f).",
        html: `<table class="t"><tr><td><b>a</b> decide something at the end of a study</td><td><b>d</b> discover something through research</td></tr><tr><td><b>b</b> give details about something</td><td><b>e</b> propose an idea carefully</td></tr><tr><td><b>c</b> give reasons to support a position</td><td><b>f</b> say that something is true, maybe without proof</td></tr></table>`,
        items: [
          { t: "argue → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "c", why: "*Argue* (en contexto académico) = dar **razones** para defender una postura (c), no *discutir* en el sentido de pelear." }] },
          { t: "find → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "d", why: "*Find* = **descubrir** algo a través de la investigación (d): *They found that…*" }] },
          { t: "suggest → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "e", why: "*Suggest* es un verbo **cauteloso**: propone una idea con cuidado (e)." }] },
          { t: "claim → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "f", why: "*Claim* = afirmar que algo es verdad, **quizá sin pruebas** (f). Muestra cierta distancia del autor." }] },
          { t: "conclude → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "a", why: "*Conclude* = decidir algo **al final** de un estudio (a)." }] },
          { t: "describe → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "b", why: "*Describe* = dar **detalles** sobre algo (b)." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Look at this reference in APA style. Label the parts.",
        passage: `<p>Castro, M., &amp; Villalobos, J. (2025). Silver and mercury: Tracing a colonial legacy in the soils of Zacatecas. <em>Revista de Estudios Mineros, 12</em>(2), 45–60.</p><p class="src">(Example reference for practice.)</p>`,
        items: [
          { t: "Castro, M., & Villalobos, J. → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "author(s)", why: "En APA la referencia empieza con los **autores**: apellido, inicial." }] },
          { t: "(2025) → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "year", why: "El número entre paréntesis después de los autores es el **año**." }] },
          { t: "Silver and mercury: Tracing a colonial legacy… → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "title", why: "Es el **título del artículo** (sin cursiva en APA)." }] },
          { t: "Revista de Estudios Mineros → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "journal", why: "El nombre en **cursiva** es la **revista** (journal)." }] },
          { t: "12 → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "volume", why: "El número en cursiva después de la revista es el **volumen**." }] },
          { t: "(2) → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "issue", why: "El número entre paréntesis después del volumen es el **número/fascículo** (issue)." }] },
          { t: "45–60 → ___", g: [{ o: ["author(s)", "year", "title", "journal", "volume", "issue", "pages"], a: "pages", why: "Al final van las **páginas**." }] }
        ] }
    ] },
    { h: "Grammar: past simple and present perfect", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete the literature review with the past simple or the present perfect.", numbered: false,
        items: [{ t: "Researchers (1) ___ (study) groundwater in northern Mexico for more than thirty years. In 2005, a team (2) ___ (measure) arsenic in 150 wells in Durango. Since then, several studies (3) ___ (report) similar levels in other states. However, few studies (4) ___ (look) at small rural communities. Last year, our group (5) ___ (begin) a new project, but we (6) ___ (not / publish) the results yet.",
          g: [
            { a: ["have studied"], why: "*For more than thirty years* = desde el pasado **hasta hoy** → presente perfecto: *have studied*." },
            { a: ["measured"], why: "*In 2005* es un momento **terminado y específico** → pasado simple: *measured*." },
            { a: ["have reported"], why: "*Since then* conecta el pasado con el presente → presente perfecto: *have reported*." },
            { a: ["have looked"], why: "Es un resumen de la literatura **hasta ahora**, sin fecha → presente perfecto: *have looked*." },
            { a: ["began"], why: "*Last year* es tiempo terminado → pasado simple. *Begin* es irregular: **began**." },
            { a: ["haven't published", "have not published"], why: "*Yet* va con presente perfecto en negativo: *haven't published… yet*." }
          ] }] },
      { num: "4", type: "gaps", prompt: "Choose the correct time expression.",
        items: [
          { t: "We have used this method ___ 2018.", g: [{ o: ["since", "for"], a: "since", why: "*2018* es un **punto de inicio** → *since*. *For* va con duraciones (*for six years*)." }] },
          { t: "They published the article two years ___.", g: [{ o: ["ago", "since"], a: "ago", why: "*Two years ago* = hace dos años; va con **pasado simple** y después de la cantidad de tiempo." }] },
          { t: "Historians have studied the mines ___ decades.", g: [{ o: ["for", "since"], a: "for", why: "*Decades* es una **duración** → *for*." }] },
          { t: "Have you read the new article ___?", g: [{ o: ["yet", "already"], a: "yet", why: "En **preguntas y negativas** se usa *yet*, al final de la oración." }] },
          { t: "I have ___ finished the literature review.", g: [{ o: ["yet", "already"], a: "already", why: "En **afirmativas** se usa *already*, entre *have* y el participio." }] }
        ] }
    ] },
    { h: "Reading: skim and scan", tag: "Reading", ex: [
      { num: "5a", type: "choice", prompt: "Skim the text in two minutes and answer 1–3.",
        figure: { file: "Leptonycteris curasoae.jpg", credit: "U.S. Fish and Wildlife Service, dominio público", alt: "Murciélago magueyero (lesser long-nosed bat)" },
        passage: `<p><strong>Bats, agaves and mezcal: pollination in a changing landscape</strong> <span class="src">(text written for this workbook)</span></p><p>Agave plants, which are used to produce mezcal, depend on nectar-feeding bats for pollination. In many regions, producers harvest agaves before they flower, which reduces food for bats. We studied 12 agave fields in southern Zacatecas over two flowering seasons. We counted bat visits with infrared cameras and compared fields where 5% of the agaves were allowed to flower with fields where none flowered. Fields with flowering agaves received six times more bat visits, and seeds from these fields were more genetically diverse. These results suggest that allowing a small proportion of agaves to flower could protect both bats and the genetic diversity of the crop.</p>`,
        items: [
          { q: "What is the topic?", o: ["How harvesting agaves before they flower affects the bats that pollinate them", "How to produce mezcal", "Infrared camera technology", "The history of Zacatecas"], a: 0,
            f: ["Correcto: la relación entre cosechar antes de la floración y los murciélagos polinizadores.", "El mezcal es contexto, pero el estudio no explica cómo producirlo.", "Las cámaras son solo el método.", "Zacatecas es el lugar, no el tema."] },
          { q: "What did the researchers do?", o: ["They interviewed mezcal producers", "They compared 12 fields over two seasons and counted bat visits with infrared cameras", "They planted new agaves", "They caught and tagged bats"], a: 1,
            f: ["No hubo entrevistas.", "Correcto: compararon campos y contaron visitas con cámaras infrarrojas.", "No plantaron agaves; dejaron florecer algunos.", "No capturaron murciélagos."] },
          { q: "What was the main finding?", o: ["Bats avoid agave fields", "Flowering fields had six times more bat visits and more genetically diverse seeds", "Mezcal production fell by 5%", "Infrared cameras do not work at night"], a: 1,
            f: ["Al contrario: los visitan mucho más cuando hay flores.", "Correcto.", "El 5% es la proporción de agaves que se dejó florecer.", "Las cámaras funcionaron; con ellas contaron las visitas."] }
        ] },
      { num: "5b", type: "gaps", prompt: "Now scan the text for the numbers (4–7).",
        items: [
          { t: "How many fields did they study? ___", g: [{ a: ["12", "twelve"], why: "Busca la palabra *fields*: *We studied **12** agave fields*." }] },
          { t: "For how many seasons? ___", g: [{ a: ["2", "two", "two seasons", "2 seasons"], why: "Busca *seasons*: *over **two** flowering seasons*." }] },
          { t: "How many more bat visits did flowering fields receive? ___", g: [{ a: ["six times", "6 times", "six times more", "6", "six", "6x", "six times as many"], why: "Busca *visits*: *received **six times** more bat visits*." }] },
          { t: "What percentage of agaves were allowed to flower? ___", g: [{ a: ["5%", "5", "five percent", "5 percent", "five per cent"], why: "Busca el símbolo %: ***5%** of the agaves were allowed to flower*." }] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 3.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "3.1", trackLabel: "The librarian's search tips", prompt: "Use the librarian's tips. Write a database search for this topic: *mercury in soil or sediment near mines*. Then write a search for your own topic.",
        fields: [{ label: "Search: mercury in soil or sediment near mines", short: true }, { label: "Search for my own topic", short: true }],
        model: `<p><code>mercury AND (soil OR sediment) AND (mine OR mining)</code></p><p>Acepta búsquedas similares: <strong>AND</strong> une conceptos distintos, <strong>OR</strong> agrupa sinónimos entre paréntesis.</p>` }
    ] },
    { h: "Writing: paraphrase and summarise", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Paraphrase these sentences from the text. Change the words and the structure, but keep the meaning.",
        fields: [{ label: "1. Agave plants depend on nectar-feeding bats for pollination.", short: true }, { label: "2. Producers harvest agaves before they flower.", short: true }, { label: "3. Fields with flowering agaves received six times more bat visits.", short: true }],
        model: `<p>1 Bats that feed on nectar are necessary for agave pollination.</p><p>2 Agaves are usually cut before they produce flowers.</p><p>3 Bats visited fields with agaves in flower six times as often.</p>`, modelTitle: "Paráfrasis modelo" },
      { num: "8", type: "open", prompt: "Write a summary of the text (60–80 words). Imagine the authors are Ramos and Ortega (2024). Start with the authors and the year, and use reporting verbs.",
        words: [60, 80], check: ["Starts with *Ramos and Ortega (2024)…*", "At least two reporting verbs (*investigated, found, suggest…*)", "Own words, not copied sentences", "Main finding with numbers"],
        model: `<p>Ramos and Ortega (2024) investigated how harvesting agaves before they flower affects nectar-feeding bats in southern Zacatecas. Using infrared cameras in 12 fields over two seasons, they found that fields where 5% of the agaves flowered received six times more bat visits and produced more genetically diverse seeds. The authors suggest that letting a few agaves flower could protect both the bats and the genetic diversity of the crop.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "9", type: "open", prompt: "Read two articles from your field and complete a reading log.",
        fields: [{ label: "Article 1 — Reference", short: true }, { label: "Article 1 — Research question, method, main finding, my opinion" }, { label: "Article 2 — Reference", short: true }, { label: "Article 2 — Research question, method, main finding, my opinion" }] }
    ] }
  ]
},

/* =============================== UNIT 4 =============================== */
{
  n: 4, title: "Counting and measuring", icon: "ruler",
  sub: "Comparativos y cuantificadores · investigación cuantitativa · correlación y causa",
  img: { file: "Giant photovoltaic array.jpg", credit: "U.S. Air Force, dominio público", alt: "Gran planta de paneles solares" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Write the word for each definition.",
        items: [
          { t: "all the people or things that you want to study: p___", g: [{ a: ["population", "opulation"], w: 12, why: "Todo el grupo que quieres estudiar es la **population** (población)." }] },
          { t: "the smaller group that you actually study: s___", g: [{ a: ["sample", "ample"], w: 10, why: "El grupo más pequeño que realmente estudias es la **sample** (muestra)." }] },
          { t: "chosen by chance: r___", g: [{ a: ["random", "andom"], w: 10, why: "Elegido al azar = **random**." }] },
          { t: "the result that you measure: d___ variable", g: [{ a: ["dependent", "ependent"], w: 11, why: "El resultado que mides es la variable **dependent**; la que tú cambias es la *independent*." }] },
          { t: "a relationship between two variables: c___", g: [{ a: ["correlation", "orrelation"], w: 13, why: "Una relación entre dos variables es una **correlation** (no siempre es causa)." }] },
          { t: "a set of written questions: q___", g: [{ a: ["questionnaire", "uestionnaire"], w: 15, why: "Un conjunto de preguntas escritas es un **questionnaire** (con doble n)." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete the collocations with analyse, conduct, measure or recruit.",
        items: [
          { t: "___ a survey", g: [{ o: ["analyse", "conduct", "measure", "recruit"], a: "conduct", why: "Una encuesta se **realiza**: *conduct a survey* (también *carry out*)." }] },
          { t: "___ participants", g: [{ o: ["analyse", "conduct", "measure", "recruit"], a: "recruit", why: "A los participantes se les **recluta**: *recruit participants*." }] },
          { t: "___ the temperature", g: [{ o: ["analyse", "conduct", "measure", "recruit"], a: "measure", why: "La temperatura es una cantidad: se **mide**." }] },
          { t: "___ the results", g: [{ o: ["analyse", "conduct", "measure", "recruit"], a: "analyse", why: "Los resultados se **analizan**: *analyse the results*." }] }
        ] }
    ] },
    { h: "Grammar: comparing and quantifying", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Look at the table and complete the sentences.",
        html: `<table class="t"><tr><th></th><th>Panel A</th><th>Panel B</th><th>Panel C</th></tr><tr><td>Efficiency (%)</td><td>18</td><td>21</td><td>22</td></tr><tr><td>Price per panel (pesos)</td><td>3,000</td><td>4,500</td><td>7,000</td></tr><tr><td>Expected lifetime (years)</td><td>20</td><td>25</td><td>25</td></tr></table><p class="ex-note">(Invented data for practice.)</p>`,
        items: [
          { t: "Panel C is ___ (efficient) of the three.", g: [{ a: ["the most efficient"], why: "*Of the three* pide **superlativo**. *Efficient* es un adjetivo largo → **the most** efficient." }] },
          { t: "Panel A is ___ (cheap) than Panel B.", g: [{ a: ["cheaper"], why: "*Than* pide **comparativo**. *Cheap* es corto → **cheaper** (no *more cheap*)." }] },
          { t: "Panel B lasts as ___ as Panel C.", g: [{ a: ["long"], why: "B y C duran **igual** (25 años) → *as long as*. Con *as… as* el adjetivo no cambia." }] },
          { t: "Panel C is ___ (much / expensive) than Panel A.", g: [{ a: ["much more expensive"], why: "*Much* intensifica el comparativo: **much more expensive** (7,000 vs 3,000 pesos)." }] },
          { t: "Panel C is only ___ more efficient than Panel B.", g: [{ o: ["slightly", "far"], a: "slightly", why: "La diferencia es de solo 1 punto (22% vs 21%) → **slightly** (un poco). *Far* indica una gran diferencia." }] },
          { t: "Panel A has ___ (short) lifetime.", g: [{ a: ["the shortest"], why: "Se compara entre los tres → superlativo de un adjetivo corto: **the shortest**." }] }
        ] },
      { num: "4", type: "gaps", prompt: "A team surveyed 50 bean farmers. Choose the right quantifier for each result.",
        note: "Después, escribe una oración completa en tu cuaderno, por ejemplo: *All the farmers own their land.*",
        items: [
          { t: "Own their land (50 of 50): ___ the farmers own their land.", g: [{ o: ["All", "Almost all", "Half of", "A few", "None of"], a: "All", why: "50 de 50 = el 100 % → **All**." }] },
          { t: "Use flood irrigation (46): ___ the farmers use flood irrigation.", g: [{ o: ["All", "Almost all", "Half of", "A few", "None of"], a: "Almost all", why: "46 de 50 es casi el total, pero no todos → **Almost all**." }] },
          { t: "Have tried drip irrigation (25): ___ the farmers have tried drip irrigation.", g: [{ o: ["All", "Almost all", "Half of", "A few", "None of"], a: "Half of", why: "25 de 50 = la mitad → **Half of**." }] },
          { t: "Receive government support (6): ___ farmers receive government support.", g: [{ o: ["All", "Almost all", "Half of", "A few", "None of"], a: "A few", why: "6 de 50 es un número pequeño → **A few**." }] },
          { t: "Use soil moisture sensors (0): ___ the farmers use soil moisture sensors.", g: [{ o: ["All", "Almost all", "Half of", "A few", "None of"], a: "None of", why: "0 de 50 → **None of**." }] }
        ] }
    ] },
    { h: "Reading: sleep and exam results", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the text and answer the questions.",
        passage: `<p>A team at a Mexican university surveyed 480 undergraduate students about their sleep during the two weeks before final exams. Students reported their average hours of sleep per night, and the team collected their exam results from university records, with the students' permission. Students who slept seven hours or more had a mean score of 8.4 (out of 10), compared with 7.6 for students who slept less than six hours. The correlation was moderate. However, students who slept less also worked more hours in paid jobs, and they spent more time travelling to the university. The authors recommend more research before giving advice to students.</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "What was the research design?", o: ["An experiment", "A survey"], a: 1,
            f: ["En un experimento los investigadores **cambiarían** las horas de sueño; aquí solo preguntaron.", "Correcto: *surveyed 480 undergraduate students*."] },
          { q: "How large was the sample?", o: ["10 students", "480 students", "7.6 students", "2 weeks"], a: 1,
            f: ["10 es la escala de calificación.", "Correcto: 480 estudiantes.", "7.6 es una calificación media.", "Dos semanas es el periodo, no la muestra."] },
          { q: "How did the team measure sleep? Is this method reliable?", o: ["With sleep sensors; very reliable", "Students reported their own hours; not very reliable, because people do not always remember accurately", "From university records; completely reliable", "They did not measure sleep"], a: 1,
            f: ["No usaron sensores.", "Correcto: es **autorreporte** (*students reported*), y la memoria no es exacta.", "Los registros universitarios se usaron para las **calificaciones**, no para el sueño.", "Sí lo midieron, pero mediante autorreporte."] },
          { q: "Which sentence compares the two groups correctly?", o: ["Students who slept seven hours or more had a higher mean score (8.4) than students who slept less than six hours (7.6).", "Students who slept less had higher scores.", "Both groups had the same mean score.", "Students who slept more had a score of 7.6."], a: 0,
            f: ["Correcto: comparativo + datos de ambos grupos.", "Es al revés: dormir menos se asocia con calificaciones más bajas.", "Las medias son distintas: 8.4 y 7.6.", "Confunde los números: 7.6 corresponde a quienes dormían menos de seis horas."] },
          { q: "Does the study show that more sleep causes better results?", o: ["Yes, because the correlation was moderate", "No: a survey shows a correlation, not a cause", "Yes, because the sample was large", "No, because the students did not give permission"], a: 1,
            f: ["Una correlación, aunque sea fuerte, **no** demuestra causa.", "Correcto: una encuesta solo muestra **relación**; además hay terceras variables.", "Una muestra grande no convierte una correlación en causa.", "Los estudiantes **sí** dieron permiso."] },
          { q: "Which two possible third variables are mentioned?", o: ["Age and gender", "Hours of paid work and travel time to the university", "Coffee and stress", "Exam difficulty and teacher"], a: 1,
            f: ["No se mencionan.", "Correcto: *worked more hours in paid jobs* y *more time travelling*.", "No se mencionan en el texto.", "No se mencionan en el texto."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 4.1)", tag: "Listening", ex: [
      { num: "6", type: "choice", track: "4.1", trackLabel: "Dr Salas: correlation and cause", prompt: "Listen to Dr Salas again. What is the possible real explanation for each correlation?",
        items: [
          { q: "Ice cream sales and drownings", o: ["Ice cream causes drowning", "Hot weather (summer): people eat more ice cream and swim more", "Drownings make people buy ice cream", "There is no relationship"], a: 1,
            f: ["Es el ejemplo clásico de que correlación no es causa.", "Correcto: el **calor** es la tercera variable que explica ambas.", "La causa inversa tampoco tiene sentido.", "Sí hay correlación; lo que no hay es causa directa."] },
          { q: "Hours of sleep and grades", o: ["Sleep always causes good grades", "Students with good grades may be less stressed, so they sleep better", "Grades and sleep are never related", "Teachers give higher grades to students who sleep"], a: 1,
            f: ["El estudio no permite afirmar *siempre* ni causa.", "Correcto: la relación puede ir **al revés** (causalidad inversa).", "Sí puede haber relación.", "No es la explicación que se da."] }
        ] }
    ] },
    { h: "Writing: a comparison paragraph", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Write a paragraph (100–120 words) that compares the three panels in Exercise 3. Recommend one panel for a rural school with a small budget.",
        words: [100, 120], check: ["Comparatives and superlatives with data", "*much / slightly / by far* to show the size of the difference", "A clear recommendation with a reason", "Linking words: *although, but, overall*"],
        model: `<p>The table compares three solar panels. Panel C is the most efficient (22%), but it is also by far the most expensive, at 7,000 pesos, more than twice the price of Panel A. Panel B is only slightly less efficient than Panel C (21%), and it lasts as long (25 years), but it costs 2,500 pesos less. Panel A is the cheapest option, although it has the lowest efficiency and the shortest lifetime. Overall, Panel B is probably the best choice for a rural school with a small budget, because it combines high efficiency and a long lifetime with a moderate price.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write 60–80 words about the design of your project. If it is quantitative, describe your population, sample and variables. If it is qualitative or historical, explain why a quantitative design is not the best option.", words: [60, 80] }
    ] }
  ]
},

/* =============================== UNIT 5 =============================== */
{
  n: 5, title: "Voices and stories", icon: "voice",
  sub: "Pasado continuo y *used to* · investigación cualitativa · notas de campo",
  img: { file: "Nurses Oak Ridge Hospital 1940s (29502310673).jpg", credit: "Ed Westcott / U.S. Department of Energy, dominio público", alt: "Enfermeras en un hospital" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Match the methods (1–6) with the examples (a–f).",
        html: `<table class="t"><tr><td><b>a</b> Six nurses discuss their working conditions together.</td></tr><tr><td><b>b</b> The researcher gives the label <em>fear</em> to parts of the interviews.</td></tr><tr><td><b>c</b> A detailed study of one farmers' cooperative.</td></tr><tr><td><b>d</b> The researcher lives in a village and takes part in daily life.</td></tr><tr><td><b>e</b> A conversation with a list of open questions, but flexible.</td></tr><tr><td><b>f</b> Notes written every evening about what the researcher saw.</td></tr></table>`,
        items: [
          { t: "participant observation → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "d", why: "*Participant observation* = el investigador **participa** en la vida diaria del grupo (d)." }] },
          { t: "semi-structured interview → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "e", why: "Semi-estructurada = hay una **guía de preguntas**, pero es flexible (e)." }] },
          { t: "focus group → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "a", why: "Un *focus group* es una discusión **en grupo** (a)." }] },
          { t: "field notes → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "f", why: "Las *field notes* son las **notas** que escribe el investigador sobre lo que observó (f)." }] },
          { t: "coding → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "b", why: "*Coding* = poner **etiquetas** (códigos) a fragmentos de los datos (b)." }] },
          { t: "case study → ___", g: [{ o: ["a", "b", "c", "d", "e", "f"], a: "c", why: "Un *case study* estudia **un caso** en profundidad (c)." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete with the correct form of the word in brackets.",
        items: [
          { t: "Sofía's ___ (interpret) of the data changed after the focus group.", g: [{ a: ["interpretation"], why: "Después de un posesivo (*Sofía's*) necesitas un **sustantivo**: *interpretation*." }] },
          { t: "Twenty families ___ (participate) in the study.", g: [{ a: ["participated", "participate"], why: "Hace falta un **verbo** conjugado; lo más natural es el pasado: *participated*." }] },
          { t: "She ___ (observe) daily life in the market for three months.", g: [{ a: ["observed"], why: "Es una acción terminada en el pasado → *observed*." }] },
          { t: "Each participant's ___ (experience) of migration was different.", g: [{ a: ["experience"], why: "Tras el posesivo va un sustantivo singular (lo indica *was*): *experience*." }] }
        ] }
    ] },
    { h: "Grammar: past simple, past continuous and used to", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete the field notes with the correct form of the verbs.", numbered: false,
        items: [{ t: "When I (1) ___ (arrive) at the market at 6 a.m., the vendors (2) ___ (prepare) their stalls. While I (3) ___ (talk) to Doña Rosa, a customer (4) ___ (ask) for fresh nopales. Doña Rosa told me that her mother (5) ___ (use to / sell) vegetables in the same place. In the past, vendors (6) ___ (not / use to / have) electricity. At 10 a.m. it (7) ___ (start) to rain, so I (8) ___ (go) home.",
          g: [
            { a: ["arrived"], why: "Acción corta y terminada que **interrumpe** otra → pasado simple: *arrived*." },
            { a: ["were preparing"], why: "Acción **en progreso** cuando llegaste → pasado continuo. *Vendors* es plural → **were** preparing." },
            { a: ["was talking"], why: "*While* + acción en progreso → pasado continuo: *was talking*." },
            { a: ["asked"], why: "Acción corta que ocurre durante la otra → pasado simple: *asked*." },
            { a: ["used to sell"], why: "Hábito del pasado que ya no ocurre → *used to* + verbo base: *used to sell*." },
            { a: ["didn't use to have", "did not use to have"], why: "En negativo: *didn't use to* (sin -d en *use*, porque ya está *did*)." },
            { a: ["started"], why: "Acción puntual en un momento del pasado → *started*." },
            { a: ["went"], why: "*Go* es irregular: **went**." }
          ] }] },
      { num: "4", type: "rewrite", prompt: "Write sentences with used to or didn't use to.",
        items: [
          { q: "researchers / write their theses by hand", a: ["Researchers used to write their theses by hand."], why: "Afirmativo: sujeto + **used to** + verbo base." },
          { q: "historians / not / have digital archives", a: ["Historians didn't use to have digital archives.", "Historians did not use to have digital archives."], why: "Negativo: **didn't use to** (sin -d) + verbo base." },
          { q: "authors / send their articles to journals by post", a: ["Authors used to send their articles to journals by post."], why: "Afirmativo: *Authors **used to** send…*" },
          { q: "you / use the library's paper catalogue? (question)", a: ["Did you use to use the library's paper catalogue?"], why: "Pregunta: **Did** + sujeto + **use to** + verbo base. Sí, *use to use* es correcto." }
        ] }
    ] },
    { h: "Reading: an interview extract", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the interview extract and answer the questions.",
        passage: `<p><strong>Researcher:</strong> Can you tell me about a typical night shift?</p><p><strong>Rosa (nurse, 34):</strong> Well, I used to like nights, because it was quieter. But now we have fewer nurses. Last week, while I was preparing medication, two patients called at the same time. I felt very alone. When I go home in the morning, my children are leaving for school, so I don't see them. Sometimes I cry in the car. But I love my patients. When an old man said "Thank you, daughter", I remembered why I do this job.</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "How has night work changed for Rosa?", o: ["She used to like nights because they were quieter; now there are fewer nurses", "She has always hated nights", "Now there are more nurses", "She doesn't work at night any more"], a: 0,
            f: ["Correcto: *I used to like nights… But now we have fewer nurses*.", "*Used to like* indica que **antes sí** le gustaban.", "Dice lo contrario: *fewer nurses*.", "Sigue trabajando de noche."] },
          { q: "What happened last week?", o: ["She left her job", "While she was preparing medication, two patients called at the same time", "A patient thanked her", "Her children visited the hospital"], a: 1,
            f: ["No lo dice.", "Correcto: fíjate en el pasado continuo + pasado simple.", "Eso ocurrió, pero no dice que fuera la semana pasada.", "No se menciona."] },
          { q: "Why doesn't she see her children in the morning?", o: ["They live with their grandparents", "They are leaving for school when she gets home", "She sleeps all day", "She works in the morning"], a: 1,
            f: ["No se menciona.", "Correcto: *my children are leaving for school*.", "No lo dice.", "Trabaja de noche."] },
          { q: "Best code for: *two patients called at the same time*", o: ["Workload / pressure", "Impact on family", "Motivation / meaning of care", "Salary"], a: 0,
            f: ["Correcto: describe exceso de trabajo y presión.", "La familia aparece en otra parte del texto.", "La motivación aparece al final del texto.", "No se habla de salario."] },
          { q: "Best code for: *I don't see them*", o: ["Workload / pressure", "Impact on family", "Motivation / meaning of care", "Training"], a: 1,
            f: ["El fragmento habla de sus hijos, no del trabajo en el hospital.", "Correcto: el turno afecta su vida familiar.", "No es sobre su motivación.", "No se habla de capacitación."] },
          { q: "Best code for: *\"Thank you, daughter\"*", o: ["Workload / pressure", "Impact on family", "Motivation / meaning of care", "Conflict with patients"], a: 2,
            f: ["No es un momento de presión.", "*Daughter* es una forma de cariño del paciente; no habla de su familia.", "Correcto: le recuerda **por qué** hace su trabajo.", "Es un momento positivo, no un conflicto."] },
          { q: "Which is a possible theme for the whole extract?", o: ["Caring under pressure", "Hospital architecture", "Nursing salaries in Mexico", "Children's education"], a: 0,
            f: ["Correcto (también se aceptan temas parecidos): une presión, familia y vocación.", "No se habla del edificio.", "No se habla de salarios.", "Los hijos aparecen solo de forma secundaria."] }
        ] }
    ] },
    { h: "Listen again (Student's Book, Track 5.1)", tag: "Listening", ex: [
      { num: "6", type: "open", track: "5.1", trackLabel: "Sofía interviews Don Pedro", prompt: "Listen to Sofía's interview with Don Pedro again. Write (a) the follow-up question that Sofía asks and (b) the two sentences with *used to*.",
        fields: [{ label: "(a) Follow-up question", short: true }, { label: "(b) Two sentences with used to", short: true }],
        model: `<p>(a) <em>Can you tell me more about your life there?</em></p><p>(b) <em>I used to work fourteen hours a day in a restaurant kitchen.</em> / <em>Six of us used to live in a small apartment.</em></p>` }
    ] },
    { h: "Writing: reflective notes", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Here are Iván's quick notes after a day at the hospital. Write reflective notes (100–130 words) with the four parts: description, interpretation, reflection, next step.",
        passage: `<p><em>Hospital 2, Tuesday. Radiographer angry – I was in the way. Placed 6 dosimeters. One patient asked if my study was dangerous – I explained badly. Felt embarrassed. Need a simple explanation card.</em></p>`,
        words: [100, 130], check: ["**Description**: what happened (past simple / continuous)", "**Interpretation**: what it may mean (*may, might*)", "**Reflection**: how you felt and what you learned", "**Next step**: what you will do (*I will…*)"],
        model: `<p><strong>Description.</strong> On Tuesday I placed six dosimeters in Hospital 2. The radiographer was angry because I was in the way, and a patient asked me if my study was dangerous. <strong>Interpretation.</strong> The radiographer may feel that my study makes her work slower. The patient's question shows that people may be afraid of the word <em>radiation</em>. <strong>Reflection.</strong> I explained my study badly and I felt embarrassed. I need to prepare better for questions from the public. <strong>Next step.</strong> I will make a small card with a simple explanation, and I will ask the radiographer where I can stand.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Write an interview guide: five open questions and two follow-up questions. Use them for the qualitative part of your project, or to interview an expert in your field.",
        fields: [{ label: "Five open questions" }, { label: "Two follow-up questions", short: true }] }
    ] }
  ]
},

/* =============================== UNIT 6 =============================== */
{
  n: 6, title: "Doing it right", icon: "shield",
  sub: "Obligación y permiso · ética de la investigación · consentimiento informado",
  img: { file: "Medical Laboratory Scientist US NIH.jpg", credit: "National Institutes of Health, contenido libre", alt: "Científica de laboratorio con micropipetas" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Match the opposites.",
        box: ["a reject", "b benefit", "c compulsory", "d take part", "e identifiable"],
        items: [
          { t: "voluntary ↔ ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "c", why: "*Voluntary* (voluntario) ↔ *compulsory* (obligatorio)." }] },
          { t: "anonymous ↔ ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "e", why: "*Anonymous* (sin nombre) ↔ *identifiable* (que se puede identificar)." }] },
          { t: "risk ↔ ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "b", why: "*Risk* (riesgo) ↔ *benefit* (beneficio)." }] },
          { t: "approve ↔ ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "a", why: "*Approve* (aprobar) ↔ *reject* (rechazar)." }] },
          { t: "withdraw ↔ ___", g: [{ o: ["a", "b", "c", "d", "e"], a: "d", why: "*Withdraw* (retirarse de un estudio) ↔ *take part* (participar)." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete the sentences from a consent form with the words in the box.", box: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"],
        items: [
          { t: "This study was ___ by the UAZ ethics committee on 3 May.", g: [{ o: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"], a: "approved", why: "*Was ___ by the committee* pide un participio en voz pasiva: el comité lo **aprobó**." }] },
          { t: "Your answers will be ___: only the research team will see them.", g: [{ o: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"], a: "confidential", why: "*Only the research team will see them* = **confidential**." }] },
          { t: "You can ___ from the study at any time.", g: [{ o: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"], a: "withdraw", why: "*Can* + verbo base; *withdraw from the study* = retirarse." }] },
          { t: "There are no known ___ for participants.", g: [{ o: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"], a: "risks", why: "*No known* + sustantivo plural: *risks* (riesgos)." }] },
          { t: "Children are a ___ group, so their parents must also agree.", g: [{ o: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"], a: "vulnerable", why: "Adjetivo antes de *group*; los niños son un grupo **vulnerable**." }] },
          { t: "Please sign below to give your ___.", g: [{ o: ["approved", "confidential", "consent", "risks", "vulnerable", "withdraw"], a: "consent", why: "*Give your consent* = dar tu consentimiento." }] }
        ] }
    ] },
    { h: "Grammar: obligation and permission", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete the archive rules with must, mustn't, don't have to, can or should.",
        items: [
          { t: "Visitors ___ show an ID at the entrance.", g: [{ o: ["must", "mustn't", "don't have to", "can", "should"], a: "must", why: "Es una **regla obligatoria** → *must*." }] },
          { t: "You ___ use pens near the documents. Use pencils only.", g: [{ o: ["must", "mustn't", "don't have to", "can", "should"], a: "mustn't", why: "*Use pencils only* = está **prohibido** usar plumas → *mustn't*." }] },
          { t: "You ___ bring your own gloves. The archive gives them to you.", g: [{ o: ["must", "mustn't", "don't have to", "can", "should"], a: "don't have to", why: "El archivo te los da → **no es necesario** → *don't have to* (no es lo mismo que *mustn't*)." }] },
          { t: "You ___ take photos without flash.", g: [{ o: ["must", "mustn't", "don't have to", "can", "should"], a: "can", why: "Está **permitido** → *can*." }] },
          { t: "You ___ book your visit two weeks before. It's a good idea.", g: [{ o: ["must", "mustn't", "don't have to", "can", "should"], a: "should", why: "*It's a good idea* = un **consejo** → *should*." }] },
          { t: "You ___ eat or drink in the reading room.", g: [{ o: ["must", "mustn't", "don't have to", "can", "should"], a: "mustn't", why: "Comer junto a documentos históricos está **prohibido** → *mustn't*." }] }
        ] },
      { num: "4", type: "rewrite", prompt: "Rewrite the sentences with have to, don't have to, had to or mustn't.",
        items: [
          { q: "It was necessary for us to get approval last year.", start: "We…", a: ["We had to get approval last year."], why: "Obligación en el **pasado** → *had to* (*must* no tiene pasado)." },
          { q: "It isn't necessary for participants to give their names.", start: "Participants…", a: ["Participants don't have to give their names.", "Participants do not have to give their names."], why: "*Isn't necessary* = falta de obligación → *don't have to*." },
          { q: "Is it necessary for the researcher to keep the data for five years?", start: "Does…?", a: ["Does the researcher have to keep the data for five years?"], why: "Pregunta con *have to*: **Does** + sujeto + **have to** + verbo." },
          { q: "It is prohibited to share the data with other people.", start: "You…", a: ["You mustn't share the data with other people.", "You must not share the data with other people."], why: "*Prohibited* = prohibición → *mustn't*." }
        ] }
    ] },
    { h: "Reading: is public data free to use?", tag: "Reading", ex: [
      { num: "5", type: "choice", prompt: "Read the case and answer the questions.",
        passage: `<p>Pablo, a computer science student, wants to analyse 10,000 public posts on social media about water shortages in Zacatecas. The posts are public, so he thinks he doesn't have to ask anyone for permission. His supervisor is not so sure. "Public is not the same as consent," she says. "People wrote these posts for their friends, not for a researcher." She explains that Pablo must remove the usernames, and that he should not copy exact sentences in his thesis, because anyone can search for the sentence and find the person. He can describe general opinions, and he can use short examples if he changes the words. Finally, he has to send his plan to the ethics committee, even though he won't meet any participants.</p><p class="src">(Text written for this workbook.)</p>`,
        items: [
          { q: "What does Pablo want to analyse?", o: ["10,000 interviews with farmers", "10,000 public social media posts about water shortages in Zacatecas", "Water samples from 10,000 wells", "His supervisor's emails"], a: 1,
            f: ["No son entrevistas.", "Correcto.", "No analiza agua.", "No se menciona."] },
          { q: "Why does he think he doesn't need permission?", o: ["Because his supervisor said so", "Because the posts are public", "Because he will not publish his thesis", "Because the ethics committee approved it"], a: 1,
            f: ["Su directora **no** está de acuerdo.", "Correcto: *The posts are public, so he thinks…*", "No lo dice.", "Todavía tiene que enviar su plan al comité."] },
          { q: "Why shouldn't he copy exact sentences?", o: ["Because it is plagiarism", "Because anyone can search for the sentence and find the person", "Because the sentences are in Spanish", "Because they are too long"], a: 1,
            f: ["El problema aquí no es el plagio, sino la **identificación** de las personas.", "Correcto: una búsqueda revela al autor del post.", "No se menciona el idioma.", "No se menciona la longitud."] },
          { q: "What must he remove?", o: ["The dates", "The usernames", "The hashtags", "The photos"], a: 1,
            f: ["No se mencionan las fechas.", "Correcto: *Pablo must remove the usernames*.", "No se mencionan.", "No se mencionan."] },
          { q: "Does he have to send his plan to the ethics committee?", o: ["Yes, even though he won't meet any participants", "No, because the data are public", "No, because he won't meet participants", "Only if his supervisor wants"], a: 0,
            f: ["Correcto: *he has to send his plan… even though he won't meet any participants*.", "Su directora dice que público no equivale a consentimiento.", "Precisamente el texto dice que **aun así** debe enviarlo.", "Es una obligación (*has to*), no una opción."] }
        ] },
      { num: "5b", type: "open", prompt: "Do you agree with the supervisor? Why or why not?", fields: [{ label: "", short: true }] }
    ] },
    { h: "Listen again (Student's Book, Track 6.2)", tag: "Listening", ex: [
      { num: "6", type: "gaps", track: "6.2", trackLabel: "Lena Fischer: the 3Rs", prompt: "Listen to Lena Fischer again. Then classify each action as Replace, Reduce or Refine.",
        items: [
          { t: "using a computer model instead of goats → ___", g: [{ o: ["Replace", "Reduce", "Refine"], a: "Replace", why: "Se **sustituye** al animal por otra cosa (un modelo) → *Replace*." }] },
          { t: "using 40 animals instead of 100, because 40 give reliable results → ___", g: [{ o: ["Replace", "Reduce", "Refine"], a: "Reduce", why: "Se usan **menos** animales → *Reduce*." }] },
          { t: "giving pain relief after an operation → ___", g: [{ o: ["Replace", "Reduce", "Refine"], a: "Refine", why: "Se **mejora** el trato para reducir el sufrimiento → *Refine*." }] },
          { t: "using cell cultures → ___", g: [{ o: ["Replace", "Reduce", "Refine"], a: "Replace", why: "Los cultivos celulares **sustituyen** al animal → *Replace*." }] },
          { t: "taking blood only when the animal is calm → ___", g: [{ o: ["Replace", "Reduce", "Refine"], a: "Refine", why: "Se sigue usando el animal, pero con un procedimiento **más cuidadoso** → *Refine*." }] }
        ] }
    ] },
    { h: "Writing: plain English", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Rewrite this paragraph from a consent form in plain English (80–100 words). Use *you* and *we*, short sentences and simple words.",
        passage: `<p>Subjects will be required to undergo venipuncture for the extraction of 10 mL of blood. Data obtained will be anonymised and stored in accordance with institutional protocols. Participation is voluntary, and subjects may discontinue at any point without prejudice.</p>`,
        words: [80, 100], check: ["*you* and *we* instead of *subjects*", "Simple words (*take blood*, not *venipuncture*)", "Short sentences", "All the information is still there (10 mL, anonymous data, voluntary, can stop)"],
        model: `<p>We will take a small amount of blood from your arm with a needle (10 mL, about two teaspoons). We will remove your name from all the information, and we will keep it safely at the university, following the university's rules. You can choose to take part or not. You can stop at any time, and nothing bad will happen if you stop.</p>` }
    ] },
    { h: "My research", tag: "Project", ex: [
      { num: "8", type: "open", prompt: "Complete the table with the ethical issues in your project: ethical issue → possible risk → my solution.",
        fields: [{ label: "Issue 1: ethical issue · possible risk · my solution", short: true }, { label: "Issue 2", short: true }, { label: "Issue 3", short: true }],
        note: "Después, repasa las Unidades 1–6 para el examen de medio curso." }
    ] }
  ]
}
);
