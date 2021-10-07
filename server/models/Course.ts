import { StatsBase } from 'fs';
import { Module } from './Module';

enum Categories {
    Beauty, 
    Animals,
    Dogs,
    Education
}

enum Currency {
    Uah = 'UAH',
    Usd = 'USD',
    Rub = 'RUB'
  }
export interface Course {
    id: string;
    title: string;
    description: string;
    startDate: null | Date;
    endDate: null | Date;
    modules: Module[];
    authorId: string;
    price: {
        withDiscount: string;
        withoutDiscount: string;
        currency: Currency;
      }
    category: Categories;
    duration: number;
};