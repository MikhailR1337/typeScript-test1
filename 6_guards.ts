function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim();
}

class MyResponce { 
    header = 'response header'
    result = 'response result'
}

class MyRError { 
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponce | MyRError) {
    if (res instanceof MyResponce) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// =============================================

type AlertType = 'success' | 'danger' | 'waring'

function setAlertType(type: AlertType) {
    // .........
}

setAlertType('success');
setAlertType('waring')

