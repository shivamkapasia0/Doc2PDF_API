import mammoth from 'mammoth';
import html_to_pdf from 'html-pdf-node';
import atob from 'atob';


// function to get converted pdf base64
function getConvertedPdfBase64(docBase64){
    return new Promise((resolve,reject) =>{
        getHtml(docBase64).then( html =>{
            let options = { format: 'A4' };
            let file = { content: html};
            html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
                resolve(Buffer.from(pdfBuffer).toString('base64'));
               // console.log('PDF Buffer : ',pdfBuffer);
            }).catch(error =>{
                reject(error);
            });
        }).catch(error =>{
                console.log('error while getting pdf buffer'+ error);
        });
    });
}

// function to fetch HTML from base64 by decoding it to buffer
function getHtml(base64){
    return new Promise((resolve, reject)=>{
            mammoth.convertToHtml({buffer: Buffer.from(base64, 'base64').toString('binary')}).then(result =>{
            var html = result.value; // The generated HTML
            var messages = result.messages; // Any messages, such as warnings during conversion
           //console.log('html'+html);
            resolve(html);
    }).catch(error =>{
        reject(error);
        console.log('error in mammoth js'+ error.stack);
    });
       
    });
}

// function to convert base64 to arrayBuffer
function base64ToArrayBuffer(base64) {
    //console.log('base64:'+base64);
	return new Promise((resolve, reject) => {
		var binary_string = atob(base64);
		var len = binary_string.length;
		var bytes = new Uint8Array(len);
		for(var i = 0; i < len; i++) {
			bytes[i] = binary_string.charCodeAt(i);
		}
		resolve(bytes.buffer);
	});
}
export default getConvertedPdfBase64;
