const experiences = [
    {
        title: "Associate Backend Engineer",
        duration: "Nov 2024 - present",
        company: "Rev9 Solutions",
        side: "right"
    },
    {
        title: "Junior Backend Engineer",
        duration: "Aug 2024 - Nov 2024",
        company: "Rev9 Solutions",
        side: "left"
    },
    {
        title: "Backend Intern",
        duration: "Mar 2024 - Jul 2024",
        company: "Rev9 Solutions",
        side: "right"
    },
    {
        title: "Freelance Web developer",
        duration: "Nov 2021 - Dec 2023",
        company: "Rev9 Solutions",
        side: "left"
    }
];

const timeline = document.getElementById("experience-timeline");

experiences.forEach(experience => {
    const isRight = experience.side === "right";
    const wrapper = document.createElement("div");
    wrapper.className = `mb-8 flex justify-center gap-10 items-center w-full ${isRight ? 'right-timeline' : 'left-timeline'} ${isRight ? '' : 'flex-row-reverse'}`;

    wrapper.innerHTML = `
        <div class="order-1 w-5/12"></div>
        <div class="z-20 flex items-center order-1 bg-sky-500 shadow-xl w-6 h-6 rounded-full"></div>
        <div class="order-1 w-5/12 ${isRight ? 'pl-2 text-left' : 'text-right'} py-4">
            <h3 class="mb-1 font-semibold text-xl">${experience.title}</h3>
            <span class="text-xs block mb-2 uppercase">${experience.duration}</span>
            <span class="block text-base text-sky-500 font-medium">${experience.company}</span>
        </div>
    `;

    timeline.appendChild(wrapper);
});
