document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');

  // Add nebulae
  const nebula1 = document.createElement('div');
  nebula1.className = 'nebula nebula1';
  background.appendChild(nebula1);

  const nebula2 = document.createElement('div');
  nebula2.className = 'nebula nebula2';
  background.appendChild(nebula2);

  // Add stars
  const colors = ['white', 'yellow', 'lightblue'];
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() > 0.8 ? 3 : 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.background = colors[Math.floor(Math.random() * colors.length)];
    star.style.animationDelay = `${Math.random() * 5}s`;
    background.appendChild(star);
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Scroll animations
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Contact form submission
  window.sendMessage = function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const response = document.getElementById('form-response');

    if (name && email && message) {
      // Simulate form submission (replace with actual API call if needed)
      response.textContent = 'Tin nhắn của bạn đã được gửi thành công!';
      response.style.color = '#64ffda';
      // Clear form
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      response.textContent = 'Vui lòng điền đầy đủ thông tin.';
      response.style.color = '#ff6b6b';
    }
  };

  // Translation data
  const translations = {
    vi: {
      nav: ["Trang Chủ", "Giới Thiệu", "Kỹ Năng", "Dự Án", "Kinh Nghiệm", "Blog", "Liên Hệ"],
      hero: {
        name: "Nguyễn Kim Tùng",
        desc: "Kỹ Sư DevOps | Kỹ Sư Cloud | Nhà Phát Triển iOS",
        cta: "Liên Hệ Ngay"
      },
      about: {
        title: "Giới Thiệu",
        content: [
          "Xin chào! Tôi là Nguyễn Kim Tùng, một chuyên gia tận tâm trong lĩnh vực DevOps, Cloud Engineering và Phát triển iOS. Tôi đam mê tự động hóa quy trình, quản lý hạ tầng đám mây quy mô lớn và xây dựng các ứng dụng di động thân thiện với người dùng.",
          "Với nền tảng vững chắc về khoa học máy tính và kinh nghiệm thực tiễn với nhiều công nghệ, tôi luôn học hỏi không ngừng để theo kịp xu hướng mới nhất trong ngành.",
          "<strong>Mục tiêu nghề nghiệp:</strong> Tối ưu hóa hiệu suất hệ thống và mang lại giá trị thực tế thông qua các giải pháp công nghệ sáng tạo."
        ]
      },
      skills: {
        title: "Kỹ Năng",
        items: [
          { name: "Docker", level: "Nâng Cao", cert: "Chứng chỉ: Docker Certified Associate" },
          { name: "Kubernetes", level: "Thành Thạo", cert: "Chứng chỉ: Certified Kubernetes Administrator (CKA)" },
          { name: "AWS", level: "Nâng Cao", cert: "Chứng chỉ: AWS Solutions Architect" },
          { name: "Azure", level: "Trung Cấp", cert: "" },
          { name: "Jenkins", level: "Thành Thạo", cert: "" },
          { name: "Git", level: "Nâng Cao", cert: "" },
          { name: "Swift", level: "Thành Thạo", cert: "" },
          { name: "Xcode", level: "Thành Thạo", cert: "" }
        ]
      },
      projects: {
        title: "Dự Án",
        items: [
          {
            name: "ShopGiay - Website Thương Mại Điện Tử",
            desc: "Phát triển một website thương mại điện tử hoàn chỉnh cho cửa hàng giày với các tính năng như danh sách sản phẩm, giỏ hàng và xác thực người dùng.",
            tech: "Công nghệ: HTML, CSS, JavaScript, Node.js",
            role: "Vai trò: Nhà phát triển chính",
            result: "Kết quả: Tăng 30% tương tác người dùng và cải thiện hiệu suất trang.",
            github: "Xem trên GitHub"
          },
          {
            name: "MidTermExample - Ứng Dụng C#",
            desc: "Xây dựng ứng dụng C# để minh họa các khái niệm lập trình như cấu trúc dữ liệu, thuật toán và phát triển giao diện người dùng.",
            tech: "Công nghệ: C#, .NET Framework",
            role: "Vai trò: Nhà phát triển duy nhất",
            result: "Kết quả: Đạt điểm A và nhận phản hồi tích cực từ đồng nghiệp.",
            github: "Xem trên GitHub"
          }
        ]
      },
      experience: {
        title: "Kinh Nghiệm",
        items: [
          {
            job: "Thực Tập Sinh DevOps - Công Ty ABC",
            time: "Thời gian: Tháng 6/2023 - Tháng 8/2023",
            desc: "Hỗ trợ tự động hóa quy trình triển khai bằng Jenkins và Docker. Quản lý tài nguyên AWS và tối ưu hóa chi phí đám mây.",
            result: "Thành tựu: Giảm 20% thời gian triển khai ứng dụng."
          },
          {
            job: "Nhà Phát Triển iOS Tự Do",
            time: "Thời gian: Tháng 1/2024 - Hiện tại",
            desc: "Phát triển và duy trì các ứng dụng iOS cho nhiều khách hàng, tập trung vào trải nghiệm người dùng và tối ưu hóa hiệu suất.",
            result: "Thành tựu: Hoàn thành 5 dự án với đánh giá 5 sao."
          }
        ]
      },
      blog: {
        title: "Blog Ngắn",
        items: [
          {
            title: "Tại Sao DevOps Quan Trọng?",
            desc: "DevOps không chỉ là công cụ, mà còn là văn hóa giúp tăng tốc độ phát triển và cải thiện chất lượng sản phẩm...",
            more: "Đọc thêm"
          },
          {
            title: "Mẹo Tối Ưu Hóa Ứng Dụng iOS",
            desc: "Sử dụng lazy loading và tối ưu hóa tài nguyên có thể tăng hiệu suất ứng dụng lên đến 40%...",
            more: "Đọc thêm"
          }
        ]
      },
      contact: {
        title: "Liên Hệ",
        send: "Gửi Tin Nhắn",
        name: "Tên của bạn",
        email: "Email của bạn",
        message: "Tin nhắn của bạn",
        button: "Gửi"
      },
      footer: "&copy; 2024 Nguyễn Kim Tùng. All rights reserved."
    },
    en: {
      nav: ["Home", "About", "Skills", "Projects", "Experience", "Blog", "Contact"],
      hero: {
        name: "Nguyen Kim Tung",
        desc: "DevOps Engineer | Cloud Engineer | iOS Developer",
        cta: "Contact Now"
      },
      about: {
        title: "About",
        content: [
          "Hello! I'm Nguyen Kim Tung, a dedicated professional in DevOps, Cloud Engineering, and iOS Development. I am passionate about automating processes, managing large-scale cloud infrastructure, and building user-friendly mobile apps.",
          "With a solid background in computer science and hands-on experience with various technologies, I constantly learn to keep up with the latest industry trends.",
          "<strong>Career Objective:</strong> Optimize system performance and deliver real value through innovative technology solutions."
        ]
      },
      skills: {
        title: "Skills",
        items: [
          { name: "Docker", level: "Advanced", cert: "Certificate: Docker Certified Associate" },
          { name: "Kubernetes", level: "Proficient", cert: "Certificate: Certified Kubernetes Administrator (CKA)" },
          { name: "AWS", level: "Advanced", cert: "Certificate: AWS Solutions Architect" },
          { name: "Azure", level: "Intermediate", cert: "" },
          { name: "Jenkins", level: "Proficient", cert: "" },
          { name: "Git", level: "Advanced", cert: "" },
          { name: "Swift", level: "Proficient", cert: "" },
          { name: "Xcode", level: "Proficient", cert: "" }
        ]
      },
      projects: {
        title: "Projects",
        items: [
          {
            name: "ShopGiay - E-commerce Website",
            desc: "Developed a complete e-commerce website for a shoe store with features like product listing, cart, and user authentication.",
            tech: "Tech: HTML, CSS, JavaScript, Node.js",
            role: "Role: Lead Developer",
            result: "Result: Increased user engagement by 30% and improved site performance.",
            github: "View on GitHub"
          },
          {
            name: "MidTermExample - C# Application",
            desc: "Built a C# application to illustrate programming concepts such as data structures, algorithms, and UI development.",
            tech: "Tech: C#, .NET Framework",
            role: "Role: Sole Developer",
            result: "Result: Achieved an A grade and received positive feedback from peers.",
            github: "View on GitHub"
          }
        ]
      },
      experience: {
        title: "Experience",
        items: [
          {
            job: "DevOps Intern - ABC Company",
            time: "Duration: Jun 2023 - Aug 2023",
            desc: "Assisted in automating deployment processes using Jenkins and Docker. Managed AWS resources and optimized cloud costs.",
            result: "Achievement: Reduced deployment time by 20%."
          },
          {
            job: "Freelance iOS Developer",
            time: "Duration: Jan 2024 - Present",
            desc: "Developed and maintained iOS apps for various clients, focusing on user experience and performance optimization.",
            result: "Achievement: Completed 5 projects with 5-star ratings."
          }
        ]
      },
      blog: {
        title: "Short Blog",
        items: [
          {
            title: "Why is DevOps Important?",
            desc: "DevOps is not just about tools, but a culture that accelerates development and improves product quality...",
            more: "Read more"
          },
          {
            title: "Tips to Optimize iOS Apps",
            desc: "Using lazy loading and resource optimization can boost app performance by up to 40%...",
            more: "Read more"
          }
        ]
      },
      contact: {
        title: "Contact",
        send: "Send Message",
        name: "Your name",
        email: "Your email",
        message: "Your message",
        button: "Send"
      },
      footer: "&copy; 2024 Nguyen Kim Tung. All rights reserved."
    }
  };

  // Helper to update text content
  function setText(selector, text, isHTML = false) {
    const el = document.querySelector(selector);
    if (el) {
      if (isHTML) el.innerHTML = text;
      else el.textContent = text;
    }
  }

  // Language switch logic
  window.changeLanguage = function(lang) {
    const t = translations[lang];

    // Nav
    document.querySelectorAll('nav ul li a').forEach((a, i) => {
      a.textContent = t.nav[i];
    });

    // Hero
    setText('#hero .hero-content h1', t.hero.name);
    setText('#hero .hero-content p', t.hero.desc);
    setText('#hero .cta-button', t.hero.cta);

    // About
    setText('#about h2', t.about.title);
    const aboutPs = document.querySelectorAll('#about .about-content div p');
    t.about.content.forEach((txt, i) => {
      if (aboutPs[i]) aboutPs[i].innerHTML = txt;
    });

    // Skills
    setText('#skills h2', t.skills.title);
    document.querySelectorAll('.skills-grid .skill-item').forEach((item, i) => {
      const skill = t.skills.items[i];
      if (!skill) return;
      setText('h3', skill.name, false, item);
      setText('p', skill.level, false, item);
      // Certificate
      const cert = item.querySelector('p em');
      if (cert) cert.textContent = skill.cert;
    });

    // Projects
    setText('#projects h2', t.projects.title);
    document.querySelectorAll('.projects-grid .project-card').forEach((card, i) => {
      const proj = t.projects.items[i];
      if (!proj) return;
      setText('h3', proj.name, false, card);
      const ps = card.querySelectorAll('p');
      if (ps[0]) ps[0].textContent = proj.desc;
      if (ps[1]) ps[1].innerHTML = `<strong>${proj.tech}</strong>`;
      if (ps[2]) ps[2].innerHTML = `<strong>${proj.role}</strong>`;
      if (ps[3]) ps[3].innerHTML = `<strong>${proj.result}</strong>`;
      const a = card.querySelector('a');
      if (a) a.textContent = proj.github;
    });

    // Experience
    setText('#experience h2', t.experience.title);
    document.querySelectorAll('.experience-item').forEach((item, i) => {
      const exp = t.experience.items[i];
      if (!exp) return;
      setText('h3', exp.job, false, item);
      const ps = item.querySelectorAll('p');
      if (ps[0]) ps[0].innerHTML = `<strong>${exp.time}</strong>`;
      if (ps[1]) ps[1].textContent = exp.desc;
      if (ps[2]) ps[2].innerHTML = `<strong>${exp.result}</strong>`;
    });

    // Blog
    setText('#blog h2', t.blog.title);
    document.querySelectorAll('.blog-grid .blog-post').forEach((post, i) => {
      const blog = t.blog.items[i];
      if (!blog) return;
      setText('h3', blog.title, false, post);
      setText('p', blog.desc, false, post);
      const a = post.querySelector('a.read-more');
      if (a) a.textContent = blog.more;
    });

    // Contact
    setText('#contact h2', t.contact.title);
    setText('.contact-form h3', t.contact.send);
    document.getElementById('name').placeholder = t.contact.name;
    document.getElementById('email').placeholder = t.contact.email;
    document.getElementById('message').placeholder = t.contact.message;
    setText('.contact-form button', t.contact.button);

    // Footer
    setText('footer p', t.footer, true);
  };
});