  // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Language Toggle
        const languageBtn = document.getElementById('languageBtn');
        let isEnglish = false;
        
        languageBtn.addEventListener('click', () => {
            isEnglish = !isEnglish;
            if (isEnglish) {
                document.documentElement.lang = 'en';
                languageBtn.textContent = 'PT';
                // Here you would typically change all the text content to English
                document.querySelector('.hero h1').textContent = 'Revolutionize Your Financial Management';
                document.querySelector('.hero p').textContent = 'ETRM Accounting is the complete solution for your accounting needs, combining advanced technology with ease of use to optimize your financial processes.';
                document.querySelector('.btn-primary').textContent = 'Start Using';
                document.querySelector('.section-title').textContent = 'About ETRM Accounting';
                document.querySelector('#textosobre').textContent = 'Your simplified and efficient accounting';
                document.querySelector('#textosobre1').textContent = 'The ETRM Accounting, conceived by Tiago Akamine, was developed by specialists in accounting and technology to provide the best financial management experience for businesses of all sizes.';
                document.querySelector('#textosobre2').textContent = 'Our platform integrates all accounting processes in one place, from basic entries to complex tax reports, all with the security and reliability that your company deserves.';
                document.querySelector('#comofunc').textContent = 'How it works';
                document.querySelector('#relatorio').textContent = 'Powerful Reports';
                document.querySelector('#prelatorio').textContent = 'Generate custom reports with just a few clicks.';
                document.querySelector('#seguranca').textContent = 'Maximum Security';
                document.querySelector('#pseguranca').textContent = 'Encrypted data, automatic backups, and compliance with major data protection standards.';
                document.querySelector('#acesso').textContent = 'Multiplatform Access';
                document.querySelector('#pacesso').textContent = 'Access your data from any device, at any time, with our web and mobile application.';
                // Update other text elements as needed...
            } else {
                document.documentElement.lang = 'pt-BR';
                languageBtn.textContent = 'EN';
                // Change back to Portuguese
                document.querySelector('.hero h1').textContent = 'Revolucione sua Gestão Financeira';
                document.querySelector('.hero p').textContent = 'O ETRM Accounting é a solução completa para sua contabilidade, combinando tecnologia avançada com simplicidade de uso para otimizar seus processos financeiros.';
                document.querySelector('.btn-primary').textContent = 'Comece a usar';
                document.querySelector('.section-title').textContent = 'Sobre o ETRM Accounting';
                document.querySelector('#textosobre').textContent = 'Sua contabilidade simplificada e eficiente';
                document.querySelector('#textosobre1').textContent = 'O ETRM Accounting, idealizado por Tiago Akamine foi desenvolvido por especialistas em contabilidade e tecnologia para oferecer a melhor experiência em gestão financeira para empresas de todos os portes.';
                document.querySelector('#textosobre2').textContent = 'Nossa plataforma integra todos os processos contábeis em um único lugar, desde lançamentos básicos até relatórios fiscais complexos, tudo com a segurança e confiabilidade que sua empresa merece.';
                document.querySelector('#comofunc').textContent = 'Como Funciona';
                document.querySelector('#relatorio').textContent = 'Relatórios Poderosos';
                document.querySelector('#prelatorio').textContent = 'Gere relatórios personalizadoscom apenas alguns cliques.';
                document.querySelector('#seguranca').textContent = 'Segurança Máxima';
                document.querySelector('#pseguranca').textContent = 'Dados criptografados, backups automáticos e conformidade com as principais normas de proteção de dados.';
                document.querySelector('#acesso').textContent = 'Acesso Multiplataforma';
                document.querySelector('#pacesso').textContent = 'Acesse seus dados de qualquer dispositivo, a qualquer momento, com nossa aplicação web e mobile.';
                // Update other text elements as needed...
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
        
        // Intersection Observer for fade-in effects
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
        
        // Initialize all fade-in elements as invisible
        document.addEventListener('DOMContentLoaded', () => {
            fadeElements.forEach(el => {
                el.style.opacity = 0;
            });
        });