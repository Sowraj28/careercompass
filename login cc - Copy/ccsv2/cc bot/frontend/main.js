// Function to handle user input
function handleUserInput() {
  const userInput = document.getElementById("user-input").value;
  if (userInput) {
    addMessage(userInput, "user");
    fetchBotResponse(userInput);
    document.getElementById("user-input").value = "";
  }
}

// Function to display messages
function addMessage(message, sender) {
  const messages = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    sender === "user" ? "user-message" : "bot-message"
  );
  messageDiv.textContent = message;
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight; // Auto-scroll
}

// Function to fetch bot response or return predefined data
async function fetchBotResponse(query) {
  // Convert query to lowercase for case-insensitive matching
  const lowerCaseQuery = query.toLowerCase();

  // Predefined responses using if-else statements
  let botResponse;
  if (lowerCaseQuery.includes("engineering")) {
    botResponse =
      "Engineering offers fields like mechanical, civil, electrical, and software engineering. It's ideal if you enjoy problem-solving and technical challenges.";
  } else if (lowerCaseQuery.includes("business")) {
    botResponse =
      "Business careers include roles in finance, marketing, and management. Business degrees are versatile and open doors in many industries.";
  } else if (lowerCaseQuery.includes("medicine")) {
    botResponse =
      "Medicine is a rewarding field that includes careers like doctor, nurse, and therapist. It requires dedication and strong interpersonal skills.";
  } else if (lowerCaseQuery.includes("arts")) {
    botResponse =
      "The arts field covers careers in design, music, visual arts, and more. It’s suited for creative individuals with a passion for expression.";
  } else if (
    lowerCaseQuery.includes("technology") ||
    lowerCaseQuery.includes("tech")
  ) {
    botResponse =
      "Technology careers include software development, data science, cybersecurity, and AI. This field is rapidly growing and offers many opportunities.";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("nice")) {
    botResponse = "Thank you! my dear friend have A great career! ";
  } else if (lowerCaseQuery.includes("no")) {
    botResponse = "Thank you! my dear friend have A great career! ";
  } else if (
    lowerCaseQuery.includes("what should i do to begin a career in writing?")
  ) {
    botResponse =
      "To get started in writing, you can work on building a portfolio, maybe through a personal blog or freelance assignments. Exploring niches like copywriting, journalism, or technical writing can also be helpful. Do you have a particular area of writing in mind?";
  } else if (
    lowerCaseQuery.includes("how do i start a career in digital marketing?")
  ) {
    botResponse =
      "To start in digital marketing, consider learning SEO, social media management, and content marketing. You can also work on building a portfolio with freelance projects or internships. Would you like to focus on social media or content creation?";
  } else if (
    lowerCaseQuery.includes("what challenges do artists face in their careers?")
  ) {
    botResponse =
      "Artists often face challenges such as irregular income, finding clients, and competition. However, the field is rewarding for those who are passionate and committed. Are you interested in pursuing art as a full-time career?";
  } else if (
    lowerCaseQuery.includes("what are the challenges in the healthcare field?")
  ) {
    botResponse =
      "Healthcare professionals face challenges like long hours, emotional demands, and dealing with critical situations. However, it's also one of the most rewarding fields. Do you feel prepared for the challenges of working with patients?";
  } else if (lowerCaseQuery.includes("is sustainability a growing field?")) {
    botResponse =
      "Yes, sustainability is growing rapidly. Roles in environmental science, renewable energy, and sustainable business practices are in demand. Many companies are creating sustainability departments to reduce their carbon footprint. Does working in sustainability interest you?";
  } else if (lowerCaseQuery.includes("what industries are adopting ai?")) {
    botResponse =
      "AI is being adopted in healthcare, finance, retail, and even manufacturing. It’s used for predictive analytics, customer service, and automation. If you’re interested in AI, data science or machine learning could be a great path. Do any of these industries interest you?";
  } else if (
    lowerCaseQuery.includes(
      "do i need a master's degree to work in psychology?"
    )
  ) {
    botResponse =
      "For many psychology roles, such as counseling and clinical psychology, a master’s degree is required. Some roles, like school counseling, may only need a bachelor’s degree plus certification. Are you interested in clinical practice or research?";
  } else if (
    lowerCaseQuery.includes(
      "what certifications are useful for a career in cybersecurity?"
    )
  ) {
    botResponse =
      "In cybersecurity, certifications like CompTIA Security+, Certified Ethical Hacker (CEH), and Certified Information Systems Security Professional (CISSP) are highly valued. These can give you a competitive edge. Are you interested in ethical hacking or network security?";
  } else if (
    lowerCaseQuery.includes("can i make a good salary in a creative field?")
  ) {
    botResponse =
      "Yes, fields like UX design, animation, and advertising offer competitive salaries, especially for those with experience or specialized skills. Freelancers can also command high rates with the right portfolio. Do you have a particular creative field in mind?";
  } else if (
    lowerCaseQuery.includes("what are the average salaries for data analysts?")
  ) {
    botResponse =
      "Data analysts’ salaries vary by experience and location, but entry-level positions typically start around $50,000 to $65,000, with opportunities to earn more as you gain skills in data visualization and analytics. Are you interested in pursuing data science further?";
  } else if (
    lowerCaseQuery.includes("what does a social worker do day-to-day?")
  ) {
    botResponse =
      "Social workers help individuals cope with challenges, connect them to resources, and advocate for their well-being. This could involve counseling, case management, or community outreach. It’s a rewarding but emotionally demanding job. Are you interested in supporting others?";
  } else if (
    lowerCaseQuery.includes(
      "what does a day in the life of a software developer look like?"
    )
  ) {
    botResponse =
      "Software developers typically spend their days coding, debugging, and collaborating with other team members to create software solutions. They often attend meetings to discuss projects and work on developing new features. Does this kind of work environment appeal to you?";
  } else if (
    lowerCaseQuery.includes(
      "how can i switch to a tech career without a tech degree?"
    )
  ) {
    botResponse =
      "You can enter tech through self-study or bootcamps, especially for roles like web development, data analysis, and UX design. Building a portfolio and gaining certifications can also boost your profile. Does a specific area of tech interest you?";
  } else if (
    lowerCaseQuery.includes("how can i advance in a marketing career?")
  ) {
    botResponse =
      "Advancing in marketing typically involves developing a range of skills, including digital marketing, data analysis, and campaign management. Working on larger projects and demonstrating results can lead to higher positions. Are you interested in digital marketing or traditional marketing?";
  } else if (
    lowerCaseQuery.includes(
      "what are some fast-growing fields i should consider?"
    )
  ) {
    botResponse =
      "Technology, healthcare, and renewable energy are fast-growing sectors. Specifically, roles in data science, AI, and physical therapy are experiencing rapid growth. Are you interested in any of these high-demand fields?";
  } else if (lowerCaseQuery.includes("which jobs involve a lot of travel?")) {
    botResponse =
      "Careers in consulting, sales, journalism, and event management often involve travel. Some roles in international relations and environmental science also require fieldwork. Does the idea of travel excite you?";
  } else if (
    lowerCaseQuery.includes("what careers allow me to work remotely?")
  ) {
    botResponse =
      "Careers in software development, writing, digital marketing, and data analysis often offer remote options. If you value flexibility, freelancing is also possible in many fields. Do you enjoy working independently or in a team setting?";
  } else if (
    lowerCaseQuery.includes("can i have a creative job that is also stable?")
  ) {
    botResponse =
      "Yes! Fields like marketing, graphic design, architecture, and UX/UI design blend creativity with stability, especially as companies recognize the value of strong design and branding. Are you more interested in digital design or hands-on creative work?";
  } else if (
    lowerCaseQuery.includes("what are some careers that are very fulfilling?")
  ) {
    botResponse =
      "Fulfilling careers are often found in healthcare, social work, teaching, and the arts. Many people find satisfaction in roles where they can make a difference, such as counseling or community work. Do any of these fields resonate with you?";
  } else if (
    lowerCaseQuery.includes("what career paths are available in engineering?")
  ) {
    botResponse =
      "Engineering has several branches, including mechanical, civil, electrical, and software engineering. Each branch has its own focus. For example, mechanical engineering deals with machines and mechanical systems, while software engineering is focused on coding and software development. Which branch interests you?";
  } else if (lowerCaseQuery.includes("is a career in finance stable?")) {
    botResponse =
      "Yes, finance is generally stable, with roles in banking, accounting, and financial analysis being consistently in demand. However, some finance jobs are sensitive to economic fluctuations, so it's wise to diversify skills. Are you interested in corporate finance or perhaps investment banking?";
  } else if (
    lowerCaseQuery.includes("what careers offer the most job security?")
  ) {
    botResponse =
      "Fields like healthcare (nursing, doctors, medical technicians), education, law enforcement, and IT are known for their stability, as they fulfill essential services and are less likely to be impacted by economic downturns. Are any of these fields of interest to you?";
  } else if (
    lowerCaseQuery.includes(
      "what careers will be in demand in the next 10 years?"
    )
  ) {
    botResponse =
      "Healthcare, technology (like AI and cybersecurity), and renewable energy are fields expected to grow in the next decade. Jobs in data science, mental health, and environmental protection are also on the rise. Are you interested in any of these future-focused fields?";
  } else if (
    lowerCaseQuery.includes("which careers have good work-life balance?")
  ) {
    botResponse =
      "Careers with flexible schedules and good work-life balance can include fields like teaching, data analysis, or design. Freelance careers, such as writing or consulting, also offer flexibility. Is work-life balance a top priority for you?";
  } else if (
    lowerCaseQuery.includes(
      "can i pursue a career in technology without knowing how to code?"
    )
  ) {
    botResponse =
      "Yes! There are many tech roles that don’t require coding, such as project management, product design, technical writing, and user experience (UX) research. These roles still allow you to work in the tech industry. Do any of these sound like a good fit?";
  } else if (
    lowerCaseQuery.includes(
      "what is a good career for someone interested in environmental issues?"
    )
  ) {
    botResponse =
      "If you’re passionate about the environment, you might consider careers in environmental science, sustainability consulting, or renewable energy. Fields like conservation biology and environmental engineering also focus on protecting natural resources. Does any of these areas interest you?";
  } else if (
    lowerCaseQuery.includes("what education is needed to become an architect?")
  ) {
    botResponse =
      "To become an architect, you typically need a degree in architecture and must complete an internship or apprenticeship. After that, you’ll need to pass a licensing exam. Architecture combines creativity with technical skills, so a passion for design is important. Are you interested in the design aspect?";
  } else if (
    lowerCaseQuery.includes(
      "do i need a degree to become a software developer?"
    )
  ) {
    botResponse =
      "While a degree can be helpful, many software developers have become successful with self-taught skills or bootcamps. What matters most are your coding skills, a portfolio of projects, and possibly certification. Are you interested in learning to code?";
  } else if (
    lowerCaseQuery.includes(
      "what jobs are best for people who like to work independently"
    )
  ) {
    botResponse =
      "If you prefer working independently, you might enjoy fields like graphic design, writing, data analysis, or software development. Many of these roles offer remote or freelance opportunities, allowing for more autonomy. Does any of this sound appealing to you?";
  } else if (
    lowerCaseQuery.includes("what careers would suit someone who loves math")
  ) {
    botResponse =
      "If you love math, you might enjoy careers in fields like engineering, finance, data science, or actuarial science. These careers rely heavily on analytical and quantitative skills. Is there a specific industry that appeals to you";
  } else if (
    lowerCaseQuery.includes("is there a lot of demand for psychologists")
  ) {
    botResponse =
      "Yes, psychology is in demand, especially in areas like counseling, clinical psychology, and organizational psychology. Mental health awareness has been growing, leading to an increased need for trained psychologists. Do you have a specific area of psychology in mind?";
  } else if (
    lowerCaseQuery.includes("what are the highest-paying jobs in technology")
  ) {
    botResponse =
      "Some of the highest-paying jobs in technology include software engineering, data science, AI research, and cybersecurity. These fields are in high demand, and salaries can be quite competitive. Are you interested in any of these areas";
  } else if (
    lowerCaseQuery.includes(
      "what skills are important for a career in art and design?"
    )
  ) {
    botResponse =
      "Art and design careers rely on creativity, visual design skills, and sometimes knowledge of software like Adobe Photoshop or Illustrator. Strong communication skills are also helpful when working with clients. Are you more interested in digital design or traditional art forms?";
  } else if (
    lowerCaseQuery.includes(
      "what subjects should i focus on if i want to go into medicine?"
    )
  ) {
    botResponse =
      "To pursue a career in medicine, it’s essential to focus on biology, chemistry, and physics. Strong grades in these subjects are usually needed to get into medical school. Medical studies also require empathy, patience, and strong communication skills. Are you passionate about science and working with people?";
  } else if (
    lowerCaseQuery.includes(
      "what skills do i need for a career in data science?"
    )
  ) {
    botResponse =
      "Data science requires strong analytical skills, knowledge of programming languages like Python or R, and an understanding of statistics. Good communication skills are also helpful to present data findings clearly. Do you already have experience with any of these skills?";
  } else if (
    lowerCaseQuery.includes(
      "what are the best careers for people who like helping others?"
    )
  ) {
    botResponse =
      "If you enjoy helping people, you might look into healthcare (like nursing or therapy), social work, or teaching. Careers in counseling, such as a career counselor or psychologist, also involve guiding and supporting others. What are your thoughts on these fields?";
  } else if (lowerCaseQuery.includes("what can i do with a business degree?")) {
    botResponse =
      "A business degree opens up various opportunities like management, finance, marketing, and entrepreneurship. If you enjoy working with numbers, finance might suit you. If you’re more interested in creative campaigns, you could look into marketing. Do any of these fields sound interesting to you";
  } else if (lowerCaseQuery.includes("engineering")) {
    botResponse =
      "Engineers design, develop, and test products and structures, covering fields such as mechanical, civil, electrical, and software engineering. This career is ideal for students interested in mathematics, physics, and problem-solving";
  } else if (lowerCaseQuery.includes("healthcare")) {
    botResponse =
      "Medicine offers careers like doctors, nurses, pharmacists, and therapists. These roles require strong science skills, empathy, and dedication to helping people and improving their well-being";
  } else if (lowerCaseQuery.includes("business and management")) {
    botResponse =
      "Business careers span areas like finance, marketing, human resources, and entrepreneurship. Business professionals handle management, strategy, and growth in various industries. It’s ideal for students interested in leadership and economic trends";
  } else if (lowerCaseQuery.includes("law")) {
    botResponse =
      " Law involves careers such as lawyers, judges, and legal advisors. Professionals in law advise on legal issues, represent clients, and interpret legislation. This path requires analytical skills, strong communication, and attention to detail";
  } else if (lowerCaseQuery.includes("it")) {
    botResponse =
      " Careers in IT and computer science include software development, data science, cybersecurity, and web development. This field is perfect for students interested in programming, data, and innovative technology solutions";
  } else if (lowerCaseQuery.includes(" literature ")) {
    botResponse =
      "Arts and humanities cover creative fields like literature, history, philosophy, and visual arts. Career paths include writer, artist, historian, curator, and academic roles. This is well-suited for students interested in culture, creativity, and critical thinking";
  } else if (lowerCaseQuery.includes("social sciences")) {
    botResponse =
      "Social sciences focus on understanding human behavior, societies, and cultures. Careers include psychologist, social worker, anthropologist, and sociologist. This field attracts students interested in helping people and understanding social dynamics";
  } else if (lowerCaseQuery.includes("journalism and media")) {
    botResponse =
      "This field covers roles in writing, broadcasting, film, and photography. Journalists, editors, filmmakers, and photographers work to inform, entertain, and document events. It’s ideal for students with strong communication skills and creativity";
  } else if (lowerCaseQuery.includes("design (graphic, fashion, interior)")) {
    botResponse =
      "Designers create visually appealing and functional spaces, products, or images. This includes careers in graphic design, fashion, and interior design. These roles are suited to creative students with an eye for detail";
  } else if (lowerCaseQuery.includes("education and teaching")) {
    botResponse =
      " Educators teach and mentor students in various subjects. This career path includes roles like teacher, professor, and educational consultant. Teaching suits those who are passionate about learning and helping others succeed academically";
  } else if (lowerCaseQuery.includes("finance and accounting")) {
    botResponse =
      " Careers in finance involve managing money and investments, including roles like financial analyst, accountant, and auditor. Students who enjoy mathematics and analytical tasks may find this path rewarding";
  } else if (
    lowerCaseQuery.includes("environmental science and sustainability")
  ) {
    botResponse =
      "Environmental scientists and sustainability experts work to protect the environment and promote sustainable practices. Careers include conservationist, environmental consultant, and ecologist. It’s ideal for students passionate about the environment and sustainability";
  } else if (lowerCaseQuery.includes("agriculture and food science")) {
    botResponse =
      " This field involves working with food production, crop management, and nutrition. Careers include agricultural scientist, food technologist, and farm manager. It suits students interested in biology and food systems";
  } else if (lowerCaseQuery.includes("architecture and urban planning")) {
    botResponse =
      " Architects and urban planners design buildings and cities, balancing functionality, aesthetics, and sustainability. This career path is ideal for students with strong visualization skills and an interest in design and spatial planning";
  } else if (lowerCaseQuery.includes("tourism")) {
    botResponse =
      "This field includes roles in hotel management, event planning, travel consultancy, and more. Careers in hospitality require interpersonal skills and are ideal for those interested in customer service and travel";
  } else if (lowerCaseQuery.includes("aviation")) {
    botResponse =
      "Careers in aviation include pilot, air traffic controller, and aerospace engineer. This field requires specific training and is suited for students interested in flight, navigation, and the mechanics of aircraft";
  } else if (lowerCaseQuery.includes("science and international relations")) {
    botResponse =
      "This field includes careers in public policy, diplomacy, and government roles. It’s ideal for students interested in global affairs, politics, and advocacy";
  } else if (lowerCaseQuery.includes("sports")) {
    botResponse =
      "  Careers in sports include athlete, coach, personal trainer, and sports therapist. This path is suitable for those with a strong interest in fitness, athletics, and promoting a healthy lifestyle";
  } else if (lowerCaseQuery.includes("trade and skilled vocations")) {
    botResponse =
      "Skilled trades cover practical jobs like electrician, plumber, carpenter, and mechanic. These careers require specialized skills and training but often offer stable job prospects and good earnings";
  } else if (lowerCaseQuery.includes("pharmacy")) {
    botResponse =
      "Pharmacists and pharmacy technicians dispense medications, provide drug information, and advise on healthcare solutions. This career is ideal for students interested in chemistry and patient care";
  } else if (lowerCaseQuery.includes("life sciences and bio")) {
    botResponse =
      "Biotechnology professionals work in genetics, microbiology, and lab research. This career suits students with strong science skills, especially in biology and chemistry, interested in scientific innovation";
  } else if (lowerCaseQuery.includes(" digital information ")) {
    botResponse =
      "Cybersecurity experts protect digital information and systems from threats. This is a growing field within IT, suitable for those with a keen interest in technology and security";
  } else if (lowerCaseQuery.includes("physician assistant (pa)")) {
    botResponse =
      " PAs work under doctors to examine, diagnose, and treat patients. They perform many of the same duties as doctors but have shorter training periods. It’s a good choice for students interested in medicine but wanting a quicker path to patient care ";
  } else if (lowerCaseQuery.includes("physical therapist")) {
    botResponse =
      " Physical therapists help patients recover from injuries and manage physical disabilities through exercise, massage, and other therapies. This role is ideal for those interested in rehabilitation and patient-centered care";
  } else if (lowerCaseQuery.includes("sowraj girlfriend name")) {
    botResponse = "sowraj girlfriend name is nandhana";
  } else if (lowerCaseQuery.includes("speech-language pathologist")) {
    botResponse =
      "These professionals help patients with speech, language, and swallowing disorders. This role is suitable for those interested in communication and helping people overcome challenges in speaking and understanding";
  } else if (lowerCaseQuery.includes("Meteorologist")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hello")) {
    botResponse =
      "Hello! How can I assist you with your career guidance questions today?";
  } else if (lowerCaseQuery.includes("hi")) {
    botResponse =
      "Hi! How can I assist you with your career guidance questions today?";
  } else {
    botResponse = "Sorry, I couldn't retrieve correct information right now.";
  }

  // Display the bot response
  addMessage(botResponse, "bot");
}
