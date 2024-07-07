import jsPDF from 'jspdf';



const EnregistrerPdf = () => {
    const pdf = new jsPDF();
    const htmlContent = ' Lorem ipsum dolor sit amet,consectetur adipiscing elit. Morbi viverra\n lectus et erat consectetur maximus. Vestibulum met\nus enim, blandit vitae tellus a, fringilla sollicitudin mi. Morbi tempo\nr arcu et sapien efficitur pretium. Sed ornare mauris in pharetra sollicitu\ndin. Maecenas quis tempus magna. Proin et rutrum metus. Sed vel hendrerit\n sem. Aenean gravida nunc nisl, vitae dapibus ipsum mattis sit amet. \nMaecenas faucibus dolor risus, at venenatis mi vestibul\num ut. Vivamus auctor mattis massa at bland\nit. Interdum et malesuada fames ac ante ipsum primis in faucib\nus. Fusce sagittis tempus dictum. Morbi euismod\n, lectus eu congue consequat, lectus est \nfacilisis dolor, nec scelerisque nibh \npurus nec dui.';
    pdf.text(htmlContent, 10, 20);
    pdf.save('Contrat_Ploutos.pdf');
  };
  

export default EnregistrerPdf;
