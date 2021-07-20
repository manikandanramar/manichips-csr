// Local Storage Helper Functions

/**
 * Checks if we are in a browser
 * @type {Boolean}
 */
const isBrowser = typeof window !== 'undefined';

/**
 * Checks if cookies are blocked.
 * With cookies are intended all types of browser storage:
 * localStorage, sessionStorage and cookies
 * In case of a false the plain object storing will kick in.
 * @type {Boolean}
 */
const isCookieEnabled = isBrowser && navigator && navigator.cookieEnabled;


/**
 * Reference to the localStorage object
 * Apparently Safari doesn't want to even try to check if the localStorage
 * exists, so we're not gonna touch it if cookies are blocked in first place.
 * @type {LocalStorage}
 */
const localstorage = isCookieEnabled ? window.localStorage : undefined

/**
 * Check if the browser has localStorage
 * @return {Boolean}
 */
const hasLocalStorage = function () {
    if (!localstorage) {
      return false
    }
  
    try {
      localstorage.setItem('0', '')
      localstorage.removeItem('0')
      return true
    } catch (error) {
      return false
    }
}

/**
 * JSON parse with error
 * @param  {String} data
 * @return {String || Object|null}
 */
function parse(data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      return data;
    }
  
    return data
  }


/**
 * Function to store an object in the local storage
 * @param {String} key 
 * @param {Object} value 
 */
function store(key, value) {
    if (hasLocalStorage()) {
        let valueToStore = value;

        if (typeof value === "object")
            valueToStore = JSON.stringify(value);

        localstorage.setItem(key, valueToStore);
    }
}

/**
 * Function to get the value stored in the local storage
 * @param {String} key 
 */
function obtain(key) {
    if (hasLocalStorage()) {
       const values = localstorage.getItem(key);

       return parse(values);
    }

    return null;
}

function erase(key) {
    if (hasLocalStorage()) {
        localstorage.removeItem(key);
    }
}

function discard() {
    if (hasLocalStorage()) {
        localstorage.clear();
    }
}

export default {
    obtain,
    store,
    erase,
    discard
};