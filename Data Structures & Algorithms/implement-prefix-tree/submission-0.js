class PrefixNode {
    children;
    isEndWord;
    constructor() {
        this.children = {};
        this.isEndWord = false;
    }
}

class PrefixTree {
    root;
    constructor() {
        this.root = new PrefixNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let lastNode = this.root;
        for (let c of word) {
            if (!lastNode.children[c]) {
                lastNode.children[c] = new PrefixNode();
            }
            lastNode = lastNode.children[c];
        }

        lastNode.isEndWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let searchedWord = this.root;
        for (const c of word) {
            searchedWord = searchedWord.children[c];
            if (!searchedWord) return false;
        }

        return searchedWord.isEndWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let searchedWord = this.root;
        for (const c of prefix) {
            searchedWord = searchedWord.children[c];
            if (!searchedWord) return false;
        }

        return true;
    }
}
