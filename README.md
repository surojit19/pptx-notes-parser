# pptx-notes-parser
- Author: Surojit Basu
- Dated: 13th Apr 2019
---

### __Running information__

clone it on your machine by running the following command:
1. git clone git@github.com:&lt;username&gt;/pptx-notes-parser.git
2. npm install
3. copy node_modules_work over node_modules

        >> cp node_modules_work/textract/lib/extractors/pptx.js node_modules/textract/lib/extractors/pptx.js -f

        This will copy textract node module work done over its native one.

4. To run the code:

                node demo.js <-url-> 
                        OR
                node demo.js <-filepath-> local 

---

### __Configurations in file demo.js__

- below you can see self-explanatory configuration in ___demo.js___.

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