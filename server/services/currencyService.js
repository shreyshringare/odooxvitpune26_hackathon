import axios from 'axios';

// Fallback exchange rates (approximate, updated manually)
// Used when EXCHANGE_API_KEY is not configured.
const FALLBACK_RATES = {
  USD: { INR: 83.5, EUR: 0.92, GBP: 0.79, JPY: 149.5 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.79 },
  EUR: { USD: 1.09, INR: 91.0, GBP: 0.86, JPY: 163.0 },
  GBP: { USD: 1.27, INR: 105.5, EUR: 1.16, JPY: 189.0 },
  JPY: { USD: 0.0067, INR: 0.56, EUR: 0.0061, GBP: 0.0053 },
};

function getFallbackRate(from, to) {
  if (from === to) return 1;
  const rates = FALLBACK_RATES[from];
  if (!rates || !rates[to]) {
    // If we don't have a direct rate, try to convert via USD
    const fromToUsd = FALLBACK_RATES[from]?.USD || 1;
    const usdToTarget = FALLBACK_RATES['USD']?.[to] || 1;
    return fromToUsd * usdToTarget;
  }
  return rates[to];
}

async function convertAmount({ amount, from, to }) {
  if (from === to) return { convertedAmount: amount, rate: 1 };

  const apiKey = process.env.EXCHANGE_API_KEY;

  // If no API key, use fallback rates
  if (!apiKey) {
    const rate = getFallbackRate(from, to);
    return {
      convertedAmount: Math.round(amount * rate * 100) / 100,
      rate,
    };
  }

  try {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;
    const response = await axios.get(url);

    if (response.data.result !== 'success') {
      throw new Error(`Currency conversion failed: ${response.data['error-type']}`);
    }

    return {
      convertedAmount: response.data.conversion_result,
      rate: response.data.conversion_rate,
    };
  } catch (err) {
    // If API call fails, fall back to hardcoded rates
    console.warn(`[CurrencyService] API call failed, using fallback rates: ${err.message}`);
    const rate = getFallbackRate(from, to);
    return {
      convertedAmount: Math.round(amount * rate * 100) / 100,
      rate,
    };
  }
}

export { convertAmount };
