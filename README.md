# pptx-notes-parser
- Author: Surojit Basu
- Dated: 13th Apr 2019
---

### __Running information__

clone it on your machine by running the following command:
1. git clone git@github.com:&lt;username&gt;/pptx-notes-parser.git
2. npm install
3. copy node_modules_work over node_modules

        This will copy textract node module work done over its native one.
4. node demo.js

---

### __Configurations in file demo.js__

- below you can see self-explanatory configuration in ___demo.js___.



- isLocal  & pptxFile

        const isLocal = false;
        
    - if set to true, means the file is picked from the server itself, 
    - if set to false, means the pptxFile variable should be a valid URL.


            const pptxFile = <- FileName ->;

- File name of pptx. For eg. "abc.pptx" or "files/abc.pptx" etc. Do remember to put the file ;)

        const _SEPARATOR = {
            
            'wrapper'   : '@@',

            'slide'     : 'SLIDE',

            'tnotes'    : 'TNOTES'
        };

- below you can add type of resources to it

        const _RESTYPES = ['QUIZ','VIMEO','XAPI'];

---

### __Teacher Notes Examples___

        @@SLIDE@@
        2
        @@TNOTES@@
        Here goes the additional notes
        @@QUIZ@@
        GIFT FORMAT quiz text can be 
        pumpedin here as well

---