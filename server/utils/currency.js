function normalizeCurrency(code) {
    if (!code) return 'INR';
    const c = code.trim().toUpperCase();
    return ['USD', 'INR', 'EUR', 'GBP', 'JPY'].includes(c) ? c : 'INR';
}

export { normalizeCurrency };
