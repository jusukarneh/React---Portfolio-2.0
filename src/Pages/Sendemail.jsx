import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import { Email } from '../Components/Email';


function Sendemail(){
  function Sendmessage(){
    sendgrid.setApiKey ("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");

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: 'jusudaddi@gmail.com',
  to: 'jusudaddi@yahoo.com',
  subject: 'hello world',
  html: emailHtml,
};

sendgrid.send(options);
  }
  
  return <>
  {Sendmessage()}
  </>
}
export default Sendemail