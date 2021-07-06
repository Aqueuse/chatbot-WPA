/**
 * Represents an etiquette
 * @constructor
 * @param {number} key
 * @param {string} keywords
 * @param {string} action
 * @param {string} message
 *
 */
function Etiquette(key, keywords, action, message) {
    const etiquette = {
        key: 0,
        keywords: {},
        action: null,
        message: "bienvenue"
    }

    let new_etiquette = Object.create(etiquette);

    new_etiquette.key = key;
    new_etiquette.keywords = keywords;
    new_etiquette.action = action;
    new_etiquette.message = message;

    return new_etiquette;
}
