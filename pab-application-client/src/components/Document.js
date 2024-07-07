import React from 'react';
import '../styles/document.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EnregistrerPdf from './DocumentEnregistrePdf';
import { Button } from 'react-bootstrap';
import Navbar2 from './Navbar2';

function Document() {
    const tokenUser = localStorage.getItem('token');
   if(tokenUser) return (
        <div>   
            <Navbar2/>
            <h1 className='documents'>Documents</h1>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="profile" title="Contrat" id="Contrat" className="custom-tab">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lectus et erat consectetur maximus. Vestibulum metus enim, blandit vitae tellus a, fringilla sollicitudin mi. Morbi tempor arcu et sapien efficitur pretium. Sed ornare mauris in pharetra sollicitudin. Maecenas quis tempus magna. Proin et rutrum metus. Sed vel hendrerit sem. Aenean gravida nunc nisl, vitae dapibus ipsum mattis sit amet. Maecenas faucibus dolor risus, at venenatis mi vestibulum ut. Vivamus auctor mattis massa at blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sagittis tempus dictum. Morbi euismod, lectus eu congue consequat, lectus est facilisis dolor, nec scelerisque nibh purus nec dui.
                </p><p>
                    Nulla turpis magna, laoreet a accumsan in, malesuada eu neque. Duis bibendum felis quis cursus aliquet. Proin placerat erat et pharetra ultrices. Proin in hendrerit nisi. Nullam lacinia diam non neque consectetur, vitae laoreet ante vestibulum. Morbi eu nibh in est condimentum lacinia. Suspendisse vel auctor ligula. Integer sit amet urna vulputate, convallis sapien id, laoreet ligula. In et sem enim. Quisque tincidunt non turpis et sodales. Duis faucibus ut mi eu convallis. Suspendisse tincidunt quam vel ex placerat dictum. Nulla in sodales velit, nec dictum felis. Aliquam auctor hendrerit convallis. Vivamus est odio, vehicula quis quam vel, ultrices accumsan massa. Mauris rutrum pharetra nulla, et auctor dolor sollicitudin vitae.
                </p><p>
                    Maecenas vel risus pulvinar, efficitur mauris nec, interdum nibh. Nunc ac ultricies est, vitae maximus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, dui in congue condimentum, felis tellus ultrices leo, mollis scelerisque mi libero eu neque. Proin convallis mauris quis lorem tristique, in fringilla massa fringilla. Morbi id mi odio. Sed nec molestie tellus. Vestibulum vitae mattis libero, sit amet accumsan lacus. Suspendisse rutrum laoreet posuere. Cras sodales felis in imperdiet tempor. Nulla varius velit eu neque iaculis porttitor. Vivamus elementum metus magna, a viverra eros gravida sit amet. Ut id suscipit tellus. Cras semper dui id dolor posuere placerat.
                </p><p>
                    Morbi id nulla ac dui viverra mollis non nec orci. Quisque ac risus at elit fermentum posuere nec nec lectus. Phasellus consequat libero sed mi congue elementum. Nullam tincidunt magna ante, imperdiet eleifend augue ultrices ut. Sed accumsan massa eget nulla bibendum, vel hendrerit augue elementum. Integer sem massa, placerat in felis eu, aliquam consequat nibh. Phasellus ut dapibus libero. Donec maximus interdum lacus, et aliquet mauris maximus luctus. Quisque elementum convallis mauris eu aliquam. Donec egestas volutpat augue eget imperdiet. Etiam porttitor, mauris eget porta varius, urna nulla ultrices leo, id ullamcorper velit justo sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ac venenatis mauris. Donec convallis, massa id placerat mattis, dui arcu suscipit tellus, id consequat massa augue a lacus. Aliquam at leo metus.
                </p><p>
                    Nam venenatis mi libero, eget vulputate sapien egestas eu. Aenean nec magna ac dui hendrerit auctor. Curabitur ullamcorper dolor a mattis consectetur. Morbi fringilla luctus ligula. Aenean arcu libero, auctor non porta id, sagittis sit amet enim. Maecenas cursus euismod purus vel rhoncus. Nam dictum porttitor dictum. Maecenas lorem tortor, viverra et pulvinar vel, varius et velit. Vivamus quis urna tempor, tincidunt lectus sit amet, laoreet risus. Integer vestibulum, turpis in hendrerit aliquam, velit augue aliquam urna, non rhoncus nisi odio nec sem. Phasellus consequat sollicitudin diam, at rhoncus augue pulvinar id.
                </p><p>
                    Vestibulum scelerisque lacinia sem, vel iaculis purus blandit vitae.Integer tristique tortor eu massa placerat, nec euismod nunc hendrerit. Phasellus luctus ante vel ligula bibendum, ut pulvinar sapien tempus. Suspendisse potenti. Fusce et mi at elit euismod cursus at nec urna. Ut posuere, justo vel volutpat iaculis, purus eros euismod libero, sit ametcursus metus tortor in justo.
                </p>
                <Button id='buttonReg' onClick={EnregistrerPdf}>Enregistrer   PDF</Button>
                            </Tab>
            <Tab eventKey="utilisation" title="Conditions générales d'utilisation" className="custom-tab">
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lectus et erat consectetur maximus. Vestibulum metus enim, blandit vitae tellus a, fringilla sollicitudin mi. Morbi tempor arcu et sapien efficitur pretium. Sed ornare mauris in pharetra sollicitudin. Maecenas quis tempus magna. Proin et rutrum metus. Sed vel hendrerit sem. Aenean gravida nunc nisl, vitae dapibus ipsum mattis sit amet. Maecenas faucibus dolor risus, at venenatis mi vestibulum ut. Vivamus auctor mattis massa at blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sagittis tempus dictum. Morbi euismod, lectus eu congue consequat, lectus est facilisis dolor, nec scelerisque nibh purus nec dui.
                
                    Nulla turpis magna, laoreet a accumsan in, malesuada eu neque. Duis bibendum felis quis cursus aliquet. Proin placerat erat et pharetra ultrices. Proin in hendrerit nisi. Nullam lacinia diam non neque consectetur, vitae laoreet ante vestibulum. Morbi eu nibh in est condimentum lacinia. Suspendisse vel auctor ligula. Integer sit amet urna vulputate, convallis sapien id, laoreet ligula. In et sem enim. Quisque tincidunt non turpis et sodales. Duis faucibus ut mi eu convallis. Suspendisse tincidunt quam vel ex placerat dictum. Nulla in sodales velit, nec dictum felis. Aliquam auctor hendrerit convallis. Vivamus est odio, vehicula quis quam vel, ultrices accumsan massa. Mauris rutrum pharetra nulla, et auctor dolor sollicitudin vitae.
                </p><p>
                    Maecenas vel risus pulvinar, efficitur mauris nec, interdum nibh. Nunc ac ultricies est, vitae maximus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, dui in congue condimentum, felis tellus ultrices leo, mollis scelerisque mi libero eu neque. Proin convallis mauris quis lorem tristique, in fringilla massa fringilla. Morbi id mi odio. Sed nec molestie tellus. Vestibulum vitae mattis libero, sit amet accumsan lacus. Suspendisse rutrum laoreet posuere. Cras sodales felis in imperdiet tempor. Nulla varius velit eu neque iaculis porttitor. Vivamus elementum metus magna, a viverra eros gravida sit amet. Ut id suscipit tellus. Cras semper dui id dolor posuere placerat.
                </p><p>
                    Morbi id nulla ac dui viverra mollis non nec orci. Quisque ac risus at elit fermentum posuere nec nec lectus. Phasellus consequat libero sed mi congue elementum. Nullam tincidunt magna ante, imperdiet eleifend augue ultrices ut. Sed accumsan massa eget nulla bibendum, vel hendrerit augue elementum. Integer sem massa, placerat in felis eu, aliquam consequat nibh. Phasellus ut dapibus libero. Donec maximus interdum lacus, et aliquet mauris maximus luctus. Quisque elementum convallis mauris eu aliquam. Donec egestas volutpat augue eget imperdiet. Etiam porttitor, mauris eget porta varius, urna nulla ultrices leo, id ullamcorper velit justo sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ac venenatis mauris. Donec convallis, massa id placerat mattis, dui arcu suscipit tellus, id consequat massa augue a lacus. Aliquam at leo metus.
                
                    Nam venenatis mi libero, eget vulputate sapien egestas eu. Aenean nec magna ac dui hendrerit auctor. Curabitur ullamcorper dolor a mattis consectetur. Morbi fringilla luctus ligula. Aenean arcu libero, auctor non porta id, sagittis sit amet enim. Maecenas cursus euismod purus vel rhoncus. Nam dictum porttitor dictum. Maecenas lorem tortor, viverra et pulvinar vel, varius et velit. Vivamus quis urna tempor, tincidunt lectus sit amet, laoreet risus. Integer vestibulum, turpis in hendrerit aliquam, velit augue aliquam urna, non rhoncus nisi odio nec sem. Phasellus consequat sollicitudin diam, at rhoncus augue pulvinar id.
              
                    Vestibulum scelerisque lacinia sem, vel iaculis purus blandit vitae.Integer tristique tortor eu massa placerat, nec euismod nunc hendrerit. Phasellus luctus ante vel ligula bibendum, ut pulvinar sapien tempus. Suspendisse potenti. Fusce et mi at elit euismod cursus at nec urna. Ut posuere, justo vel volutpat iaculis, purus eros euismod libero, sit ametcursus metus tortor in justo.
                </p>  
                            
            </Tab>
            <Tab eventKey="vente" title="Conditions générales de vente" className="custom-tab">
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra lectus et erat consectetur maximus. Vestibulum metus enim, blandit vitae tellus a, fringilla sollicitudin mi. Morbi tempor arcu et sapien efficitur pretium. Sed ornare mauris in pharetra sollicitudin. Maecenas quis tempus magna. Proin et rutrum metus. Sed vel hendrerit sem. Aenean gravida nunc nisl, vitae dapibus ipsum mattis sit amet. Maecenas faucibus dolor risus, at venenatis mi vestibulum ut. Vivamus auctor mattis massa at blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sagittis tempus dictum. Morbi euismod, lectus eu congue consequat, lectus est facilisis dolor, nec scelerisque nibh purus nec dui.
                
                    Nulla turpis magna, laoreet a accumsan in, malesuada eu neque. Duis bibendum felis quis cursus aliquet. Proin placerat erat et pharetra ultrices. Proin in hendrerit nisi. Nullam lacinia diam non neque consectetur, vitae laoreet ante vestibulum. Morbi eu nibh in est condimentum lacinia. Suspendisse vel auctor ligula. Integer sit amet urna vulputate, convallis sapien id, laoreet ligula. In et sem enim. Quisque tincidunt non turpis et sodales. Duis faucibus ut mi eu convallis. Suspendisse tincidunt quam vel ex placerat dictum. Nulla in sodales velit, nec dictum felis. Aliquam auctor hendrerit convallis. Vivamus est odio, vehicula quis quam vel, ultrices accumsan massa. Mauris rutrum pharetra nulla, et auctor dolor sollicitudin vitae.
                </p><p>
                    Maecenas vel risus pulvinar, efficitur mauris nec, interdum nibh. Nunc ac ultricies est, vitae maximus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, dui in congue condimentum, felis tellus ultrices leo, mollis scelerisque mi libero eu neque. Proin convallis mauris quis lorem tristique, in fringilla massa fringilla. Morbi id mi odio. Sed nec molestie tellus. Vestibulum vitae mattis libero, sit amet accumsan lacus. Suspendisse rutrum laoreet posuere. Cras sodales felis in imperdiet tempor. Nulla varius velit eu neque iaculis porttitor. Vivamus elementum metus magna, a viverra eros gravida sit amet. Ut id suscipit tellus. Cras semper dui id dolor posuere placerat.
                </p><p>
                    Morbi id nulla ac dui viverra mollis non nec orci. Quisque ac risus at elit fermentum posuere nec nec lectus. Phasellus consequat libero sed mi congue elementum. Nullam tincidunt magna ante, imperdiet eleifend augue ultrices ut. Sed accumsan massa eget nulla bibendum, vel hendrerit augue elementum. Integer sem massa, placerat in felis eu, aliquam consequat nibh. Phasellus ut dapibus libero. Donec maximus interdum lacus, et aliquet mauris maximus luctus. Quisque elementum convallis mauris eu aliquam. Donec egestas volutpat augue eget imperdiet. Etiam porttitor, mauris eget porta varius, urna nulla ultrices leo, id ullamcorper velit justo sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ac venenatis mauris. Donec convallis, massa id placerat mattis, dui arcu suscipit tellus, id consequat massa augue a lacus. Aliquam at leo metus.
                
                    Nam venenatis mi libero, eget vulputate sapien egestas eu. Aenean nec magna ac dui hendrerit auctor. Curabitur ullamcorper dolor a mattis consectetur. Morbi fringilla luctus ligula. Aenean arcu libero, auctor non porta id, sagittis sit amet enim. Maecenas cursus euismod purus vel rhoncus. Nam dictum porttitor dictum. Maecenas lorem tortor, viverra et pulvinar vel, varius et velit. Vivamus quis urna tempor, tincidunt lectus sit amet, laoreet risus. Integer vestibulum, turpis in hendrerit aliquam, velit augue aliquam urna, non rhoncus nisi odio nec sem. Phasellus consequat sollicitudin diam, at rhoncus augue pulvinar id.
              
                    Vestibulum scelerisque lacinia sem, vel iaculis purus blandit vitae.Integer tristique tortor eu massa placerat, nec euismod nunc hendrerit. Phasellus luctus ante vel ligula bibendum, ut pulvinar sapien tempus. Suspendisse potenti. Fusce et mi at elit euismod cursus at nec urna. Ut posuere, justo vel volutpat iaculis, purus eros euismod libero, sit ametcursus metus tortor in justo.
                </p>  
                            
            </Tab>
        </Tabs>
        </div>
    );
}


export default Document;