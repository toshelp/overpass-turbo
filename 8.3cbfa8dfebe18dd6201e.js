webpackJsonp([8],{208:function(a,e){a.exports={"nav.run":"Executar","nav.run_tt":"executar este pedido no Overpass API","nav.share":"Partilhar","nav.share_tt":"obter uma ligação permanente para este pedido","nav.export":"Exportar","nav.export_tt":"várias ferramentas de exportação","nav.save":"Guardar","nav.save_tt":"guardar esta consulta","nav.load":"Carregar","nav.load_tt":"carregar consultas guardadas","nav.wizard":"Assistente","nav.wizard_tt":"um construtor de consultas","nav.settings":"Opções","nav.settings_tt":"várias opções","nav.help":"Ajuda","nav.help_tt":"ajuda, informações e atribuições","nav.logout":"Logout","nav.logout_tt":"logout from currently synced osm account","tabs.map":"Mapa","tabs.map_tt":"visão de mapa","tabs.data":"Dados","tabs.data_tt":"visão de dados","map_controlls.zoom_to_data":"enquadrar nos dados","map_controlls.localize_user":"localiza-me!","map_controlls.select_bbox":"selecionar manualmente a caixa de limites","map_controlls.select_bbox_disabled":"desativado uma vez que a consulta atual não necessita de uma caixa de limites","map_controlls.toggle_wide_map":"alternar mapa largo","map_controlls.toggle_data":"mostrar/esconder camada de dados","map_controlls.suggest_zoom_to_data":"clique aqui para mostrar os dados","settings.title":"Opções","settings.section.general":"Opções Gerais","settings.ui_lang":"Idioma da Interface","settings.server":"Servidor","settings.force_simple_cors":"Forçar pedidos CORS simples","settings.force_simple_cors_expl":'usar quando o servidor não suportar pedidos <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">CORS</a>',"settings.disable_autorepair":"Desativar a mensagem de aviso/corrigir automaticamente quando a Overpass API não obtem dados visíveis.","settings.section.editor":"Editor","settings.enable_rich_editor":"Ativar editor de código completo","settings.enable_rich_editor_expl":"desativar isto em dispositivos móveis; necessita de recarregar a página para surtir efeito","settings.editor_width":"Largura do editor","settings.editor_width_expl":'por exemplo "400px"; deixar em branco para usar o padrão',"settings.section.map":"Mapa","settings.tile_server":"Servidor de Telas","settings.tile_opacity":"Opacidade das Telas","settings.tile_opacity_expl":"transparẽncia das telas de fundo: 0=transparente ... 1=opaco e visível","settings.show_crosshairs":"Mostrar cruzes no centro do mapa","settings.disable_poiomatic":"Não mostrar elementos pequenos como os POIs.","settings.show_data_stats":"Mostrar alguma estatísticas sobre dados carregados e mostrados.","settings.section.sharing":"Partilhar","settings.include_map_state":"incluir estado atual do mapa nas hiperligações partilhadas","settings.compression":"Compressão","settings.section.export":"Exportar","settings.export_image_scale":"Mostrar escala nas imagens exportadas","settings.export_image_attr":"Mostrar atribuição dos autores nas imagens exportadas","save.title":"Gravar","save.enter_name":"Introduza um nome para esta consulta","load.title":"Carregar","load.delete_query":"eliminar esta consulta","load.saved_queries-local":"Saved Queries (local)","load.saved_queries-osm":"Saved Queries (osm.org)","load.saved_queries-osm-loading":"Loading saved queries from osm.org...","load.saved_queries-osm-error":"An error occured while loading saved queries from osm.org :(","load.examples":"Exemplos","load.no_saved_query":"sem nenhuma consulta guardada","export.title":"Exportar","export.copy_to_clipboard":"Copy this text to clipbard","export.section.map":"Mapa","export.as_png":'como <a id="export-image" href="">imagem png</a>',"export.as_interactive_map":'como <a id="export-interactive-map" href="">Mapa interativo</a>',"export.current_map_view":'<a id="export-map-state" href="">vista do mapa</a> atual',"export.map_view_expl":"caixa de limites, centro, etc.","export.section.data":"Dados","export.generic_download_copy":'<a class="export" title="saves the exported data as a file">download</a>/<a class="copy" title="copies export output to clipboard">copy</a> as <span class="format"></span>',"export.raw":'em <a id="export-raw" href="">dados em bruto</a>',"export.raw_interpreter":'dados em bruto da <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'gravar GeoJSON para o <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Consulta","export.format_text":'<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn\'t include additional overpass turbo features such as MapCSS.">standalone query</abbr>',"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">raw query</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">osm wiki</abbr>',"export.to_xml":'converter para <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'converter para (<a id="export-convert-compact" href="" target="_blank" class="external">compacto</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"carregar dados num editor OSM:","export.geoJSON.title":"Exportar - GeoJSON","export.geoJSON.expl":"Os dados atualmente mostrados em GeoJSON:","export.geoJSON.no_data":"Nenhuns dados GeoJSON disponíveis! Por favor faça primeiro uma consulta.","export.geoJSON_gist.title":"Gravado como gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Editar com geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Exportar - GPX","export.GPX.expl":"Os dados atualmente mostrados em GPX:","export.GPX.no_data":"Nenhuns dados GPX disponíveis! Por favor faça primeiro uma consulta.","export.KML.title":"Exportar - KML","export.KML.expl":"Os dados atualmente mostrados em KML:","export.KML.no_data":"Nenhuns dados KML disponíveis! Por favor faça primeiro uma consulta.","export.raw.title":"Exportar - dados em bruto","export.raw.no_data":"Nenhuns dados em bruto disponíveis! Por favor faça primeiro uma consulta.","export.map_view.title":"Vista do Mapa Atual","export.map_view.permalink":"Ligação permanente","export.map_view.permalink_osm":"para o osm.org","export.map_view.center":"Centro","export.map_view.center_expl":"lat, lon","export.map_view.bounds":"Limites","export.map_view.bounds_selection":"Limites (caixa de limites selecionada manualmente)","export.map_view.bounds_expl":"sul, oeste, norte, este","export.map_view.zoom":"Aproximar/afastar","export.image.title":"Exportar - Imagem","export.image.alt":"o mapa exportado","export.image.download":"Descarregar","export.image.attribution_missing":"Certifique-se que inclui as atribuições da autoria ao distribuir esta imagem!","share.title":"Partilhar","share.header":"Ligação permanente","share.copy_this_link":'Copie esta <a href="" id="share_link_a">hiperligação</a> para partilhar o código atual:',"share.options":"Opções","share.incl_map_state":"incluir estado atual do mapa","share.run_immediately":"executar esta consulta imediatamente após carregar","help.title":"Ajuda","help.section.introduction":"Introdução","help.intro.0":'Isto é o <i>overpass turbo</i>, uma ferramenta de filtrar baseada na Internet para o <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'Com o overpass turbo pode executar consultas <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> e analisar os dados OSM resultantes de forma interativa num mapa.',"help.intro.1b":'Existe um <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">Assistente</a> integrado que ajuda a criar consultas facilmente.',"help.intro.2":'Para mais informações sobre o <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> e como criar <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">consultas ao Overpass</a> consulte a wiki do OSM.',"help.section.queries":"Consultas Overpass","help.queries.expl":'A Overpass API permite consultar dados do OSM pelos seus critérios de pesquisa. Para este fim, tem uma <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">língua de consultas</a> criada de propṍsito.',"help.intro.shortcuts":"Para além das consultas regulares à Overpass API, também pode-se utilizar os seguintes atalhos no overpass turbo:","help.intro.shortcuts.bbox":"coordenadas da caixa de limites da vista atual do mapa","help.intro.shortcuts.center":"coordenadas do centro do mapa","help.intro.shortcuts.date":"Expressão-tempo-data em ISO 8601 de um determinado intervalo temporal atrás (por exemplo “24 horas”)","help.intro.shortcuts.style":'define uma <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">folha de estilo MapCSS</a>',"help.intro.shortcuts.custom":"Podem ser definidos atalhos personalizados  colocando <i>{{shortcut=value}}</i> em qualquer lado do script.","help.intro.shortcuts.more":'Podem ser encontrados mais atalhos, informações adicionais sobre o descrito acima e exemplos de utilização na <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">wiki do OSM</a>.',"help.section.ide":"Ambiente de Desenvolvimento Integrado- IDE","help.ide.share.title":"Partilha","help.ide.share.expl":"É possível enciar uma ligação permanente com a consulta em que está neste momento a trabalhar para outra pessoa. Para isso use a ferramenta <i>Partilhar</i> na qual é mostrado uma ligação que pode enviar a outra pessoa ou colocar num sítio da Internet. (Note que as outras pessoas que o usarem irão trabalhar numa cópia da sua consulta.)","help.ide.save_load.title":"Gravar e Carregar","help.ide.save_load.expl":"Também pode guardar e carregar as suas consultas. Para começar, existem alguns exemplos de consultas pré-carregadas. Veja-as para ter uma ideia do que o Overpass Turbo pode fazer.","help.ide.keyboard.title":"Atalhos de teclado:","help.ide.keyboard.run":"Executar a consulta atual.","help.ide.keyboard.wizard":"Iniciar o assistente de consultas.","help.ide.keyboard.load_save":"Carregar (abrir) / Guardar uma consulta.","help.ide.keyboard.help":"Abvrir esta janela de ajuda.","help.section.key":"Legenda do Mapa","help.key.example":"vários elementos do mapa","help.key.description":"As Vias são mostradas como linhas azuis espessas. Os Polígonos como áreas a amarelo com uma linha de contorno azul fina. Os POIs (nós com etiquetas) como círculos amarelos com uma linha de contorno azul fina. Os círculos com um preenchimento a vermelho são polígonos ou vias que são demasiado pequenos para serem mostrados normalmente. As linhas a rosa ou contornos a rosa são mostradas em objetos que façam parte de pelo menos uma relação (carregada). Linhas a tracejado são mostradas em linhas ou polígonos com geometria incompleta (provavelmente porque os seus nós não doram todos carregados).","help.section.export":"Exportar","help.export":'A ferramenta <i>Exportar</i> tem uma série de opções a usar na consulta e/ou nos dados obtidos pela consulta.<br />As opções com este símbolo:<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> usam um site externo (online) ao Overpass Turbo.',"help.export.query_data.title":"Consulta / Dados","help.export.query_data.expl":"Isto contém algumas coisas que pode fazer com os dados ou a consulta em bruto, como converter a consulta entre várias linguagens de consulta ou exportar os dados em geoJSON. Uma opção muito útil é enviar a consulta para o editor JOSM.","help.export.map.title":"Mapa","help.export.map.expl":"Converte a vista do mapa-com-dados atual numa imagem PNG, ou num mapa interativo (preenche o ecrã todo), etc.","help.section.about":"Sobre","help.about.maintained":"o <i>overpass turbo</i> é gerido por Martin Raifer (tyr.asd at gmail.com).","help.about.feedback.title":"Comentários, Relatórios de Erros, Pedidos de Funcionalidades","help.about.feedback":'Se quiser fazer alguns comentários, reportar problemas e pedir uma nova funcionalidade, use o <a href="https://github.com/tyrasd/overpass-turbo/issues">rastreador de erros</a> no github ou a <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">página de discussão</a> na wiki do OSM.',"help.about.source.title":"Código-fonte","help.about.source":'O <a href="https://github.com/tyrasd/overpass-turbo">código-fonte</a> deste programa é disponibilizado sob a <a href="LICENSE">licença MIT</a>.',"help.section.attribution":"Atribuição","help.attr.data_sources":"Fontes dos Dados","help.attr.data":'Daados &copy; contribuidores do <a href="http://openstreetmap.org/">OpenStreetMap</a> <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Termos</a>)</span>',"help.attr.mining":"Mineração de dados por","help.attr.tiles":'Telas do mapa &copy; contribuidores do <a href="http://openstreetmap.org/">OpenStreetMap</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/" style="font-size:smaller;">CC-BY-SA</a>',"help.attr.search":"Pesquisa fornecida por","help.attr.software":"Programas e Bibliotecas","help.attr.leaflet":"Mapa fornecido por","help.attr.codemirror":"Editor fornecido por","help.attr.other_libs":"Outras bibliotecas:","ffs.title":"Assistente de Consulta","ffs.placeholder":"pesquisar","ffs.expl":'O <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">assistente</a> ajuda-o a criar consultas. Aqui estão alguns exemplos:',"ffs.parse_error":"Desculpe, a pesquisa não foi compreendida.","ffs.parse_error_expl":'Note que tem de usar aspas duplas ao adicionar palavras/frases que tenham espaços ou caracteres especiais e que filtros múltiplos de pesquisa têm de ser separados pelos operadores boleanos apropriados (<i>and</i> ou <i>or</i>). Veja a <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentação</a> (em inglês) para mais informações.',"ffs.typo":"Será que queria dizer:","dialog.dismiss":"descartar","dialog.cancel":"cancelar","dialog.save":"guardar","dialog.save-local":"save (local)","dialog.save-osm":"save on osm.org","dialog.delete":"eliminar","dialog.close":"fechar","dialog.done":"feito","dialog.abort":"abortar","dialog.repair_query":"reparar consulta","dialog.continue_anyway":"continuar mesmo assim","dialog.show_data":"mostrar dados","dialog.wizard_build":"construir consulta","dialog.wizard_run":"construir e executar a consulta","dialog.delete_query.title":"Eliminar Consulta?","dialog.delete_query.expl":"Quer mesmo eliminar a seguinte consulta?","dialog.delete_query.expl-osm":"Do you really want to delete the following synchronized query","error.query.title":"Erro na Consulta","error.query.expl":"Ocorreu um erro durante a execução da consulta! A resposta que a overpass API deu é:","error.ajax.title":"Erro Ajax","error.ajax.expl":"Ocorreu um erro durante a execução da consulta!","error.mapcss.title":"Erro MapCSS","error.mapcss.expl":"Folha de estilos MapCSS inválida:","error.remote.title":"Erro de Controlo Remoto","error.remote.incompat":"Erro: versão de controlo remoto do JOSM incompatível","error.remote.not_found":"Controlo remoto não encontrado :( Certifique-se que o JOSM está aberto e configurado corretamente.","error.nominatim.title":"Erro do Nominatim","error.nominatim.expl":"Não foi encontrado nada com o seguinte nome:","warning.browser.title":"O seu navegador de Internet não é suportado :(","warning.browser.expl.1":'O navegador da Internet que está a utilizar neste momento, é (provavelmente) incapaz de suportar (parte significantes) deste Programa. <small>Ele tem de suportar uma <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">API de Armazenamento Web</a> e <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">partilha de recursos de origem cruzada (CORS)</a>.</small>',"warning.browser.expl.2":'Note que pode ter de ativar os cookies e/ou "dados locais" para este site em alguns navegadores de Internet (como o Firefox e o Chrome).',"warning.browser.expl.3":'Por favor atualize para uma versão mais recente do seu navegador de Internet ou mude para um com mais capacidades! As versões recentes do <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> e do <a href="http://www.mozilla.org/de/firefox/">Firefox</a> foram testadas e funcionam. Como alternativa, também pode usar o <a href="http://overpass-api.de/query_form.html">formulário de consultas da Overpass_API</a>.',"warning.incomplete.title":"Dados incompletos","warning.incomplete.expl.1":"Esta consulta não obteve nós. No OSM apenas os nós têm coordenadas. Por exemplo, uma via não pode ser mostrada sem os seus nós.","warning.incomplete.expl.2":'Se isto não é o que esperava obter, o <i>Overpass Turbo</i> pode ajudá-lo a reparar (auto-completar) a consulta escolhendo a opção "reparar consulta" disponível abaixo. De outra forma pode continuar para os dados.',"warning.incomplete.not_again":"não mostrar novamente esta mensagem.","warning.incomplete.remote.expl.1":"Parece que esta consulta não riá obter dados do OSM no formato XML com metadados. Os editores como o JOSM necessitam de dados nesse formato.","warning.incomplete.remote.expl.2":'o <i>overpass turbo</i> pode ajudá-lo a corrigir a consulta escolhendo abaixo a opção "reparar consulta".',"warning.share.long":"Aviso: esta hiperligação de partilha é bastante longa. Pode não funcionar sob certas circunstâncias","warning.share.very_long":"Aviso: esta hiperligação é bastante longa. Provavelmente não irá funcionar em circunstâncias normais (navegadores, servidores). Utilize com cautela!","warning.huge_data.title":"Grande quantidade de dados","warning.huge_data.expl.1":"Esta consulta resultou numa grande quantidade de dqados (aproximadamente {{amount_txt}}).","warning.huge_data.expl.2":"O seu navegador de Internet pode ter problemas em carregar os dados. Quer mesmo continuar?","waiter.processing_query":"a processar a consulta...","waiter.export_as_image":"a exportar imagem...","data_stats.loaded":"Carregado","data_stats.displayed":"Mostrado","data_stats.nodes":"nós","data_stats.ways":"vias","data_stats.relations":"relações","data_stats.areas":"áreas","data_stats.pois":"pois","data_stats.lines":"linhas","data_stats.polygons":"polígonos","data_stats.lag":"Atualidade dos dados","data_stats.lag_areas":"Atualidade das áreas","data_stats.lag.expl":"mais antigos que a base de dados do OSM","map.intentionally_blank":"Este mapa foi deixando em branco intencionalmente."}}});