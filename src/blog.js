import React, { useState, useMemo } from 'react';


/* ── BLOG DATA ── */
const POSTS = [
  // ═══════════════════ PROJECTS ═══════════════════
  {
    id: 1,
    featured: true,
    title: 'VertiSafe: ESP32-Enabled Elevator Control Prototype with Sensor-Based Safety Mechanisms',
    category: 'Projects',
    tags: ['IoT', 'ESP32', 'C++', 'Embedded'],
    date: 'April 2026',
    readTime: '4 min read',
    excerpt: 'Building a smart elevator control system prototype from scratch taught me more than any textbook ever could — from hardware wiring to real-time scheduling algorithms.',
    gradClass: 'grad-1',
    content: {
      intro: 'The VertiSafe project was my most complex engineering challenge to date. What started as a simple elevator prototype grew into a full-featured smart control system with real-time monitoring, dual-mode emergency activation, and a modular C++ architecture.',
      sections: [
        { heading: 'The Problem We Set Out to Solve', body: 'Traditional elevator systems rely on basic call-and-respond logic with little to no sensor-based intelligence. Mechanical failures can trap passengers, and emergency response is often slow or manual. We wanted to address these issues with an intelligent, responsive prototype.', bullets: [] },
        { heading: 'How We Built It', body: 'We used an ESP32 microcontroller as the brain of the system, integrating ultrasonic sensors, a mechanical door lock, and a real-time GUI monitor. The SCAN disk scheduling algorithm was implemented to optimize floor servicing order.', bullets: ['ESP32 as the central controller', 'SCAN scheduling for queue optimization', 'Ultrasonic sensors for passenger detection', 'Dual emergency: manual button + automatic trigger', 'Real-time GUI for system monitoring'] },
        { heading: 'Challenges Along the Way', body: 'The hardest part was synchronizing the mechanical door lock with the software state machine, making the door close and open was very challenging for us. We almost did not make it work. Debugging embedded systems without proper logging tools was eye-opening.', bullets: [] },
      ],
      takeaways: ['Always conceptualize a project before even starting on it. Buy more components than you assume as waiting for components to arrive take so much time from project-making.', 'Hardware debugging requires patience and systematic isolation of components.', 'Real-time scheduling algorithms are not just textbook material, they solve real problems.', 'Team work makes the dream work, literally...'],
      cta: { text: 'Want to build a project like this?', btnLabel: 'Hire Me', btnHref: 'https://forms.gle/pS1RraSNcPdbkBMVA' },
    },
  },
  {
    id: 2,
    featured: false,
    title: 'Coverage-Driven Verification: Testing a 3-Floor Elevator Control System',
    category: 'Projects',
    tags: ['Verification', 'Embedded', 'Testing', 'SystemVerilog'],
    date: 'March 2026',
    readTime: '4 min read',
    excerpt: 'Designing an elevator controller is one challenge — proving it works under every scenario is another. Here is how we applied coverage-driven verification.',
    gradClass: 'grad-2',
    content: {
      intro: 'For our verification project, we designed a 3-floor elevator control system and used coverage-driven verification techniques to ensure comprehensive testing of all functional scenarios.',
      sections: [
        { heading: 'What is Coverage-Driven Verification?', body: 'Coverage-driven verification (CDV) is a methodology where you define the scenarios your design must handle, then measure how many of those scenarios have been tested. It ensures nothing is left unchecked in the design.', bullets: ['Functional coverage metrics', 'Constrained-random stimulus generation', 'Automated regression testing'] },
        { heading: 'Applying CDV to Elevator Logic', body: 'We defined coverage points for every floor transition, door state, button press combination, and emergency scenario. The testbench generated random but valid inputs and measured functional coverage until we hit our targets.', bullets: [] },
      ],
      takeaways: ['Verification is as important as design, untested logic is untrustworthy logic.', 'Coverage metrics give you confidence that your tests actually exercise the design.', 'Random stimulus catches bugs that directed tests never would.'],
      cta: { text: 'Want to learn more about verification?', btnLabel: 'Reach Out', btnHref: 'https://forms.gle/pS1RraSNcPdbkBMVA' },
    },
  },
  {
    id: 3,
    featured: false,
    title: 'Emotion Through Sound: Translating Facial Expressions into Music for the Visually Impaired',
    category: 'Projects',
    tags: ['AI', 'Accessibility', 'Python', 'Machine Learning'],
    date: 'February 2026',
    readTime: '3 min read',
    excerpt: 'What if someone who cannot see a smile could hear it instead? This project explored the boundary between facial recognition and sound design for accessibility.',
    gradClass: 'grad-3',
    content: {
      intro: 'Emotion Through Sound is a project that uses facial expression recognition to generate representative melodies and sound effects which is designed to help visually impaired individuals perceive emotions in real-time.',
      sections: [
        { heading: 'The Concept', body: 'Using a camera feed and a pre-trained facial expression recognition model, the system detects emotions like happiness, sadness, surprise, and anger. Each emotion is mapped to a unique melody or sound effect that plays in real-time.', bullets: ['Real-time facial expression detection', 'Emotion-to-sound mapping system', 'Designed for accessibility and inclusivity'] },
        { heading: 'Technical Implementation', body: 'We used Python with OpenCV for face detection, a deep learning model for expression classification, and a custom sound engine that plays context-appropriate melodies based on the detected emotion.', bullets: ['OpenCV for face detection', 'CNN-based expression classifier', 'PyGame for audio output'] },
      ],
      takeaways: ['Technology can and should serve accessibility-first purposes.', 'We had fun exploring more information about AI.', 'User-centered design is critical when building for people with disabilities.'],
      cta: { text: 'Interested in accessibility-focused projects?', btnLabel: 'Hire Me', btnHref: 'https://forms.gle/pS1RraSNcPdbkBMVA' },
    },
  },
  {
    id: 4,
    featured: false,
    title: 'Building a Digital Password Lock with Real-Time Error Detection',
    category: 'Projects',
    tags: ['Arduino', 'Embedded', 'Security', 'Hardware'],
    date: 'January 2026',
    readTime: '3 min read',
    excerpt: 'A simple idea with engineering depth is designing a password lock that catches wrong inputs immediately and responds with clear feedback.',
    gradClass: 'grad-4',
    content: {
      intro: 'The Digital Password Lock project was an exercise in embedded systems design that combined keypad input, real-time validation, and immediate error detection with user feedback through LEDs and a buzzer.',
      sections: [
        { heading: 'How It Works', body: 'The system uses an Arduino-based microcontroller with a 4x4 matrix keypad. Users enter a 4-digit PIN; each character is validated in real-time. A wrong input triggers immediate LED and buzzer feedback rather than waiting for the full sequence.', bullets: ['4x4 matrix keypad input', 'Per-character validation', 'LED + buzzer feedback system', 'Lockout after failed attempts'] },
        { heading: 'Design Decisions', body: 'The most interesting design choice was immediate error detection since most lock systems wait until you submit the full password. We chose to flag errors character-by-character to improve user experience and add a layer of responsiveness.', bullets: [] },
      ],
      takeaways: ['Simple projects can teach complex concepts when you push for quality.', 'Real-time feedback is always better than delayed validation when possible.', 'Debouncing keypad inputs is trickier than it sounds.'],
      cta: { text: 'Looking forward to do this?', btnLabel: 'Hire Me', btnHref: 'https://forms.gle/pS1RraSNcPdbkBMVA' },
    },
  },

  // ═══════════════════ COMPETITIONS ═══════════════════
  {
    id: 5,
    featured: false,
    title: 'CpELympics: Representing our School in a Regional Computer Engineering Competition',
    category: 'Competitions',
    tags: ['Competition', 'CpE', 'Teamwork', 'Regional'],
    date: 'March 2026',
    readTime: '2 min read',
    excerpt: 'CpELympics brought together CPE students from across the region for a day of sports, teamwork, and friendly competition — a celebration of both skill and spirit.',
    gradClass: 'grad-5',
    content: {
      intro: 'CpELympics is a regional event that brings computer engineering students together for sports, games, and team‑based competitions. Joining pushed me out of my comfort zone and into a community full of passionate engineers.',
      sections: [
        { heading: 'The Event Format', body: 'The event included Mr and Ms CpE, Basketball, Volleyball, Badminton, and Palarong Pinoy. Each school fielded their best students across multiple categories.', bullets: ['Multi-category competition format', 'Sports games', 'Team-based and individual events'] },
        { heading: 'What I Took Away', body: 'The experience taught me the value of teamwork and sportsmanship, even in a technical field like engineering.', bullets: [] },
      ],
      takeaways: ['Competitions are fun when you know you are representing your school.', 'Preparation under pressure builds real confidence.', 'Representing your school is a responsibility that sharpens your focus.'],
      cta: { text: 'Want to know more about my competitive experience?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 6,
    featured: false,
    title: 'Engineering Cup 2025: When Engineers Trade Keyboards for Courts',
    category: 'Competitions',
    tags: ['Sports', 'Leadership', 'Teamwork', 'FAITH'],
    date: 'November 2025',
    readTime: '2 min read',
    excerpt: 'The Engineering Cup was not about code or circuits — it was about showing up, competing in multiple sports, and learning that engineers can do more than engineer.',
    gradClass: 'grad-1',
    content: {
      intro: 'Engineering Cup 2025 brought together all programs under the College of Engineering at FAITH Colleges for a multi-sport competition. I participated in various sports and discovered a side of myself I rarely exercise in the lab.',
      sections: [
        { heading: 'Stepping onto the Court', body: 'As someone who spends most of my time coding and wiring circuits, playing volleyball, basketball, and joining palarong pinoy events felt like an entirely different world. But the teamwork skills? They translated perfectly.', bullets: ['Volleyball', 'Basketball', 'Palarong Pinoy events', 'Team strategy and sportsmanship'] },
        { heading: 'The Engineering Parallel', body: 'What surprised me most was how similar sports teamwork and project teamwork feel. Communication, trust, quick adaptation — these are engineering skills too, just expressed physically.', bullets: [] },
      ],
      takeaways: ['Physical activity clears your mind and recharges your engineering brain.', 'Teamwork is teamwork — the arena does not matter.', 'Stepping outside your comfort zone builds character faster than staying in it.'],
      cta: { text: 'Curious about life as an engineering student?', btnLabel: 'Contact Me', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 7,
    featured: false,
    title: 'BravEvolution 2026: Representing COE Department',
    category: 'Competitions',
    tags: ['Volleyball', 'Sports', 'Competition', 'Growth'],
    date: 'February 2026',
    readTime: '2 min read',
    excerpt: 'BravEvolution 2026 was a tertiary-level sportsfest where I competed in volleyball. It was exhausting, exhilarating, and deeply rewarding.',
    gradClass: 'grad-2',
    content: {
      intro: 'BravEvolution is a university-wide sportsfest for tertiary-level students. I joined the volleyball team and experienced the kind of camaraderie and competitive energy that only team sports can deliver.',
      sections: [
        { heading: 'The Volleyball Journey', body: 'Training sessions leading up to the event were intense. We focused on communication, formations, and mental toughness, knowing that games are won not just with skill but with composure under pressure.', bullets: ['Regular training sessions', 'Formation drills and serve practice', 'Mental preparation for high-stakes games'] },
        { heading: 'Game Day', body: 'The atmosphere during the actual games was electric. Cheering crowds, tight sets, and moments where one play could shift the momentum, it was a rush unlike anything in a classroom.', bullets: [] },
      ],
      takeaways: ['Sports teach resilience in a way academics cannot.', 'Team chemistry takes time — invest in it early.', 'Winning is great, but the growth from competing matters more.'],
      cta: { text: 'Want to connect?', btnLabel: 'Contact Me', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },

  // ═══════════════════ SEMINARS ═══════════════════
  {
    id: 8,
    featured: false,
    title: 'Backend Development Meets the Cloud: Lessons from the Workshop',
    category: 'Seminars',
    tags: ['Backend', 'Cloud', 'Database', 'Workshop'],
    date: 'March 2026',
    readTime: '3 min read',
    excerpt: 'A hands-on workshop on backend development with cloud databases taught me how modern applications scale — and why serverless is not just a buzzword.',
    gradClass: 'grad-3',
    content: {
      intro: 'The Backend Development with Cloud Database Workshop was a hands-on session that walked us through building backend APIs and connecting them to cloud-hosted databases. It was my first real exposure to cloud infrastructure.',
      sections: [
        { heading: 'What We Built', body: 'During the workshop, we created a REST API that connected to a cloud-hosted database, implemented CRUD operations, and deployed it live. Seeing a backend go from local to cloud in one session was eye-opening.', bullets: ['REST API development', 'Cloud database configuration', 'Live deployment and testing'] },
        { heading: 'Key Insights', body: 'The biggest takeaway was understanding how cloud databases handle scaling and redundancy automatically — something that would require significant manual setup on a traditional server.', bullets: [] },
      ],
      takeaways: ['Cloud infrastructure removes many barriers to deploying real applications.', 'Understanding backend fundamentals makes you a more complete engineer.', 'Hands-on workshops teach faster than any tutorial video.'],
      cta: { text: 'Interested in backend projects?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 9,
    featured: false,
    title: 'Green Your Mind: Why Mental Wellness Matters for Engineering Students',
    category: 'Seminars',
    tags: ['Mental Health', 'Wellness', 'Student Life', 'Growth'],
    date: 'January 2026',
    readTime: '3 min read',
    excerpt: 'A seminar on mental wellness reminded me that no project, deadline, or grade is worth more than your health, and that healthy spaces produce better work.',
    gradClass: 'grad-4',
    content: {
      intro: 'Green Your Mind was a seminar focused on nurturing mental wellness through healthy environments. As an engineering student constantly under pressure, the session was a much-needed reminder to prioritize well-being.',
      sections: [
        { heading: 'The Connection Between Space and Mind', body: 'The seminar explored how your physical environment, such as lighting, greenery, organization, directly impacts mental clarity and productivity. The data was compelling and the practical tips were immediately actionable.', bullets: ['Impact of natural light on focus', 'Benefits of organized workspaces', 'Plants and greenery for stress reduction'] },
        { heading: 'Applying It to Student Life', body: 'After the seminar, I reorganized my study space, and started taking regular breaks during long coding sessions. The difference in my focus and mood was noticeable within a week.', bullets: [] },
      ],
      takeaways: ['Your environment shapes your mental state more than you think.', 'Small changes — like adding a plant or decluttering — have outsized impact.', 'Mental wellness is not a luxury — it is a prerequisite for doing good work.'],
      cta: { text: 'Want to talk about student wellness?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 10,
    featured: false,
    title: 'Embedded Programming with MicroPython: From Arduino to the Next Level',
    category: 'Seminars',
    tags: ['MicroPython', 'Embedded', 'IoT', 'Workshop'],
    date: 'December 2025',
    readTime: '3 min read',
    excerpt: 'Moving from Arduino C++ to MicroPython felt like learning to drive an automatic after years of manual — faster prototyping with a different set of trade-offs.',
    gradClass: 'grad-5',
    content: {
      intro: 'The Embedded Programming with MicroPython seminar introduced us to an alternative approach to microcontroller programming. After years of C++ on Arduino, writing Python directly on hardware was a refreshing shift.',
      sections: [
        { heading: 'Why MicroPython?', body: 'MicroPython brings the simplicity and readability of Python to microcontrollers. For rapid prototyping and educational purposes, it dramatically reduces the time from idea to working prototype.', bullets: ['Python syntax on microcontrollers', 'Faster prototyping vs. C++'] },
        { heading: 'Hands-On Experience', body: 'During the workshop, we programmed ESP32 boards using MicroPython to read sensors, control LEDs, and send data over WiFi. The speed of development was noticeably faster than equivalent C++ workflows.', bullets: [] },
      ],
      takeaways: ['MicroPython is an excellent prototyping tool — but understand its performance limitations.', 'Knowing multiple embedded languages makes you more adaptable.', 'Live debugging with REPL is a game-changer for embedded development.'],
      cta: { text: 'Curious about embedded programming?', btnLabel: 'Contact Me', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },

  // ═══════════════════ REFLECTIONS ═══════════════════
  {
    id: 11,
    featured: false,
    title: 'The Mythical 6: How Winning Volleyball at Engineering Cup Changed My Perspective',
    category: 'Reflections',
    tags: ['Volleyball', 'Victory', 'Teamwork', 'Growth'],
    date: 'November 2025',
    readTime: '2 min read',
    excerpt: 'Winning the Mythical 6 award in volleyball at Engineering Cup 2025 was not just about the medal, it was about proving that dedication outside the classroom matters too.',
    gradClass: 'grad-1',
    content: {
      intro: 'Being recognized as part of the Mythical 6 in volleyball during Engineering Cup 2025 was one of the most unexpected and rewarding moments of my college life. It taught me that excellence is not limited to one domain.',
      sections: [
        { heading: 'The Road to Mythical 6', body: 'I did not start as a confident player. But consistent training, showing up for practice even when tired, and trusting my teammates transformed me from a hesitant player into someone who could hold their own on the court.', bullets: ['Consistent training despite academic load', 'Building trust with teammates', 'Learning to perform under crowd pressure'] },
        { heading: 'What the Recognition Meant', body: 'Receiving the Mythical 6 recognition was validation that growth happens when you commit, not just in engineering labs, but in every arena you choose to show up in.', bullets: [] },
      ],
      takeaways: ['Dedication in any field builds transferable confidence.', 'Being recognized for effort outside your primary discipline is deeply motivating.', 'Team sports teach you about trust in ways individual work cannot.'],
      cta: { text: 'Want to know more about my journey?', btnLabel: 'Contact Me', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 12,
    featured: false,
    title: 'Three Years of ICPEP.SE-FC: What Consistent Officer Service Taught Me',
    category: 'Reflections',
    tags: ['Leadership', 'ICPEP', 'Organization', 'Growth'],
    date: 'February 2026',
    readTime: '3 min read',
    excerpt: 'From first-year committee member to junior officer — three years of consistent service in ICPEP.SE-FC shaped who I am as a leader and as an engineer.',
    gradClass: 'grad-3',
    content: {
      intro: 'Being an officer in ICPEP.SE-FC (Institute of Computer Engineers of the Philippines — Student Edition, FAITH Colleges) from my first year through my third year was a defining thread of my college experience.',
      sections: [
        { heading: 'Year by Year Growth', body: 'In first year, I observed. In second year, I was leading. By third year, I am supporting. Each year demanded something different and built a new layer of capability.', bullets: ['1st Year: Learning the ropes', '2nd Year: Leading events and teams', '3rd Year: Supporting the next generation'] },
        { heading: 'The Value of Consistency', body: 'Most students join organizations for a year and move on. Staying for three years gave me depth, I understood the org culture, anticipated problems before they happened, and could advocate for meaningful changes.', bullets: [] },
      ],
      takeaways: ['Consistency compounds — three years of service yields far more than three separate one-year stints.', 'Mentoring others is the ultimate test of whether you truly understand what you are doing.', 'Organizational leadership is a skill that directly improves your engineering teamwork.'],
      cta: { text: 'Want to collaborate?', btnLabel: 'Hire Me', btnHref: 'https://forms.gle/pS1RraSNcPdbkBMVA' },
    },
  },
  {
    id: 13,
    featured: false,
    title: 'The Honest Struggles of Being a CPE Student',
    category: 'Reflections',
    tags: ['Student Life', 'Struggles', 'Honesty', 'Growth'],
    date: 'December 2025',
    readTime: '3 min read',
    excerpt: 'Not every post has to be a success story. Sometimes the most honest thing you can write about is what made the journey hard.',
    gradClass: 'grad-5',
    content: {
      intro: 'Computer Engineering is fulfilling, but oh wow, it is genuinely difficult, especially it is not my first choice of program. Sleepless nights, confusing subjects, imposter syndrome, and the constant pressure to perform academically well, everything is exhausting. This post is about the parts nobody puts on their resume.',
      sections: [
        { heading: 'Academic Pressure', body: 'Some semesters felt like survival mode. Juggling hardware labs, software projects, math-heavy subjects, and organizational responsibilities left very little room for rest. There were moments I questioned whether I truly belong to this program.', bullets: ['Back-to-back deadlines', 'Subjects that required completely different mindsets', 'The guilt of resting when others seem to be working'] },
        { heading: 'Finding My Way Through', body: 'What helped was not only motivation, it was making those small steps into a routine. Showing up even when I did not feel inspired. Asking for help when I was stuck. And accepting that struggling does not mean failing.', bullets: [] },
      ],
      takeaways: ['Struggling is part of the process, not a sign that you are in the wrong place.', 'Routine beats motivation every time.', 'Asking for help is a sign of strength, not weakness.'],
      cta: { text: 'Going through something similar?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 14,
    featured: false,
    title: 'What I Wish Were Different: Honest Thoughts on the FAITH COE Department',
    category: 'Reflections',
    tags: ['Education', 'Feedback', 'Improvement', 'FAITH'],
    date: 'October 2025',
    readTime: '3 min read',
    excerpt: 'Do not take me wrong, this is not a complaint, just a mere observation.',
    gradClass: 'grad-4',
    content: {
      intro: 'I have deep respect for the FAITH COE Department and the faculty who shaped my education. That respect is precisely why I want to share honest, constructive feedback on what I feel could be improved for the students who come after me.',
      sections: [
        { heading: 'Areas for Growth', body: 'Some areas where I see room for improvement include more industry-aligned curriculum updates, better access to modern lab equipment, and stronger support systems especially from the faculty, for student mental health during peak academic periods and even outside of them.', bullets: ['Curriculum alignment with current industry tools', 'Access to modern hardware and software tools', 'Mental health support during exam and project seasons', 'More industry exposure through partnerships and guest lectures'] },
        { heading: 'What Already Works', body: 'The slowly but surely dedication of faculty members to show up, we students, would like to request more of this in times of school events. Other than that, the hands-on project-based approach, and the student organization culture are genuine strengths that should be preserved and expanded.', bullets: [] },
      ],
      takeaways: ['Constructive criticism is an act of care, not disrespect.', 'Students who graduate should feed honest observations back into the system.', 'Every institution has room to grow, acknowledging that is healthy.'],
      cta: { text: 'Have similar thoughts?', btnLabel: 'Let us talk', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },

  // ═══════════════════ TIPS ═══════════════════
  {
    id: 15,
    featured: false,
    title: 'The 3 Tools Every CPE Student Should Master Before Graduating',
    category: 'Tips',
    tags: ['Tools', 'Productivity', 'Arduino', 'Python'],
    date: 'January 2026',
    readTime: '3 min read',
    excerpt: 'After years of projects and coursework, these three tools consistently showed up in my most impactful work — and they are free.',
    gradClass: 'grad-4',
    content: {
      intro: 'Computer Engineering is a field that rewards practical skills. Here are the three tools that I believe every CPE student should invest time in mastering early.',
      sections: [
        { heading: '1. Arduino / Microcontroller Programming', body: 'Understanding how to program microcontrollers bridges the gap between software and hardware. Arduino IDE with C++ is the most accessible entry point, and skills transfer directly to ESP32.', bullets: ['Start with Arduino Uno basics', 'Move to ESP32 for IoT projects', 'Understand interrupts and timers — they matter'] },
        { heading: '2. Python for Automation & Data', body: 'Python is the Swiss Army knife of engineering. From automating repetitive tasks to analyzing project data and building quick GUIs with PyQt6, it reduces manual effort across nearly every domain.', bullets: ['PyQt6 for desktop GUIs', 'Pandas for data analysis', 'SQLite + Python for simple databases'] },
        { heading: '3. Multisim for Circuit Simulation', body: 'Before building any physical circuit, simulate it. Multisim lets you catch design errors without burning components, and it builds your intuition for circuit behavior faster than real hardware alone.', bullets: [] },
      ],
      takeaways: ['Tools are not destinations, they are vehicles. Focus on what you are building.', 'Depth in a few tools beats surface-level familiarity with many.', 'The best tool is the one you will actually open and use consistently.'],
      cta: { text: 'Questions about getting started?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 16,
    featured: false,
    title: 'How to Survive First Year as a Computer Engineering Student',
    category: 'Tips',
    tags: ['Freshman', 'Advice', 'Student Life', 'CPE'],
    date: 'September 2025',
    readTime: '2 min read',
    excerpt: 'First year is overwhelming for a reason. Here is the survival guide I wish someone had handed me on day one.',
    gradClass: 'grad-2',
    content: {
      intro: 'First year as a CPE student can feel like drinking from a firehose. New subjects, unfamiliar tools, unfamiliar professors, and the pressure to prove you belong. Here is what I wish I had known from the start.',
      sections: [
        { heading: 'Build Habits, Not Heroics', body: 'Do not try to cram everything the night before. Build consistent study habits early. Even 30 minutes of focused review daily beats a 12-hour panic session before exams.', bullets: ['Create a weekly study schedule', 'Review notes within 24 hours of each lecture', 'Use active recall, not passive re-reading'] },
        { heading: 'Find Your People', body: 'Engineering is collaborative. Find a study group, join an organization, and build relationships with classmates. You will need people to debug with, share notes with, and occasionally vent to.', bullets: ['Join ICPEP.SE or equivalent student orgs', 'Form study groups for difficult subjects', 'Do not isolate — collaboration is a strength'] },
        { heading: 'Ask for Help Early', body: 'The worst thing you can do is silently struggle for weeks. Professors respect students who ask questions. Seniors are always ready to help. The resources are there, use them.', bullets: [] },
      ],
      takeaways: ['Consistency beats intensity in the long run.', 'Your network is as important as your GPA.', 'Asking for help early saves you time and stress later.'],
      cta: { text: 'Starting your CPE journey?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
  {
    id: 19,
    featured: false,
    title: 'Time Management for Engineering Students: What Actually Works',
    category: 'Tips',
    tags: ['Time Management', 'Productivity', 'Student Life'],
    date: 'June 2025',
    readTime: '3 min read',
    excerpt: 'Forget generic tips. Here’s what really helped me as a CPE student balancing school, org work, and projects.',
    gradClass: 'grad-5',
    content: {
      intro: 'Time management advice is everywhere, but most of it doesn’t fit the life of an engineering student juggling code, exams, and events. Here’s what actually works.',
      sections: [
        { heading: 'Prioritize Ruthlessly', body: 'Not all tasks matter equally. Focus on the courses that make the biggest difference and do those first. The rest can wait or be shared.', bullets: ['Use urgent vs. important', 'Say no to low-impact commitments', 'Batch similar tasks together'] },
        { heading: 'Time Block, Do Not To-Do List', body: 'A to-do list tells you what to do but not when. Time blocking assigns specific hours to specific tasks. It forces you to be realistic about what fits in a day.', bullets: ['Block study, project, and rest time', 'Include buffer time for unexpected issues', 'Protect your peak focus hours'] },
      ],
      takeaways: ['Saying no is a productivity skill.', 'Time blocking beats to-do lists for engineering workloads.', 'Rest is productive, schedule it intentionally.'],
      cta: { text: 'Struggling with time management?', btnLabel: 'Reach Out', btnHref: 'https://www.facebook.com/alessandra.abuque' },
    },
  },
];

const CATEGORIES = ['All', 'Projects', 'Competitions', 'Seminars', 'Reflections', 'Tips'];

/* ── COVER VISUAL ── */
function CoverVisual({ gradClass, label }) {
  return (
    <div className={`blog-cover-gradient ${gradClass}`} style={{ width: '100%', height: '100%' }}>
      <span className="blog-cover-cat-badge">{label}</span>
    </div>
  );
}

/* ── POST INSIGHT DASHBOARD ── */
function PostDashboard({ category, tags, readTime }) {
  const isTech = ['Projects', 'Tips'].includes(category);
  const techLevel = isTech ? '85%' : '30%';
  const reflectLevel = isTech ? '40%' : '90%';

  return (
    <div className="blog-post-dashboard">
      <div className="dashboard-item">
        <span className="dashboard-label">Read Time</span>
        <span className="dashboard-value">{readTime}</span>
      </div>
      <div className="dashboard-item">
        <span className="dashboard-label">Focus Area</span>
        <div className="vibe-meter">
          <div className="vibe-bar">
            <span className="vibe-name">Technical</span>
            <div className="vibe-progress"><div style={{ width: techLevel }} /></div>
          </div>
          <div className="vibe-bar">
            <span className="vibe-name">Reflection</span>
            <div className="vibe-progress"><div style={{ width: reflectLevel }} /></div>
          </div>
        </div>
      </div>
      <div className="dashboard-item">
        <span className="dashboard-label">Keywords</span>
        <div className="dashboard-tags">
          {tags.slice(0, 2).map(t => <span key={t}>#{t}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── READING PROGRESS BAR ── */
function ReadingProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return <div className="blog-progress-bar" style={{ width: `${progress}%` }} />;
}

/* ── INDIVIDUAL POST ── */
function BlogPost({ post, onBack, onGoHome }) {
  return (
    <div className="blog-article-page">
      <button className="blog-article-back" onClick={onBack}>← Back to Blog</button>

      <div className="blog-article-header">
        <div className="blog-article-cat-row">
          <span className="blog-article-cat">{post.category}</span>
          <span className="blog-article-date">{post.date}</span>
          <span className="blog-article-read-time">· {post.readTime}</span>
        </div>
        <h1 className="blog-article-title">{post.title}</h1>
        <div className="blog-article-tags">
          {post.tags.map(t => <span className="blog-tag" key={t}>{t}</span>)}
        </div>
      </div>

      <div className="blog-article-body">
        <ReadingProgress />

        <PostDashboard
          category={post.category}
          tags={post.tags}
          readTime={post.readTime}
        />

        {/* Intro paragraph */}
        <div className="blog-article-intro">
          <span className="drop-cap">{post.content.intro.charAt(0)}</span>
          {post.content.intro.slice(1)}
        </div>

        {/* Each content section */}
        {post.content.sections.map((sec, i) => (
          <div key={i} className="blog-article-section">
            <h2 className="blog-article-section-heading">{sec.heading}</h2>
            <p>{sec.body}</p>
            {sec.bullets.length > 0 && (
              <div className="blog-bullet-box">
                <ul>{sec.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            )}
          </div>
        ))}

        <div className="blog-takeaways-box">
          <p className="blog-takeaways-label">Key Takeaways</p>
          <ul>{post.content.takeaways.map(t => <li key={t}>{t}</li>)}</ul>
        </div>

        <div className="blog-article-cta">
          <p className="blog-article-cta-text">{post.content.cta.text}</p>
          {post.content.cta.btnHref === 'home' ? (
            <button className="blog-article-cta-btn" onClick={onGoHome}>
              {post.content.cta.btnLabel} <span>→</span>
            </button>
          ) : (
            <a href={post.content.cta.btnHref} target="_blank" rel="noopener noreferrer" className="blog-article-cta-btn">
              {post.content.cta.btnLabel} <span>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


/* ── BLOG LANDING PAGE ── */
function Blog({ onBack }) {
  const [activePost, setActivePost] = useState(null);
  const [activeCategory, setCategory] = useState('All');
  const [searchQuery, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'timeline'
  const [darkMode, setDarkMode] = useState(false);

  // Scroll to top when post changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePost]);

  const featured = POSTS.find(p => p.featured);

  const filtered = useMemo(() => {
    return POSTS.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  if (activePost) {
    return (
      <div className={`blog-page${darkMode ? ' dark-mode' : ''}`}>
        <BlogPost
          post={activePost}
          onBack={() => setActivePost(null)}
          onGoHome={onBack}
        />
      </div>
    );
  }

  return (
    <div className={`blog-page${darkMode ? ' dark-mode' : ''}`}>
      <button className="blog-back-btn" onClick={onBack}>
        ← Back
      </button>

      {/* ── HERO ── */}
      <div className="blog-hero">
        <div className="blog-hero-shimmer" />
        <button className="blog-theme-toggle" onClick={() => setDarkMode(d => !d)}>
          {darkMode ? '☀ Light' : '☾ Dark'}
        </button>
        <p className="blog-hero-eyebrow">insights & reflections</p>
        <h1 className="blog-hero-title">My Engineering Journey <em>&amp; Insights</em></h1>
        <p className="blog-hero-intro">
          Here I share my experiences, lessons, and thoughts on engineering, technology, and student life.
        </p>
      </div>

      {/* ── TOOLBAR ── */}
      <div className="blog-toolbar">
        {/* Search */}
        <div className="blog-search-wrap">
          <span className="blog-search-icon">🔍</span>
          <input
            className="blog-search-input"
            type="text"
            placeholder="Search posts, tags…"
            value={searchQuery}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="blog-filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`blog-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="blog-view-btns">
          <button className={`blog-view-btn${viewMode === 'grid' ? ' active' : ''}`} onClick={() => setViewMode('grid')} title="Grid view">⊞</button>
          <button className={`blog-view-btn${viewMode === 'timeline' ? ' active' : ''}`} onClick={() => setViewMode('timeline')} title="Timeline view">≡</button>
        </div>
      </div>

      {/* ── FEATURED POST ── */}
      {featured && activeCategory === 'All' && !searchQuery && (
        <div className="blog-featured-wrap">
          <p className="blog-featured-label">Featured Post</p>
          <div className="blog-featured-card">
            <div className="blog-featured-cover">
              <CoverVisual gradClass={featured.gradClass} label={featured.category} />
            </div>
            <div className="blog-featured-content">
              <div className="blog-featured-meta">
                <span>{featured.date}</span>
                <span className="blog-featured-meta-dot">●</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-excerpt">{featured.excerpt}</p>
              <div className="blog-featured-tags">
                {featured.tags.map(t => <span className="blog-tag" key={t}>{t}</span>)}
              </div>
              <button className="blog-read-btn" onClick={() => setActivePost(featured)}>
                Read Post <span className="blog-read-btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── POSTS ── */}
      <div className="blog-posts-section">
        <div className="blog-posts-header">
          <p className="blog-posts-count">{filtered.length} post{filtered.length !== 1 ? 's' : ''}</p>
        </div>

        {filtered.length === 0 ? (
          <div className="blog-empty">No posts match your search. Try a different keyword or category.</div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="blog-grid">
            {filtered.map(post => (
              <PostCard key={post.id} post={post} onClick={() => setActivePost(post)} />
            ))}
          </div>
        ) : (
          /* TIMELINE VIEW */
          <div className="blog-timeline">
            {filtered.map((post, i) => {
              const prevPost = filtered[i - 1];
              const showYear = !prevPost || prevPost.date.split(' ')[1] !== post.date.split(' ')[1];
              return (
                <div className="blog-timeline-item" key={post.id}>
                  {showYear && (
                    <div className="blog-timeline-year-marker">{post.date.split(' ')[1]}</div>
                  )}
                  <div className="blog-timeline-dot" />
                  <PostCard post={post} onClick={() => setActivePost(post)} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── POST CARD ── */
function PostCard({ post, onClick }) {
  return (
    <div className="blog-post-card" onClick={onClick}>
      <div className="blog-post-card-cover">
        <CoverVisual gradClass={post.gradClass} label={post.category} />
      </div>
      <div className="blog-post-card-body">
        <div className="blog-post-card-meta">
          <span>{post.category}</span>
          <span className="blog-post-card-meta-dot">●</span>
          <span>{post.date}</span>
          <span className="blog-post-card-meta-dot">●</span>
          <span>{post.readTime}</span>
        </div>
        <p className="blog-post-card-title">{post.title}</p>
        <p className="blog-post-card-excerpt">{post.excerpt}</p>
        <div className="blog-post-card-footer">
          <div className="blog-post-card-tags">
            {post.tags.slice(0, 3).map(t => <span className="blog-tag" key={t}>{t}</span>)}
          </div>
          <button className="blog-post-read-link">Read more →</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
