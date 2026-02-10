/**
 * Generates a star rating array for template rendering.
 * Returns an array of booleans where true = filled star, false = empty star.
 */
export function generateStarArray(rating: number, maxStars = 5): boolean[] {
    return Array.from({ length: maxStars }, (_, i) => i < Math.round(rating));
}

/**
 * Truncates text to a specified length with ellipsis.
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trimEnd() + '...';
}
