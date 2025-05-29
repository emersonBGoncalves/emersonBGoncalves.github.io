let Pages = {
    en: [
    {
            class: 'Me',
            namespace: 'app\\classes',
            photo: {
                type: 'image',
                value: 'images/foto.png'
            },
            name: {
                type: 'string',
                value: 'Emerson Barbosa Gonçalves'
            },
            description: {
                type: 'text',
                value: 'Mid-level PHP Developer with over 5 years of Fullstack development experience. Specialist in API creation, monolith maintenance, and system optimization.<br><br>Experienced in Linux environments, MySQL, MariaDB, and Postgres database modeling, as well as containerization with Docker. Background in high availability and scalability projects.'
            },
            area: {
                type: 'string',
                value: 'Full Stack Developer'
            },
            englishLevel: {
                type: 'string',
                value: 'B1'
            },
            dateOfBirth: {
                type: 'string',
                value: 'June 03, 1999'
            },
            email: {
                type: 'string',
                value: 'emerson_b.goncalves@outlook.com'
            },
            phone: {
                type: 'string',
                value: '+55 (11) 9 8303-8827'
            },
            github: {
                type: 'link',
                value: 'https://github.com/emersonBGoncalves'
            },
            linkedin: {
                type: 'link',
                value: 'https://www.linkedin.com/in/emersonbgoncalvesdev/'
            },
            resumePTBR: {
                type: 'file',
                value: 'curriculopt.html'
            },
            resumeEN: {
                type: 'file',
                value: 'curriculoen.html'
            },
            local: {
                type: 'string',
                value: 'São Paulo, Brazil'
            }
        },
        {
            class: 'Experiences',
            namespace: 'app\\classes',
            experiences: {
                type: 'array',
                value: [
                    {
                        name: 'G4F - SMS SP',
                        position: 'Mid-level PHP Developer',
                        initialDate: 'February 2024',
                        finalDate: 'Present',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Development of Web systems using Laravel, Slim Framework, and Docker.',
                                'Implementation and maintenance of RESTful APIs in PHP.',
                                'Administration and optimization of Postgres and MySQL databases.'
                            ]
                        }
                    },
                    {
                        name: 'Dazsoft',
                        position: 'Junior PHP Developer',
                        initialDate: 'February 2020',
                        finalDate: 'January 2024',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Creation and maintenance of scalable PHP/HTML/CSS applications.',
                                'Development of SQL scripts and automation of routines.',
                                'Integration of systems with Asterisk and Opensips.'
                            ]
                        }
                    },
                    {
                        name: 'Dazsoft',
                        position: 'Development Trainee',
                        initialDate: 'February 2019',
                        finalDate: 'January 2020',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Creation and maintenance of scalable PHP/HTML/CSS applications.',
                                'Development of SQL scripts and automation of routines.'
                            ]
                        }
                    },
                    {
                        name: 'Mc Donald\'s',
                        position: 'Attendant',
                        initialDate: 'April 2015',
                        finalDate: 'March 2016',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Customer service and teamwork.'
                            ]
                        }
                    }
                ]
            }
        },
        {
            class: 'Skills',
            namespace: 'app\\classes',
            php: {
                type: 'skillArray',
                value: [
                    {
                        name: 'Without Framework',
                    },
                    {
                        name: 'Laravel',
                    },
                    {
                        name: 'Slim',
                    },
                    {
                        name: 'Lúmen',
                    }
                ]
            },
            python: {
                type: 'skill',
                value: '$python'
            },
            docker: {
                type: 'skill',
                value: '$docker'
            },
            mysql: {
                type: 'skill',
                value: '$mysql|$mariaDB'
            },
            postgresql: {
                type: 'skill',
                value: '$postgresql'
            },
            redis: {
                type: 'skill',
                value: '$redis'
            },
            git: {
                type: 'skill',
                value: '$git'
            },
            gitlab: {
                type: 'skill',
                value: '$gitlab'
            },
            javascript: {
                type: 'skill',
                value: '$javascript'
            },
            html: {
                type: 'skill',
                value: '$html'
            },
            css: {
                type: 'skill',
                value: '$css'
            },

        },
        {
            class: 'AcademicInfo',
            namespace: 'app\\classes',
            formating: {
                type: 'arrayAcademic',
                value: [
                    {
                        name: 'Unidrummond',
                        type: 'Bachelor',
                        course: 'Computer science',
                        initialDate: 'January 2018',
                        finalDate: 'December 2021',
                        certificate: 'files/certificate.pdf',
                        description: 'TCC Project: System for generating REST APIs from database credentials.'
                    }
                ]
            }
        },
        {
            class: 'Projects',
            namespace: 'app\\classes',
            formating: {
                type: 'arrayProjects',
                value: [
                    {
                        name: 'portfolio',
                        images: 'portifolio2.png,portifolio1.png,portifolio3.png,portifolio4.png,portifolio5.png,portifolio6.png',
                        description: 'Personal Portfolio is a WEB system created to present my projects and skills through a clean and modern interface, focusing on clear navigation and responsiveness across different devices. The layout and structure were inspired by the website emersonbgoncalves.github.io, from which I analyzed the visual and interactive elements to build a simple and effective design. <br><br>Technologies Used: HTML, CSS, JavaScript',
                        links: [
                            'https://emersonbgoncalves.github.io',
                            'https://github.com/emersonBGoncalves/emersonBGoncalves.github.io'
                        ]
                    },
                    {
                        name: 'alternativaIngressos',
                        images: 'alternativa1.png,alternativa2.png,alternativa3.png,alternativa5.png,alternativa6.png,alternativa7.png',
                        description: 'Alternativa Ingressos is a WEB system initially created as a project to help my father with his work of selling tickets for events, making communication between him and his client increasingly simple and objective, thus increasing the quality of his sales. <br><br>Technologies Used: PHP (Slim Framework 4), javascript, HTML, CSS, Mysql',
                        links: [
                            'https://github.com/emersonBGoncalves/alternativaIngressos'
                        ]
                    },
                    {
                        name: 'genRest',
                        images: 'genrest1.png,genrest2.png,genrest3.png,genrest4.png,genrest5.png,genrest6.png',
                        description: 'GenRest is a WEB system developed as a TCC project for my Computer Science course, in which its purpose would be to automatically generate Rest APIs for clients from the connection data to the database, being monetized by the number of requests on the created endpoints.<br><br>Technologies Used: Java, Spring Boot, PHP, HTML, CSS, Mysql and Bootstrap',
                        links: [
                            'https://github.com/emersonBGoncalves/genrest'
                        ]
                    },
                    {
                        name: 'siptekSuite',
                        images: 'suite1.jpg,suite2.png,suite3.png,suite4.png',
                        description: 'Siptek Suite is a WEB system designed for call centers and companies that use PABX, which has several modules that facilitate the work of call centers when making calls and business organization, such as Predictive Dialer, URAs, Service Queues, Smart Campaigns, TTS (Text to Speak), Pricing, integrated CRM and PABX.<br><br>Technologies Used: PHP, javascript, HTML, CSS, Mysql, ElasticSearch and Java',
                        links: [
                            'https://dazsoft.com.br/solucao-callcenters'
                        ]
                    }
                ]
            }
        },
        {
            class: 'Certificates',
            namespace: 'app\\classes',
            PHPObjectOrientation: {
                type: 'file',
                value: 'files/cert-orientacao-objetos.pdf'
            },
            docker: {
                type: 'file',
                value: 'files/cert-docker.pdf'
            }
        }
    ],
    pt: [
        {
            class: 'Eu',
            namespace: 'app\\classes',
            foto: {
                type: 'image',
                value: 'images/foto.png'
            },
            nome: {
                type: 'string',
                value: 'Emerson Barbosa Gonçalves'
            },
            descricao: {
                type: 'text',
                value: 'Desenvolvedor PHP Pleno com mais de 5 anos de experiência em desenvolvimento Fullstack. Especialista em criação de APIs, manutenção de monolitos e otimização de sistemas.<br><br>Atuação em ambientes Linux, modelagem de bancos MySQL, MariaDB e Postgres, além de containerização com Docker. Experiência em projetos de alta disponibilidade e escalabilidade.'
            },
            area: {
                type: 'string',
                value: 'Desenvolvedor Full Stack'
            },
            nivelIngles: {
                type: 'string',
                value: 'B1'
            },
            dataNascimento: {
                type: 'string',
                value: '03 de junho de 1999'
            },
            email: {
                type: 'string',
                value: 'emerson_b.goncalves@outlook.com'
            },
            telefone: {
                type: 'string',
                value: '+55 (11) 9 8303-8827'
            },
            github: {
                type: 'link',
                value: 'https://github.com/emersonBGoncalves'
            },
            linkedin: {
                type: 'link',
                value: 'https://www.linkedin.com/in/emersonbgoncalvesdev/'
            },
            curriculoPT: {
                type: 'file',
                value: 'curriculopt.html'
            },
            curriculoEN: {
                type: 'file',
                value: 'curriculoen.html'
            },
            local: {
                type: 'string',
                value: 'São Paulo, Brasil'
            }
        },
        {
            class: 'Experiências',
            namespace: 'app\\classes',
            experiencias: {
                type: 'array',
                value: [
                    {
                        name: 'G4F - SMS SP',
                        position: 'Desenvolvedor PHP Pleno',
                        initialDate: 'Fevereiro de 2024',
                        finalDate: 'Atual',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Desenvolvimento de sistemas Web utilizando Laravel, Slim Framework e Docker.',
                                'Implementação e manutenção de APIs RESTful em PHP.',
                                'Administração e otimização de banco Postgres e MySQL.'
                            ]
                        }
                    },
                    {
                        name: 'Dazsoft',
                        position: 'Desenvolvedor PHP Júnior',
                        initialDate: 'Fevereiro de 2020',
                        finalDate: 'Janeiro de 2024',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Criação e manutenção de aplicações PHP/HTML/CSS escaláveis.',
                                'Desenvolvimento de scripts SQL e automação de rotinas.',
                                'Integração de sistemas com Asterisk e Opensips.'
                            ]
                        }
                    },
                    {
                        name: 'Dazsoft',
                        position: 'Estagiário de Desenvolvimento',
                        initialDate: 'Fevereiro de 2019',
                        finalDate: 'Janeiro de 2020',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Criação e manutenção de aplicações PHP/HTML/CSS escaláveis.',
                                'Desenvolvimento de scripts SQL e automação de rotinas.'
                            ]
                        }
                    },
                    {
                        name: 'Mc Donald\'s',
                        position: 'Atendente',
                        initialDate: 'Abril de 2015',
                        finalDate: 'Março de 2016',
                        responsabilities: {
                            type: 'arrayResponsabilities',
                            value: [
                                'Atendimento ao público e trabalho em equipe.'
                            ]
                        }
                    }
                ]
            }
        },
        {
            class: 'Habilidades',
            namespace: 'app\\classes',
            php: {
                type: 'skillArray',
                value: [
                    { name: 'Sem Framework' },
                    { name: 'Laravel' },
                    { name: 'Slim' },
                    { name: 'Lumen' }
                ]
            },
            python: {
                type: 'skill',
                value: '$python'
            },
            docker: {
                type: 'skill',
                value: '$docker'
            },
            mysql: {
                type: 'skill',
                value: '$mysql|$mariaDB'
            },
            postgresql: {
                type: 'skill',
                value: '$postgresql'
            },
            redis: {
                type: 'skill',
                value: '$redis'
            },
            git: {
                type: 'skill',
                value: '$git'
            },
            gitlab: {
                type: 'skill',
                value: '$gitlab'
            },
            javascript: {
                type: 'skill',
                value: '$javascript'
            },
            html: {
                type: 'skill',
                value: '$html'
            },
            css: {
                type: 'skill',
                value: '$css'
            }
        },
        {
            class: 'HistoricoAcademico',
            namespace: 'app\\classes',
            formacao: {
                type: 'arrayAcademic',
                value: [
                    {
                        name: 'Unidrummond',
                        type: 'Bacharelado',
                        course: 'Ciência da Computação',
                        initialDate: 'Janeiro de 2018',
                        finalDate: 'Dezembro de 2021',
                        certificate: 'files/certificate.pdf',
                        description: 'Projeto de TCC: Sistema gerador de API Rest a partir de credenciais do banco de dados.'
                    }
                ]
            }
        },
        {
            class: 'Projetos',
            namespace: 'app\\classes',
            projetos: {
                type: 'arrayProjects',
                value: [
                    {
                        name: 'portfolio',
                        images: 'portifolio2.png,portifolio1.png,portifolio3.png,portifolio4.png,portifolio5.png,portifolio6.png',
                        description: 'Portfólio Pessoal é um sistema WEB criado para apresentar meus projetos e habilidades por meio de uma interface limpa e moderna, com foco na navegação clara e responsiva em diferentes dispositivos. O layout e a estrutura foram inspirados no site emersonbgoncalves.github.io, do qual analisei os elementos visuais e interativos para construir um design simples e eficaz. <br><br>Tecnologias Utilizadas: HTML, CSS, JavaScript',
                        links: [
                            'https://emersonbgoncalves.github.io',
                            'https://github.com/emersonBGoncalves/emersonBGoncalves.github.io'
                        ]
                    },
                    {
                        name: 'alternativaIngressos',
                        images: 'alternativa1.png,alternativa2.png,alternativa3.png,alternativa5.png,alternativa6.png,alternativa7.png',
                        description: 'Alternativa Ingressos é um sistema WEB criado inicialmente como projeto para ajudar meu pai no trabalho de venda de ingressos para eventos, facilitando cada vez mais a comunicação entre ele e seus clientes, aumentando assim a qualidade das vendas. <br><br>Tecnologias Utilizadas: PHP (Slim Framework 4), JavaScript, HTML, CSS, MySQL',
                        links: [
                            'https://github.com/emersonBGoncalves/alternativaIngressos'
                        ]
                    },
                    {
                        name: 'genRest',
                        images: 'genrest1.png,genrest2.png,genrest3.png,genrest4.png,genrest5.png,genrest6.png',
                        description: 'GenRest é um sistema WEB desenvolvido como projeto de TCC do curso de Ciência da Computação, cujo objetivo é gerar automaticamente APIs REST para os clientes a partir dos dados de conexão com o banco de dados, sendo monetizado pela quantidade de requisições nos endpoints criados. <br><br>Tecnologias Utilizadas: Java, Spring Boot, PHP, HTML, CSS, MySQL e Bootstrap',
                        links: [
                            'https://github.com/emersonBGoncalves/genrest'
                        ]
                    },
                    {
                        name: 'siptekSuite',
                        images: 'suite1.jpg,suite2.png,suite3.png,suite4.png',
                        description: 'Siptek Suite é um sistema WEB voltado para call centers e empresas que utilizam PABX, contando com diversos módulos que facilitam o trabalho dos operadores e a organização empresarial, como Discador Preditivo, URAs, Filas de Atendimento, Campanhas Inteligentes, TTS (Texto para Fala), Precificação, CRM integrado e PABX. <br><br>Tecnologias Utilizadas: PHP, JavaScript, HTML, CSS, MySQL, ElasticSearch e Java',
                        links: [
                            'https://dazsoft.com.br/solucao-callcenters'
                        ]
                    }
                ]
            }
        },
        {
            class: 'Certificados',
            namespace: 'app\\classes',
            orientacaoObjetosPHP: {
                type: 'file',
                value: 'files/cert-orientacao-objetos.pdf'
            },
            docker: {
                type: 'file',
                value: 'files/cert-docker.pdf'
            }
        }
    ]
};

let terminalText = {
    en: '' +
        ' 🐙 Connecting to GitHub... <a target="_blank" href="https://github.com/emersonBGoncalves">https://github.com/emersonBGoncalves</a><br>' +
        ' 🧠 Importing skills........ OK ✅<br>' +
        ' 💼 Syncing experiences..... OK ✅<br>' +
        ' 🎓 Diploma verified........ OK ✅<br>' +
        ' 🧾 PDF resume found........ OK ✅<br><br>' +
        '' +
        'echo <span class="string">"Hello! Feel free to explore my code responsibly."</span> 👨‍💻',
    pt: '' +
        ' 🐙 Conectando ao GitHub... <a target="_blank" href="https://github.com/emersonBGoncalves">https://github.com/emersonBGoncalves</a><br>' +
        ' 🧠 Importando habilidades........ OK ✅<br>' +
        ' 💼 Sincronizando experiências..... OK ✅<br>' +
        ' 🎓 Diploma verificado........ OK ✅<br>' +
        ' 🧾 Currículo PDF encontrado........ OK ✅<br><br>' +
        '' +
        'echo <span class="string">"Olá! Sinta-se à vontade para explorar meu código com responsabilidade."</span> 👨‍💻'
};