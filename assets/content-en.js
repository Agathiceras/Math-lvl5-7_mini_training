/* ============================================================
   EM course training · Math 5 (Math for School, Level 5) [2051] · ENGLISH (base version)
   For the Turkish version: copy this file as content-tr.js and change lang to 'tr'.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'en' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM course training',
  footer: 'kodland · New Educational Model · Course training',
  devLink: '🛠 Developer',
  logoSub: 'New Educational Model',
  navHome: '← Home',
  navBackModule: '← Back to the module',
  moduleN: 'Module {n}',
  badgeStart: 'Start →',
  badgeLocked: '🔒 Complete Module {n}',
  badgeDone: '✓ Completed · {score}%',
  progLabel: 'modules complete',
  progAllDone: 'Modules completed 🎉',
  eyebrow: '{course} · Module {n} of {total}',
  ctaTitle: 'Module check',
  ctaText: '{n} short questions. Score 70% or more to pass.',
  lockSim: '🔒 Complete the simulation above to unlock the check.',
  startCheck: 'Start the check →',
  retake: '🔁 Retake the check',
  qmeta: '{e} Module {n} check · Question {i} of {total}',
  fbRight: '✅ <b>Correct!</b> ',
  fbWrong: '❌ <b>Not quite.</b> ',
  nextQuestion: 'Next question →',
  seeResult: 'See my result →',
  passedTitle: 'You passed!',
  failTitle: 'Almost there',
  scoreLine: 'You answered <b>{score} of {n}</b> correctly.',
  failText: 'You need 70% or more. Review the module and try again — you can retake it as many times as you need.',
  nextUnlocked: '<b>Module {n} · {title}</b> is now unlocked.',
  goModule: 'Go to Module {n} →',
  allDoneText: 'You’ve completed both modules of this training.',
  seeNext: 'See what’s next →',
  reviewModule: '📖 Review the module',
  homeDoneTitle: 'Modules completed!',
  homeDoneText: 'One last step: the DST test on the LMS training page.',
  homeDoneBtn: 'See what to do next →',
  doneBadge: '✓ Done',
  doneBack: 'Back to the modules',
  lockedTitle: 'Still locked',
  lockedModule: 'Complete Module {n} first.',
  lockedStep: 'Complete the previous step to unlock this one.',
  ok: 'OK',
  linkOpen: 'Open ↗',
  projPlay: '▶ Open ↗',
  simOpen: '▶ Open the simulation here',
  simClose: '✕ Close the simulation',
  simNewTab: 'Open in a new tab ↗',
  simDone: '✅ Simulation completed',
  simTodo: '○ Simulation pending',
  checkTag: 'Tick them off',
  mythTag: 'Myth',
  mythTap: 'Tap to see the reality →',
  mythReality: 'Reality ✓',
  sortWrong: '✗ Not quite.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'math5';
COURSE.code = '2051';
COURSE.title = 'Math 5';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Course training · [2051]',
  title: 'Math <span class="hl">Level 5</span>',
  lead: 'Math Adventures, for students aged 9–11: every module is a real-life case — designing a park, running a school fair, cooking from a recipe — and students discover the math they need along the way. Two modules: the course content and the technical side of the lessons.',
  facts: [
    ['🧑‍💻', '<b>At your own pace.</b> Your progress is saved in this browser. Each module ends with a short check.'],
    ['🧮', '<b>Built for practice.</b> Real lesson situations, an activity to decide what works and a technical checklist for your first lessons.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Before you start:</b> complete the <b>core New Educational Model (EM) training</b> first. This course training comes after it and builds on what you saw there: Backoffice and the Teacher Notes, Classroom with Follow Mode, and lesson quality.' },
  { kind:'warn', e:'🔄', html:'<b>The lesson content in Backoffice will keep being updated.</b> Lessons are constantly improved with feedback from students and tutors. Don’t worry: whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'📐', color:'#0EA5E9', title:'The course content',
    desc:'How Math 5 is taught in the new model, and the first 4 lessons of Module 1.',
    obj:'Get ready to teach the first lessons of Math 5, where students aged 9–11 solve one real-life case per module and discover the math they need along the way.',
    offer:[['🏙️','Get to know the course and its case-based story.'],['🧠','Understand how the new model works in a math course.'],['📖','Know what happens in each of the first 4 lessons.'],['📘','Review the lessons and Teacher Notes in Backoffice.']],
    sections:[
      { id:'ov', e:'🏙️', title:'The course', blocks:[
        { t:'meta', items:[['🙂','Age','9–11'],['⏱️','Lesson','80 min'],['👥','Group','up to 8'],['📅','Length','32 weeks']] },
        { t:'p', html:'<b>Math Adventures Level 5</b> is a case-based course. Instead of studying topics in isolation, students solve <b>one real-life problem per module</b> — designing a city park, running a school fair, cooking from a recipe, tracking sports records — and discover the math they need along the way.' },
        { t:'p', html:'Module 1 takes place in the <b>architecture office</b> of <b>Sofi and Rafi’s uncle</b>. It’s an open day, and the student joins as an “intern architect”. The plan of a new park is missing its fountain, its bridge and its crossroads — and to draw them correctly, students first need the basic tools of the “designer’s kit”: the point, the line segment, the ray, the line and the circle.' },
        { t:'callout', kind:'tip', e:'🇹🇷', html:'The course is fully aligned with the <b>5th-grade math curriculum of the Turkish Maarif programme</b> (<code>MAT.5.1</code> – <code>MAT.5.6</code>): every required standard is covered, inside a practical case.' }
      ]},
      { id:'model', e:'🧠', title:'The new model in math', blocks:[
        { t:'p', html:'The new model’s framework is the one you saw in the core training, but it works slightly differently in math. Open each principle:' },
        { t:'acc', items:[
          ['🧱','Concrete → Pictorial → Abstract','<p>Each lesson opens with a <b>real problem</b> closely tied to the topic: the student meets a concrete situation (C), then its visual representation (P), and only then moves on to abstract formulas and rules (A).</p><p>The opening task is a <b>hook, not an explanation</b>. Don’t give the definition before the example.</p>'],
          ['📶','From simple to complex','<p>Tasks are ordered by increasing difficulty within each lesson. Each level addresses one step of understanding: basic application first, then more complex configurations. The levels are fixed and <b>explicitly labelled</b>.</p>'],
          ['🌱','New Generation Questions','<p>Students don’t just solve — they <b>explain the math behind the problem</b>: why this method works, what changes if… Every lesson ends with a New Generation Question, and it is <b>never skipped</b>.</p>'],
          ['🔁','Kodland Learning Loop','<p>Goal → draft solution → difficulty or mistake → strategy or hint → improvement → outcome check → reflection. The cycle runs during the lesson and in the independent work that follows. <b>Homework is a mandatory part of the lesson.</b></p>'],
          ['✅','Outcome checks and the module test','<p>Each lesson closes with an <b>outcome check</b>: a short task tied to that lesson’s specific learning outcome. The module ends with a cumulative test covering all the outcome checks. Results are visible to the student, the teacher and the parent.</p>'],
          ['💬','Three-way feedback','<p>The teacher assesses the quality of the solution and the understanding of each step; the group reacts during the review; and the student marks which outcome checks are complete and which aren’t.</p>'],
          ['🪜','Gradual release of responsibility','<p>Early in the module, students get step-by-step instructions and solution templates. By the end of the module, they <b>choose the method themselves</b> and complete the solution without hints.</p>']
        ]}
      ]},
      { id:'les', e:'📖', title:'The first 4 lessons', blocks:[
        { t:'p', html:'Module 1: <b>Lines and angles. Polygons and circles.</b> The first four lessons complete the park plan. Open each lesson:' },
        { t:'lessons', key:'m1', items:[
          { tab:'L1', e:'🏛️', h:'Lesson 1 — Basics of architectural drafting', p:'The first lesson of the architecture-office story. Students learn the point, the line segment, the ray, the line and the circle (centre, radius, diameter, chord) to complete the plan of a park. <code>MAT.5.3.1</code>',
            acc:[['📚','What you need to know','<ul><li><b>Point</b>: a mark with no size that shows an exact position. Written with a capital letter: A.</li><li><b>Line segment</b>: the part of a line between two endpoints. Written [AB] (or [BA] — it’s the same segment).</li><li><b>Ray</b>: starts at one point and goes on forever in one direction. Written [AB: it starts at A and passes through B. [AB and [BA are <b>two different rays</b>.</li><li><b>Line</b>: goes on forever in both directions, with no endpoints. Written AB.</li><li><b>Circle</b>: centre, radius (from the centre to a point on the circle), diameter (a chord through the centre; d = 2r) and chord (joins two points on the circle).</li><li>The designer’s kit: ruler, compass and set square.</li></ul>'],
                 ['⏱️','How the 80 minutes are split','<ul><li><b>Introduction (15 min):</b> welcome, meeting Sofi and Rafi, Wordwall icebreaker, lesson rules, Classroom check, entering the story.</li><li><b>Main part 1 (18 min):</b> the point; marking points on the park map; the line segment with the interactive ruler.</li><li><b>Main part 2 (17 min):</b> ray and line, a 5-question quiz, the geometry workshop, Wordwall review.</li><li><b>Main part 3 (18 min):</b> measuring segments, a 3-minute break, the circle, the colour-legend task, true statements about circles.</li><li><b>Closing (12 min):</b> independent work, discussion, summary questions, reflection, homework reminder and a preview of the next lesson.</li></ul>'],
                 ['🎯','Learning outcomes','<ul><li>Tells the point, line segment, ray and line apart by their definitions.</li><li>Reads and writes their notation: A, [AB], [AB, AB.</li><li>Recognises the centre, radius, diameter and chord of a circle.</li><li>Chooses the right tool to draw them.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Before each new concept, ask an intuitive question with an everyday example (a pinprick, railway tracks, a manhole cover). <b>Don’t give the definition straight away.</b></li><li>Bring the park story back often: every tool learned today is used to complete the plan.</li><li>On the interactive cards, wait for the student to finish the task on their own.</li></ul>'],
                 ['📌','Things to watch out for','<ul><li>A point is not “a small circle”: it’s an ideal mark with no size.</li><li>With rays, the order of the letters matters: [AB and [BA are different rays.</li><li>A diameter always passes through the centre; a chord that doesn’t pass through it is not a diameter.</li><li>Some interactive tasks depend on an external tool: try them yourself before the lesson.</li></ul>']] },
          { tab:'L2', e:'📏', h:'Lesson 2 — Properties of points, segments and lines', p:'Students extend the designer’s kit: they work with the circle, parallel lines and perpendicular lines, and learn how they differ. <code>MAT.5.3.2</code>',
            acc:[['📚','What you need to know','<ul><li><b>Parallel lines</b> never meet; <b>perpendicular lines</b> meet at a right angle.</li><li>How to draw a perpendicular with a set square.</li><li>A recap of the notation from Lesson 1.</li></ul>'],
                 ['🎯','Learning outcomes','<ul><li>Recognises and draws parallel and perpendicular lines.</li><li>Explains the difference with examples from the park plan (paths, bridges, crossroads).</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Start with a concrete case from the park (for example, two paths that never meet) before naming the concept.</li><li>Ask 1–2 students to explain how they know two lines are perpendicular.</li></ul>'],
                 ['📌','Things to watch out for','<ul><li>Check the Teacher Notes on each card: they give the answers and the hints for every task.</li><li>Every scored card is completed by each student on the platform.</li></ul>']] },
          { tab:'L3', e:'📐', h:'Lesson 3 — Precision in every degree: measuring angles', p:'Students learn the types of angles and how to measure them with a protractor, to complete the crossroads in the park. <code>MAT.5.3.3</code>',
            acc:[['📚','What you need to know','<ul><li>Types of angles: acute, right, obtuse and straight.</li><li>How to place the protractor: centre on the vertex, zero on one arm of the angle.</li></ul>'],
                 ['🎯','Learning outcomes','<ul><li>Classifies angles by their size.</li><li>Measures angles accurately with a protractor.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>The real problem first (what angle do two crossing paths make?), then the visual representation, and the rule last.</li><li>If many students make mistakes on the teacher panel, explain again with a different example and let them try again.</li></ul>'],
                 ['📌','Things to watch out for','<ul><li>A common mistake is reading the wrong scale on the protractor. Ask “Which zero did you start from?” instead of correcting it.</li></ul>']] },
          { tab:'L4', e:'🏅', h:'Lesson 4 — Module review', p:'Students bring together everything they’ve learned to finish the park plan and earn their architect certificate. <code>MAT.5.3.4</code>',
            acc:[['📚','What you need to know','<ul><li>The whole designer’s kit: point, line segment, ray, line, circle, parallel and perpendicular lines, and angles.</li></ul>'],
                 ['🎯','Learning outcomes','<ul><li>The student chooses the method and the tool on their own and solves without hints (gradual release of responsibility).</li><li>Completes the outcome check for this part of the module.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Celebrate the progress: from the first point on the map to the complete plan.</li><li>Check on the teacher panel which outcome checks are still incomplete, and plan the follow-up.</li></ul>'],
                 ['📌','Things to watch out for','<ul><li>Don’t skip the independent work or the New Generation Questions, even when time is short.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Teacher Notes are now the main source of lesson preparation.</b> They include the lesson plan with timings, the tasks of the lesson and, on every card, what to do at each moment. The first card has the full description and a <b>video briefing</b>. <b>Review all the Teacher Notes before class and watch the video.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Review the lessons in Backoffice', blocks:[
        { t:'p', html:'Before the check, open the course in Backoffice and read through the four lessons at your own pace — the activity cards and the Teacher Notes are all there. Nothing is timed.' },
        { t:'link', href:'https://bo.kodland.org/courses/2051', e:'📘', title:'Open the course in Backoffice', small:'[2051] Math 5 — the lessons and their Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'The lesson content in Backoffice will keep being updated with feedback from students and tutors. Whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'The technical side of the lessons',
    desc:'Follow Mode, scored cards, the teacher panel and what to do when something doesn’t work.',
    obj:'Learn what makes a Math 5 lesson work technically: Follow Mode every time, every scored card solved by each student, the teacher panel, and how to report a problem.',
    offer:[['👁️','Always show the materials with Follow Mode.'],['🧮','Make sure every student solves and submits their cards.'],['📊','Use the teacher panel to react in time.'],['🚨','Know what to report, and where.']],
    sections:[
      { id:'class', e:'🎥', title:'During the lesson', blocks:[
        { t:'cards', cols:2, items:[
          ['👁️','Always use Follow Mode','Use Follow Mode <b>every time</b> you show the lesson materials. <b>Don’t share your screen</b> to demonstrate the lesson.'],
          ['🧮','Every scored card, individually','Each student completes the scored cards on the platform. <b>A scored card solved only on your screen counts as zero</b> for every student.'],
          ['📤','Classwork and homework submitted','Make sure students submit their tasks during the lesson, encourage them to do their homework, and check that they submitted it.'],
          ['🖍️','The Whiteboard instead of annotations','Classroom doesn’t have an annotation tool yet (like the one in Zoom). To explain something visually, use the <b>Whiteboard</b>.']
        ]}
      ]},
      { id:'panel', e:'📊', title:'The teacher panel and explanations', blocks:[
        { t:'steps', items:[
          ['Check the results','After students submit, check the results on the <b>teacher panel</b>.'],
          ['If many students made mistakes','Explain again with a <b>different example</b> and let them try again.'],
          ['Ask for explanations','Ask 1–2 students to explain their solution. Treat mistakes as learning moments.'],
          ['Give hints, not answers','If the task gives no hints, give them yourself with <b>guiding questions</b>, and show the full solution only after the student has tried. The questions and answers are in the Teacher Notes.']
        ]},
        { t:'h', html:'Does it keep students active? Decide for each one' },
        { t:'sorter', yes:'✅ Works', no:'❌ Doesn’t work', items:[
          ['💬','“Type the result of the first step in the chat — everyone at the same time.”','yes','<b>Works.</b> It’s an instant check: you see straight away who understood.'],
          ['🙂','“Is everything clear?”','no','<b>Doesn’t work.</b> You almost always get a “yes” and learn nothing about what they understood.'],
          ['✋','“Show me with your fingers: how many chords can you see in the drawing?”','yes','<b>Works.</b> Everyone takes part and you see the answers instantly.'],
          ['🖥️','Solving the scored card on your own screen to save time.','no','<b>Doesn’t work.</b> A scored card solved only on your screen counts as zero for every student.']
        ]}
      ]},
      { id:'after', e:'🗂️', title:'After the lesson, and when something goes wrong', blocks:[
        { t:'acc', open:false, items:[
          ['✍️','Grade open-ended answers','Tasks with open-ended answers (for example, essay questions) are graded <b>manually before the next lesson</b>. They’re rare, but they do happen.'],
          ['🚫','Never skip the independent work','The independent-work block and the New Generation Questions are <b>never skipped</b>, even when the group is running late.'],
          ['🐞','A card doesn’t work','If a card doesn’t work, can’t be submitted or gives a strange score, report it to the methodology team with the <b>lesson number</b> and the <b>card name</b>.'],
          ['🔌','Problems with Follow Mode','If technical issues happen while using Follow Mode, report them to the product and content team in the <b>#mena-math-newcontent-questions</b> channel in the green Slack.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Technical checklist for every lesson', blocks:[
        { t:'check', title:'✅ My technical checklist', groups:[
          { h:'☑️ Before the lesson', items:['I reviewed all the Teacher Notes and watched the video briefing on the first card.','I tried the interactive tasks that depend on an external tool.'] },
          { h:'🎬 During the lesson', items:['I show the materials with Follow Mode, without sharing my screen.','Every student solves and submits the scored cards on the platform.','I check the teacher panel and explain again with a different example when needed.','I use instant checks instead of asking “Is everything clear?”.','I don’t skip the independent work or the New Generation Questions.'] },
          { h:'📤 After the lesson', items:['I graded the open-ended answers manually before the next lesson.','I checked that students submitted their homework.','I reported any card that didn’t work, with the lesson number and the card name.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'How is Math 5 organised?',
      o:['By separate topics with practice drills.','By cases: each module is a real-life problem, and the math appears when students need it.','By weekly exams.'],
      a:1, e:'One real-life case per module — the park, the fair, the recipe — and the math is discovered along the way.' },
    { q:'In which order is a new concept presented in a lesson?',
      o:['Abstract → Pictorial → Concrete.','Concrete → Pictorial → Abstract: a real situation first, then its visual representation, and the rule last.','The definition first, then the exercises.'],
      a:1, e:'The opening task is a hook. The definition never comes before the example.' },
    { q:'What is a New Generation Question?',
      o:['A harder multiple-choice question.','A question where the student explains why their method works, or what changes if the conditions change.','An optional question for students who finish early.'],
      a:1, e:'Every lesson ends with one, and it’s never skipped: the focus is on explaining, not just calculating.' },
    { ctx:'In Lesson 1, a student writes that [AB and [BA are the same ray.',
      q:'What’s correct?',
      o:['They’re right: both go through the same two points.','No: a ray starts at its first letter, so [AB and [BA are two different rays.','It’s only wrong if the ray is vertical.'],
      a:1, e:'[AB starts at A and passes through B; [BA starts at B and passes through A. The line segments [AB] and [BA], on the other hand, are the same segment.' },
    { q:'What does gradual release of responsibility mean across the module?',
      o:['The teacher solves everything at the end of the module.','Early on there are step-by-step instructions and templates; by the end, the student chooses the method and solves without hints.','Homework becomes optional.'],
      a:1, e:'Support decreases across the module until the student solves independently.' }
  ],
  m2:[
    { q:'How do you show the lesson materials?',
      o:['By sharing your screen.','With Follow Mode, every time.','By sending screenshots in the chat.'],
      a:1, e:'Follow Mode is always used. Demonstrating by screen sharing is unwanted.' },
    { ctx:'To save time, a tutor solves a scored card on their own screen while the group watches.',
      q:'What happens to the students’ scores?',
      o:['Everyone gets full marks.','It counts as zero for every student: each one must solve the card on the platform.','The score is shared among the students.'],
      a:1, e:'Every scored card is completed individually by each student on the platform.' },
    { ctx:'The teacher panel shows that most students got a task wrong.',
      q:'What do you do?',
      o:['Move on to the next card so you don’t lose time.','Explain again with a different example and let them try again.','Post the correct answer in the chat.'],
      a:1, e:'The teacher panel is there so you can react in time: a different example and a new attempt.' },
    { q:'A card gives a strange score. What do you do?',
      o:['Nothing — it happens.','Report it to the methodology team with the lesson number and the card name.','Tell students never to do that card again.'],
      a:1, e:'With the lesson number and the card name, the team can find the card and fix it.' },
    { q:'Which tool do you use to explain something visually in Classroom?',
      o:['The annotation tool, like in Zoom.','The Whiteboard.','A separate shared document.'],
      a:1, e:'Classroom doesn’t have an annotation tool yet: to explain something, use the Whiteboard.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Modules completed!',
  html: `<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p>
    <p>👉 <b>You must complete and pass the DST test for the training to be considered successfully completed.</b> If you do not complete the DST test, the training will remain incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  nexts: [
    ['📒', '<b>Before every lesson:</b> review all the Teacher Notes and watch the video briefing.'],
    ['👁️', '<b>In the lesson:</b> Follow Mode every time, and every student solves their own cards.'],
    ['📊', '<b>Teacher panel:</b> if many students get it wrong, a different example and a new attempt.'],
    ['🌱', '<b>Never skip</b> the independent work or the New Generation Questions.']
  ]
};
