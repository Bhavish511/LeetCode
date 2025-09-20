function reverse(x: number): number {
    let a = 0;
    const INT_MAX = 2 ** 31 - 1; 
    const INT_MIN = -(2 ** 31);  

    while (x !== 0) {
        const digit = x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);

        if (a > Math.floor(INT_MAX / 10) || (a === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }
        if (a < Math.ceil(INT_MIN / 10) || (a === Math.ceil(INT_MIN / 10) && digit < -8)) {
            return 0;
        }

        a = a * 10 + digit;
    }

    return a;
};

