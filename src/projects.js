import React, { useState } from 'react';


const PROJECTS_DATA = [
    {
        id: 1,
        title: "Vynex: Smart Assistive Obstacle Detection System",
        theme: "Hardware",
        problem: "Visually impaired individuals face mobility challenges due to undetected obstacles, risking safety and independence.",
        solution: "Designed a chest-mounted ESP32-CAM system with computer vision algorithms, noise filtering, and real-time detection to identify obstacles and assist navigation.",
        outcome: "Provided a functional prototype that enhances mobility and safety for visually impaired users, with potential for refinement and deployment in assistive technologies.",
        tech: ["ESP32-CAM", "Computer Vision", "Digital Signal Processing", "Obstacle Detection Algorithms"],
        badge: "CPE-DSP",
        category: "Hardware",
        image: "/image/vynex.jpg"
    },
    {
        id: 2,
        title: "Emotion Through Sound: Facial Expression Recognition Through Music Melodies/Sound Effects Representation for Visually Impaired Individuals",
        theme: "AI",
        problem: "Visually impaired individuals struggle to recognize facial emotions, limiting communication and social interaction.",
        solution: "Built a Python-based system using DeepFace, OpenCV, MediaPipe, and Pygame to detect facial expressions and translate them into corresponding music melodies or sound effects.",
        outcome: "Enabled recognition of seven core emotions with audio feedback, fostering inclusivity and better interpersonal communication, though limited to single-person detection and a small dataset.",
        tech: ["Python", "OpenCV", "DeepFace", "MediaPipe", "Pygame", "Facial Emotion Recognition Dataset"],
        badge: "CPE-CP2",
        category: "AI",
        image: "/image/emotion.png"
    },
    {
        id: 3,
        title: "VertiSafe: ESP32-Enabled Elevator Control Prototype with Sensor-Based Safety Mechanisms",
        theme: "Hardware",
        problem: "Traditional elevators rely on basic call functions, limited safety indicators, and lack sensor-based intelligence. Breakdowns often trap passengers, with poor monitoring and delayed emergency response.",
        solution: "Developed a prototype using ESP32 microcontroller, modular C++ framework, and IoT-enabled sensors. Integrated SCAN scheduling algorithm, mechanical door locking, dual emergency activation (manual + automatic), and real-time GUI monitoring.",
        outcome: "Enhanced passenger safety and reliability through sensor-driven fault detection, faster emergency response, and transparent system monitoring. Established a scalable foundation for future upgrades including PID control, vibration-based fault detection, and full emergency automation.",
        tech: ["ESP32", "Ultrasonic Sensor", "MPU-6050 Accelerometer", "ACS712 Current Sensor", "WebSocket GUI", "C++"],
        badge: "ECE-FCS",
        category: "Hardware",
        image: "/image/vertisafe.jpg"
    },
    {
        id: 4,
        title: "Conversion of Number Systems: Binary and Hexadecimal",
        theme: "Software",
        problem: "Converting between binary and hexadecimal systems is complex for beginners, often requiring manual computation that is error-prone and difficult to understand.",
        solution: "Designed a C program with algorithms, flowcharts, and a menu-driven interface to automate conversions between binary, hexadecimal, decimal, and octal systems.",
        outcome: "Provided an intuitive tool that simplifies number system conversions, improves computational literacy, and helps learners understand fundamental computer representations more naturally.",
        tech: ["C Programming", "Algorithms", "Flowcharts"],
        badge: "CPE-CP1",
        category: "Software",
        image: "/image/conversion.png"
    },
    {
        id: 5,
        title: "System Stability Checker Using Z-Transform Analysis",
        theme: "Software",
        problem: "Manual stability analysis of discrete-time systems using Z-transform is time-consuming and error-prone, limiting accuracy in educational and analytical contexts.",
        solution: "Built a Python application that automates stability checks by computing poles of transfer functions, plotting them on the Z-plane, and classifying systems as stable, marginally stable, or unstable.",
        outcome: "Achieved reliable stability evaluation with real-time pole-zero visualization, enhancing learning and analysis in digital signal processing and control systems, though limited by floating-point errors in higher-order polynomials.",
        tech: ["Python", "NumPy", "SciPy", "Matplotlib", "Z-Transform Analysis"],
        badge: "CPE-MAT",
        category: "Software",
        image: "/image/ztrans.png"
    },
    {
        id: 6,
        title: "Community Service Record System",
        theme: "Social Impact",
        problem: "Managing student community service records and event participation was inefficient, relying on manual tracking that made updates, deletions, and reporting prone to errors.",
        solution: "Developed a Python-based GUI application using object-oriented programming principles (inheritance, encapsulation, polymorphism, abstraction) with CRUD operations connected to SQLite databases for students and events.",
        outcome: "Delivered a functional system where admins can log in, manage student records and events, and perform create, read, update, and delete operations securely and efficiently, improving data organization and accessibility.",
        tech: ["Python", "PyQt", "SQLite", "Object-Oriented Programming"],
        badge: "CPE-OOP",
        category: "Social Impact",
        image: "/image/community.png"
    },
    {
        id: 7,
        title: "Graduate Tracer Study of Computer Engineering Graduates of FAITH Colleges",
        theme: "Social Impact",
        problem: "Institutions often lack systematic data on alumni career paths, making it difficult to assess curriculum relevance and program effectiveness.",
        solution: "Conducted a mixed-method tracer study using surveys and interviews to evaluate employment status, curriculum alignment, and skill applicability of recent graduates.",
        outcome: "Provided insights into employability, industry-required skills, and recommendations for curriculum enhancement, strengthening alumni engagement and institutional accountability.",
        tech: ["Survey Tools (Google Forms)", "Statistical Analysis", "Mixed-Method Research"],
        badge: "CPE-DIS",
        category: "Social Impact",
        image: "/image/tracer.png"
    },
    {
        id: 8,
        title: "Digital Password Lock with Immediate Error Detection",
        theme: "Hardware",
        problem: "Conventional lock-and-key systems are vulnerable to duplication, loss, and unauthorized access, lacking real-time error detection and recovery mechanisms.",
        solution: "Built an FPGA-based digital password lock using a Moore FSM architecture, with immediate mismatch detection, progressive penalty feedback, one-time unlock token recovery, and dynamic password reprogramming.",
        outcome: " Successfully implemented on an Altera DE0-CV FPGA board, providing secure, glitch-free authentication with lockout and recovery features, demonstrating hardware-level reliability in access control.",
        tech: ["FPGA (Altera DE0-CV)", "Verilog HDL", "Moore FSM", "Quartus II", "LED Indicators", "7-Segment Displays"],
        badge: "CPE-MIC2",
        category: "Hardware",
        image: "/image/password.png"
    },
    {
        id: 9,
        title: "Design and Verification of a 3-Floor Elevator Control System Using Coverage-Driver Verification Technique",
        theme: "Hardware",
        problem: "Traditional verification methods for safety-critical systems like elevators often miss edge cases, risking incomplete validation of finite-state machine designs.",
        solution: "Implemented a Verilog-based elevator controller and verified it using SystemVerilog coverage-driven techniques with constrained-random stimulus, covergroups, and waveform monitoring.",
        outcome: "Achieved 100% functional coverage across floor transitions, movement states, and emergency handling, proving the effectiveness of CDV for reliable embedded system verification.",
        tech: ["Verilog", "SystemVerilog", "Coverage-Driven Verification", "EDA Playground", "Synopsys VCS"],
        badge: "CPE-MIC",
        category: "Hardware",
        image: "/image/coverage.png"
    },
    {
        id: 10,
        title: "Circuit Design and PCB Layout of Two-Digit Decimal Counter Circuit",
        theme: "Hardware",
        problem: "Counting and displaying decimal values in hardware requires precise circuit design and reliable PCB layout, but manual implementations are error-prone and bulky.",
        solution: "Designed a two-digit decimal counter using CD4510 BCD counters, CD4511 BCD-to-7-segment decoders, and a 555 timer for clock generation, then implemented a compact PCB layout with vias and ground pours for stability.",
        outcome: "Produced a functional circuit capable of counting from 00 to 99 with reset and up/down control, successfully simulated and laid out on a PCB for real-world prototyping.",
        tech: ["NI Multisim", "PCB Layout", "555 Timer", "BCD Counters", "BCD-to-7-Segment Decoders", "7-Segment Display", "Altium Designer"],
        badge: "CPE-DES",
        category: "Hardware",
        image: "/image/pcb.png"
    },
    {
        id: 11,
        title: "Embedded Room Occupancy and Lock Management System",
        theme: "Hardware",
        problem: "Traditional lock-and-key mechanisms fail to provide efficient room monitoring and secure access control. They cannot track occupancy, prevent overcrowding, or give real-time feedback, leading to unauthorized usage and poor management.",
        solution: "Developed an Arduino-based embedded system with a finite state machine (LOCKED, UNLOCKED, OCCUPIED). Integrated push-button authentication, servo motor for door actuation, LCD for status display, LEDs and buzzer for audio-visual feedback, and occupancy tracking with lockout after repeated failed attempts.",
        outcome: "Delivered a functional prototype that enhances security and convenience by providing safe access control, occupancy monitoring, instant feedback, and administrative override. The system demonstrates how embedded systems can solve real-world problems in room management.",
        tech: ["Arduino Uno", "Servo Motor", "LED Indicators", "Buzzer", "Push Buttons", "Finite State Machine"],
        badge: "CPE-ES",
        category: "Hardware",
        image: "/image/embedded.png"
    },
    {
        id: 12,
        title: "FPGA-Based Implementation of Fireboy and Watergirl with VGA Display and PS/2 Input on the DE0-CV Board ",
        theme: "Hardware",
        problem: "Implementing interactive games on FPGA hardware is challenging due to the need for real-time sprite rendering, cooperative input handling, and efficient memory/display management. Traditional platforms don’t demonstrate FPGA’s potential for gaming and education.",
        solution: "Designed and implemented the cooperative puzzle-platformer Fireboy and Watergirl on the DE0-CV FPGA board using Verilog HDL. Integrated VGA output for real-time display, PS/2 keyboard input for dual-character control, and hardware modules for sprite rendering and cooperative mechanics.",
        outcome: "Produced a functional FPGA-based game system that showcases both technical FPGA design principles and the educational/social benefits of cooperative gameplay. Demonstrated FPGA’s versatility beyond computation, extending into interactive gaming and teaching digital design concepts.",
        tech: ["FPGA (DE0-CV, Cyclone V)", "Verilog HDL", "VGA Display", "PS/2 Keyboard Input", "Sprite Rendering", "Cooperative Game Design"],
        badge: "CPE-MIC2",
        category: "Hardware",
        image: "/image/fbwg.jpg"
    },
    {
        id: 13,
        title: "Single-Cycle RISC-V Processor: FPGA-Based Design and Verification",
        theme: "Hardware",
        problem: "Proprietary processor architectures limit accessibility and flexibility, while pipelined designs are complex for students to grasp. There is a need for a clear, educational, and low-cost processor model that demonstrates fundamentals without overwhelming learners.",
        solution: "Designed a synthesizable single-cycle RISC-V processor supporting the RV32I instruction set, implemented in Verilog/SystemVerilog and tested using Xilinx ISE. The system integrates core modules (program counter, instruction memory, register file, ALU, data memory, immediate generator, control unit, branch comparator) with combinational control logic and systematic verification.",
        outcome: "Produced a functional FPGA-based processor that executes one instruction per clock cycle, enabling students to visualize and understand processor fundamentals. It serves as both an educational platform and a foundation for future extensions into pipelined or multi-cycle architectures.",
        tech: ["RISC-V ISA", "Verilog/SystemVerilog", "Xilinx ISE", "FPGA", "RV32I Instruction Set", "Simulation & Waveform Analysis"],
        badge: "CPE-MIC",
        category: "Hardware",
        image: "/image/riscv.png"
    }
];

function Projects({ onBack }) {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredProjects = filter === 'All'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === filter || (filter === 'Social Impact' && p.theme === 'Social Impact'));

    const categories = ['All', 'Hardware', 'Software', 'AI', 'Social Impact'];

    return (
        <div className="projects-page">
            <button className="projects-back-btn" onClick={onBack}>
                ← Back
            </button>
            <div className="projects-header">
                <h1>Engineering Projects</h1>
                <p>A collection of hardware prototypes, software systems, and AI solutions designed to solve real-world problems through rigorous engineering.</p>

                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-carousel">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        {project.badge && <span className="project-badge">{project.badge}</span>}
                        <div className="project-theme">{project.theme}</div>

                        {/* ── Image Placeholder ── */}
                        <div
                            className="project-image-placeholder"
                            style={{ cursor: project.image ? 'zoom-in' : 'default' }}
                            onClick={() => project.image && setSelectedImage(project.image)}
                        >
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <span>[ Photo Placeholder ]</span>
                            )}
                        </div>

                        <h2 className="project-title">{project.title}</h2>

                        <div className="project-story">
                            <div className="story-step">
                                <span className="story-label">The Problem</span>
                                <p className="story-text" dangerouslySetInnerHTML={{ __html: project.problem }} />
                            </div>
                            <div className="story-step">
                                <span className="story-label">The Solution</span>
                                <p className="story-text" dangerouslySetInnerHTML={{ __html: project.solution }} />
                            </div>
                            <div className="story-step">
                                <span className="story-label">The Outcome</span>
                                <p className="story-text" dangerouslySetInnerHTML={{ __html: project.outcome }} />
                            </div>
                        </div>

                        <div className="tech-stack">
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Lightbox Modal ── */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="Project Preview" className="lightbox-image" />
                    </div>
                </div>
            )}

        </div>
    );
}

export default Projects;
