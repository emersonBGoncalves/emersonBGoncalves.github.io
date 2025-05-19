let Pages = [
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
            value: 'Mid-level PHP Developer with over 5 years of experience in developing APIs, scripts, and monolithic applications. Solid experience in full-stack development, focusing on the creation and maintenance of efficient and scalable solutions.'
        },
        area: {
            type: 'string',
            value: 'Full Stack Developer'
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
        curriculumPTBR: {
            type: 'file',
            value: 'files/curriculo.pdf'
        },
        curriculumEN: {
            type: 'file',
            value: 'files/curriculum.pdf'
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
                    finalDate: 'Present'
                },
                {
                    name: 'Dazsoft',
                    position: 'Junior PHP Developer',
                    initialDate: 'February 2020',
                    finalDate: 'January 2024'
                },
                {
                    name: 'Dazsoft',
                    position: 'Development Trainee',
                    initialDate: 'February 2019',
                    finalDate: 'January 2020'
                },
                {
                    name: 'Mc Donald\'s',
                    position: 'Attendant',
                    initialDate: 'April 2015',
                    finalDate: 'March 2016'
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
                    initialDate: 'January 2017',
                    finalDate: 'December 2021',
                    certificate: 'files/certificate.pdf' 
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
                    links: []
                },
                {
                    name: 'siptekSuite',
                    images: 'suite1.jpg,suite2.png,suite3.png,suite4.png',
                    description: 'Siptek Suite is a WEB system designed for call centers and companies that use PABX, which has several modules that facilitate the work of call centers when making calls and business organization, such as Predictive Dialer, URAs, Service Queues, Smart Campaigns, TTS (Text to Speak), Pricing, integrated CRM and PABX.<br><br>Technologies Used: PHP, javascript, HTML, CSS, Mysql, ElasticSearch and Java',
                    links: []
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
];

$( document ).ready(function() {
    let bodyClass = $(".bodyClass");
    let leftMenuTable = $(".leftMenu").find('table');
    
    bodyClass.append('<div class="archives Nada">' + 
						'<div class="numberLines">' +
						'</div>' +
						'<div class="conteudo">' +
						'	<p class="tagPHP">&lt;?php</p>' +
						'	<p>&nbsp;</p>' +
						'	<p><span class="reservedWord">echo </span> <span class="string">"Hello World"</span>;</p>' +
						'</div>' +
					'</div>');
    
    leftMenuTable.append('<tr class="trFather1">' +
        '<td>' +
            '	<svg class="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#D3D3D3"></path> </g></svg>' +
            '	<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="transparent"/><path d="M4 9V6.47214C4 6.16165 4.07229 5.85542 4.21115 5.57771L5 4H10L11 6H21C21.5523 6 22 6.44772 22 7V9V18C22 19.1046 21.1046 20 20 20H18" stroke="#4FC3F7" stroke-linecap="round" stroke-linejoin="round"/><path  fill="#000000" d="M17.2362 9H2.30925C1.64988 9 1.17099 9.62698 1.34449 10.2631L3.59806 18.5262C3.83537 19.3964 4.62569 20 5.52759 20H19.6908C20.3501 20 20.829 19.373 20.6555 18.7369L18.201 9.73688C18.0823 9.30182 17.6872 9 17.2362 9Z" stroke="#000000"/></svg>' +
            '	' + Pages[0].class + ' \\ app \\ classes' +
        '</td>' +
    '</tr>');



    Pages.forEach(page => {

        leftMenuTable.append('<tr class="trSon" data-html="' + page.class + '">' +
            '<td>' +
            '	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke="#C2185B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12V21" stroke="#C2185B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z" stroke="#C2185B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>' +
            '	' + page.class + '.class' +
            '</td>' +
        '</tr>');


        bodyClass.append('<div class="archives ' + page.class + '" style="display: none;"></div>');
        $("." + page.class).append('<div class="numberLines"></div>');
        $("." + page.class).append('<div class="conteudo"></div>');
        let local = $("." + page.class).find('.conteudo')[0];

        $(local).append('<p class="tagPHP">&lt;?php</p>');
        $(local).append('<p>&nbsp;</p>');
        $(local).append('<p><span class="reservedWord">namespace</span> ' + page.namespace + ';</p>');
        $(local).append('<p>&nbsp;</p>');
        $(local).append('<p><span class="reservedWord">class</span> ' + page.class + '</p>');
        $(local).append('<p>{</p>');

        for (const [key, value] of Object.entries(page)) {
            if (key !== 'class' && key !== 'namespace') {
                switch (value.type) {
                    case 'string':
                        $(local).append('<p class="identy1"><span class="reservedWord">public string</span> $' + key + ' = <span class="' + value.type + '">\'' + value.value + '\'</span>;</p>');
                        break;
                    case 'image':
                        $(local).append('<p class="identy1"><span class="reservedWord">public image</span> $' + key + ' = <img class=\'miniFoto\' src="' + value.value + '"/>; <span class="smallDark">// <- open</span></p>');
                        break;
                    case 'link':
                        $(local).append('<p class="identy1"><span class="reservedWord">public link</span> $' + key + ' = <span class="' + value.type + '"><a target="_blank" href="' + value.value + '">' + value.value + '</a></span>;</p>');
                        break;
                    case 'text':
                        $(local).append('<p class="identy1"><span class="reservedWord">public string</span> $' + key + ' = <svg class="link clickDescricao" data-descricao="' + key + '" fill="#C2185B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,7H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM3,20V9H21V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Zm3-6H18V12H6Zm0,4h6V16H6Z"></path></g></svg>, <span class="smallDark">// <- open</span> </p>');
                        $(local).append('<div class="' + key + ' descricao">' + value.value + '</div>');
                        break;
                    case 'file':
                        $(local).append('<p class="identy1"><span class="reservedWord">public file</span> $' + key + ' = <a href="' + value.value + '" target="_blank" download><svg class="pdf" fill="#ff0000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1185.46.034V564.74h564.705v1355.294H168.99V.034h1016.47ZM900.508 677.68c-16.829 0-31.963 7.567-42.918 21.007-49.807 59.972-31.398 193.016-18.748 272.075 2.823 17.958.452 36.141-7.228 52.518l-107.86 233.223c-7.905 16.942-20.555 30.608-36.592 39.53-68.104 37.835-182.287 89.675-196.066 182.626-4.97 30.268 5.082 56.357 28.574 79.85 15.925 15.133 35.238 22.7 56.245 22.7 81.43 0 132.819-71.717 188.273-148.517 24.62-34.221 61.666-55.229 102.437-60.876 76.349-10.503 167.83-32.527 223.172-46.983 27.897-7.341 56.358-5.534 83.802 3.162 48.565 15.586 66.975 25.073 122.768 25.073 50.371 0 84.818-11.746 101.534-34.447 13.44-16.828 16.715-39.53 10.164-65.619-11.858-42.804-2.033-89.675-133.044-89.675-29.365 0-57.94 2.824-81.77 6.099-36.819 4.97-73.299-10.955-97.016-40.885-32.301-40.546-65.167-88.433-87.981-123.219-16.151-24.508-21.572-53.986-16.264-83.124 15.473-84.706 18.41-147.615-23.492-206.683-17.619-25.186-41.223-37.835-67.99-37.835Zm397.903-660.808 434.936 434.937h-434.936V16.873Z"></path> <path d="M791.057 1297.943c92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04-43.257 126.607-119.718 264.282-129.996 280.32"></path> </g> </g></svg></a>;<span class="smallDark"> // <- download</span></p>');
                        break;
                    case 'array':

                        $(local).append('<p class="identy1"><span class="reservedWord">public array</span> $' + key + ' = [</p>');
                        value.value.forEach((item, keyArray) => {
                            $(local).append('<p class="identy2"> <span class="string">\'' + item.name + '\'</span> <span class="reservedWord">=></span> [</p>');
                            $(local).append('<p class="identy3"><span class="string">\'position\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.position + '\'</span>,</p>');
                            $(local).append('<p class="identy3"><span class="string">\'initialDate\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.initialDate + '\'</span>,</p>');
                            $(local).append('<p class="identy3"><span class="string">\'finalDate\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.finalDate + '\'</span></p>');

                            if (keyArray + 1 < value.value.length) {
                                $(local).append('<p class="identy2">],</p>');
                            } else {
                                $(local).append('<p class="identy2">]</p>');
                            }
                        });
                        $(local).append('<p class="identy1">];</p>');
                        break;
                    case 'skillArray':

                        $(local).append('<p class="identy1"><span class="reservedWord">public skill</span> $' + key + ' = [</p>');
                        value.value.forEach((item, keyArray) => {
                    
                            if (keyArray + 1 < value.value.length) {
                            $(local).append('<p class="identy2"> <span class="string">\'' + item.name + '\'</span>, </p>');
                            } else {
                            $(local).append('<p class="identy2"> <span class="string">\'' + item.name + '\'</span></p>');
                            }
                        });
                        $(local).append('<p class="identy1">];</p>');
                        break;
                    case 'skill':
                        $(local).append('<p class="identy1"><span class="reservedWord">public skill</span> ' + value.value + ';</p>');
                        break;
                    case 'arrayAcademic':

                        $(local).append('<p class="identy1"><span class="reservedWord">public array</span> $' + key + ' = [</p>');
                        value.value.forEach((item, keyArray) => {
                            $(local).append('<p class="identy2"> <span class="string">\'' + item.name + '\'</span> <span class="reservedWord">=></span> [</p>');
                            $(local).append('<p class="identy3"><span class="string">\'type\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.type + '\'</span>,</p>');
                            $(local).append('<p class="identy3"><span class="string">\'course\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.course + '\'</span>,</p>');
                            $(local).append('<p class="identy3"><span class="string">\'initialDate\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.initialDate + '\'</span>,</p>');
                            $(local).append('<p class="identy3"><span class="string">\'finalDate\'</span> <span class="reservedWord">=></span> <span class="string">\'' + item.finalDate + '\'</span></p>');
                            $(local).append('<p class="identy3"><span class="string">\'certificate\'</span> <span class="reservedWord">=></span> <a href="' + item.certificate + '" target="_blank" download><svg class="pdf" fill="#ff0000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1185.46.034V564.74h564.705v1355.294H168.99V.034h1016.47ZM900.508 677.68c-16.829 0-31.963 7.567-42.918 21.007-49.807 59.972-31.398 193.016-18.748 272.075 2.823 17.958.452 36.141-7.228 52.518l-107.86 233.223c-7.905 16.942-20.555 30.608-36.592 39.53-68.104 37.835-182.287 89.675-196.066 182.626-4.97 30.268 5.082 56.357 28.574 79.85 15.925 15.133 35.238 22.7 56.245 22.7 81.43 0 132.819-71.717 188.273-148.517 24.62-34.221 61.666-55.229 102.437-60.876 76.349-10.503 167.83-32.527 223.172-46.983 27.897-7.341 56.358-5.534 83.802 3.162 48.565 15.586 66.975 25.073 122.768 25.073 50.371 0 84.818-11.746 101.534-34.447 13.44-16.828 16.715-39.53 10.164-65.619-11.858-42.804-2.033-89.675-133.044-89.675-29.365 0-57.94 2.824-81.77 6.099-36.819 4.97-73.299-10.955-97.016-40.885-32.301-40.546-65.167-88.433-87.981-123.219-16.151-24.508-21.572-53.986-16.264-83.124 15.473-84.706 18.41-147.615-23.492-206.683-17.619-25.186-41.223-37.835-67.99-37.835Zm397.903-660.808 434.936 434.937h-434.936V16.873Z"></path> <path d="M791.057 1297.943c92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04-43.257 126.607-119.718 264.282-129.996 280.32"></path> </g> </g></svg></a>;<span class="smallDark"> // <- download</span></p>');

                            if (keyArray + 1 < value.value.length) {
                                $(local).append('<p class="identy2">],</p>');
                            } else {
                                $(local).append('<p class="identy2">]</p>');
                            }
                        });
                        $(local).append('<p class="identy1">];</p>');
                        break;
                    case 'arrayProjects':

                        value.value.forEach((item, keyArray) => {
                            console.log(item, keyArray);
                            $(local).append('<p class="identy1"><span class="reservedWord">public project</span> $' + item.name + ' = [</p>');
                            $(local).append('<p class="identy2"><span class="string">\'images\'</span> <span class="reservedWord">=></span> <svg data-imgs="' + item.images + '" class="projects" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.51l-4.391-4.053a1.5 1.5 0 0 0-2.265.27l-3.13 4.695-2.303-1.48a1.5 1.5 0 0 0-1.96.298L3.005 18.15A12.98 12.98 0 0 1 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3zm9.477 8.53L21 16.437v1.357c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H6.205c-1.115 0-1.519-.116-1.926-.334a2.305 2.305 0 0 1-.485-.345L8.2 15.067l2.346 1.508a1.5 1.5 0 0 0 2.059-.43l3.077-4.616zM7.988 6C6.878 6 6 6.832 6 7.988 6 9.145 6.879 10 7.988 10 9.121 10 10 9.145 10 7.988 10 6.832 9.121 6 7.988 6z" fill="#C2185B"></path></g></svg>, <span class="smallDark">// <- open</span></p>');
                            $(local).append('<p class="identy2"><span class="string">\'description\'</span> <span class="reservedWord">=></span> </span><svg class="link clickDescricao" data-descricao="desc' + item.name + '" fill="#C2185B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,7H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1ZM3,20V9H21V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Zm3-6H18V12H6Zm0,4h6V16H6Z"></path></g></svg>, <span class="smallDark">// <- open</span> </p>');
                            $(local).append('<div class="string descricao desc' + item.name + '">' + item.description + '</div>');
                            
                            if (item.links.length > 0) {
                                $(local).append('<p class="identy2"><span class="string">\'links\'</span> <span class="reservedWord">=></span> [</p>');
                                item.links.forEach((link, keyArray) => {
                                    $(local).append('<p class="identy3"><a target="_blank" href="' + link + '">' + link + '</a></p>');
                                    if (keyArray + 1 < item.links.length) {
                                        $(local).append('<p class="identy2">,</p>');
                                    }
                                });
                                $(local).append('<p class="identy2">]</p>');
                            } else {
                                $(local).append('<p class="identy2"><span class="string">\'links\'</span> <span class="reservedWord">=></span> []</p>');
                            }
                            $(local).append('<p class="identy1">];</p>');
                        });
                        
                        break;
                    default:
                        break;
                }
            }
        }
            $(local).append('<p>}</p>');

    });
});
