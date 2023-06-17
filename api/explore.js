// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


//Asynchronous
console.log("Starting program");
// client.messages
//             .list()
//             .then(messages => messages.forEach(m => console.log(m.sid)))
//             .catch(err => console.log(err));
// console.log("Gathering message log");


async function deleteAllMessages()
{
    //client.messages.list returns the promise
    const msg = await client.messages.list();
    for(mssg of msg)
    {
        console.warn(`DELETING ${mssg.sid}`);
        mssg.remove();
    }
}
deleteAllMessages()
    .then(console.log("done"));