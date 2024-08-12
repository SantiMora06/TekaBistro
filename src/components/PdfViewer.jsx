import pdfFile from "../assets/Pizza.pdf";
import classes from "../styles/pdf.module.css"

const PdfViewer = () => {
    return (<div className={classes.frame} style={{ width: '100%', height: '800px' }}>
        <iframe
            src={pdfFile}
            title="PDF Preview"
            width="100%"
            height="100%"
        />
    </div>
    );
}
console.log(pdfFile)
export default PdfViewer; 