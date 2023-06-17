const os = require('os')

// current userinfo
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMEM: os.totalmem(),
    freeMEM: os.freemem(),
}
console.log(currentOS);