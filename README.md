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

- below you can see self-explanatory configuration in demo.js

        const pptxFile = <- FileName ->;

- File name of pptx. For eg. "abc.pptx" or "files/abc.pptx" etc.

        const _SEPARATOR = {
            
            'wrapper'   : '@@',

            'slide'     : 'SLIDE',

            'tnotes'    : 'TNOTES'
        };

- below you can add type of resources to it

        const _RESTYPES = ['QUIZ','VIMEO','XAPI'];


---

