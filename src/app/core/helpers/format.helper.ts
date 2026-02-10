/**
 * Formats a price value with currency symbol and thousands separators.
 */
export function formatPrice(price: number, currency = '$'): string {
    return `${currency}${price.toLocaleString('en-US')}`;
}

/**
 * Formats a price range string.
 */
export function formatPriceRange(min: number, max: number, currency = '$'): string {
    return `${formatPrice(min, currency)} - ${formatPrice(max, currency)}`;
}
