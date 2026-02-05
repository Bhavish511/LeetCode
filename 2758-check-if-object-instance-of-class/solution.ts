function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if(typeof classFunction !== 'function'){
        return false;
    }
    if (obj === null || obj === undefined) {
        return false;
    }

    if(typeof obj !== 'object' && typeof obj !== 'function'){
        if (classFunction === Number && typeof obj === "number") return true;
        if (classFunction === String && typeof obj === "string") return true;
        if (classFunction === Boolean && typeof obj === "boolean") return true;
        if (classFunction === BigInt && typeof obj === "bigint") return true;
        if (classFunction === Symbol && typeof obj === "symbol") return true;
        if (classFunction === Object) return true;
        return false;
    }
    let proto = Object.getPrototypeOf(obj);
    while(proto !== null){
        if(proto === classFunction.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;


};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
