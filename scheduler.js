$(document).ready(function () {

    let grammar = [
        'Section 4: Verb Tenses: green',
        'Section 5: Verb Tenses: Simple Present Verb Tense:green',
        'Section 6: Verb Tenses: Verb Tenses:Verb Conjugation (1st/2nd/3rd person):green',
        'Section 7: Verb Tenses: Subject-Verb Agreement:green',
        'Section 8: Verb Tenses: Simple Past Tense:green',
        'Section 9: Verb Tenses: Future Simple Tense:green',
        'Section 10: Verb Tenses: Present Continuous Tense:blue',
        'Section 11: Verb Tenses: Past Continuous Tense:blue',
        'Section 12: Verb Tenses: Future Continuous:blue',
        'Section 13: Verb Tenses: Present participle:blue',
        'Section 14: Verb Tenses: Gerund:blue',
        'Section 15: Verb Tenses: Past participle:blue',
        'Section 16: Verb Tenses: Present Perfect Tense:red',
        'Section 17: Verb Tenses: Past Perfect Tense:red',
        'Section 18: Verb Tenses: Future Perfect Tense:red',
        'Section 19: Verb Tenses: Present Perfect Continuous Tense:red',
        'Section 20: Verb Tenses: Past Perfect Continuous Tense:red',
        'Section 21: Verb Tenses: Future Perfect Continuous Tense:red',
        'Section 22: Auxiliary/Modal Verbs:green',
        'Section 23: Auxiliary/Modal Verbs:To Be:green',
        'Section 24: Auxiliary/Modal Verbs:To Do, To Have:green',
        'Section 25: Auxiliary/Modal Verbs:Can, Could:green',
        'Section 26: Auxiliary/Modal Verbs:Will, Would:blue',
        'Section 27: Auxiliary/Modal Verbs:Shall, Should:blue',
        'Section 28: Auxiliary/Modal Verbs:Must, May, Might:blue',
        'Section 29: Phrasal Verbs:green',
        'Section 30: Phrasal Verbs:Carry On, Put Off:red',
        'Section 31: Phrasal Verbs:Turn Down, Break Up:red',
        'Section 32: Phrasal Verbs:Give up, Turn Out:red',
        'Section 33: Nouns/Pronouns:green',
        'Section 34: Nouns/Pronouns:Common Nouns:green',
        'Section 35: Nouns/Pronouns:Proper Nouns:green',
        'Section 36: Nouns/Pronouns:Subject Pronouns:green',
        'Section 37: Nouns/Pronouns:Object Pronouns:green',
        'Section 38: Nouns/Pronouns:Possessive Nouns:blue',
        'Section 39: Nouns/Pronouns:Possessive Pronouns:blue',
        'Section 40: Nouns/Pronouns:Concrete Nouns:blue',
        'Section 41: Nouns/Pronouns:Abstract Nouns:blue',
        'Section 42: Nouns/Pronouns:Material Nouns and Compound Nouns:blue',
        'Section 43: Nouns/Pronouns:Countable vs. Uncountable Nouns:red',
        'Section 44: Nouns/Pronouns:Collective Nouns:red',
        'Section 45: Articles/Demonstratives:green',
        'Section 46: Articles/Demonstratives:Articles (a, an, the):green',
        'Section 47: Articles/Demonstratives:This, That, These, Those:green',
        'Section 48: Adjectives:green',
        'Section 49: Adjectives:Adjectives and Adverbs:green',
        'Section 50: Adjectives:Descriptives Adjectives:green',
        'Section 51: Adjectives:Proper Adjectives:green',
        'Section 52: Adjectives:Possessive Adjectives:blue',
        'Section 53: Adjectives:Comparative Adjectives:blue',
        'Section 54: Adjectives:Superlative Adjectives:blue',
        'Section 55: Adjectives:Limiting Adjectives:red',
        'Section 56: Adjectives:Pronominal Adjectives:red',
        'Section 57: Adverbs:green',
        'Section 58: Adverbs:Forming Adverbs:green',
        'Section 59: Adverbs:Adverbs of Manner:blue',
        'Section 60: Adverbs:Adverbs of Frequency:blue',
        'Section 61: Adverbs:Adverbs of Place:blue',
        'Section 62: Adverbs:Adverbs of Time:blue',
        'Section 63: Adverbs:Adverbs of Degree:blue',
        'Section 64: Adverbs:Comparative and Superlative Adverbs:blue',
        'Section 65: Adverbs:Order of Adverbs:red',
        'Section 66: Distributives/Quantifiers/Pre-determiners:green',
        'Section 67: Distributives/Quantifiers/Pre-determiners:All, half:blue',
        'Section 68: Distributives/Quantifiers/Pre-determiners:Each, Every:blue',
        'Section 69: Distributives/Quantifiers/Pre-determiners:Both, Either, Neither:blue',
        'Section 70: Distributives/Quantifiers/Pre-determiners:A Few, A Little:blue',
        'Section 71: Distributives/Quantifiers/Pre-determiners:A Lot, Most:blue',
        'Section 72: Distributives/Quantifiers/Pre-determiners:Much, Many:blue',
        'Section 73: Distributives/Quantifiers/Pre-determiners:Some, Any, Enough:blue',
        'Section 74: Distributives/Quantifiers/Pre-determiners:Such, What, Rather, Quite:blue',
        'Section 75: Preposition:green',
        'Section 76: Preposition:Prepositions:green',
        'Section 77: Preposition:Prepositions of Time:blue',
        'Section 78: Preposition:Prepositions of Place:blue',
        'Section 79: Preposition:Prepositions of Manner:blue',
        'Section 80: Preposition:Prepositions of Direction and Motion:blue',
        'Section 81: Preposition:Prepositions of Cause,Purpose, Reason:blue',
        'Section 82: Preposition:Prepositional Phrases:blue',
        'Section 83: Clauses:green',
        'Section 84: Clauses:Clauses:blue',
        'Section 85: Clauses:Independent Clause:blue',
        'Section 86: Clauses:Dependent (Subordinate)Clause:blue',
        'Section 87: Clauses:Noun Clause:red',
        'Section 88: Clauses:Adjective (Relative) Clause:red',
        'Section 89: Clauses:Adverb Clauses:red',
        'Section 90: Conjunctions:green',
        'Section 91: Conjunctions:Conjunctions:green',
        'Section 92: Conjunctions:Coordinating Conjunctions:blue',
        'Section 93: Conjunctions:Subordinate Conjunctions:blue',
        'Section 94: Conjunctions:Compound Conjunctions:red',
        'Section 95: Conjunctions:Correlative Conjunctions:red',
        'Section 96: Conjunctions:Pseudo Conjunctions:red',
        'Section 97: Conditionals:green',
        'Section 98: Conditionals:Conditionals:blue',
        'Section 99: Conditionals:Conditionals: Type 0:red',
        'Section 100: Conditionals:Conditionals: Type 1:red',
        'Section 101: Conditionals:Conditionals: Type 2:red',
        'Section 102: Conditionals:Conditionals: Type 3:red',
        'Section 103: Conditionals:Conditionals: Type Mixed:red',
        'Section 104: Stand Alone Topics:green',
        'Section 105: Stand Alone Topics:Passive vs. Active Voice:red',
        'Section 106: Stand Alone Topics:Reported Speech:red',
        'Section 107: Common Mistakes:green',
        'Section 108: Common Mistakes:Fewer vs. Less | Then vs. Than:red',
        'Section 109: Common Mistakes:There, Their, They&#39;re | To vs. Too vs. Two:red'];



    let speaking = [
        'Section 113: English Speaking and Conversation',
        'Section 114: Introductions in Informal Settings',
        'Section 115: Introductions in Formal Settings',
        'Section 116: Small Talk',
        'Section 117: Hobbies and Interests',
        'Section 118: Family',
        'Section 119: Business Communication',
        'Section 120: Daily Work Routine',
        'Section 121: Job Hunting',
        'Section 122: Unemployment',
        'Section 123: Countries and Nationalities',
        'Section 124: Dates',
        'Section 125: Days and Months',
        'Section 126: Directions',
        'Section 127: Expressing Feelings',
        'Section 128: Geography and Nature',
        'Section 129: Holidays',
        'Section 130: Spring Holidays',
        'Section 131: Summer Holidays',
        'Section 132: Fall Holidays',
        'Section 133: Winter Holidays',
        'Section 134: Money',
        'Section 135: Numbers',
        'Section 136: Opposites',
        'Section 137: Question Words',
        'Section 138: Seasons and Weather',
        'Section 139: Sports',
        'Section 140: Telling Time'];

    let punctuation = [
        'Section 110: English Writing Section',
        'Section 111: Four Sentence Types and Structures',
        'Section 112: English Punctuation Marks: Period: 401',
        'Section 112: English Punctuation Marks: Question Marks: 402',
        'Section 112: English Punctuation Marks: Exclamation Point: 403',
        'Section 112: English Punctuation Marks: Comma: 404',
        'Section 112: English Punctuation Marks: Semicolon: 405',
        'Section 112: English Punctuation Marks: Colon: 406',
        'Section 112: English Punctuation Marks: Apostrophe: 407',
        'Section 112: English Punctuation Marks: Quotation Marks: 408',
        'Section 112: English Punctuation Marks: Parentheses: 409',
        'Section 112: English Punctuation Marks: Braces: 410',
        'Section 112: English Punctuation Marks: Brackets: 411',
        'Section 112: English Punctuation Marks: Hyphen: 412',
        'Section 112: English Punctuation Marks: Dash: 413',
        'Section 112: English Punctuation Marks: Ellipsis: 414',
        'Section 112: English Punctuation Marks: How to use i.e. - e.g. - etc.: 415'];

    $('#submitButton').click(function (e) {

        e.preventDefault();
        $('#submitSuccessMessage').html('');

        let level = $('#filterGrammarByProficiencyLevel').val();

        let filter = '';

        switch (level) {
            case 'Elementary':
                filter = ':green';
                break;
            case 'Intermediate':
                filter = ':blue';
                break;
            case 'Advanced':
                filter = ':red';
                break;
        }

        console.log('filter ' + filter);

        let grammarcopy = grammar.slice();
        let punctuationcopy = punctuation.slice();
        let speakingcopy = speaking.slice();

        if (filter !== "") {
            grammarcopy = grammar.filter(function (str) {
                return str.indexOf(filter) > -1;
            });
        }

        console.log(JSON.stringify(grammarcopy));

        shuffle(grammarcopy);
        shuffle(punctuationcopy);
        shuffle(speakingcopy);

        let total = grammarcopy.length;
        let day = 1;

        do {
            $('<h4>Day ' + day + '</h4>').appendTo('#submitSuccessMessage');
            $('<span>Grammar : </span><br/>').appendTo('#submitSuccessMessage');
            $('<span>' + getGrammarTopic(grammarcopy) + '</span><br/>').appendTo('#submitSuccessMessage');
            $('<span>' + getGrammarTopic(grammarcopy) + '</span><br/>').appendTo('#submitSuccessMessage');
            $('<span>' + getGrammarTopic(grammarcopy) + '</span><br/>').appendTo('#submitSuccessMessage');
            $('<span>Punctuation : </span><br/>').appendTo('#submitSuccessMessage');
            var punctuationtopic = punctuationcopy.pop();
            if (typeof punctuationtopic === 'undefined') {
                punctuationcopy = punctuation.slice();
                shuffle(punctuationcopy);
                punctuationtopic = punctuationcopy.pop();
            }
            $('<span>' + punctuationtopic + '</span><br/>').appendTo('#submitSuccessMessage');
            $('<span>Speaking : </span><br/>').appendTo('#submitSuccessMessage');
            var speakingtopic = speakingcopy.pop();
            if (typeof speakingtopic === 'undefined') {
                speakingcopy = speaking.slice();
                shuffle(speakingcopy);
                speakingtopic = speakingcopy.pop();
            }
            $('<span>Speaking ' + speakingtopic + '</span><hr/>').appendTo('#submitSuccessMessage');
            day++;
            total = grammarcopy.length;
        } while (total > 0);
        $('<br/>').appendTo('#submitSuccessMessage');
    });



    function getGrammarTopic(array) {
        var topic = array.pop();
        if (typeof topic !== 'undefined') {
            return topic.replace(/:green|:blue|:red/gm, '');
        }
        return '';
    }

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

});