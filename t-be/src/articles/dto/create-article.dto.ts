export class CreateArticleDto {
    name: string;
    description: string;
    priceAmount: string;
    priceCurrency: Currency;
}

type Currency = 'EUR' | 'USD' | 'GBP';
