$(document).ready(function() {
    var language = $("#language").val();
    Pages[language].forEach(function(page) {
        switch (page['class']) {
            case 'Habilidades':
            case 'Skills':
                for (const skill in page) {
                    if (skill == 'class' || skill == 'namespace') {
                        continue;
                    }

                    switch (page[skill]['type']) {
                        case 'skill':
                            $(".skills").first('ul').append('<li><i class="fas fa-gear icon"></i>' + skill.toUpperCase() + '</li>');
                            break;
                        case 'skillArray':
                            var html = '<li><i class="fas fa-gear icon"></i>' + skill.toUpperCase() + '<ul class="subskills">';
                            page[skill]['value'].forEach(function(value) {
                                html += '<li>' + value['name'].toUpperCase() + '</li>';
                            });

                            html += '</ul></li>';
                            $(".skills").first('ul').append(html);
                            break;
                    }
                }
                break;
            case 'Eu':
            case 'Me':
                key_profile = language == 'pt' ? 'descricao' : 'description';
                key_phone = language == 'pt' ? 'telefone' : 'phone';
                key_local = language == 'pt' ? 'local' : 'local';
                key_nivelIngles = language == 'pt' ? 'nivelIngles' : 'englishLevel';

                $(".profile").html('<p>' + page[key_profile]['value'] + '</p>');
                $(".phone").append(page[key_phone]['value']);
                $(".local").append(page[key_local]['value']);
                $(".nivelIngles").append(page[key_nivelIngles]['value']);
                $(".email").append('<a href="mailto:' + page['email']['value'] + '" style="color:inherit;text-decoration:none;">' + page['email']['value'] + '</a>');
                $(".github").append('<a href="' + page['github']['value'] + '" style="color:inherit;text-decoration:none;">GitHub</a>');
                $(".linkedin").append('<a href="' + page['linkedin']['value'] + '" style="color:inherit;text-decoration:none;">LinkedIn</a>');
                break;
            case 'HistoricoAcademico':
            case 'AcademicInfo':
                for (const historico in page) {
                    if (historico == 'class' || historico == 'namespace') {
                        continue;
                    }
                    page[historico]['value'].forEach(function(value) {
                        var html = '<p><strong>' + value['name'] + '</strong><br>' + value['course'] + ' | ' + value['initialDate'] + ' - ' + value['finalDate'] + '</p>' +
                        '<p>' + value['description'] + '</p>';
                        $(".historico").append(html);
                    });
                }
                break;
            case 'Experiências':
            case 'Experiences':
                key_experiences = language == 'pt' ? 'experiencias' : 'experiences';
                page[key_experiences]['value'].forEach(function(value) {
                    var html = '<h3>' + value['position'] + ' — ' + value['name'] + ' | ' + value['initialDate'] + ' - ' + value['finalDate'] + '</h3>';
                    html += '<ul>';
                    value['responsabilities']['value'].forEach(function(responsabilitie) {
                        html += '<li>' + responsabilitie + '</li>';
                    });
                    $(".experience").append(html);
                });

            break;
        }
    });

});


