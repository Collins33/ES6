//it allows you to add a default parameter if none is gives
function sendMessage(msg="aloha people"){
    console.log(msg)
}

sendMessage()//without parameter would print "aloha people"

sendMessage("hello world")//with parameter would print "hello world"