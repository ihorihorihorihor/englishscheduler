$(document).ready(function () {
    let schedule = [];
            
    let grammar = [
        'Section 5: Simple Present Verb Tense 📗:green',
        'Section 6: Verb Conjugation (1st/2nd/3rd person) 📗:green',
        'Section 7: Subject-Verb Agreement 📗:green',
        'Section 8: Simple Past Tense 📗:green',
        'Section 9: Future Simple Tense 📗:green',
        'Section 10: Present Continuous Tense 📘:blue',
        'Section 11: Past Continuous Tense 📘:blue',
        'Section 12: Future Continuous 📘:blue',
        'Section 13: Present participle 📘:blue',
        'Section 14: Gerund 📘:blue',
        'Section 15: Past participle 📘:blue',
        'Section 16: Present Perfect Tense 📕:red',
        'Section 17: Past Perfect Tense 📕:red',
        'Section 18: Future Perfect Tense 📕:red',
        'Section 19: Present Perfect Continuous Tense 📕:red',
        'Section 20: Past Perfect Continuous Tense 📕:red',
        'Section 21: Future Perfect Continuous Tense 📕:red',
        'Section 23: To Be 📗:green',
        'Section 24: To Do, To Have 📗:green',
        'Section 25: Can, Could 📗:green',
        'Section 26: Will, Would 📘:blue',
        'Section 27: Shall, Should 📘:blue',
        'Section 28: Must, May, Might 📘:blue',
        'Section 30: Carry On, Put Off 📕:red',
        'Section 31: Turn Down, Break Up 📕:red',
        'Section 32: Give up, Turn Out 📕:red',
        'Section 34: Common Nouns 📗:green',
        'Section 35: Proper Nouns 📗:green',
        'Section 36: Subject Pronouns 📗:green',
        'Section 37: Object Pronouns 📗:green',
        'Section 38: Possessive Nouns 📘:blue',
        'Section 39: Possessive Pronouns 📘:blue',
        'Section 40: Concrete Nouns 📘:blue',
        'Section 41: Abstract Nouns 📘:blue',
        'Section 42: Material Nouns and Compound Nouns 📘:blue',
        'Section 43: Countable vs. Uncountable Nouns 📕:red',
        'Section 44: Collective Nouns 📕:red',
        'Section 46: Articles (a, an, the) 📗:green',
        'Section 47: This, That, These, Those 📗:green',
        'Section 49: Adjectives and Adverbs 📗:green',
        'Section 50: Descriptives Adjectives 📗:green',
        'Section 51: Proper Adjectives 📗:green',
        'Section 52: Possessive Adjectives 📘:blue',
        'Section 53: Comparative Adjectives 📘:blue',
        'Section 54: Superlative Adjectives 📘:blue',
        'Section 55: Limiting Adjectives 📕:red',
        'Section 56: Pronominal Adjectives 📕:red',
        'Section 58: Forming Adverbs 📗:green',
        'Section 59: Adverbs of Manner 📘:blue',
        'Section 60: Adverbs of Frequency 📘:blue',
        'Section 61: Adverbs of Place 📘:blue',
        'Section 62: Adverbs of Time 📘:blue',
        'Section 63: Adverbs of Degree 📘:blue',
        'Section 64: Comparative and Superlative Adverbs 📘:blue',
        'Section 65: Order of Adverbs 📕:red',
        'Section 67: All, half 📘:blue',
        'Section 68: Each, Every 📘:blue',
        'Section 69: Both, Either, Neither 📘:blue',
        'Section 70: A Few, A Little 📘:blue',
        'Section 71: A Lot, Most 📘:blue',
        'Section 72: Much, Many 📘:blue',
        'Section 73: Some, Any, Enough 📘:blue',
        'Section 74: Such, What, Rather, Quite 📘:blue',
        'Section 77: Prepositions of Time 📘:blue',
        'Section 78: Prepositions of Place 📘:blue',
        'Section 79: Prepositions of Manner 📘:blue',
        'Section 80: Prepositions of Direction and Motion 📘:blue',
        'Section 81: Prepositions of Cause,Purpose, Reason 📘:blue',
        'Section 82: Prepositional Phrases 📘:blue',
        'Section 84: Clauses 📘:blue',
        'Section 85: Independent Clause 📘:blue',
        'Section 86: Dependent (Subordinate)Clause 📘:blue',
        'Section 87: Noun Clause 📕:red',
        'Section 88: Adjective (Relative) Clause 📕:red',
        'Section 89: Adverb Clauses 📕:red',
        'Section 91: Conjunctions - What are they? 📗:green',
        'Section 92: Coordinating Conjunctions 📘:blue',
        'Section 93: Subordinate Conjunctions 📘:blue',
        'Section 94: Compound Conjunctions 📕:red',
        'Section 95: Correlative Conjunctions 📕:red',
        'Section 96: Pseudo Conjunctions 📕:red',
        'Section 98: Conditionals 📘:blue',
        'Section 99: Conditionals: Type 0 📕:red',
        'Section 100: Conditionals: Type 1 📕:red',
        'Section 101: Conditionals: Type 2 📕:red',
        'Section 102: Conditionals: Type 3 📕:red',
        'Section 103: Conditionals: Type Mixed 📕:red',
        'Section 105: Passive vs. Active Voice 📕:red',
        'Section 106: Reported Speech 📕:red',
        'Section 108: Fewer vs. Less | Then vs. Than 📕:red',
        'Section 109: There, Their, They&#39;re | To vs. Too vs. Two 📕:red'];
        
        //@todo 
        // Collect all general sections into a separate list on the page? 
        // Attach refferences to a proper PDF file ?
        // Merge all PDF files into one PDF?
        
        // 'Section 113: English Speaking and Conversation' general section title
        // 'Section 110: English Writing Section' general section title
        
    let speaking = [
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
        $('#pdfButton').hide();

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

            var punctuationtopic = punctuationcopy.pop();
            if (typeof punctuationtopic === 'undefined') {
                punctuationcopy = punctuation.slice();
                shuffle(punctuationcopy);
                punctuationtopic = punctuationcopy.pop();
            }
            var speakingtopic = speakingcopy.pop();
            if (typeof speakingtopic === 'undefined') {
                speakingcopy = speaking.slice();
                shuffle(speakingcopy);
                speakingtopic = speakingcopy.pop();
            }
            const sday = {};
            sday.grammar1 = getGrammarTopic(grammarcopy);
            sday.grammar2 = getGrammarTopic(grammarcopy);
            sday.grammar3 = getGrammarTopic(grammarcopy);
            sday.punctuation = punctuationtopic;
            sday.speaking = speakingtopic;
            schedule[day] = sday;
            day++;
            total = grammarcopy.length;
        } while (total > 0);
        ouputSchedule(schedule);
        console.log(schedule);

    });
    
    $('#csvButton').hide();

    $('#csvButton').click(function (e) {
        
        e.preventDefault();
        $('#csvButton').hide();
        
        const delimiter = ',';
        const linebreak = '\r\n';
        let text = '';
        let row = {};
        
        row.TYPE = 'task';
        row.CONTENT = '';
        row.DESCRIPTION = '';
        row.PRIORITY = 1;
        row.INDENT = 1;
        row.AUTHOR = '';
        row.RESPONSIBLE = '';
        row.DATE = '';
        row.DATE_LANG = 'en';
        row.TIMEZONE = '';
        row.DURATION = '';
        row.DURATION_UNIT = '';
        
        //Set header row
        text += Object.keys(row).join(delimiter) + linebreak;
        
        // Format JS array to plain text
        schedule.forEach(function (entry, index) {
            let date = new Date();
            date.setDate(date.getDate() + index);
            let year = date.toLocaleString("default", {year: "numeric"});
            let month = date.toLocaleString("default", {month: "2-digit"});
            let day = date.toLocaleString("default", {day: "2-digit"});
            let formattedDate = year + "-" + month + "-" + day;

            row.CONTENT = `The Master English : Day ${index}`;
            row.DESCRIPTION = '"';
            row.DESCRIPTION = add(row.DESCRIPTION, 'Legend: ✅ - Done ⏳ - In Progress ❌ - Canceled', linebreak);
            row.DESCRIPTION = add(row.DESCRIPTION, entry.grammar1, linebreak);
            row.DESCRIPTION = add(row.DESCRIPTION, entry.grammar2, linebreak);
            row.DESCRIPTION = add(row.DESCRIPTION, entry.grammar3, linebreak);
            row.DESCRIPTION = add(row.DESCRIPTION, entry.punctuation, linebreak);
            row.DESCRIPTION = add(row.DESCRIPTION, entry.speaking, '');
            row.DESCRIPTION += '"';
            row.DESCRIPTION = row.DESCRIPTION.replace(/,/g, ' ');
            row.DATE = formattedDate;
            text += Object.values(row).join(delimiter) + linebreak;

        });

        // Start CSV file download.
        downloadscv('schedule.csv', text);
    });
    
    function add(text, value, linebreak) {
        if (value) {
            text += value + linebreak;
        }
        return text;
    }
    
    function downloadscv(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    $('#pdfButton').hide();

    $('#pdfButton').click(function (e) {
        e.preventDefault();
        var html = $('#submitSuccessMessage').html();
        const data = JSON.stringify({
            source: {
                html: html
            },
            styles: [
                {url: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"}
            ],
            pdf: {
                format: 'A4',
                scale: 1,
                printBackground: false,
                landscape: true
            },
            wait: {
                for : 'navigation',
                waitUntil: 'load',
                timeout: 2500
            }
        });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.responseType = 'blob';
        xhr.open('POST', 'https://yakpdf.p.rapidapi.com/pdf/');
        xhr.setRequestHeader('x-rapidapi-key', '7559e29e78msh15d75ed92515e1fp14557cjsn6d8993bfa56a');
        xhr.setRequestHeader('x-rapidapi-host', 'yakpdf.p.rapidapi.com');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);

        xhr.onload = function () {
            if (this.status === 200) {
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(new Blob([xhr.response], {type: 'application/pdf'}));
                link.download = "schedule.pdf";
                link.click();
            } else {
                alert("Error. Estatus " + this.status + ".");
            }
        };
    });

    function ouputSchedule(array) {
        let group = $('<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4"></div>');
        array.forEach((entry, index) => {
            var card = $('<div class="card h-100" style="width: 18rem;"></div>');
            var content = $('<p class="card-text"></p>');
            content.append('<h5 class="card-title">Grammar :</h5>');
            content.append(`<p>${entry.grammar1}</p>`);
            content.append(`<p>${entry.grammar2}</p>`);
            content.append(`<p>${entry.grammar3}</p>`);
            content.append('<h5 class="card-title">Punctuation : </h5>');
            content.append(`<p>${entry.punctuation}</p>`);
            content.append('<h5 class="card-title">Speaking : </h5>');
            content.append(`<p>${entry.speaking}</p>`);
            card.append(`<div class="card-header">Day ${index}</div>`);
            card.append($('<div class="card-body"></div>').append(content));
            group.append($('<div class="col col-sm-6 col-md-3"></div>').append(card));
        });
        $('#submitSuccessMessage').append(group);
        $('#pdfButton').show();
        $('#csvButton').show();
    }

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