const Textact = require('textract');
const _ = require('lodash');

const args = process.argv.slice(2);

const isLocal = _.get(args,'1',null) == 'local' ? true : false; // true or false , if false then it should be url

const pptxFile = args[0];

//=========== Configurations ============

const _SEPARATOR = {
    'wrapper'   : '@@',
    'slide'     : 'SLIDE',
    'tnotes'    : 'TNOTES'
};
const _RESTYPES = ['QUIZ','VIMEO','XAPI'];

//=========== Configurations ============



const _slideSeparator = `${_SEPARATOR.wrapper}${_SEPARATOR.slide}${_SEPARATOR.wrapper}`;


const extractSlides = function (txt){    
    txt = txt.split(_slideSeparator);    
    txt = txt.slice(1);
    return txt;
}

const extractElements = function (s){
    s = s.split(_SEPARATOR.wrapper);
    s = _.map(s, s => s.trim()); //== remove leading and trailing spaces
    s = _.compact(s); //== remove empty elements

    let keys = _.flatten(_.concat(_SEPARATOR.slide,_SEPARATOR.tnotes,_RESTYPES));

    let tmp = {};

    _.each(keys, k => {
        let a = s.indexOf(k);        
        
        if(keys.indexOf(s[a+1]) > -1 || s.length <= a+1){
            return; //== if its the next key or if the element is the last one
        }

        if(k==_SEPARATOR.slide || k==_SEPARATOR.tnotes){
            tmp[k] = s[a+1];
        }
        else{
            tmp['type'] = k;
            tmp['content'] = s[a+1];
        }
    });

    return tmp;
};

//== Extract pptx texts

const cb = function (tnotes,text) {

    let slides = extractSlides(tnotes);

    slides = _.map(slides, slide => extractElements(_slideSeparator + slide));

    console.log(slides);    
}

if(isLocal){
    Textact.fromFileWithPath(pptxFile,{ preserveLineBreaks: true }, cb);
}else{
    Textact.fromUrl(pptxFile,{ preserveLineBreaks: true }, cb);
}   