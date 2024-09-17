export class CreateArticleDto {
    name: string;
    description: string;
    priceAmount: string;
    priceCurrency: Currency;
    categories: { id: number }[];
}

type Currency = 'EUR' | 'USD' | 'GBP';
