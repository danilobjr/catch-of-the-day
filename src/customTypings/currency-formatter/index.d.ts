declare namespace CurrencyFormatter {
    interface ICodeOption {
        code: string;
    }
    
    interface ICurrencyCustomOption {
        symbol?: string;
        decimal?: string;
        thousand?: string;
        precision?: number;
        format?: string;
    }
    
    interface ICurrency {
        code: string;
        symbol: string;
        thousandsSeparator: string;
        decimalSeparator: string;
        symbolOnLeft: boolean;
        spaceBetweenAmountAndSymbol: boolean;
        decimalDigits: number;
    }
    
    function format(value: string | number, options: ICodeOption | ICurrencyCustomOption) : string;
    function findCurrency(currencyCode: string): ICurrency;
}

declare module 'currency-formatter' {
    export = CurrencyFormatter;
}