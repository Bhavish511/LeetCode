function myAtoi(s: string): number {
    const trimmed = s.trim()
    const digits = trimmed.match(/^[+-]?\d+/);
    if (!digits) return 0;

    let num = Number(digits[0]);
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;
    return num
};
