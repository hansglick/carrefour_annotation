var map = new Map();
map.set('En stock', 'stock'); map.set('Nouveauté', 'new'); map.set('En promotion', 'special'); map.set('Top vente', 'top');

$(function() {

    if($('#cat_type').length) {
        cat_type = $('#cat_type').val();
    }

    /**
     * Menu gauche
     */
    $('.show_submenu_column_left').on('click',  function(){

        // Handle alreay highlighted categories
        var openedElement = $('li.children.open');

        $(this).parent().toggleClass("open", "");

        if ($(this).parent().hasClass('children')) {
            openedElement.removeClass('open');
        }

        var id              = $(this).attr("data-id");
        var reference_id    = $(this).closest('ul').attr("data-reference-id");
        var level           = $(this).attr("data-level");

        $('.pl-3').each(function(){
            if(reference_id == undefined) {
                var pl_reference_id = $(this).data('referenceId');
                if ($(this).is(':visible') && id != pl_reference_id) {
                    $(this).toggle('blind');
                    var el = $("span[data-id='" + pl_reference_id +"']");
                    el.toggleClass("fa-plus fa-minus");
                }
            }
        });
        
        $('#column_left_sub_menu'+level+'_'+id).toggle("blind");
        $(this).toggleClass("fa-plus fa-minus");

        var lvl = (level * 1) + 1;
        $('#column_left_sub_menu'+level+'_'+id).toggleClass("", "ul_open_"+lvl);                
    });

    /**
     * Filtres
     */
    $('#listing_filtres_modal .json_facets').each(function() {
        elementSelected(this);
    });

    $('#listing_filtres_modal').on('click', '.facet_title', function() {
        var select = $(this).attr('rel');
        $('#'+select).toggle();
    });

    $('#hide_all_selected').on('click', function() {
        hideDivRemoveAllSelected();
    });

    // Filtre : marque
    $('#facet_brands_view_all').click(function() {
        $(this).fadeOut('fast', function() {
            $('#facet_brands_all').slideDown('fast', function() {
                $('#facet_brands_hide_all').fadeIn('fast');
            });
        });
    });
    $('#facet_brands_hide_all').click(function() {
        $(this).fadeOut('fast', function() {
            $('#facet_brands_all').slideUp('fast', function() {
                $('#facet_brands_view_all').fadeIn('fast');
            });
        });
    });


    // Déclenchement du filtre
    $('#listing_filtres_modal').on('click', '.json_filters', function(){
        filterElements(this);
    });

    // Pagination (ajax)
    $('#page_list_content_elasticsearch').on('click', '.json_page', function() {
        paGination(this);
    });

    $('#selected_filters').on('click', '.filter_delete', function(){
        var item  = $(this).attr('data-filter');
        var value = $.trim($(this).parent().find('.selected_title_filter').html());

        if(item == 'status') {
            value = map.get(value);
        }

        value = value.replace(/'/g, "\\'");

        $("input[rel='"+item+"'][value='"+value+"']").each(function(){
            $(this).prop('checked', false);
            filterElements($(this));
        });
    });

    /**
     * Tris
     */
    $('#sort_items button').on('click', function(){
        var sort = $(this).val();
        var txt  = $(this).html();
        $('#sort_by').text(txt);

        displaySpinner();

        sendFacets(agg, select, page, sort, 'fadeIn');
    });
    
    /**
     * Gestion du hashtag
     */
    var hashtag = location.hash;
    if(hashtag != '') {
        //Si le hashtag n'est pas vide alors il y a un pré-filtre séparé par un |
        var strFilter   = hashtag.substring(1);
        var aPreFilters = strFilter.split('|');
        
        for (i = 0; i < aPreFilters.length; i++) { 
            var oneFilter = aPreFilters[i].split('=');
            select[oneFilter[0]].push(decodeURIComponent(oneFilter[1]));
            
            //Sélectionne les cases dans les filtres de la colonne gauche
            $('input[rel='+oneFilter[0]+']').each(function() {
                if(this.value == decodeURIComponent(oneFilter[1])) {
                    $(this).attr('checked', 'checked');
                }
            });
        }

        sendFacets(agg, select, 0, sort, 'fadeIn');
    }
});

var sendFacets = function(aggs, selects, page, sort, view, nbr_products) {

    $.getJSON(
        './ajax/product_listing_elasticsearch.php', 
        {
            'aggs[]'               :aggs,
            'category_id'          :category_id,
            'manufacturers_id'     :manufacturers_id,
            'nbr_products_by_line' :nbr_products_by_line,
            'categories_sort_type' :categories_sort_type,
            'page'                 :page,
            'sort'                 :sort,
            'result_page'          :nbr_products,
            'cat_type'             :cat_type,
            'brands'               :selects['brands'],
            'status'               :selects['status'],
            'tags'                 :selects['tags'],
        }, 
        function(data) {
            if(!data.error) {
                var nbrBrands     = 0;
                var nbrStatus     = 0;
                var nbrTags     = 0;

                if(selects['brands']) {
                    nbrBrands = selects['brands'].length;
                }
                if(selects['status']) {
                    nbrStatus = selects['status'].length;
                }
                if(selects['tags']) {
                    nbrTags = selects['tags'].length;
                }
    
                if(nbrBrands == 0 && nbrStatus == 0 && nbrTags == 0) {
                    viewRemoveAllSelected('hide');
                } else {
                    viewRemoveAllSelected('show');
                }

                if(data.page_list_html != '') {
                    $('#page_list_content_elasticsearch').empty().html(data.page_list_html);
                    $('#filters_elasticsearch').empty().html(data.filters_html);
                    $('#selected_filters').empty().html(data.filters_selected_html);
                    $('#page_list_nbr_article').empty().html(data.nbr_products);
                    $('#sort_items').attr('data-is-ajax', 'true');
                }
            }
        }
    );
}

var paGination = function(element) {
    var selected    = $(element).attr("rel").split("|");
    var apage       = selected[0].split(":");
    var asort       = selected[1].split(":");

    displaySpinner();
    
    if(apage[1] !== undefined) {
        if(apage[1] != '') {
            page = apage[1];
        }
    }

    if(asort[1] !== undefined) {
        if(asort[1] != '') {
            sort = asort[1];
        }
    }

    sendFacets(agg, select, page, sort);
}

var elementSelected = function(element) {
    var key         = $(element).attr('rel');
    select[key]     = [];

    agg.push(key);
    $('.json_'+key+':checked').each(function() {
        var value   = $(element).val();
        select[key].push(value);
    });
}

var filterElements = function(element) {
    var key   = $(element).attr('rel');
    var value = $(element).val();
    var sort  = $('#json_sort_by').val();

    displaySpinner();

    if($(element).prop('checked')) {
        select[key].push(value);
    } else {
        select[key].splice($.inArray(value, select[key]), 1);
    }
    
    sendFacets(agg, select, 0, sort, 'fadeIn');
}

var displaySpinner = function() {
    $('html,body').animate({scrollTop: $('body').offset().top}, 'fast');

    var spinner = '<div class="d-flex justify-content-center spinner-background"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>';
    $('#page_list_content_elasticsearch').prepend(spinner);
}

var viewRemoveAllSelected = function(view) {
    if(view === 'show') {
        $('#hide_all_selected').fadeIn('fast');
    } else if(view === 'hide') {
        $('#hide_all_selected').fadeOut('fast');
    }
}

var hideDivRemoveAllSelected = function() {
    select = [];
    agg = [];
    
    $('#filters .json_filters').each(function(){
        $(this).prop('checked', false);
    });

    $('#listing_filtres_modal .json_facets').each(function() {
        elementSelected(this);
    });

    $('#selected_filters').empty();

    sendFacets(agg, select, 0, sort, 'fadeOut');
}