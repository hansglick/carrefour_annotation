/*
 * Google Tag Manager dataLayer push functions and legacy Google Analytics (gtag.js) events
 */

// Simply used to redirect user when there is a dataLayer push callBack
function redirectUser(url, isTargetBlank, formToSubmit, isSafari, windowReference) {

    // IE11 default params 
    var formToSubmit = formToSubmit || null;
    var isSafari = isSafari || null;
    var windowReference = windowReference || null;

    if (url != null) {
        if (isTargetBlank) {
            // We need this to prevent Safari from blocking pop ups
            if (isSafari && windowReference) {
                windowReference.location = url;
            } else {
                window.open(url, '_blank');
            }
        } else {
            window.location.href = url;
        }
    } else if (formToSubmit != null) {
        formToSubmit.submit();
    }
}

// Basic Universal Analytics Events
function dataLayerSendRandomEvent(category, action, label, url, isTargetBlank) {

    // IE11 default params 
    var category = category || null;
    var action = action || null;
    var label = label || null;
    var url = url || null;
    var isTargetBlank = isTargetBlank || false;

    /* If browser is Safari, we need to create the window.open object before the eventCallback resolves
    otherwise the pop up will be blocked */
    isSafari = navigator.userAgent.indexOf("Safari") > -1;
    windowReference = null;
    if (isTargetBlank && isSafari) {
        windowReference = window.open();
    }

    // Legacy ga('send') previously used in various js files
    ga('send', {
        hitType: 'event',
        eventCategory: category,
        eventAction: action,
        eventLabel: label
    });
    /* New dataLayer push code (2019). 
    In EventCallBack we check the container ID otherwise the function would fire twice
    because of the AW-790266043 container used by adWords conversion tags */
    if (!!window.google_tag_manager) {
        dataLayer.push({
            'event': 'GaStandardEvent',
            'eventCategory': category,
            'eventAction': action,
            'eventLabel': label,
            'eventCallback': function(id) {
                if (id === 'GTM-K2S67NQ') {
                    redirectUser(url, isTargetBlank, null, isSafari, windowReference);
                }
            },
            'eventTimeout': 2000
        });
    } else {
        redirectUser(url, isTargetBlank, null, isSafari, windowReference);
    }
}

// When user adds a product to basket anywhere on the website
function dataLayerAddProduct(product, listType) {
    // Legacy Google Enhanced Ecommerce Code (Do not remove until we migrated everything to Google Tag Manager)
    ga('ec:addProduct', {
        'id': product.id,
        'name': product.name,
        'category': product.category,
        'brand': product.brand,
        'position': product.position
    });
    ga('ec:setAction', 'add', {
        list: listType
    });
    ga('send', 'event', 'UX', 'click', 'Results', {});
    dataLayer.push({
        'event': 'addToCart',
        'ecommerce': {
            'add': { // 'add' actionFieldObject 
                'actionField': {
                    'list': listType,
                },
                'products': [{
                    'name': product.name,
                    'id': product.id,
                    'price': product.price,
                    'brand': product.brand,
                    'category': product.category,
                    'position': product.position,
                    'quantity': 1
                }],
            }
        }
    });

    // AdWords event snippet for add_to_cart
    var googleMerchantId1 = product.id.toString();
    var googleMerchantId2 = "-0";
    var googleMerchantId = googleMerchantId1.concat(googleMerchantId2);
    var adWordsItems = [{
        'id': googleMerchantId,
        'google_business_vertical': 'retail'
    }];
    dataLayerSendAdwordsEvent('add_to_cart', product.price, adWordsItems);
}

// When user click a product to basket anywhere on the website
function dataLayerClickProduct(product, listType, url) {
    // Legacy Google Enhanced Ecommerce Code (Do not remove until we migrated everything to Google Tag Manager)
    ga('ec:addProduct', {
        'id': product.id,
        'name': product.name,
        'category': product.category,
        'brand': product.brand,
        'position': product.position
    });
    ga('ec:setAction', 'click', {
        list: listType
    });
    ga('send', 'event', 'UX', 'click', 'Results', {});
    // New 2019 dataLayer push
    // Test if Google tag manager is available
    if (!!window.google_tag_manager) {
        dataLayer.push({
            'event': 'productClick',
            'ecommerce': {
                'click': {
                    'actionField': {
                        'list': listType
                    }, // Optional list property.
                    'products': [{
                        'name': product.name, // Name or ID is required.
                        'id': product.id,
                        'price': product.price,
                        'brand': product.brand,
                        'category': product.category,
                        'position': product.position
                    }]
                }
            },
            'eventCallback': function(id) {
                console.log('On passe bien dans le callback');
                if (id === 'GTM-K2S67NQ') {
                    redirectUser(url, false, null);
                }
            },
            'eventTimeout': 2000
        });
    } else {
        redirectUser(url, false, null);
    }
}
// Purchase action. The 'purchase' event fires an Universal Analytics tag
function dataLayerPurchaseGoogle(googlePurchaseObject) {
    dataLayer.push({
        'ecommerce': {
            'purchase': {
                'actionField': {
                    'id': googlePurchaseObject.id, // Transaction ID. Required for purchases and refunds.
                    'affiliation': googlePurchaseObject.affiliation,
                    'revenue': googlePurchaseObject.revenue, // Total transaction value (incl. tax and shipping)
                    'tax': googlePurchaseObject.tax,
                    'shipping': googlePurchaseObject.shipping,
                    'coupon': googlePurchaseObject.coupon
                },
                'products': googlePurchaseObject.products
            }
        }
    });
}
// Sends user steps and options along the purchase funnel. The 'checkout' event fires an Universal Analytics tag
function dataLayerOnCheckout(step, products) {
    dataLayer.push({
        'event': 'checkout',
        'ecommerce': {
            'checkout': {
                'actionField': {
                    'step': step,
                },
                'products': products
            }
        }
    });
}
// Sends the options the user chosed for a given checkout step. The 'checkoutOption' event fires an Universal Analytics tag
function dataLayerOnCheckoutOption(step, option, url, formToSubmit) {
    // Legacy Google Enhanced Ecommerce Code (Do not remove until we migrated everything to Google Tag Manager)
    ga('ec:setAction', 'checkout_option', {
        'step': 3,
        'option': option
    });
    ga('send', 'event', 'Checkout', 'Option', {});
    /* New dataLayer push code (2019). 
    In EventCallBack we check the container ID otherwise the function would fire twice
    because of the AW-790266043 container */
    if (!!window.google_tag_manager) {
        dataLayer.push({
            'event': 'checkoutOption',
            'ecommerce': {
                'checkout_option': {
                    'actionField': {
                        'step': step,
                        'option': option
                    }
                }
            },
            'eventCallback': function(id) {
                if (id === 'GTM-K2S67NQ') {
                    redirectUser(url, null, formToSubmit);
                }
            },
            'eventTimeout': 2000
        });

    } else {
        redirectUser(url, null, formToSubmit);
    }
}
// Criteo OneTag Purchase Tag dataLayer push function
function dataLayerPurchaseCriteo(criteoPurchaseObject) {
    dataLayer.push({
        'purchaseOrderId': criteoPurchaseObject.id
    });
    dataLayer.push({
        'purchaseProductsDetails': criteoPurchaseObject.products
    });
}
// Autocomplete search
function dataLayerAutocompleteSearch(searchedTerms) {
    dataLayer.push({
        'event': 'autoCompleteSearch',
        'searchedTerms': searchedTerms
    });
}

// adWords Event Snippet (items must be an array)
function dataLayerSendAdwordsEvent(eventType, value, items) {
    dataLayer.push({
        'event': eventType,
        'value': value,
        'items': items
    });
}